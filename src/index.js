import css from "./styles.css";
import template from "./templates/post.hbs";
import menu from "./menu.json";

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const jsMmenu = document.querySelector(".js-menu");
const body = document.querySelector("body");
const themeSwitchToggle = document.querySelector("#theme-switch-toggle");

const postItem = template(menu);

jsMmenu.insertAdjacentHTML("afterbegin", postItem);

const currentTheme = localStorage.getItem("currentTheme");

if (currentTheme === Theme.DARK) {
  changeTheme(Theme.LIGHT, Theme.DARK);
} else {
  changeTheme(Theme.DARK, Theme.LIGHT);
}

themeSwitchToggle.addEventListener("click", hendelThemeToggle);

function hendelThemeToggle() {
  const currentTheme = localStorage.getItem("currentTheme");
  if (currentTheme === Theme.DARK) {
    changeTheme(Theme.DARK, Theme.LIGHT);
  } else {
    changeTheme(Theme.LIGHT, Theme.DARK);
  }
}

function changeTheme(oldTheme, newTheme) {
  body.classList.remove(oldTheme);
  body.classList.add(newTheme);
  localStorage.setItem("currentTheme", newTheme);
  themeSwitchToggle.checked = newTheme === Theme.DARK;
}
