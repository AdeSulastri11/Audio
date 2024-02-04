let listProducts = [];
let listProductsEarphones = [];
let listProductsSpeakers = [];
let listCartProducts = [];
let allProducts = [];

const listHeadphonesToHTML = document.querySelector(".headphones");
const listEarphonesToHTML = document.querySelector(".earphones");
const listSpeakersToHTML = document.querySelector(".speakers");
const listCart = document.querySelector(".cart");
const iconCart = document.querySelector("#cartQuantity");

const createProductElement = (category, product) => {
  const productElement = document.createElement("div");
  productElement.classList.add("item");
  productElement.dataset.id = product.id;
  productElement.setAttribute("data-category", product.category);
  productElement.innerHTML = `
  <div class="d-flex justify-content-center">
      <div class="product rounded shadow">
        <div class="card-header p-2 d-grid justify-content-center   align-items-center" style="height: 150px">
        <img src="../img/${category}/${product.image}" style="width: 100px;">
      </div>
      <div class="px-3 pt-3">
        <p>${product.name} </br>
        Rp ${product.price}</p>
      </div>
      <div class="btn">
        <button class="btn btn-dark addCart">Check Out</button>
      </div>
      </div>
    </div>
  `;
  return productElement;
};

const addDataToHTML = () => {
  // HEADPHONE
  listHeadphonesToHTML.innerHTML = "";
  if (listProducts.length > 0) {
    listProducts.forEach((el) => {
      const newProducts = createProductElement("headphone", el);
      listHeadphonesToHTML.appendChild(newProducts);
    });
  }

  // EARPHONE
  listEarphonesToHTML.innerHTML = "";
  if (listProductsEarphones.length > 0) {
    listProductsEarphones.forEach((el) => {
      const newProducts = createProductElement("earphones", el);
      listEarphonesToHTML.appendChild(newProducts);
    });
  }

  // SPEAKER
  listSpeakersToHTML.innerHTML = "";
  if (listProductsSpeakers.length > 0) {
    listProductsSpeakers.forEach((el) => {
      const newProducts = createProductElement("speaker", el);
      listSpeakersToHTML.appendChild(newProducts);
    });
  }
};

// tambah product headphones kekeranjang
document.addEventListener("click", function (e) {
  let positionClick = e.target;
  if (positionClick.classList.contains("addCart")) {
    let product_id = positionClick.closest(".item").dataset.id;
    let product_category = positionClick.closest(".item").dataset.category;
    addToCart(product_id, product_category);
  }
});

const addToCart = (product_id, product_category) => {
  let positionThisProductInCart = listCartProducts.findIndex(
    (value) =>
      value.product_id == product_id &&
      value.product_category == product_category
  );
  if (listCartProducts <= 0) {
    listCartProducts = [
      {
        product_id: product_id,
        product_category: product_category,
        quantity: 1,
      },
    ];
  } else if (positionThisProductInCart < 0) {
    listCartProducts.push({
      product_id: product_id,
      product_category: product_category,
      quantity: 1,
    });
  } else {
    listCartProducts[positionThisProductInCart].quantity =
      listCartProducts[positionThisProductInCart].quantity + 1;
  }
  console.log(listCartProducts);
  addCartToHTML();
  addDataToMemory();
};

const addDataToMemory = () => {
  localStorage.setItem("cart", JSON.stringify(listCartProducts));
};

const addCartToHTML = () => {
  listCart.innerHTML = "";
  let totalQuantityCart = 0;
  if (listCartProducts.length >= 0) {
    listCartProducts.forEach((cart) => {
      totalQuantityCart = totalQuantityCart + cart.quantity;
      let newProductCart = document.createElement("div");
      newProductCart.classList.add("item");
      newProductCart.dataset.id = cart.product_id;
      const productCartPosition = allProducts.findIndex(
        (value) => value.id == cart.product_id
      );
      let info = allProducts[productCartPosition];
      newProductCart.innerHTML = `
      <div class="align-items-center row">
        <div class= "col">
          <img src="../img/${info.category}/${info.image}" style="width: 50px;">
        </div>
        <span class= "col-5">
          <p>${info.name} <br> Rp ${info.price * cart.quantity}</p>
        </span>
        <span class= "col">
          <div class= "d-flex">
            <div class= "col">
              <button class="ratio ratio-1x1 btn rounded btn-dark minus" style= "width: 30px;">
              <svg class= "minus" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-dash-lg" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
            </svg>
              </button>
            </div>
            <div class= "align-items-center justify-content-center d-flex" style="width: 50px; height: 30px">
              <p type="text" class= "pt-3">${cart.quantity}</p>
            </div>
            <div class= "col">
              <button class="ratio ratio-1x1 btn rounded btn-dark plus" style= "width: 30px;">
                <svg class= "plus" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                </svg>
              </button>
            </div>
          </div>
        </span>
      </div>
      `;
      listCart.appendChild(newProductCart);
    });
  }
  iconCart.innerHTML = totalQuantityCart;
};

listCart.addEventListener("click", (event) => {
  let positionClick = event.target;
  if (
    positionClick.classList.contains("minus") ||
    positionClick.classList.contains("plus")
  ) {
    let product_id = positionClick.closest(".item").dataset.id;
    let type = "minus";
    if (positionClick.classList.contains("plus")) {
      type = "plus";
    }
    changeQuantity(product_id, type);
  }
});

const changeQuantity = (product_id, type) => {
  let positioinItemInCart = listCartProducts.findIndex(
    (value) => value.product_id == product_id
  );
  if (positioinItemInCart >= 0) {
    switch (type) {
      case "plus":
        listCartProducts[positioinItemInCart].quantity =
          listCartProducts[positioinItemInCart].quantity + 1;
        break;
      default:
        let valueChange = listCartProducts[positioinItemInCart].quantity - 1;
        if (valueChange > 0) {
          listCartProducts[positioinItemInCart].quantity = valueChange;
        } else {
          listCartProducts.splice(positioinItemInCart, 1);
        }
        break;
    }
  }
  addDataToMemory();
  addCartToHTML();
};

const initApp = () => {
  fetch("../json/products.json")
    .then((res) => res.json())
    .then((data) => {
      listProducts = data;
      addDataToHTML();
    });
  fetch("../json/earphones.json")
    .then((res) => res.json())
    .then((data) => {
      listProductsEarphones = data;
      addDataToHTML();
    });
  fetch("../json/speaker.json")
    .then((res) => res.json())
    .then((data) => {
      listProductsSpeakers = data;
      addDataToHTML();
    });
  fetch("../json/allProducts.json")
    .then((res) => res.json())
    .then((data) => {
      allProducts = data;
      addDataToHTML();
      if (localStorage.getItem("cart")) {
        listCartProducts = JSON.parse(localStorage.getItem("cart"));
        addCartToHTML();
      }
    });
};
initApp();


let listTestimoni = [];
const bodyTestimoni = document.querySelector(".testimoniBody");

const addDataTestimoniToHTML = () => {
  bodyTestimoni.innerHTML = "";
  if (listTestimoni.length >= 0) {
    listTestimoni.forEach((e) => {
      let newDataTestimoni = document.createElement("div");
      newDataTestimoni.classList.add("item");
      // newDataTestimoni.setAttribute("class", "col testimoni")
      newDataTestimoni.innerHTML = `
      <div class="p-3 shadow rounded border border-success-subtle">
        <div class="d-flex flex-column align-items-center" >
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
  }
};

const testimoni = () => {
  fetch("../json/testimoni.json")
    .then((res) => res.json())
    .then((data) => {
      listTestimoni = data;
      addDataTestimoniToHTML();
    });
};
testimoni();