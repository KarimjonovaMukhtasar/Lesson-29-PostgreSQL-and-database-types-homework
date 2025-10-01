const addButton = document.querySelector(".add_button")
const addExpense = document.querySelector(".add_expense")
const empty = document.querySelector(".empty")
const expensesList = document.querySelector(".expenses_list")
const totalSum = document.querySelector(".total_sum")
const expenseCard = document.querySelector(".expense_card")

addButton.addEventListener("click", ()=>{
        addExpense.style.display = "flex"
        addExpense.innerHTML +=`
        <label id="created_at">Date</label>
        ` 
})

let expenses = JSON.parse(localStorage.getItem("expenses")) || [] 
