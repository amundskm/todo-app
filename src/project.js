import {task} from './task.js';
import {hideButtons, showButtons} from "./hideButtons.js"

const project = (number) => {
  var name = '';
  var description = '';
  var projectNumber = number;
  var numberTasks = 0;

  const openProjectWindow = () => {
    hideButtons();
    var parent = document.getElementById("content");
    var child = document.createElement("div");
    var htmlBlock = `<h1style="padding-left:25%; padding-right:auto;">New Project</h1>
                     <label style="padding-left:10px;">Name:</label>
                     <input type="text" name="name" value="${name}" id="projectName" style="width: 300px; margin-left:25px;">
                     <label style="padding-left:10px;">Description:</label>
                     <textarea name="desc" id="projectDescription"  style="width: 300px; margin-left:25px;">
                       ${description}
                     </textarea>
                     <div style="display: flex; justify-content:  space-evenly;">
                       <button id="projectCancel" style="width: 100px; margin-top: 15px; margin-left: 25px;">Cancel</button>
                       <button id="projectSubmit" style="width: 100px; margin-top: 15px; margin-left: 25px;">Submit</button>
                     </div>`
    child.id = "projectForm";
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
    child.style.zIndex = "100";

    parent.appendChild(child);

  }

  const createNewProjectEventListeners = () => {
    document.getElementById("projectSubmit").addEventListener("click", saveProject);
    document.getElementById("projectCancel").addEventListener("click", removeProjectForm);
  }

  const saveProject = () => {
    if (validateProject()){
      name = document.getElementById("projectName").value;
      description = document.getElementById("projectDescription").value;

      removeProjectForm();
      buildProject();
    }
  }

  const validateProject = () => {
    const projectName = document.getElementById("projectName").value;
    const projectDescription = document.getElementById("projectDescription").value;
    if(projectName === '' || projectDescription === ''){
      alert("Please fill in both boxes.");
      return false;
    } else{
      return true;
    }
  }

  const removeProjectForm = () => {
    var element = document.getElementById("projectForm");
    element.parentNode.removeChild(element);
    showButtons();
  }

  const buildProject = () => {
    var parent = document.getElementById("projectContainer");
    var child = document.createElement("div");
    var htmlBlock = `<h1 id="name${projectNumber}" style="padding-left:25%; padding-right:auto;">${name}</h1>
                     <h4 id="description${projectNumber}"> ${description} </h4>
                     <div style="display: flex; justify-content: space-evenly;">
                       <button id="newTask${projectNumber}">New Task</button>
                       <button id="editProject${projectNumber}">Edit</button>
                       <button id="deleteProject${projectNumber}">Delete</button>
                     </div>`
    child.id = `project${projectNumber}`;
    child.innerHTML = htmlBlock;
    child.style.backgroundColor = "#fff";
    child.style.minWidth = "350px";
    child.style.padding = "5px";
    child.style.border = "1px solid black";
    parent.appendChild(child);

    createProjectEventListeners();
  }

  const createProjectEventListeners = () => {
    document.getElementById(`editProject${projectNumber}`).addEventListener("click", editProject);
    document.getElementById(`deleteProject${projectNumber}`).addEventListener("click", deleteProject);
    document.getElementById(`newTask${projectNumber}`).addEventListener("click", addNewTask);
  }

  const editProject = () => {
    openProjectWindow();
    editProjectEventListeners();
  };

  const editProjectEventListeners = () => {
    document.getElementById("projectSubmit").addEventListener("click", saveEditProject);
    document.getElementById("projectCancel").addEventListener("click", removeProjectForm);
  }

  const saveEditProject = () => {
    if (validateProject()){
      name = document.getElementById("projectName").value;
      description = document.getElementById("projectDescription").value;
      parent = document.getElementById(`project${projectNumber}`);
      document.getElementById(`name${projectNumber}`).innerText = name;
      document.getElementById(`description${projectNumber}`).innerText = description;
      removeProjectForm();
    }
  }

  const deleteProject = () => {
    document.getElementById(`project${projectNumber}`).remove();
  };

  const addNewTask = () => {
    var newTask = task(projectNumber, numberTasks);
    newTask.openTaskWindow();
    newTask.createNewTaskEventListeners();
    numberTasks++
  };

  return {openProjectWindow, createNewProjectEventListeners};
};

export{project}
