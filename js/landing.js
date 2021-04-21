/**

    Project 3 JS
    Name: Narathip Sarrapanya
    Date: March 29, 2021
    Description: Project 3 JS

 **/

// Handle the button press event.
function load() {
  document.getElementById("enter").addEventListener("click",
    function() {
      window.location.assign("education.html");
    });
}

// Loader
document.addEventListener("DOMContentLoaded", load);
