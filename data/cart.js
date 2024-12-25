export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
  cart = [{
    productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2
  },{
    productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1
    //default data
  }
  
  ];  //default value for empty cart  
}
   

//function to save cart to local storage
function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}



export function addToCart (productId){
  let matchingItem; //NEW VARIABLE FOR MATCHING ITEMS
    cart.forEach((cartItem)=> {
      if (productId === cartItem.productId){
        matchingItem = cartItem;  

      } //LOOPS THROUGH CART, SAVES EACH PRODUCT IN CART IN THE CARTITEM PARAMETER, CHECKS IF IT IS IDENTICAL TO THE PRODUCT TO BE ADDED TO CART, SAVES IN MATCHING ITEM IF IT IS.

    });
    if (matchingItem){
      matchingItem.quantity +=1
    } else{
      cart.push({
        productId: productId,
        quantity:1
      }); 
      //IF IT IS ALREADY IN CART I.E MATCHING ITEM,INCREASE THE QUANTITY PROPERTY BY  1, ELSE PUSH THE PRODUCT(ID, QUANTITY) INTO THE CART ARRAY

    }
    saveToStorage();
}

//function to delete item from cart
export function removeFromCart (productId){
 const newCart =[];
 cart.forEach((cartItem)=>{
  if(cartItem.productId !== productId) {
  newCart.push(cartItem);
  }

 });
 cart = newCart;
 saveToStorage();
}