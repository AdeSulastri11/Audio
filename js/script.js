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

// let listTestimoni = [];
// const bodyTestimoni = document.querySelector(".testimoniBody");

// const addDataTestimoniToHTML = () => {
//   bodyTestimoni.innerHTML = "";
//   if (listTestimoni.length >= 0) {
//     listTestimoni.forEach((e) => {
//       let newDataTestimoni = document.createElement("div");
//       newDataTestimoni.classList.add("item");
//       // newDataTestimoni.setAttribute("class", "col testimoni")
//       newDataTestimoni.innerHTML = `
//       <div class="p-3 shadow rounded border border-success-subtle">
//         <div class="d-flex flex-column align-items-center" >
//           <img src="../img/testimoni/${e.image}" class="object-fit-cover" style="width: 100px; border-radius: 100px;aspect-ratio: 1/1;">
//           <p class="d-flex flex-column align-items-center pt-2"><b>${e.name}</b>
//             <q>
//               ${e.teks}
//             </q>
//           </p>
//         </div>
//       </div>
//       `;
//       bodyTestimoni.appendChild(newDataTestimoni);
//     });
//   }
// };

// const testimoni = () => {
//   fetch("../json/testimoni.json")
//     .then((res) => res.json())
//     .then((data) => {
//       listTestimoni = data;
//       addDataTestimoniToHTML();
//     });
// };
// testimoni();