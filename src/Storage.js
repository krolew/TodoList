const projectToStorage = (project) => {
    let projects_list = JSON.parse(localStorage.getItem("projects"))     
        
    // If project list is not existing in local storage
    if (projects_list == null){
        projects_list = []
    }
    projects_list.push(project)
    localStorage.setItem("projects", JSON.stringify(projects_list))
}

const taskToStorage = (task) => {
    console.log(task)
    // When user check project not inbox
    if (task.projectId !== 0)
    {
        let projectList = JSON.parse(localStorage.getItem("projects")) 
        
        // If project list is not existing in local storage
        if (projectList == null){
            return;
        }
        
        let project = projectList.find(project => project.id === task.projectId)
        
        project.todos.push(task)
        localStorage.setItem("projects", JSON.stringify(projectList))
    }
    
    // When user check inbox as a project 
    if (task.projectId == 0)
    {
        let inboxList = JSON.parse(localStorage.getItem("inbox"))
            
        // If localStorage don't have any tasks in inbox
        if (inboxList === null)
        {
            inboxList = [{
                "id": 0,
                "name": "inbox",
                "tasks": []
            }]
                
        }
        inboxList[0].tasks.push(task)
            
        localStorage.setItem("inbox", JSON.stringify(inboxList))
    }
}
    
export default {projectToStorage, taskToStorage}
