import { cart, addToCart } from "../data/cart.js";  
import { products } from "../data/products.js";   
import { formatCurrency } from "./utilities/cash.js"; 

let productsHTML ='';  
products.forEach((product) => {
  productsHTML += `
              <div class="product-container">
                    <div class="product-image-container">
                      <img class="product-image"
                        src="${product.image}">
                    </div>

                    <div class="product-name limit-text-to-2-lines">
                     ${product.name}   
                    </div>

                    <div class="product-rating-container">
                      <img class="product-rating-stars"
                        src="${product.getStarsUrl()}">
                      <div class="product-rating-count link-primary">
                        ${product.rating.count}
                      </div>      
                    </div>

                    <div class="product-price">
                       ${product.getPrice()}  
                    </div>

                    <div class="product-quantity-container">
                      <select>
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>  

                    ${product.extraInfoHTML()}    

                    <div class="product-spacer"></div>

                    <div class="added-to-cart">
                      <img src="images/icons/checkmark.png">
                      Added
                    </div>

                    <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
                      Add to Cart
                    </button>
                  </div>
  `
});
console.log(productsHTML); 
/*
NOTES: The way forEach works is that it takes each object, saves it in the parameter called product and the runs the code in the function, one object
after the other.
this generates the html for each object and therefore the entire product section, added a data attribute  */

//SECTION 3: PUTTING THE HTML ON THE WEBPAGE USING THE DOM
//using the DOM, we are going to get the class for the parent container of the product-container to input the generated HTML in it
document.querySelector('.js-products-grid').innerHTML= productsHTML;
//we are basically saying all the Html that should exist in the parent container should be the only one we allow i.e the variable productsHTML!

//SECTION 4: making the add to cart button interactive
//NOTES: we got all the add to cart button using document.queryselectorAll and the class we added, then saved it in the button parameter then addeventlistener.


function updateCartQuantity (){
 //calculating cart total quantity
 let cartQuantity = 0;
 cart.forEach((cartItem)=>{
  cartQuantity += cartItem.quantity;

 }) ;  
document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

document.querySelectorAll ('.js-add-to-cart')
.forEach((button)=>{
  button.addEventListener('click', ()=>{
    const productId = button.dataset.productId; //gets the data attribute value and saves it inside productID
    addToCart(productId);
    updateCartQuantity();
  });
});
