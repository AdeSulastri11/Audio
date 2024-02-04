let listTestimoni = [];
const bodyTestimoni = document.querySelector(".testimoniBody");

const addDataTestimoni = () => {
  bodyTestimoni.innerHTML = "";
  if (listTestimoni.length > 0) {
    listTestimoni.forEach((e) => {
      let newDataTestimoni = document.createElement("div");
      newDataTestimoni.setAttribute("class", "item col testimoni");
      newDataTestimoni.innerHTML = `
        <div class="p-3 shadow rounded border border-success-subtle">
          <div class="d-flex flex-column align-items-center">
            <img src="../img/testimoni/${e.image}" class="object-fit-cover" style="width: 100px; border-radius: 100px;aspect-ratio: 1/1;">
            <p class="d-flex flex-column align-items-center pt-2"><b>${e.name}</b>
              <q>
                ${e.teks}
              </q>
            </p>
          </div>
        </div>
      `;
      bodyTestimoni.appendChild(newDataTestimoni);
    });
  } else {
    // Tindakan yang diambil jika tidak ada data testimoni
    bodyTestimoni.innerHTML = "<p>Tidak ada testimoni yang tersedia.</p>";
  }
};

const testimoni = async () => {
  try {
    const response = await fetch("../json/testimoni.json");
    if (!response.ok) {
      throw new Error("Gagal mengambil data testimoni");
    }
    const data = await response.json();
    listTestimoni = data;
    addDataTestimoni();
  } catch (error) {
    console.error("Terjadi kesalahan:", error.message);
    // Tindakan yang diambil jika terjadi kesalahan
    bodyTestimoni.innerHTML = "<p>Terjadi kesalahan saat memuat data testimoni.</p>";
  }
};

testimoni();
