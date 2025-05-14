function loadPreferences() {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  document.body.classList.toggle("dark-mode", isDarkMode);
}

function savePreferences(isDark) {
  localStorage.setItem("darkMode", isDark);
}

function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark-mode");
  savePreferences(isDark);
}

function triggerImageAnimation() {
  const image = document.getElementById("logo");
  image.classList.add("animate");
  setTimeout(() => {
    image.classList.remove("animate");
  }, 600);
}

document.getElementById("toggleModeBtn").addEventListener("click", () => {
  toggleDarkMode();
  triggerImageAnimation();
});

loadPreferences();
