// objects reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects 

// const person = {name:"Pankaj",age:16};
const person = {
    name: "Pankaj",
    age: 16,
    hobbies: ["book reading", "playing basketball", "listening music"]
}
console.log(person);

// how to access data from objects 
console.log(person["name"]);
console.log(person["age"]);
console.log(person.hobbies);

// how to add key value pair to objects
person["person"] = "male";
console.log(person);