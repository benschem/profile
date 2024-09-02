// Example usage:
// Insert this line in the <head> of your index.html file after any external dependencies:
// <script src="/scripts.js" defer></script>
// Make sure to include the defer keyword.

// Listen for when the HTML document has been completely parsed and all deferred scripts have downloaded and executed.
document.addEventListener("DOMContentLoaded", (event) => {
  // The DOMContentLoaded event is queued before stylesheets, images, subframes, and async scripts finish loading,
  // but after deferred scripts, which do wait for stylesheets to load, meaning your own javascript will run last.

  // Load Feather icons.
  feather.replace();

  // Select dark mode toggle switch.
  const toggle = document.querySelector("#dark-mode-toggle");
  const switchIcon = document.querySelector("#switch-icon");

  // Detect browser dark mode preference and style dark mode toggle switch icon to match.
  const theBrowserPrefersDarkMode = () => {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  let darkMode;
  if (theBrowserPrefersDarkMode()) {
    darkMode = true;
    switchIcon.style.fill = "none";
  } else {
    darkMode = false;
    switchIcon.style.fill = "var(--color-light)";
  }

  // When the icon is clicked, toggle dark mode
  toggle.addEventListener("click", () => {
    if (darkMode) {
      turnOffDarkMode();
    } else {
      turnOnDarkMode();
    }
  });

  const turnOffDarkMode = () => {
    applyLightColors();
    darkMode = false;
    switchIcon.style.fill = "var(--color-light)";
  };

  const turnOnDarkMode = () => {
    applyDarkColors();
    darkMode = true;
    switchIcon.style.fill = "none";
  };

  const root = document.querySelector(":root");

  const applyLightColors = () => {
    root.style.setProperty("--color-alt", "var(--purple-6)");
    root.style.setProperty("--color-alt-light", "var(--purple-2)");
    root.style.setProperty("--color-light", "var(--orange-3)");
    root.style.setProperty("--color-medium", "var(--orange-4)");
    root.style.setProperty("--color-dark", "var(--orange-8)");
    root.style.setProperty("--background", "var(--purple-0)");
    root.style.setProperty("--background-alt", "var(--purple-8)");
    root.style.setProperty("--body-text", "black");
  };

  const applyDarkColors = () => {
    root.style.setProperty("--color-alt", "var(--purple-6)");
    root.style.setProperty("--color-alt-light", "var(--purple-2)");
    root.style.setProperty("--color-light", "var(--orange-3)");
    root.style.setProperty("--color-medium", "var(--orange-4)");
    root.style.setProperty("--color-dark", "var(--orange-6)");
    root.style.setProperty("--background", "var(--purple-12)");
    root.style.setProperty("--background-alt", "var(--purple-10)");
    root.style.setProperty("--body-text", "var(--purple-0)");
  };

  // As soon as you scroll, hide the bouncing arrow encouraging you to scroll down.
  window.addEventListener("scroll", () => {
    if (pageIsScrolledAllTheWayUp()) {
      showArrow();
    } else {
      hideArrow();
    }
  });

  const pageIsScrolledAllTheWayUp = () => {
    return window.scrollY === 0;
  };

  const downArrow = document.querySelector("#down-arrow");

  const showArrow = () => {
    downArrow.style.display = "block";
  };

  const hideArrow = () => {
    downArrow.style.display = "none";
  };
});
