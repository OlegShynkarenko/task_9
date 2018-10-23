import _ from "lodash";

export class ToDoListComponent {
  constructor(mountPoint, listStorage) {
    this.mountPoint = mountPoint;
    this.listStorage = listStorage;
  }

  mount() {
    this.mountPoint.innerHTML = this.render();
  }

  render() {
    return `
      <ol class="to-do__list">
          ${this.listStorage
            .map(item => `<li class="list-item">${item}</li>`)
            .join("")}      
      </ol>
`;
  }
}
