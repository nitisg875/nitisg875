let obj={}
console.log(obj);



let person={
    name:"Nitish",
    age:28,
    phone:9999999,
    gender:"male",
    height:"170cm"
};

console.log('Hey ${person.name},thank you for signing up !');
console.log(person.gender);
console.log(person["gender"]);

let str="Hello";
console.log(str.length);
console.log(str["length"]);




let captainAmerica={
    firstName: "Steve",
    lastName: "Rogers",
    friends: ["bucky","Tony Stark",
    "Brue Banner"],
    age: 102,
    isAvenger: true,
    adress: {
        state:"Manhattan",
        city:"New York",
        country:"USA"
    },
    sayHi: function () {
       console.log('Hello my name is $
       {this.firstName}');
    }
//};

console.log(captainAmerica);
console.log(captainAmerica.friend)
console.log(captainAmerica.friends[0]);
console.log(captainAmerica.sayHi();


for(let key in captainAmerica) {
    console.log(key);
    console.log(captinAmerica[key])
}

let car={
    name:"Ferrari",
    model: 2022,
    startEngine
}