// this is where all the removed/improved-on codes go.


//from amazon.js, the product array :


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



//bin 2:
const tshirt = new Clothing(
  //new generates a new product object
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 799,
    keywords: [
      "tshirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  }
);
console.log(tshirt);
console.log (tshirt.getPrice); 
//from classes 
//from promises and fetch
 new Promise((resolve)=>{
    //runs the inner function immediately
   //  console.log('promise');  
   loadProductsFetch(()=>{
    
     resolve('value1');   
   });
 })   

