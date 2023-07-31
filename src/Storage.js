import Project from "./Project"
import ProjectList from "./ProjectList"
import Task from "./Task"


const Storage = (() =>{
    
    const getProjectsList = () => {
        let projectsList =  Object.assign(
            new ProjectList(), 
            JSON.parse(localStorage.getItem("projectsList")) 
        )

        projectsList.setProjects(
            projectsList
            .getProjects()
            .map(project => Object.assign(new Project(), project))
        )
        
        projectsList.getProjects()
        .forEach(project =>
            project.setTasks(
                project.getTasks().map(task => Object.assign(new Task(), task))
            )
        )

        return projectsList
    }

    const saveProjectList = (data) => {
        localStorage.setItem("projectsList", JSON.stringify(data))
    }

    const addProject = (project) => {
        let projectsList =  getProjectsList()
        projectsList.addProject(project)
        saveProjectList(projectsList)
    }

    const deleteProject = (projectName) => {
        let projectsList = getProjectsList()
        projectsList.deleteProject(projectName)
        saveProjectList(projectsList)
    }

    const checkTask = (projectName, taskName, boolean) => {
        let projectsList =  getProjectsList()   
        projectsList.getProject(projectName).getTask(taskName).setChecked(boolean)
        saveProjectList(projectsList)
    }

    const updateTask = (projectName, taskName, newTask) => {
        
        let projectsList = getProjectsList()
        
        projectsList.getProject(projectName).getTask(taskName)
        .setDescription(newTask.description)

        projectsList.getProject(projectName).getTask(taskName)
        .setDueDate(newTask.description)

        projectsList.getProject(projectName).getTask(taskName)
        .setDueDate(newTask.duedate)

        projectsList.getProject(projectName).getTask(taskName)
        .setPriority(newTask.priority)

        projectsList.getProject(projectName).getTask(taskName)
        .setName(newTask.name)

        saveProjectList(projectsList)
    }
    
    const addTask = (projectName, task) => {
        let projectsList = getProjectsList()
        projectsList.getProject(projectName).addTask(task)
        saveProjectList(projectsList)
    }

    const deleteTask = (projectName, taskName) => {
        let projectList = getProjectsList()
        projectList.getProject(projectName).deleteTask(taskName)
        saveProjectList(projectList)
    }

    const getTodayProjects = () => {
        let projectList = getProjectsList()
        projectList.updateTodayProject()
        saveProjectList(projectList)
    }

    const getWeekProject = () => {
        let projectList = getProjectsList()
        projectList.updateWeekProject()
        saveProjectList(projectList)
    }
    
    return {
        getProjectsList,
        addProject,
        deleteProject,
        addTask,
        checkTask,
        updateTask,
        deleteTask,
        getTodayProjects,
        getWeekProject
    }

})()

export default Storage

