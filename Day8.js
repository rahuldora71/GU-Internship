/*
// Q1
// Create an async function that returns: Hello World

async function getMessage() {
    return "Hello World";
}

getMessage().then(console.log);


// Q2
// Create an async function that returns a user object.

async function getUser() {
    return {
        id: 1,
        name: "Rahul",
        email: "rahul@gmail.com"
    };
}

getUser().then(console.log);


// Q3
// Create an async function that returns an array of products.

async function getProducts() {
    return ["Laptop", "Mobile", "Tablet"];
}

getProducts().then(console.log);


// Q4
// Create an async function that returns current date.

async function getCurrentDate() {
    return new Date();
}

getCurrentDate().then(console.log);


// Q5
// Create an async function that returns random number.

async function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

getRandomNumber().then(console.log);


// Q6
// Create an async function that returns student details.

async function getStudent() {
    return {
        rollNo: 101,
        name: "Rahul",
        course: "B.Sc Agriculture"
    };
}

getStudent().then(console.log);


// Q7
// Create an async function that returns company details.

async function getCompany() {
    return {
        name: "Google",
        location: "California",
        employees: 100000
    };
}

getCompany().then(console.log);


// Q8
// Create an async function that returns cart items.

async function getCartItems() {
    return [
        { id: 1, product: "Laptop", qty: 1 },
        { id: 2, product: "Mouse", qty: 2 }
    ];
}

getCartItems().then(console.log);


// Q9
// Create an async function that returns total order amount.

async function getTotalAmount() {
    return 25000;
}

getTotalAmount().then(console.log);


// Q10
// Create an async function and verify it always returns Promise.

async function demo() {
    return "Async Result";
}

console.log(demo() instanceof Promise);



// Q11
// Create getUser() and use await to print user.

async function getUser1() {
    return {
        id: 1,
        name: "Rahul"
    };
}

async function printUser() {
    const user = await getUser1();
    console.log(user);
}

printUser();


// Q12
// Create getProduct() and use await.

async function getProduct() {
    return {
        id: 1,
        name: "Laptop"
    };
}

async function printProduct() {
    const product = await getProduct();
    console.log(product);
}

printProduct();


// Q13
// Create getOrders() and use await.

async function getOrders() {
    return [
        { id: 1, amount: 1000 },
        { id: 2, amount: 2000 }
    ];
}

async function printOrders() {
    const orders = await getOrders();
    console.log(orders);
}

printOrders();


// Q14
// Create getPayment() and use await.

async function getPayment() {
    return {
        paymentId: "PAY123",
        status: "Success"
    };
}

async function printPayment() {
    const payment = await getPayment();
    console.log(payment);
}

printPayment();


// Q15
// Create delay function wait(2000) using Promise.

function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

wait(2000).then(() => {
    console.log("2 Seconds Completed");
});


// Q16
// Print Start (wait 2 sec) End

async function startEnd() {
    console.log("Start");

    await wait(2000);

    console.log("End");
}

startEnd();


// Q17
// Print 1 (wait) 2 (wait) 3

async function printNumbers() {
    console.log(1);

    await wait(1000);

    console.log(2);

    await wait(1000);

    console.log(3);
}

printNumbers();


// Q18
// Create async greeting system.

async function greetUser(name) {
    return `Hello ${name}`;
}

async function greetingSystem() {
    const message = await greetUser("Rahul");
    console.log(message);
}

greetingSystem();


// Q19
// Create async OTP verification.

async function verifyOTP(otp) {
    return otp === "1234";
}

async function checkOTP() {
    const result = await verifyOTP("1234");

    if (result) {
        console.log("OTP Verified");
    } else {
        console.log("Invalid OTP");
    }
}

checkOTP();


// Q20
// Create async login simulation.

async function login(username, password) {
    if (username === "admin" && password === "1234") {
        return "Login Successful";
    }

    return "Login Failed";
}

async function loginUser() {
    const result = await login("admin", "1234");
    console.log(result);
}

loginUser();
// Q21
// Create async function that throws error.
// Handle using try catch.

async function throwError() {
    throw new Error("Something went wrong");
}

async function runQ21() {
    try {
        await throwError();
    } catch (error) {
        console.log(error.message);
    }
}

runQ21();


// Q22
// Create async login validation.
// Invalid login should throw error.

async function login(username, password) {
    if (username !== "admin" || password !== "1234") {
        throw new Error("Invalid Login");
    }

    return "Login Successful";
}

async function runQ22() {
    try {
        const result = await login("admin", "1111");
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

runQ22();


// Q23
// Create async bank withdrawal.
// Insufficient balance should throw error.

async function withdraw(balance, amount) {
    if (amount > balance) {
        throw new Error("Insufficient Balance");
    }

    return balance - amount;
}

async function runQ23() {
    try {
        const remaining = await withdraw(5000, 7000);
        console.log(remaining);
    } catch (error) {
        console.log(error.message);
    }
}

runQ23();


// Q24
// Create async payment gateway simulation.

async function processPayment(amount) {
    if (amount <= 0) {
        throw new Error("Invalid Amount");
    }

    return `Payment of ₹${amount} Successful`;
}

async function runQ24() {
    try {
        const result = await processPayment(2500);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

runQ24();


// Q25
// Create async registration validator.

async function registerUser(name, email) {
    if (!name || !email) {
        throw new Error("All Fields Required");
    }

    return "Registration Successful";
}

async function runQ25() {
    try {
        const result = await registerUser("Rahul", "rahul@gmail.com");
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

runQ25();


// Q26
// Create async email validator.

async function validateEmail(email) {
    if (!email.includes("@")) {
        throw new Error("Invalid Email");
    }

    return "Email Valid";
}

async function runQ26() {
    try {
        const result = await validateEmail("rahul@gmail.com");
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

runQ26();


// Q27
// Create async password validator.

async function validatePassword(password) {
    if (password.length < 6) {
        throw new Error("Password Too Short");
    }

    return "Password Valid";
}

async function runQ27() {
    try {
        const result = await validatePassword("secret123");
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

runQ27();


// Q28
// Create async ATM simulation.

async function atmWithdraw(balance, amount) {
    if (amount > balance) {
        throw new Error("Transaction Failed");
    }

    return `Withdrawn ₹${amount}`;
}

async function runQ28() {
    try {
        const result = await atmWithdraw(10000, 3000);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

runQ28();


// Q29
// Create async product purchase flow.

async function purchaseProduct(stock) {
    if (stock <= 0) {
        throw new Error("Product Out Of Stock");
    }

    return "Purchase Successful";
}

async function runQ29() {
    try {
        const result = await purchaseProduct(5);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

runQ29();


// Q30
// Create async order cancellation flow.

async function cancelOrder(orderId) {
    if (!orderId) {
        throw new Error("Order Not Found");
    }

    return `Order ${orderId} Cancelled`;
}

async function runQ30() {
    try {
        const result = await cancelOrder(101);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

runQ30();


// Q31
// Login -> Get User -> Get Orders -> Payment

async function loginUser() {
    return "Login Success";
}

async function getUser() {
    return { id: 1, name: "Rahul" };
}

async function getOrders() {
    return ["Laptop", "Mouse"];
}

async function makePayment() {
    return "Payment Successful";
}

async function runQ31() {
    const login = await loginUser();
    console.log(login);

    const user = await getUser();
    console.log(user);

    const orders = await getOrders();
    console.log(orders);

    const payment = await makePayment();
    console.log(payment);
}

runQ31();


// Q32
// Create movie booking flow.

async function selectMovie() {
    return "Movie Selected";
}

async function selectSeats() {
    return "Seats Selected";
}

async function payMovieTicket() {
    return "Ticket Booked";
}

async function runQ32() {
    console.log(await selectMovie());
    console.log(await selectSeats());
    console.log(await payMovieTicket());
}

runQ32();


// Q33
// Create food delivery flow.

async function selectFood() {
    return "Food Selected";
}

async function placeOrder() {
    return "Order Placed";
}

async function deliverFood() {
    return "Food Delivered";
}

async function runQ33() {
    console.log(await selectFood());
    console.log(await placeOrder());
    console.log(await deliverFood());
}

runQ33();


// Q34
// Create train ticket booking flow.

async function searchTrain() {
    return "Train Found";
}

async function reserveSeat() {
    return "Seat Reserved";
}

async function confirmTicket() {
    return "Ticket Confirmed";
}

async function runQ34() {
    console.log(await searchTrain());
    console.log(await reserveSeat());
    console.log(await confirmTicket());
}

runQ34();


// Q35
// Create college admission flow.

async function submitApplication() {
    return "Application Submitted";
}

async function verifyDocuments() {
    return "Documents Verified";
}

async function payFees() {
    return "Fees Paid";
}

async function admissionConfirmed() {
    return "Admission Confirmed";
}

async function runQ35() {
    console.log(await submitApplication());
    console.log(await verifyDocuments());
    console.log(await payFees());
    console.log(await admissionConfirmed());
}

runQ35();


// Q36
// Fetch Users, Products, Orders together using Promise.all

async function getUsers() {
    return ["Rahul", "Amit"];
}

async function getProducts() {
    return ["Laptop", "Mobile"];
}

async function getOrders() {
    return ["Order1", "Order2"];
}

async function runQ36() {
    const [users, products, orders] = await Promise.all([
        getUsers(),
        getProducts(),
        getOrders()
    ]);

    console.log(users);
    console.log(products);
    console.log(orders);
}

runQ36();


// Q37
// Create 5 APIs with delays. Execute parallel.

function api1() {
    return new Promise(resolve =>
        setTimeout(() => resolve("API 1"), 1000)
    );
}

function api2() {
    return new Promise(resolve =>
        setTimeout(() => resolve("API 2"), 2000)
    );
}

function api3() {
    return new Promise(resolve =>
        setTimeout(() => resolve("API 3"), 3000)
    );
}

function api4() {
    return new Promise(resolve =>
        setTimeout(() => resolve("API 4"), 1500)
    );
}

function api5() {
    return new Promise(resolve =>
        setTimeout(() => resolve("API 5"), 2500)
    );
}

async function runQ37() {
    const result = await Promise.all([
        api1(),
        api2(),
        api3(),
        api4(),
        api5()
    ]);

    console.log(result);
}

runQ37();


// Q38
// Dashboard Loader

async function loadUser() {
    return "User Loaded";
}

async function loadOrders() {
    return "Orders Loaded";
}

async function loadProducts() {
    return "Products Loaded";
}

async function loadNotifications() {
    return "Notifications Loaded";
}

async function runQ38() {
    const data = await Promise.all([
        loadUser(),
        loadOrders(),
        loadProducts(),
        loadNotifications()
    ]);

    console.log(data);
}

runQ38();


// Q39
// Image Gallery Loader using Promise.all

function loadImage(imageName) {
    return Promise.resolve(`${imageName} Loaded`);
}

async function runQ39() {
    const images = await Promise.all([
        loadImage("img1.jpg"),
        loadImage("img2.jpg"),
        loadImage("img3.jpg")
    ]);

    console.log(images);
}

runQ39();


// Q40
// Multiple File Downloader using Promise.all

function downloadFile(file) {
    return Promise.resolve(`${file} Downloaded`);
}

async function runQ40() {
    const files = await Promise.all([
        downloadFile("file1.pdf"),
        downloadFile("file2.pdf"),
        downloadFile("file3.pdf")
    ]);

    console.log(files);
}

runQ40();


// Q41
// 3 APIs Success, 2 APIs Fail

const apiSuccess1 = Promise.resolve("Success 1");
const apiSuccess2 = Promise.resolve("Success 2");
const apiSuccess3 = Promise.resolve("Success 3");

const apiFail1 = Promise.reject("Fail 1");
const apiFail2 = Promise.reject("Fail 2");

async function runQ41() {
    const result = await Promise.allSettled([
        apiSuccess1,
        apiSuccess2,
        apiSuccess3,
        apiFail1,
        apiFail2
    ]);

    console.log(result);
}

runQ41();


// Q42
// Admin Dashboard using allSettled

async function runQ42() {
    const result = await Promise.allSettled([
        Promise.resolve("Users"),
        Promise.resolve("Products"),
        Promise.reject("Orders Failed"),
        Promise.resolve("Reports")
    ]);

    console.log(result);
}

runQ42();


// Q43
// Batch File Uploader

function uploadFile(name, success) {
    return success
        ? Promise.resolve(`${name} Uploaded`)
        : Promise.reject(`${name} Failed`);
}

async function runQ43() {
    const result = await Promise.allSettled([
        uploadFile("file1.pdf", true),
        uploadFile("file2.pdf", false),
        uploadFile("file3.pdf", true)
    ]);

    console.log(result);
}

runQ43();


// Q44
// Student Result Processor

function processStudent(name, pass) {
    return pass
        ? Promise.resolve(`${name} Passed`)
        : Promise.reject(`${name} Failed`);
}

async function runQ44() {
    const result = await Promise.allSettled([
        processStudent("Rahul", true),
        processStudent("Amit", false),
        processStudent("Mohit", true)
    ]);

    console.log(result);
}

runQ44();


// Q45
// 3 Servers. Return fastest response using race.

function server1() {
    return new Promise(resolve =>
        setTimeout(() => resolve("Server 1"), 3000)
    );
}

function server2() {
    return new Promise(resolve =>
        setTimeout(() => resolve("Server 2"), 1000)
    );
}

function server3() {
    return new Promise(resolve =>
        setTimeout(() => resolve("Server 3"), 2000)
    );
}

async function runQ45() {
    const result = await Promise.race([
        server1(),
        server2(),
        server3()
    ]);

    console.log(result);
}

runQ45();


// Q46
// Server1 Fail, Server2 Fail, Server3 Success

function failServer1() {
    return Promise.reject("Server1 Failed");
}

function failServer2() {
    return Promise.reject("Server2 Failed");
}

function successServer3() {
    return Promise.resolve("Server3 Success");
}

async function runQ46() {
    try {
        const result = await Promise.any([
            failServer1(),
            failServer2(),
            successServer3()
        ]);

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

runQ46();


// Q47
// API Timeout using race

function apiCall() {
    return new Promise(resolve =>
        setTimeout(() => resolve("API Response"), 5000)
    );
}

function timeout() {
    return new Promise((_, reject) =>
        setTimeout(() => reject("Request Timeout"), 3000)
    );
}

async function runQ47() {
    try {
        const result = await Promise.race([
            apiCall(),
            timeout()
        ]);

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

runQ47();


// Q48
// Async Generator

async function* getNames() {
    yield "Ram";
    yield "Shyam";
    yield "Mohan";
}

async function runQ48() {
    for await (const name of getNames()) {
        console.log(name);
    }
}

runQ48();


// Q49
// Async Notes Manager

class NotesManager {

    constructor() {
        this.notes = [];
    }

    async addNote(note) {
        this.notes.push(note);
        return "Note Added";
    }

    async deleteNote(index) {
        this.notes.splice(index, 1);
        return "Note Deleted";
    }

    async updateNote(index, newNote) {
        this.notes[index] = newNote;
        return "Note Updated";
    }

    async getNotes() {
        return this.notes;
    }

}

async function runQ49() {

    const manager = new NotesManager();

    await manager.addNote("JavaScript");

    await manager.addNote("Node.js");

    console.log(await manager.getNotes());

    await manager.updateNote(
        0,
        "Advanced JavaScript"
    );

    console.log(await manager.getNotes());

    await manager.deleteNote(1);

    console.log(await manager.getNotes());

}

runQ49();



// Q50
// Build Complete E-Commerce Async Flow

async function login() {
    return "Login Successful";
}

async function getUser() {
    return {
        id: 1,
        name: "Rahul Dora",
        email: "rahul@gmail.com"
    };
}

async function getProducts() {
    return [
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Mouse", price: 1000 }
    ];
}

async function getCart(products) {
    return [
        products[0],
        products[1]
    ];
}

async function applyCoupon(cart) {
    const discount = 500;

    return {
        cart,
        discount
    };
}

async function calculateTotal(data) {

    const total =
        data.cart.reduce(
            (sum, item) => sum + item.price,
            0
        ) - data.discount;

    return total;
}

async function makePayment(amount) {

    return {
        paymentId: "PAY12345",
        amount,
        status: "Success"
    };
}

async function generateInvoice(payment) {

    return {
        invoiceId: "INV1001",
        paymentId: payment.paymentId,
        amount: payment.amount
    };
}

async function sendEmail(invoice) {

    return `Invoice ${invoice.invoiceId} Sent To Customer`;
}

async function trackOrder() {

    return {
        trackingId: "TRK789",
        status: "Out For Delivery"
    };
}

async function delivery() {

    return "Order Delivered Successfully";
}

async function runEcommerceFlow() {

    try {

        const loginResult =
            await login();
        console.log(loginResult);

        const user =
            await getUser();
        console.log(user);

        const products =
            await getProducts();
        console.log(products);

        const cart =
            await getCart(products);
        console.log(cart);

        const couponData =
            await applyCoupon(cart);
        console.log(couponData);

        const total =
            await calculateTotal(couponData);
        console.log("Total Amount:", total);

        const payment =
            await makePayment(total);
        console.log(payment);

        const invoice =
            await generateInvoice(payment);
        console.log(invoice);

        const emailStatus =
            await sendEmail(invoice);
        console.log(emailStatus);

        const tracking =
            await trackOrder();
        console.log(tracking);

        const deliveryStatus =
            await delivery();
        console.log(deliveryStatus);

    } catch (error) {

        console.log(
            "Flow Failed:",
            error.message
        );

    }
}

runEcommerceFlow();

*/