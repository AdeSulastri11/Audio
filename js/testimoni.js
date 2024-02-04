let listTestimoni = [];
const bodyTestimoni = document.querySelector(".testimoniBody");

const addDataTestimoni = () => {
  bodyTestimoni.innerHTML = "";
  if (listTestimoni.length >= 0) {
    listTestimoni.forEach((e) => {
      let newDataTestimoni = document.createElement("div");
      // newDataTestimoni.classList.add("item");
      newDataTestimoni.setAttribute("class", "item col testimoni")
      newDataTestimoni.innerHTML = `
      <div class="p-3 shadow rounded border border-success-subtle">
        <div class="d-flex flex-column align-items-center">
          <img src="../img/testimoni/${e.image}" class="object-fit-cover" style="width: 100px; border-radius: 100px;aspect-ratio: 1/1;">
          <p class="d-flex flex-column align-items-center pt-2"><b>${e.name}</b>
            <q>
              ${e.price}
            </q>
          </p>
        </div>
      </div>
      `;
      bodyTestimoni.appendChild(newDataTestimoni);
    });
  }
};

const testimoni = () => {
  fetch("../json/speaker.json")
    .then((res) => res.json())
    .then((data) => {
      listTestimoni = data;
      addDataTestimoni();
    });
};
testimoni();