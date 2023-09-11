const buttons = document.querySelectorAll(".js-button");

const setButtonText = () => {
  if (window.innerWidth >= 768) {
    buttons.forEach((button) => {
      const desktopText = button.getAttribute("data-desktop-text");
      button.textContent = desktopText;
    });
  } else {
    buttons.forEach((button) => {
      const mobileText = button.getAttribute("data-mobile-text");
      button.textContent = mobileText;
    });
  }
};

setButtonText();

window.addEventListener("resize", setButtonText);

const openNavBtn = document.querySelector(".hamburger");
const closeNavBtn = document.querySelector(".close-nav-button");
const navMenu = document.querySelector(".nav-mobile");

const disableScrool = () => {
  document.body.classList.add("no-scroll");
};

const enableScroll = () => {
  document.body.classList.remove("no-scroll");
};

openNavBtn.addEventListener("click", () => {
  navMenu.classList.add("active");
  disableScrool();
});

closeNavBtn.addEventListener("click", () => {
  navMenu.classList.remove("active");
  enableScroll();
});
