let merchandising = [
    {
        type : "Hoody",
        id: 1,
        stock: 50,
        price: 14.00,
        img: "./assets/featured1.png"
    },
    {
        type: "Shirts",
        id: 2,
        stock: 40,
        price:24.00,
        img: "./assets/homeshirt.png"
    },
    {
        type: "Sweatshirts",
        id:3,
        stock: 50,
        price: 24.00,
        img: "./assets/featured3.png"
    }
]



let objCart = {}
let cartcontainer = document.querySelector(".cart-container")
let pageload = document.querySelector(".load")
let darkicon = document.querySelector(".change-theme")
let btn_menu = document.querySelector(".bx-grid-alt")
let nav_menu = document.querySelector(".nav-menu")
let btn_x_menu = document.querySelector(".bx-x")
let btn_cart = document.querySelector(".bx-shopping-bag")
let cart_menu = document.querySelector(".cart")
let btn_cart_close = document.querySelector("#cart-close")
let productsHome = document.querySelector(".products-content")
let cartPrice = document.querySelector(".cart-prices")
let cartCheck = document.querySelector(".cart-checkout")
let cartCartcount = document.querySelector(".count")
function printProducts (){
    let html = ``
    merchandising.forEach(function({type,price,stock,img,id}){
        html += `<article class="products-card ${type.toLocaleLowerCase()}">
        <div class="products-shape">
          <img src="${img}" alt="${type}" class="products-img">
        </div>
        <div class="products-data">
          <h2 class="products-price">
            $${price}
            <span class="products-cuantity">
              Stock: ${stock}
            </span>
          </h2>
          <h3 class="products-name">
            ${type}
          </h3>
          <button class="button products-button" id="${id}">
            <i class="bx bx-plus"></i>
          </button>
        </div>
      </article>`
    
      productsHome.innerHTML = html
    } 
    )}

    
function printcartproducts(){
    html =``
    const arrayCart = Object.values(objCart)
    arrayCart.forEach(({type,price,stock,img,id,amount}) => {
        
        html += `<article class="cart-card">
        <div class="cart-box">
          <img src="${img}" alt="${type.toLocaleLowerCase}" class="cart-img">
        </div>
        <div class="cart-details">
          <h3 class="cart-title">${type}</h3>
          <span class="cart-stock">
            Stock: ${stock} |
            <span class="cart-price">
              ${price}
            </span>
          </span>
          <span class="cart-subtotal">subtotal:  </span>
          <div class="cart-amount">
            <div class="cart-amount-content" >
              <span class="cart-amount-box minus" data-id="${id}">
                <i class="bx bx-minus"></i>
              </span>
              <span class="cart-amount-number">${amount}</span>
              <span class="cart-amount-box plus" data-id="${id}">
                <i class="bx bx-plus"></i>
              </span>
            </div>
            <i class="bx bx-trash-alt cart-amount-trash" data-id="${id}"></i>
          </div>
        </div>
      </article>`
    })
    
    cartcontainer.innerHTML = html
}    

function close_menu(){
    nav_menu.classList.toggle("show-menu")
}

function close_cart(){
    cart_menu.classList.toggle("show-cart")
}

function printproductPrice(){
    const arrayobj = Object.values(objCart)
    if(!arrayobj.length){
        cartcontainer.innerHTML = `<div class="cart-empty">
        <img src="./assets/empty-cart.png" alt="">
        <h2>Your cart is empty</h2>
        <p> You can add items to your cart by clicking ond <i class="bx bx-plus"></i>
        </p>
        </div>`

        cartPrice.innerHTML =`<span class="cart-prices-item">
        <span id="items-count">
          0 items
        </span>
      </span>
      <span class="cart-prices-total" id="cart-total">$0.00</span>`
    } 
    let item = 0
    let sum = 0.00;
    arrayobj.forEach(({amount, price}) =>{
        
        sum += amount * price;
       item += amount
        cartPrice.innerHTML = `<span class="cart-prices-item">
        <span id="items-count">
          ${item} items
        </span>
      </span>
      <span class="cart-prices-total" id="cart-total">$${sum}</span>`
        cartCartcount.innerHTML = `${item}`
    })
        
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

productsHome.addEventListener("click",function(e){
    if(e.target.classList.contains("bx-plus")){
        const id = e.target.parentElement.id;
        let findProduct = merchandising.find(function(merch){
            return merch.id == id
        })
       
    if(objCart[id]){
        objCart[id].amount++
    }else{
        objCart[id] = {
            ...findProduct,
            amount: 1,
        }
    }
       
    
            
     
    }
    printproductPrice()
    printcartproducts() 
}
)
    
cartcontainer.addEventListener("click",function(e){
    if (e.target.classList.contains("bx-minus")) {
    const id = e.target.parentElement.getAttribute("data-id")

    if(objCart[id].amount === 1){
        const res = confirm("seguro quieres eliminar")
       if(res) delete objCart[id]
    } else{
        objCart[id].amount--
    }
    
    }
    if (e.target.classList.contains("bx-plus")) {
       const id = e.target.parentElement.getAttribute("data-id")
       let findProduct = merchandising.find(function(merch){
        return merch.id == id
    })
      if(findProduct.stock === objCart[id].amount){
        alert("no tengo mas en bodega")
      }else{
        objCart[id].amount++
      }   
    }
    if (e.target.classList.contains("bx-trash-alt")) {
       const id = e.target.getAttribute("data-id")
       const res = confirm("seguro quieres eliminar")
       if(res) delete objCart[id]
    }
    printcartproducts()
    printproductPrice()
})

cartCheck.addEventListener("click", function (e) {
    if (e.target.classList.contains("bx-check-shield")) {
        const res = confirm("Seguro quieres hacer la compra");

        if (!res) return;

        let newArray = [];
        console.log(newArray)
        merchandising.forEach(function (food) {
            if (food.id === objCart[food.id]?.id) {
                newArray.push({
                    ...food,
                    stock: food.stock - objCart[food.id].amount,
                });
            } else {
                newArray.push(food);
            }
        });

        merchandising = newArray;
        objCart = {};

        

        printProducts()
        printproductPrice()
        printcartproducts()
    }
});
 printproductPrice()
 printProducts()
