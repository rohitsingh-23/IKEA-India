function payment() {
  var name = document.getElementById("name").value;
  var card = document.getElementById("card").value;
  var cvv = document.getElementById("cvv").value;
  var ex = document.getElementById("expiry").value;

  if (name.length === 0) {
    alert("Please Enter Your Name");
  } else if (card.length !== 16) {
    alert("Please Enter a valid Card Number");
  } else if (cvv.length !== 3) {
    alert("Please Enter a valid CVV Number");
  } else if (ex.length === 0) {
    alert("Please Enter Expiry Date of Card");
  } else {
    alert("Payment Success");
  }
}
