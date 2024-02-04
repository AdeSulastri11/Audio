function imgSlider(e) {
  setTimeout(function () {
    document.querySelector(".headphone-black").src = e;
  }, 200);
}

function changeColorDots(color) {
  const dot1 = document.querySelector(".dot-bg");
  const dot2 = document.querySelector(".dot-bg-sec");
  dot1.style.background = color;
  dot2.style.background = color;
}
function changeColorBgMain(colorBg) {
  const bgMain = document.querySelector(".bg-main");
  bgMain.style.background = colorBg;
}

//  NAVBAR
const navbar = document.querySelector("#navbar");
const title = document.querySelector("#title-brand");
const itemNav = document.querySelectorAll("#itemNav li a");

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    navbar.classList.add("scrolled");
    title.classList.add("title");
    itemNav.forEach((item) => {
      item.classList.add("item");
    });
  } else {
    navbar.classList.remove("scrolled");
    title.classList.remove("title");
    itemNav.forEach((item) => {
      item.classList.remove("item");
    });
  }
});

const content1 = document.querySelector("#content1");
const text = document.createTextNode(
  "Welcome to the ultimate destination for discovering the best quality in the world of headphones! We proudly present a collection of top-tier headphones with cutting-edge technology to deliver an exceptional sound experience. Each pair of headphones guarantees stunning audio quality, exceptional comfort, and stylish design."
);
content1.appendChild(text);