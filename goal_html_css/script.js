const transactionContainerEl = document.querySelector('.transaction-container'); //query selector to get the element of parent
const yourBalanceEl = document.querySelector('.your-balance');
const balanceNumberEl = document.querySelector('.balance-number');
const incomeAmountEl = document.querySelector('.income-amount');
const expenseAmountEl = document.querySelector('.expenses-amount');
const formEl = document.querySelector('.input-form');
const inputDescriptionEl = document.querySelector('.input input--description');
const inputAmountEl = document.querySelector('.input input--amount');

const removeTransactionItemEl = transactionContainerEl.addEventListener('click', (event) => {
    
    //Remove transaction item
    const removeTransactionItemAction = event.target.parentNode; // .target.parentNode is to target the parent element of the clicked element
    removeTransactionItemAction.remove(); //The remove() method removes an element (or node) from the document.


    //Log removed item
    const removedItem = removeTransactionItemAction.querySelector('.transaction__text');
    console.log(`Removed Item: ${removedItem.textContent}`);

    //Find transaction amount and convert to number
    const transactionAmountEl = removeTransactionItemAction.querySelector('.transaction__amount');
    const transactionAmount = +transactionAmountEl.textContent; //Use + to convert from string to number data type, it's unary plus operator
    console.log(`Transaction Amount: ${transactionAmount}`);

    if (transactionAmount > 0) {
        //Update income
        const currentIncome = +incomeAmountEl.textContent;
        const updatedIncome = currentIncome + transactionAmount;
        incomeAmountEl.textContent = updatedIncome
        console.log(`Current Income: ${currentIncome}`);
        console.log(`Updated Income: ${updatedIncome}`);
    }
    else {
        //Update expenses
        const currentExpenses = +expenseAmountEl.textContent;
       const updatedExpenses = currentExpenses - (transactionAmount*-1); //We * -1 because we avoid the expenses calculation become positive that (-) and (-) = +
       expenseAmountEl.textContent = updatedExpenses
        console.log(`Current Expenses: ${currentExpenses}`)
        console.log(`Updated Current Expenses: ${updatedExpenses}`)
    }

    //Update main balance
    const income = +incomeAmountEl.textContent
    const expenses = +expenseAmountEl.textContent
    const updatedMainBalance = income - expenses;
    balanceNumberEl.textContent = updatedMainBalance
    console.log(`Updated Main Balance: ${updatedMainBalance}`)

    
})