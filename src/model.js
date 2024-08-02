// Import Functions
// import { loadPeopleData } from "./index.js";
import { addLoginListeners } from "./index.js";

export function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  //   console.log(hashTag + ' ' + pageID);

  // Scroll to Top of the Page
  scroll(0, 0);

  if (pageID != "") {
    $.get(`pages/${pageID}.html`, function (data) {
      // console.log("data " + data);
      $("#app").html(data);
    });
    if (pageID == "login" || pageID == "signin") {
      $.get(`pages/${pageID}.html`, function (data) {
        $("#app").html(data);
        addLoginListeners();
      });
    }
  } else {
    $.get(`pages/home.html`, function (data) {
      // console.log("data " + data);
      $("#app").html(data);
    });
  }
}
