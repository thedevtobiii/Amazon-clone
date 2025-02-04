import { renderOrderSummary } from "./checkout/order-summary.js";
import { renderPaymentSummary } from "./checkout/payment-summary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";  
import { loadCart } from "../data/cart.js";  

// import '../data/cart-class.js';
// import '../data/backend-prac.js';

async function loadPage (){
  try{
    await loadProductsFetch();

    const value = await new Promise((resolve) =>{
        loadCart(()=>{
          resolve();
        });
      });
  } catch(error){
console.log('try again sehh gee');
  }


    renderOrderSummary();  
  renderPaymentSummary();   

}
loadPage();    

// Promise.all([
//  loadProductsFetch(),
//  new Promise((resolve) =>{
//   loadCart(()=>{
//     resolve();
//   });
// })

// ]).then((values)=>{
//   renderOrderSummary();  
//   renderPaymentSummary();   
// });   

// new Promise((resolve)=>{
 
//    //runs the inner function immediately
//   //  console.log('promise');  
//   loadProducts(()=>{
   
//     resolve('value1');   
//   });
// }).then((value)=>{
//   console.log('value');
//   return new Promise((resolve) =>{
//     loadCart(()=>{
//       resolve();
//     });
//   });
// }).then(()=>{
//   renderOrderSummary();  
// renderPaymentSummary();    
// });  

// // loadProducts(()=>{
// //   loadCart(()=>{
// //     renderOrderSummary();  
// // renderPaymentSummary();    
// //   });
// // });   
