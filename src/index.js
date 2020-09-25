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

if (!localStorage.getItem("currentTheme")) {
  ThemeLight();
}
if (localStorage.getItem("currentTheme") === `${Theme.LIGHT}`) {
  ThemeLight();
}
if (localStorage.getItem("currentTheme") === `${Theme.DARK}`) {
  ThemeDark();
}

themeSwitchToggle.addEventListener("click", hendelThemeToggle);

function hendelThemeToggle() {
  if (localStorage.getItem("currentTheme") === `${Theme.LIGHT}`) {
    ThemeDark();
    return;
  }
  if (localStorage.getItem("currentTheme") === `${Theme.DARK}`) {
    ThemeLight();
    return;
  }
}

function ThemeLight() {
  body.classList.remove(`${Theme.DARK}`);
  body.classList.add(`${Theme.LIGHT}`);
  localStorage.setItem("currentTheme", `${Theme.LIGHT}`);
  themeSwitchToggle.checked = false;
}
function ThemeDark() {
  body.classList.remove(`${Theme.LIGHT}`);
  body.classList.add(`${Theme.DARK}`);
  localStorage.setItem("currentTheme", `${Theme.DARK}`);
  themeSwitchToggle.checked = true;
}
