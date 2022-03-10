const fs = require("fs");
let input = process.argv;
 console.log(input);

 let inputArr = process.argv.slice(2);
console.log(inputArr);
let filesArr = [];
let optionsArr = [];


//===============> placed files path in filesArr <=============
for (let i = 0; i < inputArr.length; i++){
    let firstChar = inputArr[i].charAt(0);
    // console.log(firstChar);
    if (firstChar == '-') {
        optionsArr.push(inputArr[i]);
    }
    else {
        filesArr.push(inputArr[i]);
    }
}
  console.log("file to be read are " + filesArr);




  
//=============>check if all the files are present<============= //
for (let i = 0; i < filesArr.length; i++){
    let doesExist = fs.existsSync(filesArr[i]);
    if (!doesExist) {
        console.log("One or more File(s) do not exist ");
       // return;
          // break;
    }
}



// =============>content read and appending starts<=============//
let content = "";
for (let i = 0; i < filesArr.length; i++){
    let fileContent = fs.readFileSync(filesArr[i]);
    content = content + fileContent + "\n";
                     
}
console.log(content);

let contentArr = content.split("\n");
console.log(contentArr);
console.table(contentArr);




let isSPresent = optionsArr.includes("-s");
if (isSPresent) {

    for(let i=1; i<content.length; i++){
        if(contentArr[i]==""&& contentArr[i-1]==""){
            contentArr[i]=null;
        }
        else if(contentArr[i]==""&& contentArr[i-1]== null){
            contentArr[i]=null;
        }
    }
}
console.table(contentArr);

let tempArr=[];
for(let i=0; i<contentArr.length; i++){
    if(contentArr[i]!=null) {
        tempArr.push(contentArr[i]);
    }
    console.log("data after removing extra lines\n",tempArr);
}


let indexOfN = optionsArr.indexOf("-n");
let indexOfB = optionsArr.indexOf("b");

let finalOption="";

if(indexOfN < indexOfB){
    finalOption="-n";
}
else{
    finalOption="-b";
}

if(finalOption=="-n"){
    modifyContentByN();
}
else if(finalOption=="-b") {
    modifiycontentByB();
}
function modifyContentByN() {

}
function modifiycontentByB() {

}



