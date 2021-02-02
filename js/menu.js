const navBtnMenu = document.querySelector(".js-menu-btn");
const navMenu = document.querySelector(".js-nav");

navBtnMenu.addEventListener("click", () => {
  navMenu.classList.add("active");
});
navMenu.addEventListener("click", (e) => {
  const target = e.target.dataset.nav;
  const targetLink = e.target.nodeName;

  if (target !== "close" && targetLink !== "A") return;

  navMenu.classList.remove("active");
});
