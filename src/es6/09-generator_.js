//Define un algoritmo iterativo personalizado
//que puede MANTENER un estado.

function* iterate(array){
    for (let value of array){
        yield value;
    }
}

const it = iterate(['David','Eduardo','Batista','Trujillo']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

console.log(it.next().value);
