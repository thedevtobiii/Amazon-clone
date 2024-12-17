// SECTION 1: SAVING THE DATA FOR EACH PRODUCT
const products = [
  {
    image:'images/products/athletic-cotton-socks-6-pairs.jpg',
    name:'Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating:{
      stars: 4.5,
      count: 87
    },
    priceCents: 1090
  },   //product 1 done!
  {
    image:'images/products/intermediate-composite-basketball.jpg',
    name:'Intermediate Size Basketball',
    rating:{
      stars:4,
      count:127
    },
    priceCents: 2095 
  },  //product 2 done!
  {
    image:'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name: ' Adults Plain Cotton T-Shirt - 2 Pack',
    rating:{
      stars:4.5,
      count:56
    },
    priceCents: 799
  }  //product 3 done!
]
/*
NOTES: Arrays represent a list, each product is represented
by an object containing product values and properties like name 
and images
PS: Objects can be saved in objects
this is termed a data structure
*/

//SECTION 2: LOOPING THROUGH THE ABOVE ARRAY TO GENERATE HTML
//NOTES: Accumulator pattern: looping through an array and each time we are adding to the result i.e accumulating the result . the result will be accumulated in the productsHTML variable
let productsHTML ='';  
products.forEach((product) => {
  productsHTML += `
              <div class="product-container">
                    <div class="product-image-container">
                      <img class="product-image"
                        src="${product.image}">
                    </div>

                    <div class="product-name limit-text-to-2-lines">
                     p${product.name}
                    </div>

                    <div class="product-rating-container">
                      <img class="product-rating-stars"
                        src="images/ratings/rating-${product.rating.stars *10}.png">
                      <div class="product-rating-count link-primary">
                        ${product.rating.count}
                      </div>      
                    </div>

                    <div class="product-price">
                      $${(product.priceCents/100).toFixed(2)}     
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

                    <div class="product-spacer"></div>

                    <div class="added-to-cart">
                      <img src="images/icons/checkmark.png">
                      Added
                    </div>

                    <button class="add-to-cart-button button-primary">
                      Add to Cart
                    </button>
                  </div>
  `
});
console.log(productsHTML); 
/*
NOTES: The way forEach works is that it takes each object, saves it in the parameter called product and the runs the code in the function, one object
after the other.
this generates the html for each object and therefore the entire product section  */

//SECTION 3: PUTTING THE HTML ON THE WEBPAGE USING THE DOM
//using the DOM, we are going to get the class for the parent container of the product-container to input the generated HTML in it
document.querySelector('.js-products-grid').innerHTML= productsHTML;
//we are basically saying all the Html that shoul exist in the parent container should be the only one we allow i.e the variable productsHTML!