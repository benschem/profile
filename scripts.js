// Feather icons
feather.replace();

// Dark mode toggle switch
const toggle = document.querySelector("#dark-mode-toggle");
const switchIcon = document.querySelector("#switch-icon");
const root = document.querySelector(":root");
let darkMode;

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  darkMode = true;
  switchIcon.style.fill = "none";
} else {
  darkMode = false;
  switchIcon.style.fill = "yellow";
}

toggle.addEventListener("click", () => {
  if (darkMode) {
    root.style.setProperty("--color-alt", "var(--purple-6)");
    root.style.setProperty("--color-alt-light", "var(--purple-2)");
    root.style.setProperty("--color-light", "var(--orange-3)");
    root.style.setProperty("--color-medium", "var(--orange-4)");
    root.style.setProperty("--color-dark", "var(--orange-8)");
    root.style.setProperty("--background", "var(--purple-0)");
    root.style.setProperty("--background-alt", "var(--purple-8)");
    root.style.setProperty("--body-text", "black");
    darkMode = false;
    switchIcon.style.fill = "var(--color-light)";
  } else {
    root.style.setProperty("--color-alt", "var(--purple-6)");
    root.style.setProperty("--color-alt-light", "var(--purple-2)");
    root.style.setProperty("--color-light", "var(--orange-3)");
    root.style.setProperty("--color-medium", "var(--orange-4)");
    root.style.setProperty("--color-dark", "var(--orange-6)");
    root.style.setProperty("--background", "var(--purple-12)");
    root.style.setProperty("--background-alt", "var(--purple-10)");
    root.style.setProperty("--body-text", "var(--purple-0)");
    darkMode = true;
    switchIcon.style.fill = "none";
  }
});

// Scroll down arrow
const downArrow = document.querySelector("#down-arrow");
window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    downArrow.style.display = "block";
  } else {
    downArrow.style.display = "none";
  }
});
