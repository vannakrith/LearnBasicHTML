//Basic
// const balance = 9000;
// const description = "test description"
// var newTransaction = 3999;
// var isNew = true;

// // balance = 599;
// console.log(isNew)

// const balanceIncreaseEl = document.querySelector('.income-amount');
// balanceIncreaseEl.textContent = 19934299;

// const text = 'Hello';
// const salary = 2000;
// const isExpense = true;

//Array
// const expenses = [100, 30]
// console.log(expenses[0])

//Object, it's like entity to hold property in it
// const transaction = {
//     description: 'salary',
//     amount: 100,
//     remarks: undefined
// }

// const error = {
//     description: 'Not Found',
// }

// console.log(transaction.remarks)

//Function
//Why do you need function? 

//Function declare
// function calculateBalance (income, expenses) {
//      const income = 5000;
//      expenses = 20;
//     const balance = income - expenses;
//     console.log(balance)
//     return balance;
// }
// const result = calculateBalance(30, 100)
// const result1 = calculateBalance(200, 100)
// console.log(result)
// console.log(result1)

//Function expression
// var calculateBalance = function (income, expenses) {
//     const balance = income - expenses
//     return balance;
// }
// const result3 = calculateBalance(20,10);
// console.log(result3)


//arrow function
// const calculateBalance = (income, expenses) => income - expenses;

// const resultArrowFunc = calculateBalance(20,10)
// console.log(resultArrowFunc)


//Applying some query and event listener, adding new class
// const balanceNumberEl = document.querySelector('.balance-number');
// balanceNumberEl.addEventListener('click', function() {
//     balanceNumberEl.classList.add('your-balance--special');
// });

//Applying some changes to text using innerHTML
// const balanceNumberEl = document.querySelector('.balance-number');
// balanceNumberEl.innerHTML = '<span class="special">Unavailable</span>';

//Manipluate DOM using insertAdjacentHTML
//Syntax:  insertAdjacentHTML(position, text)
// const balanceNumberEl = document.querySelector('.balance-number');
// balanceNumberEl.insertAdjacentHTML('beforeend', '<span>8888</span>')

//scope with hoist
//  function calculateBalance () {
//   let  amount = 5000;
//   console.log(amount)
// }
// calculateBalance()

//If else scope
// if(1 < 2) {
//     // var amount = 10;
//     // let amount = 10;
//     const amount = 10;
    
// }

// amount = 29;
// console.log(amount)

//hoisting
// calculateBalance()
// const calculateBalance = () => {
//   const  amount = 100;
//     console.log(amount)
// }

// This works fine because function declarations are hoisted
// sayHello();  // Output: "Hello!"

// function sayHello() {
//     console.log("Hello!");
// }

// sayHello();
// const sayHello = () => {
// console.log('Hello')
// }

// This will fail with "Cannot access before initialization"
// sayHello();  // Error!

// const sayHello = () => {
//     console.log("Hello!");
// }
//It work the same as variable delcaration, it can't be accessed before delcaration
//Error : Uncaught ReferenceError: Cannot access 'username' before initialization
//To make it work, we can call func before it declare when we use func declaration, no func expression

//Concatenating
// const balance = 100;

// console.log(`our balance is: ${balance}`)

//if else control flow
// let balance = -1;
// if (balance > 0) {
//     console.log('Positive')
// }
//  console.log('Negative')

//Ternary operation
//balance > 0? console.log('positive'):console.log('negative')


// //Operator with truth and false
// const balance = 100;
// if (balance < 10) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }

//Operator with ===, it will take type to consider as well, in this it will be false
// const balance = '100';
// if (balance === 100) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }

//True and false values

// const balance = "";
// if (balance) {
//     console.log(true)
// }else {
//     console.log(false)
// }

// Falsy Values in JavaScript:
// Empty string ""
// 0
// null
// undefined
// NaN
// false