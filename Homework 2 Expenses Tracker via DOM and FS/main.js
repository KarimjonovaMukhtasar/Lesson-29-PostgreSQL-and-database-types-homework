const addButton = document.querySelector(".add_button")
const addExpense = document.querySelector(".add_expense")
const empty = document.querySelector(".empty")
const expensesList = document.querySelector(".expenses_list")
const totalSum = document.querySelector(".total_sum")
const expenseCard = document.querySelector(".expense_card")
const date = document.querySelector("#created_at")
const category = document.querySelector("#category")
const description = document.querySelector("#description")
const amount = document.querySelector("amount")

addButton.addEventListener("click", ()=>{
        addExpense.style.display = "flex"
        empty.innerHTML = null
        expensesList.style.display = "flex"
        totalSum += amount.value
        expenseCard.style.display = "flex"
})

let expenses = JSON.parse(localStorage.getItem("expenses")) || [] 
