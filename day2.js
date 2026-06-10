 /* 
Q1 [Status: Pending]
Predict Output
let a = 10;
function outer() {
let a = 20;
function inner() {
console.log(a);
}
inner();
}
outer(); */

// Output: 20



/* 
Q2 [Status: Pending]
let count = 1;
function test() {
console.log(count);
let count = 2;
}
test();
*/

// output : Refrence error 

/* 
Q3 Create a nested function structure of 4 levels and print variables from all parent scopes.
Expected:
1
2
3
4
*/

// Answer 3
/* 
function level1(){
    let a=1;
    function level2(){
        let b=2;
        function level3(){
            let c=3;
            function level4(){
                let d=4;
                console.log(a);
                console.log(b);
                console.log(c);
                console.log(d);        
            }
            level4()
        }
        level3();
    }
    level2();
}
level1();
 */

// Q4 Write a function that returns another function and demonstrates lexical scope.

/* 
function outer() {
    let a = 1;
    return function inner() {
        console.log(a);
    };
}
const innerFunction = outer();
innerFunction(); // Output: 1
 */


/* Q5 [Status: Pending]
Predict Output
var x = 100;
function a() {
console.log(x);
var x = 50;
}
a();
 */
// Output: undefined




/* Q6 [Status: Pending]
Create a function where a child function can access grandparent variables.
*/
/* 
function grandparent() {
    let a = 1;
    function parent() {
        let b = 2;
        function child() {
            let c = 3;
            console.log(a);
            console.log(b);
            console.log(c);
        }
        child();
    }
    parent();
}
grandparent();
 */


/* Q7 [Status: Pending]
Predict Output
let name = "Ram";
function show() {
let name = "Mohan";
return function() {
console.log(name);
}
}
show()();
*/
// Output: Mohan




/* Q8
[Status: Pending]
Create a 3-level nested function and access all variables inside the innermost function.
*/
/* 
function level1() {
    let a = 1;
    function level2() {
        let b = 2;
        function level3() {
            let c = 3;
            console.log(a);
            console.log(b);
            console.log(c);
        }
        level3();
    }

    level2();
}
level1();
 */

/* Q9 [Status: Pending]
Can a parent access a child variable? Demonstrate using code. 
*/
/*
function parent() {
    let a = 1;
    function child() {
        let b = 2;
        console.log(a); // Parent variable is accessible in child
    }
    child();
}
parent();
*/



/* Q10 [Status: Pending]
Create a private variable using lexical scope.
 */
/* 
function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    }   
}
const counter = createCounter();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3
 */ 


/* 
Q11 [Status: Pending]
Create a counter closure.
Output:
1
2
3
*/

/* 
function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    }   
}
const counter = createCounter();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3
 */ 



/* 
Create a reverse counter.
Output:
10
9
8
 */
/* 
function createReverseCounter() {
    let count = 10;
    return function() {
        console.log(count);
        count--;
    }
}
const reverseCounter = createReverseCounter();
reverseCounter(); // Output: 10
reverseCounter(); // Output: 9
reverseCounter(); // Output: 8
 */ 

/* 
Q13
Create a closure-based bank account.
Methods:
deposit()
withdraw()
checkBalance()
 */
/* 
 */



/* 
Q14
Create a closure that remembers the username forever.
 */
/* 
function createUser(name) {
    return function() {
        console.log(`Username: ${name}`);
    }
}
const user = createUser("Ram");
user(); // Output: Username: Ram
 */

/* Q15
Create a closure-based login attempt tracker.
After 3 failed attempts:
Account Locked
 */
/* 
function createLoginTracker() {
    let attempts = 0;
    return function(username, password) {
        if (attempts >= 3) {
            console.log("Account Locked");
            return;
        }
        // Simulate login logic
        if (username === "admin" && password === "password") {
            console.log("Login Successful");
        } else {
            attempts++;
            console.log("Invalid Credentials");
        }
    }
}
const login = createLoginTracker();
login("admin", "password"); // Output: Login Successful
login("user", "wrong"); // Output: Invalid Credentials
login("user", "wrong"); // Output: Invalid Credentials
login("user", "wrong"); // Output: Account Locked
 */ 


/* 
Q16
Build a closure that stores a secret password.
Only getter should be available.
*/
/* 
function createPasswordStore(secret) {
    return function() {
        return secret;
    }
}
const getPassword = createPasswordStore("mySecretPassword");
console.log(getPassword()); // Output: mySecretPassword
 */ 


