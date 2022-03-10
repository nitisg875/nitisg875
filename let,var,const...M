console.log(x);
var x=10;
let b=100;
console.log(b);



//block 
// block is used to compound statement 

//}
// if (10>0){
    //do something 
    // 2nd state
    //3rd statement

    //}

//}
var a=100;
{
    var a=10;
    let b=20;
    const c=30;

    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);


function outer(){
    var a=7;
    function inner(){
        console.log(a);

    }
    a=10;
    return inner;
}
var z=outer()





