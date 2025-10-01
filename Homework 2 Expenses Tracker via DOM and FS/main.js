// import fs from "node:fs"

const addButton = document.querySelector(".add_button")
const addExpense = document.querySelector(".add_expense")
const cancel = document.querySelector(".cancel")
const save = document.querySelector(".add")
const empty = document.querySelector(".empty")
const search = document.querySelector(".search")
const expensesList = document.querySelector(".expenses_list")
const totalSum = document.querySelector(".total_sum")
const expenseCard = document.querySelector(".expense_card")
const date = document.querySelector("#created_at")
const category = document.querySelector("#category")
const description = document.querySelector("#description")
const amount = document.querySelector("#amount")
const deleteEl = document.querySelector(".delete_button")

addButton.addEventListener("click", (e) => {
        e.preventDefault()
        addExpense.style.display = "flex"
        console.log(addButton)
        empty.style.display = "none"
        search.style.display = "none"
        addButton.style.display = "none"
})
cancel.addEventListener("click", (e) => {
        e.preventDefault()
        addExpense.style.display = "none"
        empty.style.display = "none"
})
save.addEventListener("click", (e) => {
        e.preventDefault()
        empty.style.display = "none"
        addButton.style.display = "flex"
        expensesList.style.display = "table"
        addExpense.style.display="none"
        totalSum.style.display = "block"
        if (date.value && category.value && description.value && amount.value){
                let newRow = document.createElement("tr");
                totalSum.textContent = Number(amount.value);
                newRow.innerHTML = `
            <td>${date.value}</td>
            <td>${category.value}</td>
            <td>${description.value}</td>
            <td>${amount.value}</td>
            <td>${totalSum}</td>
            <td>${deleteEl}</td>
             `;
                document.querySelector(".expense_body").appendChild(newRow);
        }
        addExpense.style.display = "none"
})
let expenses = JSON.parse(localStorage.getItem("expenses")) || [] 
