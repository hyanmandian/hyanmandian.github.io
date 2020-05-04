import "#/styles/index.css";
import sunIcon from "#/images/sun.svg";
import moonIcon from "#/images/moon.svg";

const theme = {
  dark: { icon: moonIcon, label: "Active light mode" },
  light: { icon: sunIcon, label: "Active dark mode" },
};

const root = document.documentElement;
const header = document.querySelector(".header > .container");
const defaultTheme = root.classList.contains("-light") ? "light" : "dark";
const themeSwitcher = document.createElement("button");

themeSwitcher.innerHTML = theme[defaultTheme].icon;
themeSwitcher.setAttribute("aria-hidden", "true");
themeSwitcher.setAttribute("title", theme[defaultTheme].label);
themeSwitcher.classList.add("theme-switcher");

themeSwitcher.addEventListener("click", ({ currentTarget }) => {
  const nextTheme = root.classList.contains("-light") ? "dark" : "light";

  root.classList.remove("-light", "-dark");
  root.classList.add(`-${nextTheme}`);
  currentTarget.innerHTML = theme[nextTheme].icon;
  currentTarget.setAttribute("title", theme[nextTheme].label);
  window.localStorage.setItem("theme", nextTheme);
});

header.appendChild(themeSwitcher);
