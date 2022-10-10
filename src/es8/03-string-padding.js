const string = 'Hello';
// El primer parametro number, total de caracteres.
// el segundo el caracter(es) parra rellenar y completar  

// console.log(string.padStart(10, '#'));
// console.log(string.padEnd(10, '#'));
let padding_start = 10;
let padding_end = 10;
// console.log(string.padStart(string.length + padding_start, '#').padEnd(string.length + padding_end + padding_start, '#'));

function padding(string, ...values){
    if (!values[0]) values[0]= 0;   
    if (!values[1]) values[1]= '';   
    if (!values[2]) values[2]= 0;   
    if (!values[3]) values[3]= '';   
    return string.padStart(string.length + parseInt(values[0]), `${values[1]}`).padEnd(string.length + parseInt(values[0])+ parseInt(values[2]),`${values[3]}`);
}

console.log(padding('Hola',5,'-',2,'__'));