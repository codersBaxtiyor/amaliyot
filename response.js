let sidebar = document.querySelector(".side-bar");
let menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  sidebar.classList.toggle("side-bar-open");
  let overlay = document.createElement("div");
  overlay.classList.add("overlay");
  if (overlay.classList.contains("overlay")) {
    document.body.append(overlay);
    overlay.addEventListener("click", () => {
      document.body.removeChild(overlay);
      sidebar.classList.remove("side-bar-open");
    });
  }
});
