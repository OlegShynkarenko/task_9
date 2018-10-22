export class ToDoFormComponent {
  constructor(mountPoint) {
    this.mountPoint = mountPoint;
    this.listStorage = [];
  }

  querySelectors() {
    this.inputField = this.mountPoint.querySelector(".to-do__form-text");
    this.addButton = this.mountPoint.querySelector(".to-do__form-button");
  }

  addEventListeners() {
    this.addButton.addEventListener("click", this.handleAddItem.bind(this));
  }

  handleAddItem() {
    const newItemValue = this.inputField.value;
    this.listStorage.push(newItemValue);
    console.log(this.listStorage);
  }

  mount() {
    this.mountPoint.innerHTML = this.render();
    this.querySelectors();
    this.addEventListeners();
  }

  render() {
    return `
         <form class="to-do__form">
          <input type="text" class="to-do__form-text">
          <button type="button" class="to-do__form-button">Add item</button>  
        </form>      
    `;
  }
}

/*addEventListeners() {
    this.formComponent.addButton.addEventListener('click', () => {
      const newItemValue = this.formComponent.inputField.value;
      const newItem = this.listComponent.toDoList.createElement('li');
      newItem.innerText = newItemValue;
      this.listComponent.toDoList.appendChild(newItem);
    })
  }*/

/*addEventListeners() {
  this.formComponent.addButton.addEventListener('click', this.handleAddItem());
}

handleAddItem() {
  const newItemValue = this.formComponent.inputField.value;
  const newItem = this.listComponent.toDoList.createElement('li');
  newItem.innerText = newItemValue;
  this.listComponent.toDoList.appendChild(newItem);
}*/
