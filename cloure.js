
//function outer() {
  //  var a=10;
   // function inner() {
       // consoe.log(a);
    //}
    //inner();
//}
//outer();


function outer() {
    var a=10;
    function inner() {
        consoe.log(a);
    }
     return inner();

     var z=outer();
     console.log(z);

}
outer();

