// Import Functions
import { changeRoute } from "./model.js";

// Variables
let data = []; // Array to hold json Data

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

function initListeners() {}

$(document).ready(function () {
  initURLListener();
  initListeners();
});

// Load Porfolio data when after document is ready
$(window).on("load", function () {
  // Put function to load data.
});
