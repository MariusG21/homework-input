const signUpForm = document.getElementById("sign-up-form");

const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const username = document.getElementById("username");
const usernameError = document.getElementById("usernameError");
const password = document.getElementById("password");
const passwordError = document.getElementById("passwordError");

const emailRegex = /^[a-zA-Z\d._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,254}$/;
const usernameRegex = /^.{3,16}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$%&*?]{8,24}$/;

signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  const emailValue = email.value.trim();
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "") {
    emailError.innerText = "Email required.";
    emailError.style.display = "block";
    emailError.style.color = "red";

    email.classList.add("error-input");
    isValid = false;
  } else if (!emailRegex.test(emailValue)) {
    emailError.innerText = "Please enter a valid email address.";
    emailError.style.display = "block";
    emailError.style.color = "red";
    email.classList.add("error-input");
    isValid = false;
  }

  if (usernameValue === "") {
    usernameError.innerText = "Username required.";
    usernameError.style.display = "block";
    usernameError.style.color = "red";
    username.classList.add("error-input");
    isValid = false;
  } else if (!usernameRegex.test(usernameValue)) {
    usernameError.innerText = "Username must contain between 3-16 characters.";
    usernameError.style.display = "block";
    usernameError.style.color = "red";
    username.classList.add("error-input");
    isValid = false;
  }

  if (passwordValue === "") {
    passwordError.innerText = "Password required.";
    passwordError.style.display = "block";
    passwordError.style.color = "red";
    password.classList.add("error-input");
    isValid = false;
  } else if (passwordValue.length < 8 || passwordValue.length > 24) {
    passwordError.innerText = "Password must contain between 8-24 characters.";
    passwordError.style.display = "block";
    passwordError.style.color = "red";
    password.classList.add("error-input");
    isValid = false;
  } else if (!passwordRegex.test(passwordValue)) {
    passwordError.innerText =
      "Password must contain at least one uppercase letter, one lowercase letter, and one number.";
    passwordError.style.display = "block";
    passwordError.style.color = "red";
    password.classList.add("error-input");
    isValid = false;
  }

  if (isValid) {
    localStorage.setItem("newEmail", emailValue);
    localStorage.setItem("newUsername", usernameValue);
    localStorage.setItem("newPassword", passwordValue);
    event.target.submit();
  }
});

const signUpInputs = document.querySelectorAll(".sign-up-inputs");

signUpInputs.forEach((input, index) => {
  input.addEventListener("keydown", () => {
    if (input.matches(":focus")) {
      input.classList.remove("error-input");
      input.classList.remove("valid-format");
      input.nextElementSibling.style.display = "none";
    }
  });
  input.addEventListener("blur", () => {
    const inputValue = input.value.trim();
    if (emailRegex.test(inputValue) && index === 0) {
      input.classList.add("valid-format");
      input.nextElementSibling.innerText = "Valid email address.";
      input.nextElementSibling.style.display = "block";
      input.nextElementSibling.style.color = "rgba(0,231,0)";
    } else if (usernameRegex.test(inputValue) && index === 1) {
      input.classList.add("valid-format");
      input.nextElementSibling.innerText = "Username looks great!";
      input.nextElementSibling.style.display = "block";
      input.nextElementSibling.style.color = "rgba(0,231,0)";
    } else if (passwordRegex.test(inputValue) && index === 2) {
      input.classList.add("valid-format");
      input.nextElementSibling.innerText = "Strong password!";
      input.nextElementSibling.style.display = "block";
      input.nextElementSibling.style.color = "rgba(0,231,0)";
    }
  });
});

const passwordOptions = document.querySelectorAll(".password-visibility");

passwordOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const passwordState = password.type === "password";

    password.type = passwordState ? "text" : "password";
    passwordHidden.style.display = passwordState ? "none" : "block";
    passwordVisible.style.display = passwordState ? "block" : "none";

    password.focus();
  });
});
