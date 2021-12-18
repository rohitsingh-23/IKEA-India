let data = JSON.parse(localStorage.getItem("ikea_user"));
let name = data.name;
console.log(name)
document.getElementById("user").textContent = name


function makePay() {
  var name = document.getElementById("name").value;
  var card = document.getElementById("card").value;
  var cvv = document.getElementById("cvv").value;
  var ex = document.getElementById("ex").value;

  if (name.length === 0) {
    alert("Enter Your Name");
  } else if (card.length !== 16) {
    alert("Enter a valid Card Number");
  } else if (cvv.length !== 3) {
    alert("Enter a valid CVV Number");
  } else if (ex.length === 0) {
    alert("Enter Expiry Date of Card");
  } else {
    alert(`${data.name} your order placed successfully`);
  }
}


