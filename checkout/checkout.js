var cart_local = JSON.parse(localStorage.getItem("cart-item1"));
// console.log(cart_local);

showData(cart_local);

function showData(cart_local) {
  cart_local.map((item) => {
    var total_p = JSON.parse(localStorage.getItem("price"));

    var list = document.createElement("div");
    list.setAttribute("id", "list");

    var des = document.createElement("div");
    des.setAttribute("id", "des");

    var imgDiv = document.createElement("imgDiv");
    imgDiv.setAttribute("id", "imgDiv");

    var title = document.createElement("p");
    title.innerText = item.title;

    var set = document.createElement("p");
    set.innerText = item.set;

    var color = document.createElement("p");
    color.innerText = item.color;

    var random = document.createElement("p");
    random.innerText = `Article no: ${cart_local.random}`;

    var price = document.createElement("h2");
    price.innerText = item.price;

    var img_cart = document.createElement("div");
    img_cart.setAttribute("class", "img-cart");

    var img = document.createElement("img");
    img.src = item.img;

    var ttl_p = document.createElement("div");
    ttl_p.setAttribute("id", "ttl");

    var total_one = document.createElement("p");
    total_one.innerText = "Total";

    var total_two = document.createElement("h2");
    total_two.innerText = item.total;

    var inp = document.createElement("div");
    inp.setAttribute("id", "inp");

    var num = document.createElement("div");
    num.setAttribute("id", "num");
    num.innerText = item.it;

    var img_c = document.createElement("img");
    img_c.src = "./payment icon/cross.svg";

    var remove = document.createElement("div");
    remove.setAttribute("id", "remove");

    let rmv_img = document.createElement("img");
    rmv_img.src = "./payment icon/delete.svg";

    let rm_p = document.createElement("p");
    rm_p.innerText = "Remove";

    remove.append(rmv_img, rm_p);

    // appending

    inp.append(num, img_c);
    imgDiv.append(img);
    des.append(title, set, price, color, random);
    ttl_p.append(total_one, total_two, remove);

    list.append(inp, imgDiv, des, ttl_p);

    document.getElementById("main-p").append(list);
  });
}

// document.getElementById("total").innerText = total_p.price;
// document.getElementById("ttl-p").innerText = total_p.price;
