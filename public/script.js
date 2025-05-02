let searchForm=document.querySelector('.search-form');

document.querySelector("#search-btn").onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}

let shoppingCart=document.querySelector('.shopping-cart');

document.querySelector("#cart-btn").onclick = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.toggle('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}

let loginForm=document.querySelector('.login-form');

document.querySelector("#login-btn").onclick = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.toggle('active');
    navBar.classList.remove('active');
}

let navBar=document.querySelector('.navbar');

document.querySelector("#menu-btn").onclick = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.toggle('active');
}

window.onscroll=()=>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}


/*
<div class="user-location">
<div class="box">
   <button onclick="getlocation()" id="locate-box"><p></p></button>
   <label for="locate-box" class="fas fa-location-arrow"></label>
</div>
</div>
*/
