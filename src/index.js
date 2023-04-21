import "./styles/main.css"
import { arrow, inboxbtn_onclick, todaybtn_onblick, weekbtn_onclick } from "./animation";
import todaybtn_onclick from "./animation";
import formProject from "./Project";
import formTask from "./Task";
import {projectToStorage, taskToStorage} from "./Storage"
import {createProjectContent, initalizeButtons} from "./Ui";


formProject.init()
formTask.init()
initalizeButtons()


