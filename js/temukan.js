const initApp = () => {
  fetch("../json/speaker.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      output = "";
      data.forEach((element) => {
        output += `
        <div class="shadow rounded-4 p-3">
      <div class="d-flex row-spesifik">
        <div>
          <div class="px-5 p-2 d-flex align-items-center" style="height: 200px;">
            <img src="../img/speaker/${element.image}" style="width: 110px;">
          </div>
          <div>
            <p>${element.name}<br>Rp ${element.price}</p>
            <span class="d-grid justify-content-center">
              <a href="products.html">
                <button class="btn btn-dark">Check Out</button>
              </a>
            </span>
          </div>
        </div>
        <div class="pt-2">
          <h6>Spesifikasi</h6>
          <ul>
            ${element.spesifikasi
              .map(
                (spec) =>
                  `
              <li>${spec}</li>
              `
              )
              .join("")}
          </ul>
        </div></div>
      </div>
        `;
      });
      document.querySelector(".speaker-spesifik").innerHTML = output;
    });
};
initApp();

const loadData = () => {
  fetch("../json/products.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      output = "";
      data.forEach((element) => {
        output += `
        <div class="shadow rounded-4 p-3">
      <div class="d-flex row-spesifik">
        <div>
          <div class="px-5 p-2 d-flex align-items-center" style="height: 200px;">
            <img src="../img/headphone/${element.image}" style="width: 110px;">
          </div>
          <div>
            <p>${element.name}<br>Rp ${element.price}</p>
            <span class="d-grid justify-content-center">
              <a href="products.html">
                <button class="btn btn-dark">Check Out</button>
              </a>
            </span>
          </div>
        </div>
        <div class="pt-2">
          <h6>Spesifikasi</h6>
          <ul>
            ${element.spesifikasi
              .map(
                (spec) =>
                  `
              <li>${spec}</li>
              `
              )
              .join("")}
          </ul>
        </div></div>
      </div>
        `;
      });
      document.querySelector(".headphone-spesifik").innerHTML = output;
    });
};
loadData();

const masukkanData = () => {
  fetch("../json/earphones.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      output = "";
      data.forEach((element) => {
        output += `
      <div class="shadow rounded-4 p-3">
      <div class="d-flex row-spesifik">
        <div>
          <div class="px-5 p-2 d-flex align-items-center" style="height: 200px;">
            <img src="../img/earphones/${element.image}" style="width: 110px;">
          </div>
          <div>
            <p>${element.name}<br>Rp ${element.price}</p>
            <span class="d-grid justify-content-center">
              <a href="products.html">
                <button class="btn btn-dark">Check Out</button>
              </a>
            </span>
          </div>
        </div>
        <div class="pt-2">
          <h6>Spesifikasi</h6>
          <ul>
            ${element.spesifikasi
              .map(
                (spec) =>
                  `
              <li>${spec}</li>
              `
              )
              .join("")}
          </ul>
        </div></div>
      </div>
        `;
      });
      document.querySelector(".earbuds-spesifik").innerHTML = output;
    });
};
masukkanData();

// content
