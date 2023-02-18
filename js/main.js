import toDoList from "./todolist";
import todoItem from "./todoitem";


const toDoList = new toDoList();

//launch
document.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  //Add listeners

  //Procedural
  //load list objects

  //refresh the page
  refreshPage()
} 

const refreshPage = () => {
  clearListDisplay();
  //renderList();
  //clearItemEntryField();
  //setFocusOnItemEntry
}

const clearListDisplay = () => {
  const parentElement = document.getElementById('listItems');
  deleteContents(parentElement);
}

const deleteContents = (parentElement) => {
  let child = parentElement.lastElementChild;
  while (child) {
    parentElement.removeChild(child);
    child = parentElement.lastElementChild;
  }
}

const renderList = () => {
  const list = toDoList.getList();
  list.forEach((item) => {
    buildListItem(item);
  });
};