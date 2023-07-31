import { getDate } from 'date-fns'

const Task = (function(){
    return function Task(arg = {}) {
        this.name  = arg.name || ""
        this.description = arg.description
        this.priority = arg.priority
        this.duedate = arg.dueDate
        this.checked = arg.checked || false

        this.setName = (name) => {
            this.name = name
        }
        
        this.setDescription = (descritpion) => {
            this.description = descritpion
        }

        this.setDueDate = (duedate) => {
            this.duedate = duedate
        }

        this.setPriority = (priority) => {
            this.priority = priority
        }

        this.setChecked = (boolean) => {
            this.checked = boolean
        }

        this.getChecked = () => {
            return this.checked
        }
        
        this.getDueDate = () => {
            return this.duedate
        }
    }
})()


export default Task
