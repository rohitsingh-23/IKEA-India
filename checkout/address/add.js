function gopay() {
  var name = document.getElementById("name").value;
  var add = document.getElementById("add").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var state = document.getElementById("state").value;

  if (name.length === 0) {
    alert("Enter Your Name");
  } else if (add.length === 0) {
    alert("Enter Your Address");
  } else if (phone.length === 0) {
    alert("Enter Your Phone Number");
  } else if (email.length === 0) {
    alert("Enter Your Email ID");
  } else if (state.length === 0) {
    alert("Enter Your State");
  } else {
    window.location.href = "./pay/pay.html";
  }
}

let data = JSON.parse(localStorage.getItem("ikea_user"));
let name = data.name;
console.log(name)
document.getElementById("user").textContent = name