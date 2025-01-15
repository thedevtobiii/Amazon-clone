class Cart {
//  class means object generator
cartItems = undefined;  //every object generated will have this property

localStorageKey = undefined;
loadFromStorage (){   
  this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));

  if(!this.cartItems){
    this.cartItems = [{
      productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
      deliveryOptionId: '1'
    },{
      productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
      deliveryOptionId: '2'
      //default data
    }
       
    ];  //default value for empty cart  
  }
  
}
//function to save cart to local storage
saveToStorage(){
  localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
}
addToCart (productId){
  let matchingItem; //NEW VARIABLE FOR MATCHING ITEMS
    this.cartItems.forEach((cartItem)=> {
      if (productId === cartItem.productId){
        matchingItem = cartItem;  

      } //LOOPS THROUGH CART, SAVES EACH PRODUCT IN CART IN THE CARTITEM PARAMETER, CHECKS IF IT IS IDENTICAL TO THE PRODUCT TO BE ADDED TO CART, SAVES IN MATCHING ITEM IF IT IS.

    });
    if (matchingItem){
      matchingItem.quantity +=1
    } else{
      this.cartItems.push({
        productId: productId,
        quantity:1,
        deliveryOptionId: '1'  
      }); 
      //IF IT IS ALREADY IN CART I.E MATCHING ITEM,INCREASE THE QUANTITY PROPERTY BY  1, ELSE PUSH THE PRODUCT(ID, QUANTITY) INTO THE CART ARRAY

    }
    this.saveToStorage();
}
  //function to delete item from cart
  removeFromCart(productId){
    const newCart =[];
    this.cartItems.forEach((cartItem)=>{
     if(cartItem.productId !== productId) {
     newCart.push(cartItem);
     }
   
    });
    this.cartItems = newCart;
    this.saveToStorage();
   }
   //update deliveryOptionId in cart
   updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem; //NEW VARIABLE FOR MATCHING ITEMS
    this.cartItems.forEach((cartItem)=> {
      if (productId === cartItem.productId){
        matchingItem = cartItem;  
  
      } //LOOPS THROUGH CART, SAVES EACH PRODUCT IN CART IN THE CARTITEM PARAMETER, CHECKS IF IT IS IDENTICAL TO THE PRODUCT TO BE ADDED TO CART, SAVES IN MATCHING ITEM IF IT IS.
  
    });
  matchingItem.deliveryOptionId = deliveryOptionId;
  this.saveToStorage();   
  }
}


const cart= new Cart();
const businessCart = new Cart();   
cart.localStorageKey = 'cart.oop';
businessCart.localStorageKey = 'cart-business';

  
cart.loadFromStorage(); 




  
businessCart.loadFromStorage();
console.log(cart);
console.log(businessCart);        





   