/* 
Q17
Build a shopping cart using closure.
Methods:
addItem()
removeItem()
showItems() */
/* 
function createShoppingCart() {
    let items = [];
    return {
        addItem(item) {
            items.push(item);
        },
        removeItem(item) {
            items = items.filter(i => i !== item);
        },
        showItems() {
            console.log(items);
        }
    };
}
const cart = createShoppingCart();
cart.addItem("Apple");
cart.addItem("Banana");
cart.showItems(); // Output: ["Apple", "Banana"]
cart.removeItem("Apple");
cart.showItems(); // Output: ["Banana"]
 */ 

/* 
Q18
Create a closure-based voting machine.
Each user can vote only once.
*/

/* 
function createVotingMachine() {
    let votes = new Set();
    return function(user, candidate) {
        if (votes.has(user)) {
            console.log("User has already voted.");
            return;
        }
        votes.add(user);
        console.log(`Vote recorded for ${candidate}`);
    }
}
const vote = createVotingMachine();
vote("Raju", "Candidate A"); 
vote("Manoj", "Candidate B");
vote("Kirtan", "Candidate C"); 
 */ 

/* 
Q19
Build a closure that counts how many times a function is executed.
*/
/* 

function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    }
}
const counter = createCounter();
counter(); 
counter(); 
counter(); 
*/

/* Q20
Build a closure-based expense tracker.
Methods:
addExpense()
getTotal()*/
/* 
// Ans 20
function createExpenseTracker() {
    let expenses = [];
    return {
        addExpense(amount) {
            expenses.push(amount);
        }
        getTotal() {
            return expenses.reduce((total, expense) => total + expense, 0);
        }
    };
}
const tracker = createExpenseTracker();
tracker.addExpense(100);
tracker.addExpense(200);
console.log(tracker.getTotal()); // Output: 300
    */




// Section C: IIFE (21–25) 


    /* Q21
    Create an IIFE that prints:
    Welcome to JavaScript */
/* 
    (function() {
        console.log("Welcome to JavaScript");
    })();
 */


    /* Q22
    Pass arguments to an IIFE and calculate area of rectangle. */
/* 
    (function(length, width) {
        console.log(`Area of rectangle: ${length * width}`);
    })(5, 10);
 */




/* Q23
Create an arrow function IIFE. */
/* 
    ((length, width) => {
        console.log(`Area of rectangle: ${length * width}`);
    })(5, 10);
 */



/* Q24
Use IIFE to create private variables. */
/* 
    (function() {
        let privateVar = "I am private";
        console.log(privateVar);
    })();
 */



/* Q25
Create a module pattern using IIFE.
Methods:
increment()
decrement()
reset() */
/* 
    (function() {
        let count = 0;
        return {
            increment() {
                count++;
            },
            decrement() {
                count--;
            },
            reset() {
                count = 0;
            }
        };
    })();
 */

// Section D: Higher Order Functions (26–30)
/* Q26
Create a function:
calculate(a,b,operation)
Perform:
add
subtract
multiply
divide */
/* 
function calculate(a, b, operation) {
    switch (operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return a / b;
        default:
            console.log("Invalid operation");
    }
}
 */





/* Q27
Create your own custom HOF named:
repeat()
Example
repeat(5, sayHello) */
/* 
// Ans 27
function repeat(times, callback) {
    for (let i = 0; i < times; i++) {
        callback();
    }
}

function sayHello() {
    console.log("Hello");
}
repeat(5, sayHello);
 */


/*
Q28
Create a logger HOF.
Output:
[INFO] User Logged In
*/
/* 
function logger(level, message) {
    console.log(`[${level}] ${message}`);
}
logger("INFO", "User Logged In");
 */





/* Q29
Create a function execution timer using HOF.
Output:
Execution Time: XX ms */
/* 
function timer(func) {
    return function(...args) {
        const start = performance.now();
        const result = func(...args);
        const end = performance.now();
        console.log(`Execution Time: ${end - start} ms`);
        return result;
    };
}
 */



/* Q30
Create a function wrapper that counts how many times another function was called.
Section E: map() (31–33) */
/* 
// Anshwer 30
function callCounter(func) {
    let count = 0;
    return function(...args) {
        count++;
        console.log(`Function called ${count} times`);
        return func(...args);
    };
}
 
*/



