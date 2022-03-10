// 3 types of function 

// normal function


//function defination
//function function_name(param1,param2){



//function invoke
function add(a,b){
    console.log(a+b);

}

add(2,6);

//function are treated as first class citizen in javascript
//function can be returned
//function can be passed as parameters/argunment

function calculator(str,a,b){
    if (str=="add"){
        return function add() {
            return a+b;
        }

       // else if (str =="sub"){

      //  }
    //}
}

let sayhi=function (){
    console.log("helo guys is an function expression")
}

sayhi();


}
// 3 IIFE 

function add(a,b) {
    return a+b
}
add(2,3);

let additionIIFE= (function (a,b)  {
    console.log(a +b);
})(20,30);

//console,log("" +)
