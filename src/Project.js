import Storage from "./Storage"

const Project = (function() {
    
        return function Project(name) {
            this.name = name,
            this.tasks = [],

            this.setTasks = (tasks) => {
                this.tasks = tasks
            }
            this.getTasks = () => {
                return this.tasks
            }

            this.getTask = (taskName) => {
                return this.tasks.find((task) => task.name === taskName);
            }

            this.addTask = (task) => {
                this.tasks.push(task)
            }

            this. deleteTask = (taskName) => {
                this.tasks = this.tasks.filter((t) => t.name !== taskName)
            }
        }
})()

export default Project






// const Project = (function() {
    
//     let project_id = 0;
    
//     const addTodo = (task) => {
//         this.tasks.push(task)
//     }
//     const deleteTodo = (task) => {
//         this.tasks = this.tasks.filter((t) => t !== task)
//     }

//     return function Project(name) {
//         this.id = project_id++,
//         this.name = name,
//         this.tasks = [],
//         addTodo,
//         deleteTodo
//     }
// })()

/* 
    Creating new Project
*/
// const createProject = (name) => {
//     let newProject = new Project(name)
//     return newProject
// }
// export default formProject
