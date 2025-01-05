const signInForm = document.getElementById("sign-in-form");
const username = document.getElementById("username");
const usernameError = document.getElementById("usernameError");
const password = document.getElementById("password");
const passwordError = document.getElementById("passwordError");

signInForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === "") {
    usernameError.innerText = "Username required";
    usernameError.style.display = "block";
    username.classList.add("error-input");
    isValid = false;
  } else if (usernameValue && passwordValue === "") {
    usernameError.innerText = "Please enter your password";
    usernameError.style.display = "block";
    username.classList.add("error-input");
    isValid = false;
  } else if (
    usernameValue !== localStorage.getItem("newUsername") ||
    passwordValue !== localStorage.getItem("newPassword")
  ) {
    usernameError.innerText = "Username or Password invalid";
    usernameError.style.display = "block";
    username.classList.add("error-input");
    passwordError.innerText = "Username or Password invalid";
    passwordError.style.display = "block";
    password.classList.add("error-input");
    isValid = false;
  }
  // else if (usernameValue !== localStorage.getItem("newUsername")) {
  //   usernameError.innerText = "Invalid username";
  //   usernameError.style.display = "block";
  //   username.classList.add("error-input");
  //   isValid = false;
  // }

  if (passwordValue === "") {
    passwordError.innerText = "Password required";
    passwordError.style.display = "block";
    password.classList.add("error-input");
    isValid = false;
  } else if (passwordValue && usernameValue === "") {
    passwordError.innerText = "Please enter your username";
    passwordError.style.display = "block";
    password.classList.add("error-input");
    isValid = false;
  } else if (
    usernameValue !== localStorage.getItem("newUsername") ||
    passwordValue !== localStorage.getItem("newPassword")
  ) {
    usernameError.innerText = "Username or Password invalid";
    usernameError.style.display = "block";
    username.classList.add("error-input");
    passwordError.innerText = "Username or Password invalid";
    passwordError.style.display = "block";
    password.classList.add("error-input");
    isValid = false;
  }
  if (isValid) {
    event.target.submit();
  }
});

const signInInputs = document.querySelectorAll(".sing-in-inputs");

signInInputs.forEach((input, index) => {
  input.addEventListener("keydown", () => {
    if (input.matches(":focus")) {
      input.classList.remove("error-input");
      input.nextElementSibling.style.display = "none";
    }
  });
});

// show/hide password

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
