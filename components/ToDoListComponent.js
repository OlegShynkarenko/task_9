export class ToDoListComponent {
  constructor(mountPoint) {
    this.mountPoint = mountPoint;
  }

  querySelectors() {
    this.toDoList = this.mountPoint.querySelector(".to-do__list");
  }

  mount() {
    this.mountPoint.innerHTML = this.render();
    this.querySelectors();
  }

  render() {
    return `
      <ol class="to-do__list"></ol>
    `;
  }
}
