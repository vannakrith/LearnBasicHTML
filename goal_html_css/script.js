const transactionContainerEl = document.querySelector('.transaction-container'); //query selector to get the element of parent
const yourBalanceEl = document.querySelector('.your-balance');
const balanceNumberEl = document.querySelector('.balance-number');
const incomeAmountEl = document.querySelector('.income-amount');
const expenseAmountEl = document.querySelector('.expenses-amount');
const formEl = document.querySelector('.input-form');
const inputDescriptionEl = document.querySelector('.input--description');
const inputAmountEl = document.querySelector('.input--amount');
const transactionBtnEl = document.querySelector('.transaction__btn');


//Handle when click Add button in the form
// const submitHandler = (submitEvent) => {

//     //Prevent default behavior
//     submitEvent.preventDefault();
//     const description = inputDescriptionEl.value;
//     const inputAmount = +inputAmountEl.value;
//     //console.log(description)
//     //console.log(inputAmount)
    
//     //Create Transaction Elements in HTML
//     const transactionItemHTML = `
//         <li class="transaction transaction--${inputAmount > 0 ? 'income' : 'expenses'}">
//             <span class="transaction__text">${description}</span>
//             <span class="transaction__amount">${inputAmount}</span>
//             <button class="transaction__btn">x</button>
//         </li>
//     `;
    
//     //Insert new HTML
//     transactionContainerEl.insertAdjacentHTML('beforeend', transactionItemHTML); 
    
//     /* 
//     Usage: It's the method of Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position.
//     // syntax: element.insertAdjacentHTML(position, htmlString)
//     'beforebegin' - ⬆️ Before the element itself
//     'afterbegin' - ➡️ Just inside the element, before its first child
//     'beforeend' - ⬅️ Just inside the element, after its last child
//     'afterend' - ⬇️ After the element itself
//     */
    
//     //Update income or expenses after user Submit the form
//     if (inputAmount > 0) {
//         //Update income
//         const currentIncome = +incomeAmountEl.textContent;
//         const updatedIncome = currentIncome + inputAmount;
//         incomeAmountEl.textContent = updatedIncome
//         console.log(`Current Income: ${currentIncome}`);
//         console.log(`Updated Income: ${updatedIncome}`);
//     }
//     else {
//         //Update expenses
//         const currentExpenses = +expenseAmountEl.textContent;
//        const updatedExpenses = currentExpenses + (inputAmount*-1); //We * -1 because we avoid the expenses calculation become positive that (-) and (-) = +
//        expenseAmountEl.textContent = updatedExpenses
//         console.log(`Current Expenses: ${currentExpenses}`)
//         console.log(`Updated Current Expenses: ${updatedExpenses}`)
//     }
    
//     //Update Main Balance
//     const income = +incomeAmountEl.textContent;
//     const expenses = +expenseAmountEl.textContent;
//     const updatedMainBalance = income - expenses;
//     balanceNumberEl.textContent = updatedMainBalance;
//     console.log(`Updated Main Balance: ${updatedMainBalance}`)
    
//      //Clear form input
//      formEl.reset();
    
//      //Unfocus form input
//      inputAmountEl.blur();
    
//      //Make Balance red
//     if (updatedMainBalance < 0) {
//         balanceNumberEl.style.color = 'red';
//     }

// };

// formEl.addEventListener ('submit', submitHandler )


//Handle when click x button on transaction

// const clickHandler = (event) => {

//     //Remove transaction item
//     const removeTransactionItemAction = event.target.parentNode; // .target.parentNode is to target the parent element of the clicked element
//     removeTransactionItemAction.remove(); //The remove() method removes an element (or node) from the document.
    
    
//     //Log removed item
//     const removedItem = removeTransactionItemAction.querySelector('.transaction__text');
//     console.log(`Removed Item: ${removedItem.textContent}`);
    
//     //Find transaction amount and convert to number
//     const transactionAmountEl = removeTransactionItemAction.querySelector('.transaction__amount');
//     const transactionAmount = +transactionAmountEl.textContent; //Use + to convert from string to number data type, it's unary plus operator
//     console.log(`Transaction Amount: ${transactionAmount}`);
    
//     if (transactionAmount > 0) {
//         //Update income
//         const currentIncome = +incomeAmountEl.textContent;
//         const updatedIncome = currentIncome - transactionAmount;
//         incomeAmountEl.textContent = updatedIncome
//         console.log(`Current Income: ${currentIncome}`);
//         console.log(`Updated Income: ${updatedIncome}`);
//     }
//     else {
//         //Update expenses
//         const currentExpenses = +expenseAmountEl.textContent;
//        const updatedExpenses = currentExpenses - (transactionAmount*-1); //We * -1 because we avoid the expenses calculation become positive that (-) and (-) = +
//        expenseAmountEl.textContent = updatedExpenses
//         console.log(`Current Expenses: ${currentExpenses}`)
//         console.log(`Updated Current Expenses: ${updatedExpenses}`)
//     }
    
