// const name = "Max";
// const age = 29;
// const hasHobbies = true;

// const summerUser = (userName, userAge, userHasHobby) => {

//     return (
//         'Name is ' + 
//         userName + 
//         ', age is ' + 
//         userAge + 
//         ' and the user has hobbies: ' + 
//         userHasHobby
//     );  
// }
// const add = a => a + 2;

// console.log(summerizeUser(name, age, hasHobbies));

// const person = {
//     name: 'Daniel',
//     age: 31,
//     greet() {
//         console.log("Hi, I'm " + this.name);
//     }
// };

// Can copy objects with the spread operator '...' which gives you each element within an array or object.
// const copiedPerson = {...person}; // Can add additional keys before or after the spreading '...'of 'person'.
// console.log();

// Example array of hobbies.
// const hobbies = ['Sports', 'Cooking', 'Coding'];

// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);

// Creates an array WITHIN an array.
// const copiedArray = [hobbies];
// console.log(copiedArray);

// Creates a new copy of the hobbies array. In a NEW array.
// const copiedArray = [...hobbies]; // Can add additional items in front or behind of '...hobbies' (aka, each element within hobbies)
// console.log(copiedArray);

// let result = [];

// Reversing a name.Loop through person's name.
// for(let letter of person.name) {
//     // 'unshift(value)' enters it's argument into the front of the array 'result'.
//     result.unshift(letter);
// }

// Display the name in the console.
// console.log(result);


// REST OPERATOR
// const toArray = (...args) => {
//     return args;
// };

// console.log(toArray(1, 2, 3, 4));

// The word you use is determined by where you use it. Spread Operator: 'Is when you are taking items OUT of an array or object' where as the Rest Operator 'Is when you are MERGING data or objects together'.

// DESTRUCTURING

// Objects:

// const printName = ({ name }) => {
//     console.log(name);
// }

// printName(person);

// You now have two new variables: 'name' and 'age' via Object destructuring used on person.
// const { name, age } = person;
// console.log(name, age);

// Arrays:

// const [hobby1, hobby2] = hobbies;

// You are now logging two new variables: 'hobby1' and 'hobby2' via Array destructuring used on hobbies.
// console.log(hobby1, hobby2); // Just grabbed the first two elements.


// ---------------------- Asynchronous Code ----------------------------------


// This counts as asynchronous code.

const fetchData = () => { // callBack is the 'return value'
    // Example of Promises. WITHOUT Express.
    const promise = new Promise((resolve, reject) => { // Two functions, the first 'resolve' is handling success responses and the second 'reject' is handling failure cases.
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });

    return promise;
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
    .then(text => {
        console.log(text);
        return fetchData();
    })
    .then(text2 => {
        console.log(text2)
    });
}, 2000); // Milliseconds 1000 = 1 second;


// This is synchronous code because your code: your computer will execute it as fast as it can.
console.log('Hello!');
console.log('Hi!');

// Your asynchronous code will print last because your computer will not wait for the setTimeout().