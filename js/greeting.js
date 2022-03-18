const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);

  const username = loginInput.value;

  localStorage.setItem(USERNNAME_KEY, loginInput.value);

  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNNAME_KEY);
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const saveUsername = localStorage.getItem(USERNNAME_KEY);

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(saveUsername);
}
