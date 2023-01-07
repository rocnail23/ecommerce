const merchandising = [
    {
        type : "hoody",
        id: 1,
        stock: 10,
        price: "$14.00",
        img: "./assets/featured1.png"
    },
    {
        type: "shirts",
        id: 2,
        stock: 15,
        price:"$24.00",
        img: "./assets/homeshirt.png"
    },
    {
        type: "Sweatshirts",
        id:3,
        stock: 20,
        price: "$24.00",
        img: "./assets/featured3.png"
    }
]



let pageload = document.querySelector(".load")
let darkicon = document.querySelector(".change-theme")
let btn_menu = document.querySelector(".bx-grid-alt")
let nav_menu = document.querySelector(".nav-menu")
let btn_x_menu = document.querySelector(".bx-x")
let btn_cart = document.querySelector(".bx-shopping-bag")
let cart_menu = document.querySelector(".cart")
let btn_cart_close = document.querySelector("#cart-close")


function close_menu(){
    nav_menu.classList.toggle("show-menu")
}

function close_cart(){
    cart_menu.classList.toggle("show-cart")
}

window.addEventListener('load', function(){
    pageload.removeAttribute("style")
    setTimeout(() => {
        pageload.style.display = 'none';
    }, 2000);
    
})

darkicon.addEventListener("click",function(){
        darkicon.classList.toggle('bx-sun')
        
    })

btn_menu.addEventListener("click", function(){
    close_menu()
    
})

btn_x_menu.addEventListener("click", function(){
    close_menu()
})

btn_cart.addEventListener("click", function(){
    close_cart()
})

btn_cart_close.addEventListener("click", function(){
    close_cart()
})





