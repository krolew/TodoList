import Storage from "./Storage"
import Project from "./Project";
import Task from "./Task";
import { format, isBefore } from 'date-fns'

const app = (() => {
    function init() {
        loadHomePage()
    }

    function loadHomePage() {
        initalizeButtons()
        formProject.init()
        formTask.init()
        Storage.addProject(new Project("Today"))
        // load projects
        Storage.getProjectsList().projects.forEach((project) => {
            if (project.name != "Today" && project.name != "Inbox" && project.name != "Week")
            {
                arrowShowProjectBtn()
                insertProject(project.name)
            }
        })
        openProject("Today", document.querySelector("#today"));
    }

    function initalizeButtons() {
        const createProjectBtn = document.querySelector("#create_btn");
        const addTaskBtn = document.querySelector(".add_task_btn");
        const arrowShowProjectBtn = document.querySelector("#arrow");

        createProjectBtn.addEventListener("click", handleCreateProjectBtn);
        addTaskBtn.addEventListener("click", handleAddTaskBtn);
        arrowShowProjectBtn.addEventListener("click", handleArrowShowProjectBtn);
    }

    function initProjectButtons()
    {
        const inboxProjectsButton = document.querySelector("#inbox")
        const todayProjectsButton = document.querySelector("#today")
        const weekProjectsButton = document.querySelector("#week")
        const projectsButton = document.querySelectorAll(".project-nav")

        inboxProjectsButton.addEventListener("click", openInbox)
        todayProjectsButton.addEventListener("click", openToday)
        weekProjectsButton.addEventListener("click", openWeek)

        projectsButton.forEach((projectBtn) =>
            projectBtn.addEventListener("click", handleProjectButton)
        )
    }

    function initTaskButtons()
    {
        const taskButtons = document.querySelectorAll(".taskBox")
        const taskEditButtons = document.querySelectorAll(".taskEdit")
        const taskRemoveButtons = document.querySelectorAll(".taskRemove")
        const taskCheckers = document.querySelectorAll(".checkbox")
        
        taskButtons.forEach((taskBtn) => 
            taskBtn.addEventListener("click", handleTaskBtn)
        )

        taskEditButtons.forEach((taskEditBtn) =>
            taskEditBtn.addEventListener("click", handleTaskEditBtn)
        )

        taskRemoveButtons.forEach((taskRemoveBtn) =>
            taskRemoveBtn.addEventListener("click", handleTaskRemoveBtn)
        )

        taskCheckers.forEach((taskcheckBtn) =>
            taskcheckBtn.addEventListener("click", handleTaskCheckBtn)
        )
    }

    function initProjectDeleteBtn () {
        const projectDeleteBtns = document.querySelectorAll(".project-delete")
        projectDeleteBtns.forEach((projectDeleteBtn) => {
            projectDeleteBtn.addEventListener("click", handleProjectDeleteBtn)
        })
    }

    function handleProjectDeleteBtn(e) {
        const projectBtn = e.target.parentNode
        const projectName = projectBtn.textContent

        Storage.deleteProject(projectName)
        projectBtn.remove()
        openProject("Today", document.querySelector("#today"))

    }

    function createDetails(taskBtn, task) {
        taskBtn.insertAdjacentHTML("afterend", 
            `
            <div class="taskDetailsModal">
                <div class="taskDetails">
                    <div class="taskDetailsName">
                        <h1>${task.name}</h1>
                    </div>

                    <div class="taskDetailsDuedate">
                        <b>Due date:</b> ${task.duedate}
                    </div>

                    <div class="taskDetailsPriority">
                        <b>Priority:</b> ${task.priority}
                    </div>

                    <div class="taskDetailsDescription">
                        <b>Description:</b> ${task.description}
                    </div>
                </div>
            </div>
            `
        )
        handleModal(document.querySelector(".taskDetailsModal"))
    }

    function createEditForm(taskBtn, task) {
        taskBtn.insertAdjacentHTML("afterend", 
        `
        <div class="taskDetailsModal">
            <form id="editForm" class="modal-content animate taskForm" action="#">
                <div class="projectFormContainer">
                    <div class="projectHeader">
                        <h1>Edit Task</h1>
                    </div>
                    <hr>

                    <div class="projectContent">
                        <span>Name</span>
                        <input type="text" name="editTaskName" class="inputForm" maxlength="50">
                    </div>

                    <div class="projectContent">
                        <span>Description</span>
                        <textarea name="editTaskDescription" id="" class="textAreaForm" maxlength="500"></textarea>
                    </div>

                    <div class="projectContent">
                        <span>Due Date:</span>
                        <input type="date" name="editTaskDate"  class="inputForm">
                    </div>

                    <div class="projectContent">
                        <span>Priority</span>
                        <select name="editTaskPriority" id="" class="inputForm select-wrapper">
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>           
                        </select>
                    </div>
                    
                    <div class="btn_container">
                        <button id="cancelEditTaskBtn" type="button" onclick="document.getElementById('editForm').style.display='none'" class="btn-cancel">Close</button>
                        <button class="btn-submit">Confirm Edit</button>
                    </div>
                </div>
            </form>
        </div>
        `)
        
        const taskName = document.querySelector("input[name='editTaskName']")
        const taskDescription = document.querySelector("textarea[name='editTaskDescription']")
        const taskDueDate = document.querySelector("input[name='editTaskDate']")
        const taskPriority = document.querySelector("select[name='editTaskPriority']")

        taskName.value = task.name
        taskDescription.value = task.description
        taskDueDate.value = task.duedate

        // Set select option default priority to task.priority
        Array.from(taskPriority.options).find((option) => option.value == task.priority).setAttribute('selected','selected')

        handleModal(document.querySelector(".taskDetailsModal"))
        handleFormEdit(document.querySelector("#editForm"), task)
        handleEditDateInput(document.querySelector("#editForm"))
    }

    function handleBtnCancelEdit(){
        document.querySelector(".taskDetailsModal").click()
    }

    function handleEditDateInput(form) {
        let dateInput = form.elements.editTaskDate
        let todayDate = format(new Date(), "yyyy-MM-dd")

        dateInput.setAttribute("min", todayDate)
    }

    
    function handleFormEdit(form, task) {
        const cancelBtn = document.querySelector("#cancelEditTaskBtn")
        cancelBtn.addEventListener("click", handleBtnCancelEdit)

        form.addEventListener("submit", (e)=>{
            handleFormEditSubmit(e, task)
        })
    }

    function handleFormEditSubmit(e, oldTask){
        e.preventDefault()
        
        const form = e.target
        const formData = new FormData(form)
        const taskNameInput = form.elements.editTaskName
        const taskDueDateInput = form.elements.editTaskDate

        const editTaskName = formData.get("editTaskName")
        const editTaskDescription = formData.get("editTaskDescription")
        const editTaskDueDate = formData.get("editTaskDate")
        const editTaskPriority = formData.get("editTaskPriority")
        
        const editedTask = new Task({
            name: editTaskName,
            description: editTaskDescription,
            priority: editTaskPriority,
            dueDate: editTaskDueDate,
            checked: oldTask.checked
        })

        const projectName =  document.querySelector("#mainHeader").textContent.trim()
        const oldTaskName = oldTask.name

        clearErrorText()
        let isTaskNameValid = checkEditTaskName(editTaskName, oldTaskName, projectName, taskNameInput), 
                isTaskDateValid=  checkDueDate(editTaskDueDate, taskDueDateInput) 

        let isFormValid = isTaskNameValid && isTaskDateValid
        
        if (isFormValid)
        {
            if (projectName === "Today" || projectName === "Week")
            {
                let taskProjectName = oldTask.projectName

                Storage.updateTask(taskProjectName, oldTaskName, editedTask)
            }
                
            Storage.updateTask(projectName, oldTaskName, editedTask)
            openProject(projectName)
            form.parentNode.style.display = "none"
        }
    }
    
    function checkEditTaskName(newTaskName, oldTaskName, projectName, taskNameInput) {
        let valid = true

        const todoList = Storage.getProjectsList()
        const task = todoList.getProject(projectName).getTask(newTaskName)
        
        // When new task.name is already in use and it isn't oldTaskName
        if (task && task.name !== oldTaskName) {
            showError(taskNameInput, "Please enter a different name.");
            valid = false;
        }

        if (!newTaskName || newTaskName.trim() == ""){
            showError(taskNameInput, "Please enter name")
            valid = false
        } 
        
        return valid
    }

    function handleModal(modal) {
        modal.addEventListener("click", (e)=>{
            if (e.target == modal)
                modal.remove()
        })
    }

    function handleTaskBtn(e) {
        let taskBtn = e.target
        
        // If taskBtn is TaskName, TaskDueDate
        if (!taskBtn.classList.contains("taskBox") ){
            taskBtn = e.target.parentNode
        }


        
        let projectName = document.querySelector("#mainHeader").textContent.trim()

        let taskName = taskBtn.children[1].textContent.trim()
        let task = Storage.getProjectsList().getProject(projectName).getTask(taskName)
        
        createDetails(taskBtn, task)
    }
    
    function handleTaskCheckBtn(e){
        e.stopPropagation();
        
        let projectName = document.querySelector("#mainHeader").textContent.trim()
        let taskBtn = e.target.parentNode.parentNode
        let taskName = taskBtn.children[1].textContent.trim()
            
        taskBtn.classList.toggle("checked")

        if (taskBtn.classList.contains("checked"))
        {   
            if (projectName === "Today" || projectName === "Week")
            {
                let taskProjectName = taskBtn.getAttribute("data-projectname")
                Storage.checkTask(taskProjectName, taskName, true)
            }
            Storage.checkTask(projectName, taskName, true)
        }
        else {
            if (projectName === "Today" || projectName === "Week")
            {
                let taskProjectName = taskBtn.getAttribute("data-projectname")
                Storage.checkTask(taskProjectName, taskName, false)
            }
            Storage.checkTask(projectName, taskName, false)
        } 
        
    }

    function handleTaskEditBtn(e) {
        e.stopPropagation();
        let projectName = document.querySelector("#mainHeader").textContent.trim()
        let taskBtn = e.target.parentNode.parentNode
        
        // if is click div.taskEdit instead of img
        if (e.target.classList.contains("taskEdit"))
        {
            taskBtn = e.target.parentNode
        }

        let taskName = taskBtn.children[1].textContent.trim()
        let task = Storage.getProjectsList().getProject(projectName).getTask(taskName)
        createEditForm(taskBtn, task)
    }

    function handleTaskRemoveBtn(e)
    {
        e.stopPropagation();    
        let projectName = document.querySelector("#mainHeader").textContent.trim()
        let taskBtn = e.target.parentNode.parentNode
        
        if (e.target.classList.contains("taskRemove"))
        {
            taskBtn = e.target.parentNode
        }

        let taskName = taskBtn.children[1].textContent.trim()

        if (projectName === "Today" || projectName === "Week")
        {
            Storage.deleteTask(taskBtn.getAttribute("data-projectname"), taskName)
        }    

        Storage.deleteTask(projectName, taskName)
        removeTask(taskBtn)
    }

    function removeTask(taskBtn) {
        taskBtn.remove()
    }

    function openProject(name, projectBtn)
    {
        clearTasks()
        activeProjectBtn(name)
        loadProjectContent(name)
    }

    function openInbox()
    {
        
        openProject("Inbox", this)
    }

    function openToday()
    {   
        Storage.getTodayProjects()
        openProject("Today", this)
    }

    function openWeek()
    {
        Storage.getWeekProject()
        openProject("Week", this)
    }

    function loadProjectContent(projectName)
    {
        const mainHeader = document.querySelector("#mainHeader")
        mainHeader.textContent = projectName

        initProjectButtons()
        loadTasks(projectName)
    }

    function loadTasks(projectName){
        
        Storage.getProjectsList()
        .getProject(projectName)
        .getTasks()
        .forEach(task => createTask(projectName, task))
    }

    function createTask(projectName, task)
    {
        const taskList = document.querySelector(".TaskList")
        let checked = (task.checked)? "checked": ""
        projectName = (projectName == "Today" || projectName == "Week")? task.projectName: "" 

        taskList.innerHTML += 
        `
            <div class="taskBox ${checked}" data-projectName = "${projectName}" >
                <div class="taskCheck">
                    <input type="checkbox" class="checkbox" ${checked} />
                </div>
                <div class="taskName">
                    ${task.name}
                </div>
                <div class="taskDueDate">
                    ${format(new Date(task.duedate), "MMM do")}
                </div>
                
                <div class="taskEdit">
                    <img src="${require('./assets/edit.png')}" alt="" >
                </div>
                <div class="taskRemove">
                    <img src="${require('./assets/delete16.png')}" alt="" >
                </div>

            </div>
            
        `
        initTaskButtons()
    }

    function handleTaskFormProjectSelect()
    {
        const projectTask = document.querySelector("#projectTask")
        const projects = Storage.getProjectsList().getProjects();
        projectTask.replaceChildren();
        projects.forEach(project => addProjectsToSelectBtn(project.name));
    }

    function addProjectsToSelectBtn(projectName)
    {
        if (projectName != "Today" && projectName != "Week")
        {
            const projectTask = document.querySelector("#projectTask")
            const optionEl = document.createElement("option")
            
            optionEl.value = projectName
            optionEl.text = projectName
        
            projectTask.appendChild(optionEl)
        }
    }

    function handleProjectButton() {
        const projectName = this.getAttribute("data-projectname")
        openProject(projectName, this)
    }

    function handleCreateProjectBtn(event) {
        let projectForm = (document.getElementById("hiddenForm").style.display =
            "block");
        }
        
    function handleAddTaskBtn(event) {
        let taskForm = (document.getElementById("modalTaskForm").style.display =
            "block");
        handleTaskFormProjectSelect();
    }

    function handleArrowShowProjectBtn(event) {
        event.target.classList.toggle("down");
        let ariaExpaned = event.target.classList.contains("down");

        const navProjectList = document.querySelector("#projectList");
        if (ariaExpaned) {
            navProjectList.className = "dropdown";
            
        } else {
            navProjectList.className = "nav-project";
        }
    }

    function arrowShowProjectBtn(){
        let arrowBtn = document.querySelector("#arrow")
        let ariaExpaned = arrowBtn.classList.contains("down");

        // When creates project arrow btn drop down and show projects
        if (!ariaExpaned){
            arrowBtn.click()
        }
    }

    function activeProjectBtn(projectName)
    {
        const currentActiveItem = document.querySelector(".active")
        const projectNav = document.querySelector("li[data-projectname='"+projectName+"']")

        if (currentActiveItem) {
            currentActiveItem.classList.remove("active")
        }
        projectNav.classList.add("active")
        
    }
    function clearTasks() {
        const taskList = document.querySelector(".TaskList")

        taskList.innerHTML = ""
    }

    // Common function to taskForm and taskEditForm
    function showError(input, message) {
        let errorDiv = document.createElement("div")
        errorDiv.textContent = message
        errorDiv.className = "errorText"
        input.parentNode.appendChild(errorDiv)
    }

    function clearErrorText() {
        const errorDivs = document.querySelectorAll(".errorText")
        errorDivs.forEach((div) => div.remove())
    }

    function checkDueDate(dueDate, inputTaskDate) {
        // const inputTaskDate = document.querySelector("input[type='date']")
        let todayDate = format(new Date(), "yyyy-MM-dd")
        let valid = true
        if (dueDate < todayDate)
        {
            showError(inputTaskDate, "Please enter date. You can't back to the past :)")
            valid = false
        }

        return valid
    }   
    
    function clearForm(form) {
        form.reset()
        form.parentNode.style.display = "none"
        clearErrorText()
    }

    function checkTaskName(taskName, projectName, taskNameInput) {
        let valid = true

        const todoList = Storage.getProjectsList()

        if(todoList.getProject(projectName).getTask(taskName))
        {
            showError(taskNameInput, "Please enter different name.")
            valid = false
        }

        if (!taskName || taskName.trim() == ""){
            showError(taskNameInput, "Please enter name")
            valid = false
        } 
        
        return valid
    }

    function insertProject(projectName) {
        const navProject = document.querySelector(".nav-project")
        const dropdown = document.querySelector(".dropdown")
        const target = navProject || dropdown
        
        if (!target) {
            return;
        }

        
        const li = document.createElement("li")
        const deleteImg = document.createElement("img")

        deleteImg.src = require('./assets/delete16.png')
        deleteImg.setAttribute("class", "project-delete")


        li.innerText = projectName
        li.setAttribute("data-projectname", projectName)
        li.setAttribute("class", "project-nav")
        li.appendChild(deleteImg)
        
        target.appendChild(li)
        initProjectDeleteBtn()
        openProject(projectName, li)
    }


    // PROJECT FORM 
    const formProject = (() => {
        
        const showError = (input, message) => {
            let errorDiv = document.querySelector(".errorText")
            if (!errorDiv) 
            {
                errorDiv = document.createElement("div")
                errorDiv.textContent = message
                errorDiv.className = "errorText"
                input.parentNode.appendChild(errorDiv)
            }
        }
        
        const checkProjectName = (projectName) => {
            let valid = true
            const projectNameInput = document.querySelector("input[name='projectName']")
            const todoList = Storage.getProjectsList()

            if (todoList.getProject(projectName.trim()))
            {
                showError(projectNameInput, "Project name must be different")
                valid = false;

            }

            if (!projectName || projectName.trim() === "")
            {
                showError(projectNameInput, "Please enter name")
                valid = false
            }

            return valid
        }

        const clearErrorText = () => {
            const errorDivs = document.querySelectorAll(".errorText")
            errorDivs.forEach((div) => div.remove())
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            clearErrorText()

            const form = event.target
            const formData = new FormData(form)
            const projectName = formData.get("projectName")
            
            let isValid =  checkProjectName(projectName);
            
            if (isValid) 
            {
                const project = new Project(projectName)
                Storage.addProject(project)
                insertProject(projectName)
                loadProjectContent(projectName)
                arrowShowProjectBtn()
                clearForm(form)
            } 
        }
    
        const handleCancel = (event) => {
            const form = document.querySelector("#projectForm")
            clearErrorText()
            clearForm(form)
        }
    
        const handleModalClick = (event) => {
            const modal = document.querySelector(".modal")
            const form = document.querySelector("#projectForm")

            if (event.target == modal)
            {
                clearForm(form)
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

    // TASK FORM
    const formTask = (() => {

        const handleCancelBtn = (event) => {
            const form = document.querySelector("#taskForm")
            clearErrorText()
            clearForm(form)
        }

        const handleModalClick = (event) => {
            const modal = document.querySelector("#modalTaskForm")
            const form = document.querySelector("#taskForm")

            if (event.target == modal)
            {
                clearErrorText()
                clearForm(form)
            }
        }
        
        const handleDateInput = (event) => {
            let form = event.target.form;
            let dateInput = form.elements.dateTask
            let todayDate = format(new Date(), "yyyy-MM-dd")

            dateInput.setAttribute("min", todayDate)
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            clearErrorText()
            const form = event.target
            const formData = new FormData(form)
            const taskNameInput = form.elements.taskName
            const taskDueDateInput = form.elements.taskDate

            const taskName = formData.get("taskName")
            const taskDescription = formData.get("taskDescription")
            const taskDueDate = formData.get("taskDate")
            const taskPriority = formData.get("taskPriority")
            const projectName = formData.get("taskProject")
            
            let isTaskNameValid = checkTaskName(taskName, projectName, taskNameInput), 
                isTaskDateValid=  checkDueDate(taskDueDate, taskDueDateInput) 

            let isFormValid = isTaskNameValid && isTaskDateValid
            
            if (isFormValid) 
            {
                const projectName = formData.get("taskProject")
    
                const task = new Task({
                    name: taskName,
                    description: taskDescription,
                    priority: taskPriority,
                    dueDate: taskDueDate
                })
    
                Storage.addTask(projectName, task)
                openProject(projectName)
                form.reset()
                form.parentNode.style.display = "none"
                
            } 
        }
    
        return {
            init: () => {
                const taskForm = document.getElementById("taskForm")
                const dateInput = document.getElementById("dateTask")
                const cancelTaskForm = document.getElementById("cancelTaskBtn")
                const modalTaskForm = taskForm.parentNode

                cancelTaskForm.addEventListener("click", handleCancelBtn)
                modalTaskForm.addEventListener("click", handleModalClick)
                dateInput.addEventListener("click", handleDateInput)
                taskForm.addEventListener("submit", handleSubmit)
            }
        }
    
    })()

    return {
        init: init,
    };
})();

export default app;
