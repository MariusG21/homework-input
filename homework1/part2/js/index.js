const textAnimation = document.querySelector(".text-intro");
const animationContainer = document.querySelector(".intro-animation-container");

textAnimation.addEventListener("animationend", () => {
  setTimeout(() => {
    animationContainer.style.display = "none";
    toggleSidebar.style.display = "flex";
  }, 3000);
});

const toggleSidebar = document.querySelector(".toggle-sidebar");
const sidebar = document.getElementById("sidebar");

toggleSidebar.addEventListener("click", () => {
  toggleSidebar.classList.toggle("js");
  sidebar.classList.toggle("js");
});

const scrollableContainer = document.querySelectorAll(".wrapper");

scrollableContainer.forEach((container) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.style.scrollBehavior = "auto";
  });

  document.addEventListener("mouseup", () => {
    isDown = false;
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = x - startX;
    container.scrollLeft = scrollLeft - walk;
  });
});

const subtitles = document.querySelectorAll(".subtitles");

subtitles.forEach((subtitle, index) => {
  subtitle.addEventListener("click", function (e) {
    e.preventDefault();

    let targetElement = document.getElementById(`id${index + 1}`);

    let rootFontSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    let offsetInRem = 10;
    let offsetInPixels = offsetInRem * rootFontSize;
    let targetPosition = targetElement.offsetTop - offsetInPixels;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});
