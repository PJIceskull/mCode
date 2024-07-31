// Import Functions
import { changeRoute } from "./model.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6g61sR5cGsk5eDUz8ih4xisdxGoPWJJc",
  authDomain: "m-code-userdatabase.firebaseapp.com",
  projectId: "m-code-userdatabase",
  storageBucket: "m-code-userdatabase.appspot.com",
  messagingSenderId: "698083695890",
  appId: "1:698083695890:web:be4cd56320040b852667cb",
  measurementId: "G-R9C47HJFPM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Global Variables
let peopleData = []; // Array to hold json Data

// Form Listeners
// Login Listeners
export function addLoginListeners() {
  // Use Console to see if function works
  //   $(".submitBox").on("click", function () {
  //     console.log($(".submitBox"));
  //   });

  // Create Account
  // Clicking submitBox on signinForm
  $(".createForm .submitBox").on("click", function (e) {
    e.preventDefault();
    console.log("Sign In");
    // console.log($("signinBTN"));

    // Variables for inputs
    let fName = $("#fName").val(); // First Name
    let lName = $("#lName").val(); // Last Name
    let email = $("#Email_Add").val(); // Email
    let pword = $("#PWord").val(); // Password
    let confirm_pass = $("#confirm_PWord").val(); // Confirm Password

    // check if user type the correct password
    // if (confirm_pass == pword) {
    // } else {
    //   alert("Passwords do not Match");
    // }

    // Create a password-based account
    createUserWithEmailAndPassword(auth, email, pword)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    console.log("Name: " + fName + "" + lName);
  });

  // Login
  $(".loginBox .submitBox").on("click", function (e) {
    e.preventDefault();
    // console.log("Log In");

    let email = $("#Email_Add").val(); // Email
    let pword = $("#PWord").val(); // Password

    // Sign in Existing Users
    signInWithEmailAndPassword(auth, email, pword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        // alert("You have just Logged In!");
        // console.log(user);
        changeRoute();
        if (user) {
          $(".profileLink").css("display", "flex");
          $(".loginLinks").css("display", "none");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    // console.log("Logged In");
  });

  // Sign Out User
  $(".profileLink .SignInBTN").on("click", function (e) {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful.");
        // console.log(auth);
        // alert("Sign-out successful");
        $(".profileLink").css("display", "none");
        $(".loginLinks").css("display", "block");
        changeRoute();
      })
      .catch((error) => {
        // An error happened.
      });
  });
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

function initListeners() {
  // Link to Profile Page
  $(".profileLink .profile").on("click", function (e) {
    $.get(`pages/profile.html`, function (data) {
      // console.log("data " + data);
      $("#app").html(data);
    });
  });
}

$(document).ready(function () {
  initURLListener();
  initListeners();
});

// Load Porfolio data when after document is ready
// $(window).on("load", function () {
//   // Put function to load data.
//   loadPeopleData();
// });
