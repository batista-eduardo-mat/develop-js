class NewUser {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    #speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} my name is ${this.name}`
    }

    get #uAge(){
        return this.age;
    }

    set #uAge(n){
        this.age = n;
    }
    
}

const developer = new NewUser('Eduardo', 27);

console.log(developer.uAge);    
console.log(developer.uAge = 28);