export const cart = [

];           

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
}