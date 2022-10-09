// arrays destructuring

let fruits = ['Apple', 'Banana','Orange'];
let [a,p,o] = fruits;
// let [,,o] = fruits;

// console.log([,,o]);

console.log(o);

//Object destructuring

let user = {
    username: 'Eduardo',
    age: 27
};
let {username, age} = user;
console.log(username);

// spread operator
// ^
//destructuración con el operador de propagación
let name = 'eduardo'
let lettersName = {...name};
console.log(lettersName);
console.log(lettersName[0]);

let person = {name: 'Eduardo', age: 27};
let country = 'MX';

let data = {id: 1, ...person, country}

console.log(data);

// rest

function sum(num, ...values){
    console.log(num);
    console.log(values);
    console.log(values[0]);
}
sum(1,'dos',['t','r','e','s'],false,person);