//     //Update main balance
//     console.log('-----------------')
//     console.log(`Main Balance before remove item: ${balanceNumberEl.textContent}`)
//     const income = +incomeAmountEl.textContent
//     const expenses = +expenseAmountEl.textContent
//     const updatedMainBalance = income - (expenses*-1);
//     balanceNumberEl.textContent = updatedMainBalance;
//     console.log(`Income: ${income}`)
//     console.log(`Expenses: ${expenses}`)
//     console.log(`Updated Main Balance: ${updatedMainBalance}`)
    
//     //Make red balance negative
//     if(updatedMainBalance < 0) {
//     balanceNumberEl.style.color = 'red';
//     }
// }

//const removeTransactionItemEl = transactionContainerEl.addEventListener('click', clickHandler);



const submitHandler = (submitEvent) => {
    submitEvent.preventDefault();
    const description = inputDescriptionEl.value;
    const inputAmount = +inputAmountEl.value;
   
    const insertTransactionHTML = `
        <li class="transaction transaction--${inputAmount > 0 ? 'income' : 'expenses' }">
            <span class="transaction__text">${description}</span>
            <span class="transaction__amount transaction-increase">${inputAmount}</span>
        <button class="transaction__btn">x</button>
        </li>
    `;

    transactionContainerEl.insertAdjacentHTML('beforeend', insertTransactionHTML)

    //Clear input and unfocus the field
    formEl.reset();
    inputAmountEl.blur();

    //Calculate income

    let afterIncome = +incomeAmountEl.textContent;
    let afterExpenses = +expenseAmountEl.textContent;

    if (inputAmount > 0) {
        //Update income
       const beforeIncome = +incomeAmountEl.textContent;
        afterIncome = beforeIncome + inputAmount;
       incomeAmountEl.textContent = afterIncome
       console.log(`After income amount: ${afterIncome}`)
       if (afterIncome > 0) {
            incomeAmountEl.style.color = 'Green'
       }
    }
    else {
        //Update expenses
        const beforeExpenses = +expenseAmountEl.textContent;
         afterExpenses = beforeExpenses + inputAmount
        expenseAmountEl.textContent = afterExpenses
        console.log(`After expenses: ${afterExpenses}`)

        if (afterExpenses < 0) {
            expenseAmountEl.style.color = 'red';
        }
    }

    //Update Balance
    const beforeBalance = +balanceNumberEl.textContent;
    const afterBalance = afterIncome - (afterExpenses*-1);
    balanceNumberEl.textContent = afterBalance;
    afterBalance < 0 ? balanceNumberEl.style.color = 'red' : balanceNumberEl.style.color = 'green'

}

formEl.addEventListener('submit', submitHandler);


//Hanle with click

const clickHandler = (clickEvent) => {
    const removedTransactionItemEl = clickEvent.target.parentElement;
    removedTransactionItemEl.remove();
    console.log(removedTransactionItemEl)

    //log removed item
  const removedItem =  removedTransactionItemEl.querySelector('.transaction__text');
  console.log(`Removed Item: ${removedItem.textContent}`)
    
    //Find transaction amount and convert to number
    const transactionAmountEl = removedTransactionItemEl.querySelector('.transaction__amount');
    const transactionAmount = +transactionAmountEl.textContent; //Use + to convert from string to number data type, it's unary plus operator
    console.log(`Transaction Amount: ${transactionAmount}`);

  //Update income or expenses

    let afterIncome = +incomeAmountEl.textContent;
    let afterExpenses = +expenseAmountEl.textContent;

  if (transactionAmount > 0) {
    //Update income
    const beforeIncome = +incomeAmountEl.textContent;
    afterIncome = beforeIncome - (transactionAmount);
    incomeAmountEl.textContent = afterIncome;
    console.log(`Income after transaction: ${afterIncome}`)
        if (afterIncome > 0) {
            incomeAmountEl.style.color = 'green'
        }
  }
  else {
    //Update expenses
    const beforeExpenses = +expenseAmountEl.textContent;
    afterExpenses = beforeExpenses - (transactionAmount);
    expenseAmountEl.textContent = afterExpenses;
    console.log(`'Expenses after transaction: ${afterExpenses}`)
    if(afterExpenses < 0) {
        expenseAmountEl.style.color = 'red'
    }
  }

  //Update balance
  const balanceAfter = afterIncome - (afterExpenses*-1)
  balanceNumberEl.textContent = balanceAfter;
  console.log(`Balance after transaction: ${balanceAfter}`)
  balanceAfter < 0 ? balanceNumberEl.style.color = 'red' : balanceNumberEl.style.color = 'green';
}

transactionContainerEl.addEventListener('click', clickHandler);



