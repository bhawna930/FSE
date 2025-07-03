// console.log("HELLO WORLD");

// var a =200;

//  console.log(a);

//  function abc(){
//     console.log("hii");
//  }
//  var b=400;
//  console.log(b);
//  setTimeout(()=>{
//     console.log("hello")
//  },2000);
//  console.log("end");

function grandParent(){
    var a=200;
     console.log(a);
     
    

     function Parent(){
    var b=300;
     console.log(b);

     function child(){
    var c=200;
     console.log(c);
     
}
     child();
}
Parent();
}

grandParent();