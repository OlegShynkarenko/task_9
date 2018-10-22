import { ToDoFormComponent } from "./ToDoFormComponent";
import { ToDoListComponent } from "./ToDoListComponent";

export class ToDoMainComponent {
  constructor(mountPoint) {
    this.mountPoint = mountPoint;
  }

  querySelectors() {
    this.toDoList = this.mountPoint.querySelector(".to-do__list-container");
    this.formContainer = this.mountPoint.querySelector(".to-do__add-form");
  }

  mountChildren() {
    this.listComponent = new ToDoListComponent(this.toDoList);
    this.listComponent.mount();
    this.formComponent = new ToDoFormComponent(this.formContainer);
    this.formComponent.mount();
  }

  mount() {
    this.mountPoint.innerHTML = this.render();
    this.querySelectors();
    this.mountChildren();
  }

  render() {
    return `
       <div class="to-do__list-container"></div>
       <div class="to-do__add-form"></div>       
    `;
  }
}
