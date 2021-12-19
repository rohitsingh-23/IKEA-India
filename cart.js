var cart_local = JSON.parse(localStorage.getItem("cart-item1")) || [];

var update_price = [];
var priceTotal = 0;

// console.log(cart_local.length);

console.log(cart_local);

display(cart_local);

function display(arr) {
  document.getElementById("main-wala").innerHTML = null;
  arr.forEach((item) => {
    var cart_details = document.createElement("div");
    cart_details.setAttribute("class", "cart-details");

    var img_cart = document.createElement("div");
    img_cart.setAttribute("class", "img-cart");

    var img = document.createElement("img");
    img.src = item.img;

    //apeending cart img

    img_cart.append(img);

    // -------

    var item_details = document.createElement("div");
    item_details.setAttribute("class", "item-details");

    var title = document.createElement("p");
    title.innerText = item.title;

    var set = document.createElement("p");
    set.innerText = item.set;

    var color = document.createElement("p");
    color.innerText = item.color;

    var dimension = document.createElement("p");
    dimension.innerText = item.dimension;

    var random = document.createElement("p");
    random.innerText = item.random;

    var weight = document.createElement("p");
    weight.innerText = item.weight;

    //appending item details

    item_details.append(title, set, color, dimension, random, weight);

    // ----------

    var price_item = document.createElement("div");
    price_item.setAttribute("class", "price-item");

    var price = document.createElement("p");

    var delete_button = document.createElement("div");

    delete_button.setAttribute("class", "delete-button");

    var delete_img = document.createElement("img");
    delete_img.id = "dimage";

    delete_img.src = "./cart/delete.png";

    // delete onclick function
    delete_img.addEventListener("click", () => {
      deleteitem(event);
    });

    var select = document.createElement("select");
    select.id = "svalue";

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

    // item.weight = item.window.toFixed(2)
    let temp= (500 - item.weight1)
    document.getElementById("weight").innerText = item.weight;
    document.getElementById("rmg-weight").innerText = `${
      temp.toFixed(2)
    } kg`;

    //appending price

    price.innerText = item.price;
    // document.getElementById("prc-cart").innerText = item.price;

    priceTotal += item.price1;
    // console.log(priceTotal);

    document.getElementById("prc-cart").innerText = `Rs. ${priceTotal
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;

    select.addEventListener("change", function () {
      // console.log(select.value)
      // let arr = document.querySelectorAll("#svalue").value
      // let value = document.querySelectorAll("#svalue");
      // console.log(value);
      // console.log(arr)

      let value = document.getElementById("svalue").value;
      let price = cart_local[0].price1;

      document.getElementById("prc-cart").textContent = `Rs. ${value * price}`;
      // document.getElementById("prc-cart").innerText = `Rs. ${value*price
      //   .toFixed(2)
      //   .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;

      var newPrice = item.price1 * select.value;
      price.innerText = `Rs. ${newPrice
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;

      item.total = newPrice;
      item.it = select.value;

      // console.log(item);

      // console.log(select.value);

      // update_price.push(priceData);

      localStorage.setItem("cart-item1", JSON.stringify(cart_local));
      // console.log(update_price);

      // priceTotal = 0;
      priceTotal += newPrice;
      // console.log(newPrice);
      // console.log(priceTotal);
      // document.getElementById("prc-cart").innerText = `Rs. ${priceTotal
      //   .toFixed(2)
      //   .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;

      document.getElementById("weight").innerText = `${Math.round(
        item.weight1 * select.value
      )} kg total`;

      var remain = Math.round(300 - item.weight1 * select.value);

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

    document.getElementById("gocheck").addEventListener("click", () => {
      // update_price.price = document.getElementById("prc-cart").innerText;
      console.log(update_price);

      window.location.href = "./checkout/checkout.html";
    });
  });
}

function deleteitem(event) {
  console.log(event);
  let path = event.path[3].innerText;
  let pathn = path.split("\n");
  let title = pathn[0].split(" ");
  let final = title[0];
  console.log(final);
  cart_local = cart_local.filter((item) => {
    let name = item.title.split(" ")[0];
    // console.log(name);
    // console.log(item)
    if (name !== final) {
      return item;
    }
  });
  display(cart_local);
  localStorage.setItem("cart-item1", JSON.stringify(cart_local));
  let value = document.getElementById("svalue").value;
  let price = cart_local[0].price1;

  document.getElementById("prc-cart").textContent = `RS. ${value * price}`;
}

// console.log(priceTotal);


