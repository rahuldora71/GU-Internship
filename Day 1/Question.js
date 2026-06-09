// Que 1:Create a variable using const and store your college name. 
const collegeName = "ABC College";


// 2. Create a variable using let and update its value three times.
let studentName = "John";
studentName = "Jane";
studentName = "Bob";


// 3. Create a block using {} and show that a variable declared with let cannot be accessed outside it.
{
    let blockVariable = "I am inside the block";
}


// console.log(blockVariable); // This will throw an error

// 4. Write a program to swap two numbers using array destructuring.
let a = 5;
let b = 10;
[a, b] = [b, a];

// 5. Create an arrow function that returns the cube of a number.
const cube = (x) => x ** 3;
    
// 6. Create an arrow function to check whether a number is even or odd.
const isEven = (x) => x % 2 === 0;


// 7. Create an arrow function that finds the maximum of three numbers.
const findMax = (a, b, c) => Math.max(a, b, c); 



// 8. Given an array: const nums = [10, 20, 30, 40, 50];
// Use destructuring to get first, second and remaining values.
const nums = [10, 20, 30, 40, 50];
const [first, second, ...remaining] = nums;




// 9. Create a function that receives a user's name and age and returns: "Hello Ram, you are 25 years old." using template literals.
const greetUser = (name, age) => `Hello ${name}, you are ${age} years old.`;



// 10. Generate the following URL dynamically: "/api/users/101" using template literals.
const userId = 101;
const url = `/api/users/${userId}`;



// 11. Create an object and destructure all properties:
const student = {
name: "Ram",
age: 25,
course: "MERN"
};



// 12. Rename course to technology while destructuring.
const { name, age, course: technology } = student;



// 13. Create a function with a default parameter: createUser(name, role="Student")
const createUser = (name, role = "Student") => {
    return { name, role };
};




// 14. Create a calculator function where the operation defaults to "add".
const calculator = (a, b, operation = "add") => {
    switch(operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return a / b;
        default:
            return "Invalid operation";
    }
};





// 15. Create a function that receives unlimited numbers and returns their sum using the Rest Operator.
const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);



// 16. Create a function that receives unlimited numbers and returns the largest number.
const findLargest = (...numbers) => Math.max(...numbers);


// 17. Merge two arrays using the Spread Operator:
const frontend = ["HTML", "CSS"];
const backend = ["Node", "Express"];
const fullstack = [...frontend, ...backend];



// 18. Copy an array using the Spread Operator and add one extra value.
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray, 4];



// 19. Copy an object and update only the email property.
const user = { name: "Ram", email: "ram@example.com" };
const updatedUser = { ...user, email: "ram.updated@example.com" };





// 20. Create a product object and create a new object with an added discount field using the Spread Operator.
const product = { name: "Laptop", price: 1000 };
const productWithDiscount = { ...product, discount: 0.1 };





// 21. Use map() and an arrow function to return only names from the given array:
const users = [
{ name: "Ram", age: 25 },
{ name: "Mohan", age: 30 },
{ name: "Amit", age: 22 }
];





// 22. Use filter() to get users whose age is greater than 24.
const filteredUsers = users.filter(user => user.age > 24);



// 23. Use reduce() to calculate the total age of all users.
const totalAge = users.reduce((acc, user) => acc + user.age, 0);




// 24. Create a function createInvoice(customerName, amount) and return a formatted string using template literals.
const createInvoice = (customerName, amount) => `Invoice for ${customerName}: $${amount.toFixed(2)}`;




// 25. Mini Challenge
// Given the student object:
const student = {
name: "Ram",
marks: [80, 90, 70, 85]
};



// Using Destructuring, Arrow Functions, Rest/Spread, and Template Literals, calculate the total marks and average, then print:
// Student: Ram
// Total: 325
// Average: 81.25
const { name, marks } = student;
const totalMarks = marks.reduce((acc, mark) => acc + mark, 0);
const averageMarks = totalMarks / marks.length;
// Student: Ram
// Total: 325
// Average: 81.25
const result = `Student: ${name}\nTotal: ${totalMarks}\nAverage: ${averageMarks.toFixed(2)}`;
console.log(result);
