const inputElement = document.querySelector(".task__input")
const buttonElement = document.querySelector(".add__button")
const taskListWrapper = document.querySelector(".task__list__wrapper")

let tasks = JSON.parse(localStorage.getItem("tasks")) || []
renderTasks(tasks)

buttonElement.addEventListener("click", () => {
    let value = inputElement.value
    if(value !== ""){
        tasks.push({ id: Date.now(), value })
    }

    renderTasks(tasks)

    inputElement.value = ""
})

taskListWrapper.addEventListener("click", (event) => {
    if(event.target.classList.contains("delete__button")){
        const parentElement = event.target.closest(".task__card")
        const id = Number(parentElement.dataset.id)

        tasks = tasks.filter((task) => task.id !== id)
        renderTasks(tasks)
    }
})


function renderTasks(tasks) {
    taskListWrapper.innerHTML = ""
    tasks.forEach((task) => {
        taskListWrapper.innerHTML += `
                <div class="task__card" data-id="${task.id}">
                    <p>${task.value}</p>
                    <button class="button"><i class="fa-solid fa-trash delete__button"></i></button>
                </div>
        `
    })
    localStorage.setItem("tasks", JSON.stringify(tasks))
}
