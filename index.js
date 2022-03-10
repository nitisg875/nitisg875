// var let const 

var a; // int string h float h java scriptm hame ye ssb nhi likhna parta h 

// variable  initilization
a=10;
console.log(a);

a="hello";
console.log(a);

//type of-> it tells us the type of data storein a variable
console.log(typeof a);

a=true;
console.log(a);
console.log(typeof a);

a=null;
console.log(a);
console.log(typeof a);

// browser engine 

//what is js? <<Ans is << js is a synchranous and single threaded language //

// Q1> synchronous means ?< ans << line by line>>
// Q2> single thread means ?<< ans in a specific order //

// NUMBER
var num=10;
console.log(num);
var float=2.4;
console.log(float);

//boolean
var t =true;
var f = false;

//string
//'','',",.."
//single quotes ,double quotes,backtrick


var str='a';
console.log(typeof str);
str="how you do in";
//backslash n("\n");
//console.log
console.log(str);

var b=" hope you guys are"
console.log(b);


// ) redecleration is allowed 
var r= "hello"
console.log(r);

var r = 100;
console.log(l);


let l=100;
console.log(l);


let l="200"; //syntax error 
console.log(1);

l =300;
console.log(l);

//loop in js
var num=10;

for (var i=0; i<num; i++){
    if (i % 2==0){
        console.log("num is even");
    }
}

//const keyword
const a=2;
//na hi redeclare kar skte h na hi initilize
//const a=5;
a=4;// typeerror: assignment to constant variable
console.log("hey");

//2 prob;em with var keyword

for (var j=0 j< num  j++){
    if(i % 2==0) {
        console.log(num);
        console.log(i)
    }
}
console.log("value of i is" + i);

let j=20;
for(var i=0; i<num; i++){
    let j=20;
    if(i % 2==0){
        let hello=1000;
        console.log(i);
        console.log(hello);
    }
    console.log("inner"+j);
}
console.log("outer "+j);
console.log("value of i is "${i});
console.log(hello);// error dega hello is not define







