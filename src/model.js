// Import Functions
import { loadPeopleData } from "./index.js";

export function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  //   console.log(hashTag + ' ' + pageID);

  if (pageID != "") {
    $.get(`pages/${pageID}.html`, function (data) {
      // console.log("data " + data);
      $("#app").html(data);
    });
    if (pageID == "people") {
      $.get(`pages/people.html`, function (data) {
        $("#app").html(data);
        loadPeopleData();
      });
      $(window).on("load", function () {
        // Put function to load data.
        loadPeopleData();
      });
    }
  } else {
    $.get(`pages/home.html`, function (data) {
      // console.log("data " + data);
      $("#app").html(data);
    });
  }
}
