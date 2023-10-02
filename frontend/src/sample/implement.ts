interface Animal {
    name: string;
    move: () => void;
    speak: () => void;
};

class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(): void {
        console.log(`[Dog] ${this.name} is running...`);
    }

    speak(): void {
        console.log(`[Dog] ${this.name}: Bow bow!`);
    }
}

class Cat implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(): void {
        console.log(`[Cat] ${this.name} is running...`);
    }

    speak(): void {
       console.log(`[Cat] ${this.name}: Meow meow!`); 
    }
}

let d: Dog = new Dog("James");
let c: Cat = new Cat("Billy");

d.move();
d.speak();

c.move();
c.speak();