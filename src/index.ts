// Day 5 - Exercise 2

interface People { 
  name: string
  age: number
}

class Person implements People {
    constructor(public name: string, public age: number) {
    }
}

const alfred = new Person('Alfred', 31);

console.log(`${alfred.name} is ${alfred.age} years old.`);