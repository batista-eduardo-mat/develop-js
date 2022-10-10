//Declaración

class User{

}
// Instacia
const newUser = new  User();

class Admin {
    //metodos.
    greeting(){
        return 'Hello';
    }
};

const eduardo = new Admin();
console.log(eduardo.greeting());


//constructor

class Alumno{
    constructor(){
        console.log('Alumno nuevo');
    }
    greeting(){
        return 'Hello';
    }
}

const david = new Alumno();

// this referencia al elemento padre que lo contiene.
class Usuario{
    constructor(name){
        this.name = name;
    }
    // metodos
    speak() {
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} my name is ${this.name}`
    }
}

const vendedor = new Usuario('Luis');
console.log(vendedor.greeting());

class NewUser {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} my name is ${this.name}`
    }

    get uAge(){
        return this.age;
    }

    set uAge(n){
        this.age = n;
    }
    
}

const developer = new NewUser('Eduardo', 27);

console.log(developer.uAge);
console.log(developer.uAge = 28);