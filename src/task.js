import {hideButtons, showButtons} from "./hideButtons.js"

const task = (pNumber, tNumber) => {
  var taskNumber = tNumber;
  var projectNumber = pNumber;
  var name='';
  var description='';
  var dueDate='';
  var priority=0;

  const openTaskWindow = () => {
    hideButtons();

    var windowParent = document.getElementById("content");
    var child = document.createElement("div");
    var htmlBlock = `<h1style="padding-left:25%; padding-right:auto;">New Task</h1>
                     <label style="padding-left:10px;">Name:</label>
                     <input type="text" name="name" value="${name}" id="taskName" style="width: 300px; margin-left:25px;">
                     <label style="padding-left:10px;">Description:</label>
                     <textarea name="desc" id="taskDescription"  style="width: 300px; margin-left:25px;">
                       ${description}
                     </textarea>
                     <div style="display: flex; justify-content:  space-evenly;">
                       <button id="taskCancel" style="width: 100px; margin-top: 15px; margin-left: 25px;">Cancel</button>
                       <button id="taskSubmit" style="width: 100px; margin-top: 15px; margin-left: 25px;">Submit</button>
                     </div>`
    child.id = "taskForm";
    child.innerHTML = htmlBlock;
    child.style.position = "absolute";
    child.style.display = "flex";
    child.style.flexDirection = "column";
    child.style.justifyContent = "center";
    child.style.backgroundColor = "#fff";
    child.style.border = "1px solid #222"
    child.style.height = "225px";
    child.style.width = "400px";
    child.style.top= "20%";
    child.style.left= "35%";
    child.style.marginTop = "113px";
    child.style.marginLeft = "200px";
    child.style.zIndex = "100";

    windowParent.appendChild(child);


  }

  const createNewTaskEventListeners = () => {
    document.getElementById("taskSubmit").addEventListener("click", saveTask);
    document.getElementById("taskCancel").addEventListener("click", removeTaskForm);
  }

  const saveTask = () => {
    if (validateTask()){
      name = document.getElementById("taskName").value;
      description = document.getElementById("taskDescription").value;

      removeTaskForm();
      buildTask();
    }
  }

  const validateTask = () => {
    const taskName = document.getElementById("taskName").value;
    const taskDescription = document.getElementById("taskDescription").value;
    if(taskName === '' || taskDescription === ''){
      alert("Please fill in both boxes.");
      return false;
    } else{
      return true;
    }
  }

  const removeTaskForm = () => {
    var element = document.getElementById("taskForm");
    element.parentNode.removeChild(element);
    showButtons();
  }

  const buildTask = () => {
    var parent = document.getElementById(`project${projectNumber}`);
    var child = document.createElement("div");
    var htmlBlock = `<h3 id="name${taskNumber}" style="padding-left:25%; padding-right:auto;">${name}</h1>
                     <p id="description${taskNumber}"> ${description} </p>
                     <button id="editTask${taskNumber}">Edit</button>
                     <button id="deleteTask${taskNumber}">Delete</button>
                    `
    child.id = `task${taskNumber}`;
    child.innerHTML = htmlBlock;
    child.style.backgroundColor = "#fff";
    child.style.padding = "5px";
    child.style.border = "1px solid black";
    parent.appendChild(child);

    createTaskEventListeners();
  }

  const createTaskEventListeners = () => {
    document.getElementById(`editTask${taskNumber}`).addEventListener("click", editTask);
    document.getElementById(`deleteTask${taskNumber}`).addEventListener("click", deleteTask);
  }

  const editTask = () => {
    openTaskWindow();
    editTaskEventListeners();
  };

  const editTaskEventListeners = () => {
    document.getElementById("taskSubmit").addEventListener("click", saveEditTask);
    document.getElementById("taskCancel").addEventListener("click", removeTaskForm);
  }

  const saveEditTask = () => {
    if (validateTask()){
      name = document.getElementById("taskName").value;
      description = document.getElementById("taskDescription").value;
      parent = document.getElementById(`task${taskNumber}`);
      document.getElementById(`name${taskNumber}`).innerText = name;
      document.getElementById(`task${taskNumber}`).innerText = description;
      removeTaskForm();
    }
  }

  const deleteTask = () => {
    document.getElementById(`task{taskNumber}`).remove();
  };

  return {openTaskWindow, createNewTaskEventListeners};
};

export{task}
