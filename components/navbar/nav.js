function nav(){
    return `<div class="nav">
    <div class="navlogo">
      <img
        src="https://www.ikea.com/in/en/static/ikea-logo.f7d9229f806b59ec64cb.svg"
        alt=""
      />
    </div>
    <div class="navpd">
      <p>Products</p>
      <p>Rooms</p>
      <p>New at IKEA</p>
      <p>All offers</p>
    </div>
    <div class="navs">
      <span class="material-icons-outlined navsearch"> search </span>
      <input
        id="search"
        type="search"
        placeholder="What are you looking for?"
      />
      <span class="material-icons-outlined navcamera"> photo_camera </span>
    </div>
    <div class="navlogin">
      <span class="material-icons-outlined"> local_shipping </span>
      <span class="material-icons-outlined person"> person_outline </span>
      <span class="material-icons-outlined"> shopping_basket</span>
    </div>
  </div>`
}

export default nav;

// <div class="person"> Heelo  </div>