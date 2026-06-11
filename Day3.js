// Q1. Student Object Banao
const student = {
    name: "Ram",
    age: 20,
    city: "Delhi"
};


// Q2. Object Ka Name Print Karo
console.log(student.name);
// Output
// Ram



// Q3. greet() Method Add Karo
const student = {
    name: "Ram",
    age: 20,
    city: "Delhi",

    greet() {
        console.log("Hello I am " + this.name);
    }
};

student.greet();
// Output
// Hello I am Ram


// Q4. isAdult() Method
const student = {
    name: "Ram",
    age: 20,

    isAdult() {
        return this.age >= 18;
    }
};


console.log(student.isAdult());
// Output
// true


// Q5. Object Ki Sabhi Keys Print Karo
console.log(Object.keys(student));
// Output
// ["name", "age", "city"]



// Q6. Object Ki Sabhi Values Print Karo
console.log(Object.values(student));
// Output
// ["Ram", 20, "Delhi"]



// Q7. Email Property Hai Ya Nahi
console.log("email" in student);
// Output
// false


// Q8. Dynamically Property Add Karo
student.course = "MERN";

console.log(student);
// Output
// {
//   name: "Ram",
//   age: 20,
//   city: "Delhi",
//   course: "MERN"
// }


// Q9. Age Property Delete Karo
delete student.age;

console.log(student);
// Output
// {
//   name: "Ram",
//   city: "Delhi"
// }



// Q10. Object Clone Banao
// Method 1 (Spread Operator)
const clone = { ...student };

console.log(clone);
// Output
// {
//   name: "Ram",
//   age: 20,
//   city: "Delhi",
//   course: "MERN"
// }


// Method 2

const clone = Object.assign({}, student);



// Section B: this Keyword (11–15)




// Q11. this.name Print Karo
const user = {
    name: "Ram",

    showName() {
        console.log(this.name);
    }
};

user.showName();
// Output
// Ram




// Q12. Uppercase Print Karo
const user = {
    name: "Ram",

    show() {
        console.log(this.name.toUpperCase());
    }
};

user.show();
// Output
// RAM



// Q13. deposit() aur withdraw()
const account = {
    balance: 1000,

    deposit(amount) {
        this.balance += amount;
    },

    withdraw(amount) {
        this.balance -= amount;
    }
};

account.deposit(500);
account.withdraw(200);

console.log(account.balance);
// Output
// 1300



// Q14. Predict Output
const user = {
    name: "Ram",

    show() {
        console.log(this.name);
    }
};

user.show();
// Output
// Ram



// Q15. Predict Output
const user = {
    name: "Ram",

    show: () => {
        console.log(this.name);
    }
};

user.show();
// Output
// undefined


// Section C: Constructor Functions (16–20)


// Q16. Student Constructor Function
function Student(name, age) {
    this.name = name;
    this.age = age;
}


// Q17. 3 Student Objects
const s1 = new Student("Ram", 20);
const s2 = new Student("Shyam", 21);
const s3 = new Student("Mohan", 22);

console.log(s1);
console.log(s2);
console.log(s3);



// Q18. Constructor Me greet()
function Student(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function () {
        console.log("Hello I am " + this.name);
    };
}

const s1 = new Student("Ram", 20);

s1.greet();
// Output
// Hello I am Ram




// Q19. Predict Output
function User(name) {
    this.name = name;
}

const u1 = new User("Ram");

console.log(u1.name);
// Output
// Ram




// Q20. Car Constructor
function Car(brand, price) {
    this.brand = brand;
    this.price = price;
}

const c1 = new Car("BMW", 5000000);

console.log(c1);
// Output
// { brand: "BMW", price: 5000000 }


// Section D: Prototype (21–28)




// Q21. Prototype Me greet()
function Student(name) {
    this.name = name;
}

Student.prototype.greet = function () {
    console.log("Hello I am " + this.name);
};

const s1 = new Student("Ram");

s1.greet();
// Output
// Hello I am Ram




// Q22. Check
console.log(
    s1.__proto__ === Student.prototype
);
// Output
// true




// Q23. Prototype Me isAdult()
function Student(name, age) {
    this.name = name;
    this.age = age;
}

Student.prototype.isAdult = function () {
    return this.age >= 18;
};

const s1 = new Student("Ram", 20);

console.log(s1.isAdult());
// Output
// true



// Q24. Predict Output
function User() {}

User.prototype.sayHi = function () {
    console.log("Hi");
};

const u1 = new User();

u1.sayHi();
// Output
// Hi




// Q25. Prototype Me Course Property
function User() {}

User.prototype.course = "MERN";

const u1 = new User();

console.log(u1.course);
// Output
// MERN



// Q26. Predict Output
u1.hasOwnProperty("course");
// Output
// false




// Q27. Predict Output
"course" in u1
// Output
// true




// Q28. Prototype Chain Draw Karo
const arr = [];
// Prototype Chain
// arr
//  ↓
// Array.prototype
//  ↓
// Object.prototype
//  ↓
// null




// Section E: Object.create() (29–32)



// Q29. Animal Object
const animal = {
    eat() {
        console.log("Eating");
    }
};




// Q30. Dog Object Create
const dog = Object.create(animal);

console.log(dog);
// Output
// {}




// Q31. bark() Method Add Karo
const dog = Object.create(animal);

dog.bark = function () {
    console.log("Barking");
};

dog.bark();
// Output
// Barking




// Q32. Predict Output
const animal = {
    eat() {
        console.log("Eating");
    }
};

const dog = Object.create(animal);

dog.eat();
// Output
// Eating




// Section F: Classes (33–36)



// Q33. Student Class

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}



// Q34. greet() Method

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello I am " + this.name);
    }
}

const s1 = new Student("Ram", 20);

s1.greet();
// Output

// Hello I am Ram




// Q35. isAdult() Method
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    isAdult() {
        return this.age >= 18;
    }
}

const s1 = new Student("Ram", 20);

console.log(s1.isAdult());
// Output
// true




// Q36. 3 Objects Create Karo
const s1 = new Student("Ram", 20);
const s2 = new Student("Shyam", 21);
const s3 = new Student("Mohan", 22);


// Section G: Inheritance (37–40)




// Q37. Animal Class
class Animal {
    eat() {
        console.log("Eating...");
    }
}




// Q38. Dog Class Inherit Kare
class Dog extends Animal {}





// Q39. bark() Method Add Karo

class Dog extends Animal {
    bark() {
        console.log("Barking...");
    }
}




// Q40. Predict Output

class Animal {
    eat() {
        console.log("Eating...");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Barking...");
    }
}

const d = new Dog();

d.eat();
d.bark();
// Output
// Eating...
// Barking...