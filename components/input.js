const submitBtn = document.querySelector(".primary-btn");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const address = document.querySelector("#address");
const email = document.querySelector("#email");
const inputFieldSet = document.querySelector("#input_fieldset");
const inputForm = document.querySelector(".input_form");

function checkInput() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const addressValue = address.value.trim();
  const emailValue = email.value.trim();

  console.log(firstNameValue);
  console.log(lastNameValue);
  console.log(addressValue);
  console.log(emailValue);

  if (firstNameValue === "") {
    setError(firstName);
  } else {
    setSuccess(firstName);
  }
  firstNameValue === "" ? setError(firstName) : setSuccess(firstName);

  lastNameValue === "" ? setError(lastName) : setSuccess(lastName);

  addressValue === "" ? setError(address) : setSuccess(address);

  emailValue === "" ? setError(email) : setSuccess(email);
}

function setError(input) {
  const fieldSet = input.parentElement;

  fieldSet.className = "input_fieldset error";
}

function setSuccess(input) {
  const fieldSet = input.parentElement;

  fieldSet.className = "input_fieldset success";
}

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});
