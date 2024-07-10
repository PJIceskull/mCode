// Import Functions
import { changeRoute } from "./model.js";

// Global Variables
let peopleData = []; // Array to hold json Data

// Load data for Employees on People Page
export function loadPeopleData() {
  $.each(peopleData.Team_Members, function (index, teamMember) {
    if (teamMember.Team == "Project") {
      $("#Project_Team").append(`<section>
        <div class="profileSection">
          <div class="profileIMG">
            <img
              src="images/Profile/${teamMember.ProfileIMG}"
              alt="Picture of Employee"
              loading="lazy"
            />
          </div>
          <div class="profileText">
            <h3>${teamMember.name}</h3>
            <p>${teamMember.Position}</p>
          </div>
        </div>
        <div class="descriptionText">
          <p>${teamMember.Description}</p>
        </div>
      </section>`);
    } else if (teamMember.Team == "Advisory") {
      $("#Advisory_Team").append(`<section>
        <div class="profileSection">
          <div class="profileIMG">
            <img
              src="images/Profile/${teamMember.ProfileIMG}"
              alt="Picture of Employee"
              loading="lazy"
            />
          </div>
          <div class="profileText">
            <h3>${teamMember.name}</h3>
            <p>${teamMember.Position}</p>
          </div>
        </div>
        <div class="descriptionText">
          <p>${teamMember.Description}</p>
        </div>
      </section>`);
    }
  });
}
function getPeopleData() {
  $.get(`data/projectTeam.json`, function (data) {
    // Assign JSON data to global variable
    peopleData = data;
    // console.log(peopleData); // Print to Console
  }).fail(function (error) {
    console.log("Error: ", error);
    alert("Error: ", error);
  });
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
  getPeopleData();
}

function initListeners() {}

$(document).ready(function () {
  initURLListener();
  initListeners();
});

// Load Porfolio data when after document is ready
// $(window).on("load", function () {
//   // Put function to load data.
//   loadPeopleData();
// });
