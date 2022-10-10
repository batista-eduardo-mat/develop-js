//devulve una matriz de una sub-matriz 

// flat

const array = [1, [2, 3, 4], [5, 6, 7, [8, 9]]];
console.table(array);
console.log(array.flat(3));
console.table(array.flat(3));

// faltmap
const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap( v => [v*2]));
console.log(array2.flatMap( v => [v, v*2, v*3]));