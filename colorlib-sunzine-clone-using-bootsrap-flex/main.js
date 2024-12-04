document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const menuList = document.querySelector(".nav_links");
    hamburger.addEventListener("click", () => {
      menuList.classList.toggle("active");
    });
  });
  