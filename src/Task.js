import Storage from "./Storage"
import { getDate } from 'date-fns'

/* 
    Task Form
*/
const formTask = (() => {
    let errorMessage = "";
    
    const showError = (input) => {
        let errorDiv = document.createElement("div")
        errorDiv.textContent = errorMessage.split("task").join(" ").toLowerCase()
        errorDiv.className = "errorText"
        input.parentNode.appendChild(errorDiv)
    }

    const handleDateInput = (event) => {
        let form = event.target.form;
        let dateInput = form.elements.dateTask
        let today = getDate(new Date())
        dateInput.setAttribute("min", today)
    }
    const handleFormProjectSelect = (event) => {
        // ??
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target
        const formData = new FormData(form)

        // Clear any existing erros
        const errorDivs = document.querySelectorAll(".errorText")
        errorDivs.forEach((div) => div.remove())
        
        // check if values are not empty
        let isValid = true;
        let errorInput = null;

        for (const [key, value] of formData.entries()) {
            if (!value || value.trim() === "") {
                isValid = false;
                errorMessage = `Please enter ${key}`
                errorInput = form.elements[key]
                showError(errorInput)
            }
        }
        
        if (isValid) 
        {
            const task = createTask(formData)
            Storage.taskToStorage(task)

            form.reset()
            form.parentNode.style.display = "none"
        } 
        else 
        {
            console.log("XD?")
        } 
    }

    return {
        init: () => {
            const taskForm = document.getElementById("taskForm")
            const dateInput = document.getElementById("dateTask")

            dateInput.addEventListener("click", handleDateInput)
            taskForm.addEventListener("submit", handleSubmit)
            
        }
    }

})()

const Task = (function(){
        let task_id = 0
    
        return function Task(form) {
            this.id = task_id++
            this.name  = form.get("taskName")
            this.description = form.get("taskDescription")
            this.priority = form.get("taskPriority")
            this.projectId = parseInt(form.get("taskProject"))
        }
})()

/* 
    Creating new Task
*/
const createTask = (form) => {
    let newTask = new Task(form)
    return newTask
}

function handleFormTaskProjectSelect(){
    const projects = JSON.parse(localStorage.getItem("projects"))

    if (projects === null){
        return;
    }
    const selectTaskProject = document.querySelector("#projectTask")

    projects.forEach((project)=>{

        // Check if the option already exist
        const optionExist = Array
        .from(selectTaskProject.options)
        .some(option => parseInt(option.value) == parseInt(project.id))
            
        if (!optionExist) {
            const optionEl = document.createElement("option")
            optionEl.value = project.id
            optionEl.text = project.name
    
            // Add new option to selectTaskProject
            selectTaskProject.add(optionEl)
        }
        
    })
}

export default formTask
export {handleFormTaskProjectSelect}

// formTask.init()