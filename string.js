//string is a sequence of characters 

var str="hello pepcoaders";

//0,1,2,3,4
console.log(str);

console.log(str[4]);
console.log(str.length);

//string method

//slice method
//slice(start,end+1)

var slicedstr=str.slice(6,15);// 2nd  index se start hoga aur 6th index tak string karega 
console.log(slicedstr);
//console.log(str);//original sourse of information is not changed

var slicedstr=str.slice(2,-4);// start se leke pori end tak string katege
console.log(slicedstr);



// substr(star,end);

let ans=str.substr(2,6);
console.log(ans);
console.log(str);


//replacing
str="YOLO";
console.log(str);

console.log(str.toLowerCase());
str="fomo"
console.log(str.toLocaleUpperCase);
console.log(str); 


//concstenation method-> 2 combine 2 string and make them one string

let firststr="you guys";
let secondstr="are smart";

let concatenatedstr= firststr+secondstr;
console.log(concatenatedstr);

let concatstr=firststr.concat(secondstr, "and me");
console.log(concatstr);

//trim method-> remove all the whie spaces

let trimstr="     hello     how are you";
//console.log(trimStr);
//console.log(trimStr.trim() .length);

console.log(trimstr.trim());
console.log(trimstr.trim().length);





