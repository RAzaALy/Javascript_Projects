const form = document.getElementById("form");
const username = document.getElementById("username");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const formControl = document.getElementsByClassName(".form-control");
const eye = document.getElementById("eye");
const eye2 = document.getElementById("eye2");

const showPass = () => {
  let pass = document.getElementById("password");
  if (pass.type === "password") {
    pass.type = "text";
    eye.classList.add("fa-eye-slash");
    // eye.classList.remove('fa-eye');
  } else {
    pass.type = "password";
    eye.classList.remove("fa-eye-slash");
    // eye.classList.remove('fa-eye-slash');
  }
};
const showCpass = () => {
  let cpass = document.getElementById("cpassword");
  if (cpass.type === "password") {
    cpass.type = "text";
    eye2.classList.add("fa-eye-slash");
    // eye.classList.remove('fa-eye');
  } else {
    cpass.type = "password";
    eye2.classList.remove("fa-eye-slash");
    // eye.classList.remove('fa-eye-slash');
  }
};
eye.addEventListener("click", () => {
  showPass();
});
eye2.addEventListener("click", () => {
  showCpass();
});

//add event on form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateName();
  validateEmail();
  validatePhone();
  validatePass();
  validateCpass();
});
//define the validate function:

//validate username starts here
const validateName = () => {
  const usernameVal = username.value.trim();
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,11}$/;
  let str = usernameVal;
  // console.log(str, regex);
  if (usernameVal === "") {
    setErrorMsg(username, "Username cannot be blank.");
  } else if (usernameVal.length <= 2) {
    setErrorMsg(username, "Username must be contain at least 3 characters.");
  } else if (usernameVal.length > 12) {
    setErrorMsg(username, "Username must be 12 characters long.");
  } else if (regex.test(str)) {
    // console.log('Your name is valid.');
    setSuccessMsg(username);
  } else {
    setErrorMsg(username, "Username is not valid please check credentials.");
    // console.log('Your name is not valid');
  }
};
// validate email starts here
const validateEmail = () => {
  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,5}$/;
  const emailVal = email.value.trim();
  let str = emailVal;
  // console.log(str, regex);
  if (emailVal === "") {
    setErrorMsg(email, "Email cannot be blank.");
  } else if (regex.test(str)) {
    // console.log('Your email is valid');
    setSuccessMsg(email);
  } else {
    // console.log('Your email is not valid');
    setErrorMsg(email, "Email is not valid please check credentials.");
  }
};
const validatePhone = () => {
  // validate phone number starts here
  const phoneVal = phone.value.trim();
  let regex = /^0([(0-9)]){10}$/;
  let str = phoneVal;
  // console.log(str, regex);
  if (phoneVal === "") {
    setErrorMsg(phone, "Phone Number cannot be blank.");
  } else if (phoneVal.length < 11 || phoneVal.length > 11) {
    setErrorMsg(phone, "Phone Number must be 11 characters long.");
  } else if (regex.test(str)) {
    // console.log('Your number is valid');
    setSuccessMsg(phone);
  } else {
    // console.log('Your email is not valid');
    setErrorMsg(phone, "Phone Number is not valid please check credentials.");
  }
};
const validatePass = () => {
  // validate password starts here
  const passwordVal = password.value.trim();
  let regex = /^([_\-\.!@#$%^&*?<>+;'0-9a-zA-Z]){8,255}/;
  let str = passwordVal;
  // console.log(str, regex);
  if (passwordVal === "") {
    setErrorMsg(password, "Password cannot be blank.");
  } else if (passwordVal.length < 8) {
    setErrorMsg(password, "Password must be 8 characters long.");
  } else if (passwordVal.length > 255) {
    setErrorMsg(password, "Password must between 8 to 255 characters long.");
  } else if (regex.test(str)) {
    // console.log('Your password is valid');
    setSuccessMsg(password);
  } else {
    // console.log('Your email is not valid');
    setErrorMsg(password, "Password is not valid please check credentials.");
  }
};
const validateCpass = () => {
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  // console.log(str, regex);
  if (cpasswordVal === "") {
    setErrorMsg(cpassword, "Confirm Password cannot be blank.");
  } else if (cpasswordVal.length < 8) {
    setErrorMsg(cpassword, "Password cannot be matched.");
  } else if (cpasswordVal.length > 255) {
    setErrorMsg(cpassword, "Password cannot be matched");
  } else if (passwordVal !== cpasswordVal) {
    setErrorMsg(cpassword, "Password cannot be matched.");
  } else {
    setSuccessMsg(cpassword);
  }
};
// defining setErrorMsg:
function setErrorMsg(input, errorMsg) {
  const formControl = input.parentElement;
  // console.log(formControl);
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = errorMsg;
}
function setSuccessMsg(input) {
  const formControl = input.parentElement;
  // console.log(formControl);
  formControl.className = "form-control success";
}
