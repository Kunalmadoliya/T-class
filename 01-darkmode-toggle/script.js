const button = document.getElementById("toggle-btn");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.value === "dark-mode") {
    button.innerText = "Toggle White Mode";
  } else {
    button.innerText = "Toggle Dark Mode";
  }
});
