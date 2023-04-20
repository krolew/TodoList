import currentStaus from "./animation"
import { getDate } from 'date-fns'

/* 
    Project Form
*/
const formProject = (() => {
    // Private variables and functions
    let errorMessage = "";
    
    const showError = (input) => {
        let errorDiv = document.querySelector(".errorText")
        if (!errorDiv) {
            errorDiv = document.createElement("div")
            errorDiv.textContent = errorMessage
            errorDiv.className = "errorText"
            input.parentNode.appendChild(errorDiv)
        }
    }
    
    const insertProject = (project_name) => {
        const navProject = document.querySelector(".nav-project")
        const dropdown = document.querySelector(".dropdown")

        const target = navProject || dropdown
        if (!target) {
            return;
        }

        const li = document.createElement("li")
        li.innerText = project_name
        li.setAttribute("data-project_name", project_name)
        li.onclick = currentStaus
        target.appendChild(li)
        
    }

    // Function to handle form submit 
    const handleSubmit = (event) => {
        event.preventDefault();

        // Get form data
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
                errorMessage = `Please enter name`
                errorInput = form.elements[key]
                break;
            }
        }

        if (!isValid) {
            showError(errorInput)
        } else {

            const projectName = formData.get("project_name")
            insertProject(projectName)
            createProjectContent(projectName)

            const project = createProject(projectName)
            
            const projectId = project["id"]
            projectToStorage(project)
            
            form.reset()
            form.parentNode.style.display = "none"
        } 
    }

    const handleCancel = (event) => {
        const errorDivs = document.querySelectorAll(".errorText")
        errorDivs.forEach((div) => div.remove())
        event.target.form.reset()
        event.target.form.parentNode.style.display = "none"
    }

    const handleModalClick = (event) => {
        const modal = document.querySelector(".modal")
        const input = document.querySelector("input[name='project_name']")
        const error = document.querySelector(".errorText")
        
        if(event.target == modal)
        {
            input.value = ""
            event.target.style.display = "none"
            error.remove()
        }
    }

    return {
        init: () => {
            const form = document.getElementById("projectForm")
            const cancelBtn = document.querySelector(".btn-cancel")
            const modalParent = form.parentNode

            form.addEventListener("submit", handleSubmit)
            cancelBtn.addEventListener("click", handleCancel)
            modalParent.addEventListener("click", handleModalClick)
        },
        
    }
})()



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
        
        if (isValid) {
            const task = createTask(formData)
            taskToStorage(task)

            form.reset()
            form.parentNode.style.display = "none"
        } else {
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

formProject.init()
formTask.init()


/* 
    Project Class
*/
const Project = (function() {
    let project_id = 0;

    const addTodo = (todo) => {
        this.todos.push(todo)
    }
    const deleteTodo = (todo) => {
        this.todos = this.todos.filter((t) => t !== todo)
    }

    return function Project(name) {
        this.name = name,
        this.todos = [],
        this.id = project_id++,
        addTodo,
        deleteTodo
    }
})()

/* 
    Task Class
*/

const Task = (function(){
    let task_id = 0

    return function Task(form) {
        this.task_id = task_id++
        this.taskName  = form.get("taskName")
        this.taskDescription = form.get("taskDescription")
        this.priority = form.get("taskPriority")
        this.project = form.get("taskProject")
    }
})()

/* 
    Creating new Project
*/
const createProject = (name) => {
    let newProject = new Project(name)
    return newProject
}

const projectToStorage = (project) => {
    let projects_list = JSON.parse(localStorage.getItem("projects"))     
    
    // If project list is not existing in local storage
    if (projects_list == null){
        projects_list = []
    }

    projects_list.push(project)
    localStorage.setItem("projects", JSON.stringify(projects_list))
}




const createTask = (form) => {
    let newTask = new Task(form)
    return newTask
}

const taskToStorage = (task) => {

    // When user check any of existing projects
    if (task.project !== "Inbox")
    {
        let projectList = JSON.parse(localStorage.getItem("projects")) 
        
        // If project list is not existing in local storage
        if (projectList == null){
            // get ceratin item from page where ther was start
            return;
        }

        let project = projectList.find(project => project.name === task.project)
        project.todos.push(task)
        localStorage.setItem("projects", JSON.stringify(projectList))
    }

    // When user check inbox as a project 
    if (task.project == "Inbox")
    {
        let indexList = JSON.parse(localStorage.getItem("index"))
        if (indexList === null)
        {

        }
    }

    
}

function createProjectContent(project_name) {
    const template = `
        <div class="showContainer">
            <h1>${project_name}</h1>
        </div>
    `
    
    document.querySelector(".showContainer").remove()
    document.querySelector(".main_container").insertAdjacentHTML("afterbegin", template)
    
}



export default createProjectContent

// function createAtProjectLocation(projectName){
//     let liElems = document.querySelectorAll('li[data-project_name]'); 
//     let taskProject = document.querySelector("#projectTask")

//     if(liElems !== null)
//     {
//         liElems.forEach((project)=>{
//             project_name = project.getAttribute("data-project_name")
//             taskProject.appendChild(`<li value='${project_name}'>${project_name}</li>`)
//         })
//     }
//     return;
// }
// function getProjectName()

