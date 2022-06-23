// Create initial values
let monthlyIncome = 0;
let expenses = []; // An array of expense objects
let expenseTotal = 0;
let balance = 0;

// Store element references in variables
let monthlyBudget = document.getElementById("monthlyBudget");
let incomeInput = document.getElementById("incomeInput");
let updateBudgetButton = document.getElementById ("updateBudgetButton");
let nameInput = document.getElementById ("nameInput");

let amountInput = document.getElementById ("amountInput");
let addExpenseButton = document.getElementById ("addExpenseButton");

let expenseList = document.getElementById("expenseList"); // DIV element
let totalExpenses = document.getElementById("totalExpenses");
let remainingBalance = document.getElementById("remainingBalance");

// Write a function that will update the monthly income and display it
function updateBudget(event) {
    console.log("updateBudget fired!");
    event.preventDefault();
    monthlyIncome = parseInt(incomeInput.value); // Parse string input into number
    monthlyBudget.innerText = "$" + monthlyIncome;
    // Update the remaining balance
    updateBalance();
}

// Add updateBudget to updateBudget button as onclick handler
updateBudgetButton.onclick = updateBudget;
 
// Build a helper function that will update the remaining balance
function updateBalance() {
    console.log ("updateBalance fired!");
    balance = monthlyIncome - expenseTotal;
    remainingBalance.innerText = "$" + balance;
    // Update the color of the text based on the value
    if (balance < 0) {
        remainingBalance.classList.add("red");
        remainingBalance.classList.remove("green");
    } else {
        remainingBalance.classList.remove("red");
        remainingBalance.classList.add("green");
    }
}

// Build a function that will create a new expense and display that expense in the expense list
function addExpense(event) {
    console.log("addExpense fired!");
    event.preventDefault();
    // Build a new expense object
    let expense = {
        name: nameInput.value,
        amount: parseInt(amountInput.value) // Store as number
    };
    // add the expense to the expense array
    expenses.push(expense);
    // Add the expense to the app interface
    let newExpense = document.createElement("p");
    newExpense.innerText = expense.name + ": $" + expense.amount;
    expenseList.appendChild(newExpense);
    // Re-calculate the total of the expenses
    updateExpenseTotal();
}

// Add addExpense as onclick handler for add expense button
addExpenseButton.onclick = addExpense;

function updateExpenseTotal() {
    console.log("updateExpenseTotal fired!")
    // Reset the total expenses
    expenseTotal = 0;
    // Loop through the expense objects and re-calculate
    for (let i = 0; i < expenses.length; i++) {
        let currentExpense = expenses[i];
        expenseTotal = expenseTotal + currentExpense.amount;

    }
    // Display new total in the app
    totalExpenses.innerText = "$" + expenseTotal;
    // Update remaining balance
    updateBalance();
}

