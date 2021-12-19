function gotoAdd() {
  var name = document.getElementById("name").value;
  var add = document.getElementById("add").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var state = document.getElementById("state").value;

  if (name.length === 0) {
    alert("Please Enter Your Name");
  } else if (add.length === 0) {
    alert("Please Enter Your Address");
  } else if (phone.length !== 10) {
    alert("Please Enter valid Phone Number");
  } else if (email.length === 0) {
    alert("Please Enter Your Email Id");
  } else if (state.length === 0) {
    alert("Please Enter Your State");
  } else {
    window.location.href = "./pay/pay.html";
  }
}
