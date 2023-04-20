// btns
const createProjectBtn = document.querySelector("#create_btn")
const addTaskBtn = document.querySelector(".add_task_btn")
const arrowShowProjectBtn = document.querySelector("#arrow")


const navProjectList = document.querySelector("#projectList")

createProjectBtn.addEventListener("click", handleCreateProjectBtn)
addTaskBtn.addEventListener("click", handleAddTaskBtn)
arrowShowProjectBtn.addEventListener("click", handleArrowShowProjectBtn)

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

    if (!ariaExpaned)
    {
        navProjectList.className = "nav-project"
    } 
    else{
        navProjectList.className = "dropdown"
    }
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
        .some(option => option.value == project.name)
            
        if (!optionExist) {
            const optionEl = document.createElement("option")
            optionEl.value = project.name
            optionEl.text = project.name
    
            // Add new option to selectTaskProject
            selectTaskProject.add(optionEl)
        }
        
    })
}
