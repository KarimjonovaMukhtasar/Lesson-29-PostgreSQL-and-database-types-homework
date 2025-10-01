const addButton = document.querySelector(".add_button")
const addExpense = document.querySelector(".add_expense")
const cancel = document.querySelector(".cancel")
const add = document.querySelector(".add")
const empty = document.querySelector(".empty")
const expensesList = document.querySelector(".expenses_list")
const totalSum = document.querySelector(".total_sum")
const expenseCard = document.querySelector(".expense_card")
const date = document.querySelector("#created_at")
const category = document.querySelector("#category")
const description = document.querySelector("#description")
const amount = document.querySelector("#amount")

addButton.addEventListener("click", (e) => {
        e.preventDefault()
        addExpense.style.display = "flex"
        empty.style.display = "none"
})

cancel.addEventListener("click", (e) => {
        e.preventDefault()
        addExpense.style.display = "none"
        empty.style.display = "none"
})

add.addEventListener("click", (e) => {
        e.preventDefault()
        addExpense.style.display = "none"
        empty.style.display = "none"
        expensesList.style.display = "table"
        totalSum.style.display = "block"
        if (date.value && category.value && description.value && amount.value) {
                let newRow = document.createElement("tr");
                newRow.innerHTML = `
            <td>${date.value}</td>
            <td>${category.value}</td>
            <td>${description.value}</td>
            <td>${amount.value}</td>
             `;
                document.querySelector(".expense_body").appendChild(newRow);
                totalSum.textContent = Number(totalSum.textContent) + Number(amount.value)

        }
})

let expenses = JSON.parse(localStorage.getItem("expenses")) || [] 
