import Storage from "./Storage"
import Ui from "./Ui"

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
    
    const insertProject = (project) => {
        const navProject = document.querySelector(".nav-project")
        const dropdown = document.querySelector(".dropdown")
        const target = navProject || dropdown
        
        if (!target) {
            return;
        }
        let projectName = project.name
        const liEl = document.createElement("li")

        liEl.innerText = projectName
        liEl.setAttribute("projectId", project.id)
        liEl.onclick = Ui.currentStaus
        target.appendChild(liEl)
        
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
            const project = createProject(formData.get("project_name"))

            Storage.projectToStorage(project)
            insertProject(project)
            Ui.createProjectContent(project.name)  

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

const Project = (function() {
    // project_id = 0 is for index reserved, so i set project_id = 1
    let project_id = 1;

    const addTodo = (task) => {
        this.tasks.push(task)
    }
    const deleteTodo = (task) => {
        this.tasks = this.tasks.filter((t) => t !== task)
    }

    return function Project(name) {
        this.id = project_id++,
        this.name = name,
        this.tasks = [],
        addTodo,
        deleteTodo
    }
})()

/* 
    Creating new Project
*/
const createProject = (name) => {
    let newProject = new Project(name)
    return newProject
}
export default formProject
