import { ToDoMainComponent } from "./components/ToDoMainComponent";
import { ToDoFormComponent } from "./components/ToDoFormComponent";
import { ToDoListComponent } from "./components/ToDoListComponent";

const root = document.getElementById("root");

const toDo = new ToDoMainComponent(root);
toDo.mount();
window.toDo = toDo;