/* Q31
Given
const users = [
{name:"Ram",age:25},
{name:"Mohan",age:30},
{name:"Amit",age:22}
];
Return:
[
"Ram",
"Mohan",
"Amit"
]
using map. */
/* 
const userNames = users.map(user => user.name);
console.log(userNames);
 */



/* Q32
Convert
[1,2,3,4,5]
into
[1,4,9,16,25]
using map. */
/* 
const squares = [1,2,3,4,5].map(n => n * n);
console.log(squares);
 */

/* Q33
Create an array of product names from:
[
{name:"Laptop"},
{name:"Mouse"},
{name:"Keyboard"}
]
Output:
[
"Laptop",
"Mouse",
"Keyboard"
]
*/
/* 
const products = [
    {name: "Laptop"},
    {name: "Mouse"},
    {name: "Keyboard"}
].map(product => product.name);
console.log(products);
 */

// Section F: filter() (34–36)
/* Q34
Filter all even numbers.
Input:
[1,2,3,4,5,6]
Output:
[2,4,6]
*/
/* 
const evenNumbers = [1,2,3,4,5,6].filter(n => n % 2 === 0);
console.log(evenNumbers);
 */

/* Q35
Filter users whose age is greater than 25.
*/
/* 
const usersAbove25 = users.filter(user => user.age > 25);
console.log(usersAbove25);
 */

/* Q36
Filter expensive products.
Condition:
price > 1000
Section G: reduce() (37–40)
*/
/* 
const products = [
    {
        id:1,
        name:"pen",
        price:"15000",
        location:"panipat"
    },
    {
        id:2,
        name:"pencil",
        price:"12000",
        location:"panipat"
    },
    {
        id:3,
        name:"bottle",
        price:"11000",
        location:"panipat"
    },
    {
        id:4,
        name:"laptop",
        price:"19000",
        location:"panipat"
    },
    {
        id:5,
        name:"phone",
        price:"15600",
        location:"panipat"
    }
].filter(product => parseInt(product.price) > 1000);
console.log(products);  



*/


/* Q37
Find total sum.
Input:
[10,20,30,40]
Output:
100 */
/* 
// ans 37 code 
const totalSum = [10,20,30,40].reduce((accumulator, value) => accumulator + value, 0);
console.log(totalSum);

*/



/* Q38
Find maximum value using reduce.
Input:
[5,12,3,45,2]
Output:
45 */
/* 
const maxValue = [5,12,3,45,2].reduce((accumulator, value) => Math.max(accumulator, value), 0);
console.log(maxValue);
 */

/* Q39
Count total characters.
Input:
["JavaScript","React","Node"]
Output:
20
*/
/* 
const totalCharacters = ["JavaScript","React","Node"].reduce((accumulator, value) => accumulator + value.length, 0);
console.log(totalCharacters);
 */
 

/* Q40 ⭐ Ultra Hard
Given:
const orders = [
{
id:1,
amount:5000,
status:"completed"
},
{
id:2,
amount:2000,
status:"pending"
},
{
id:3,
amount:7000,
status:"completed"
},
{
id:4,
amount:1000,
status:"completed"
}
];
Using only:
filter()
map()
reduce()
Find:
1. Completed Orders
2. Total Revenue
3. Average Revenue
4. Highest Order Amount
5. Array of Order IDs */

/* 
// Ans 40
const orders = [
    {
        id:1,
        amount:5000,
        status:"completed"
    },
    {
        id:2,
        amount:2000,
        status:"pending"
    },
    {
        id:3,
        amount:7000,
        status:"completed"
    },
    {
        id:4,   
        amount:1000,
        status:"completed"
    }
];
const completedOrders = orders.filter(order => order.status === "completed");
const totalRevenue = completedOrders.reduce((accumulator, order) => accumulator + order.amount, 0);
const averageRevenue = totalRevenue / completedOrders.length;
const highestOrderAmount = completedOrders.reduce((max, order) => Math.max(max, order.amount), 0);
const orderIDs = completedOrders.map(order => order.id);
console.log("Completed Orders:", completedOrders);
console.log("Total Revenue:", totalRevenue);
console.log("Average Revenue:", averageRevenue);
console.log("Highest Order Amount:", highestOrderAmount);
console.log("Array of Order IDs:", orderIDs);

*/