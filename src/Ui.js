import { handleFormTaskProjectSelect } from "./Task" 

export function initalizeButtons(){
    const createProjectBtn = document.querySelector("#create_btn")
    const addTaskBtn = document.querySelector(".add_task_btn")
    const arrowShowProjectBtn = document.querySelector("#arrow")

    createProjectBtn.addEventListener("click", handleCreateProjectBtn)
    addTaskBtn.addEventListener("click", handleAddTaskBtn)
    arrowShowProjectBtn.addEventListener("click", handleArrowShowProjectBtn)
}

function handleCreateProjectBtn(event) {
    let projectForm = document.getElementById("hiddenForm").style.display = "block"
}
function handleAddTaskBtn(event) {
    let taskForm = document.getElementById('hiddenTaskForm').style.display = 'block'
    handleFormTaskProjectSelect()
}

function handleArrowShowProjectBtn(event){
    event.target.classList.toggle("down");
    let ariaExpaned = event.target.classList.contains("down")
    
    const navProjectList = document.querySelector("#projectList")
    if (!ariaExpaned)
    {
        navProjectList.className = "nav-project"
    } 
    else{
        navProjectList.className = "dropdown"
    }
}

function currentStaus(event) {
    const activeProject = document.querySelector(".active")

    activeProject.classList.remove("active")
    event.target.classList.add("active")

    let name = event.target.getAttribute("name")
    createProjectContent(name)
    
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
export default {createProjectContent, initalizeButtons, currentStaus}