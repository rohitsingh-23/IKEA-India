var cart_local = JSON.parse(localStorage.getItem("cart-item1"));

console.log(cart_local.length);

console.log(cart_local);

var cart_details = document.createElement("div");
cart_details.setAttribute("class", "cart-details");

var img_cart = document.createElement("div");
img_cart.setAttribute("class", "img-cart");

var img = document.createElement("img");
img.src = cart_local.img;

//apeending cart img

img_cart.append(img);

// -------

var item_details = document.createElement("div");
item_details.setAttribute("class", "item-details");

var title = document.createElement("p");
title.innerText = cart_local.title;

var set = document.createElement("p");
set.innerText = cart_local.set;

var color = document.createElement("p");
color.innerText = cart_local.color;

var dimension = document.createElement("p");
dimension.innerText = cart_local.dimension;

var random = document.createElement("p");
random.innerText = cart_local.random;

var weight = document.createElement("p");
weight.innerText = cart_local.weight;

//appending item details

item_details.append(title, set, color, dimension, random, weight);

// ----------

var price_item = document.createElement("div");
price_item.setAttribute("class", "price-item");

var price = document.createElement("p");

var delete_button = document.createElement("div");
delete_button.setAttribute("class", "delete-button");

var delete_img = document.createElement("img");
delete_img.src = "./delete.png";

var select = document.createElement("select");

var option1 = document.createElement("option");
option1.value = 1;
option1.innerText = 1;

var option2 = document.createElement("option");
option2.innerText = 2;

var option3 = document.createElement("option");
option3.innerText = 3;

var option4 = document.createElement("option");
option4.innerText = 4;

var option5 = document.createElement("option");
option5.innerText = 5;

var option6 = document.createElement("option");
option6.innerText = 6;

var option7 = document.createElement("option");
option7.innerText = 7;

var option8 = document.createElement("option");
option8.innerText = 8;

var option9 = document.createElement("option");
option9.innerText = 9;

var option10 = document.createElement("option");
option10.innerText = 10;

select.append(
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
  option7,
  option8,
  option9,
  option10
);

delete_button.append(delete_img, select);

// main appending------------------------------------------------

//weight appending

document.getElementById("weight").innerText = cart_local.weight;
document.getElementById("rmg-weight").innerText = `${
  500 - cart_local.weight1
} kg`;

//appending price

price.innerText = cart_local.price;
document.getElementById("prc-cart").innerText = cart_local.price;

select.addEventListener("change", function () {
  var newPrice = cart_local.price1 * select.value;
  price.innerText = `Rs. ${newPrice
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;

  document.getElementById("prc-cart").innerText = `Rs. ${newPrice
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;

  document.getElementById("weight").innerText = `${Math.round(
    cart_local.weight1 * select.value
  )} kg total`;

  var remain = Math.round(300 - cart_local.weight1 * select.value);

  document.getElementById("rmg-weight").innerText = `${remain} kg`;

  if (remain < 50) {
    document.getElementById("rmg-weight").style.color = "red";
  }
});

price_item.append(price, delete_button);

//------

// if ()

cart_details.append(img_cart, item_details, price_item);

document.getElementById("main-wala").append(cart_details);
// main.append(cart_details);
