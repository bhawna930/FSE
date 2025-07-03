// // // console.log("HELLO WORLD");

// // // var a =200;

// // //  console.log(a);

// // //  function abc(){
// // //     console.log("hii");
// // //  }
// // //  var b=400;
// // //  console.log(b);
// // //  setTimeout(()=>{
// // //     console.log("hello")
// // //  },2000);
// // //  console.log("end");

// // function grandParent(){
// //     var a=200;
// //      console.log(a);
     
    

// //      function Parent(){
// //     var b=300;
// //      console.log(b);

// //      function child(){
// //     var c=200;
// //      console.log(c);
     
// // }
// //      child();
// // }
// // Parent();
// // }

// // grandParent();


// function walk(cb){
//      console.log("I AM WALKING");
//      setTimeout(cb, 3000);
// }

// function Menu(cb){
//      console.log("I AM CHECKING MENU");
//      setTimeout(cb, 2000);
// }

// function order(cb){
//      console.log("I AM ORDERING FOOD");
//      setTimeout(cb, 5000);
// }

// function lunch(cb){
//      console.log("I AM HAVING LUNCH");
// setTimeout(cb, 6000);
// }

// walk(()=>{
//       console.log("walking Done");
//      Menu(()=>{
//           console.log("menu Done");
//           order(()=>{

//                 console.log("order Done");
//                lunch(()=>{
//                     console.log("lunch Done");
//                })
               
//           })
          
//      })
    
// })

var cart=["Shoes", "watches", "Jeans"];

function createOrder(cart){
 console.log("Order created for: " + cart.join(", "));
    setTimeout(() => {
        callback("123");
    }, 1000);
}

function placeOrder(price, noOfItem){


}

function orderPayment(order, price, noOfItem){

}

function orderStatus(){

}

createOrder((cart)=>{
     placeOrder(()=>{
          orderPayment(()=>{
               orderPayment();
          })
     })
})



























var cart = ["Shoes", "Watches", "Jeans"];

function createOrder(cart, callback) {
    console.log("Order created for: " + cart.join(", "));
    setTimeout(() => {
        callback("123");
    }, 1000);
}

function placeOrder(orderId, callback) {
    console.log("ID: " + orderId);
    setTimeout(() => {
        callback(2000, cart.length);
    }, 1000);
}

function orderPayment(price, noOfItem, callback) {
    console.log(`Payment : ${price} (${noOfItem} items)`);
    setTimeout(() => {
        callback("PAID");
    }, 1000);
}

function orderStatus(status) {
    console.log("Status:", status);
}


createOrder(cart, (orderId) => {
    placeOrder(orderId, (price, noOfItem) => {
        orderPayment(price, noOfItem, (paymentStatus) => {
            orderStatus(paymentStatus);
        });
    });
});
