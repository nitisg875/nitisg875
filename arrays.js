// 2nd array 

let array2d=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(array2d);
console.table(array2d);


console.log(array2d);
console.table(array2d);
let res=array2d[1];
console.log("printing of res array");
console.log(res);
console.log("res od 2nd index");
console.log(res[2]);
console.log(array2d[1][2]);
console.log(array2d[1][3]);// undefined
console.log(array2d.length);// no of rows in 2d array
console.log(array2d[1].length)// no of coloumns in 2d array

//2d mein allocation kaise daale
//directory

array2d[1][1]=false;
console.table(array2d);

