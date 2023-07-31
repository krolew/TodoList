import Project from "./Project";
import { isToday, isThisWeek, isSameWeek} from 'date-fns'

const ProjectList = (function(){
    return function ProjectList() {
        
        this.projects = []
        this.projects.push(new Project("Inbox"))
        this.projects.push(new Project("Today"))
        this.projects.push(new Project("Week"))
        
        this.setProjects = (projects) => {
            this.projects = projects
        }

        this.getProjects = () =>{
            return this.projects
        }
        
        this.getProject = (projectName) => {
            return this.projects.find((project) => project.name === projectName);
        }
        
        this.addProject = (project) => {
            if (this.getProject(project.name))
                return
            this.projects.push(project)
        }

        this.deleteProject = (projectName) => {
            this.projects = this.projects.filter((project) => project.name !== projectName)
        }

        this.updateTodayProject = () => {
            this.projects[1].tasks = []

            this.projects.forEach((project) => {
                if (project.name === "Today" || project.name === "Week")
                    return

                project.getTasks()
                .forEach
                ((task) => {
                    let date = new Date(task.getDueDate())
                    if (isToday(date))
                    {
                        task.projectName = project.name
                        this.projects[1].tasks.push(task)
                    }
                })    
            })
        }

        this.updateWeekProject = () => {
            this.projects[2].tasks = []

            this.projects.forEach((project) => {
                if (project.name === "Today" || project.name === "Week")
                    return

                project.getTasks()
                .forEach
                ((task) => {
                    let date = new Date(task.getDueDate())
                    let isDateThisWeek = isSameWeek(date, new Date(), {weekStartsOn: 1})
                    
                    if (isDateThisWeek)
                    {
                        task.projectName = project.name
                        this.projects[2].tasks.push(task)
                    }
                })    
            })

        }
    }

})()

export default ProjectList