/**

    Project 3 JS
    Name: Narathip Sarrapanya
    Date: March 29, 2021
    Description: Project 3 JS

 **/

// Handles the function for form validation.
function validate(e) {
  hideErrors();
  if (formHasErrors()) {
    e.preventDefault();
    return false;
  }
  return true;
}

// Handles the reset event of contact form.
function reset(e) {
  if (confirm('Reset form?')) {
    hideErrors();
    document.getElementById("fullname").focus();
    return true;
  }
  e.preventDefault();
  return false;
}

// Validate contact form.
function formHasErrors() {
  let errorFlag = false;

  let requiredFields = ["fullname", "phonenumber", "email"];

  for (let i = 0; i < requiredFields.length; i++) {
    var textFields = document.getElementById(requiredFields[i]);

    if (!formFieldHasInput(textFields)) {
      document.getElementById(requiredFields[i] + "_error").style.display = "block";
      if (!errorFlag) {
        textFields.focus();
        textFields.select();
      }
      errorFlag = true;
    }

    let emailRegExp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    let phonenumberRegExp = new RegExp(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/);

    let emailValue = document.getElementById("email").value;
    let phonenumberValue = document.getElementById("phonenumber").value;

    if (!emailRegExp.test(emailValue)) {
      document.getElementById("email_invalid_error").style.display = "block";
      if (!errorFlag) {
        textFields.focus();
        textFields.select();
      }
      errorFlag = true;
    }

    if (!phonenumberRegExp.test(phonenumberValue)) {
      document.getElementById("phonenumber_invalid_error").style.display = "block";
      if (!errorFlag) {
        textFields.focus();
        textFields.select();
      }
      errorFlag = true;
    }
  }
  return errorFlag;
}

// Hides errors.
function hideErrors() {
  let error = document.getElementsByClassName("error");
  for (let i = 0; i < error.length; i++) {
    error[i].style.display = "none";
    document.getElementById("email_invalid_error").style.display = "none";
    document.getElementById("phonenumber_invalid_error").style.display = "none";
  }
}

// Trim whitespace.
function trim(str) {
  return str.replace(/^\s+|\s+$/g, "");
}

// Check if form is empty or null.
function formFieldHasInput(fieldElement) {
  if (fieldElement.value == null || trim(fieldElement.value) == "") {
    return false;
  }
  return true;
}

// Handle the event listener for contact form.
function load() {
  document.getElementById("contactform").addEventListener("submit", validate);
  document.getElementById("contactform").addEventListener("reset", reset);
}

// Loader
document.addEventListener("DOMContentLoaded", load);
