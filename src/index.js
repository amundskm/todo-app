import {project} from './project.js';

const main = () => {
  let numberProjects = 0

  const createNavBar = () => {
    var parent = document.getElementById("content");
    var child = document.createElement("header");

    child.id = "navbar";
    child.style.display = "flex";
    child.style.alignItems = "center";
    child.style.width = "100%";
    child.style.height = "55px";
    child.style.backgroundColor = "#D3D3D3";

    parent.appendChild(child);
  }

  const createButton = () => {
    var parent = document.getElementById("navbar");
    var child = document.createElement("button");

    child.id = "newProjectButton";
    child.innerText = "New Project";
    child.style.backgroundColor= "#efefef";
    child.style.border= "none";
    child.style.padding= "15px 32px";
    child.style.textAlign= "center";
    child.style.textDecoration= "none";
    child.style.display= "inline-block";
    child.style.fontSize= "16px";

    parent.appendChild(child);
  };

  const createProjectContainer = () => {
    var parent = document.getElementById("content");
    var child = document.createElement("div");
    child.id = "projectContainer";
    child.style.display = "flex";
    child.style.flexWrap ="nowrap";
    child.style.paddingTop = "60px";
    parent.appendChild(child);
  }

  const createEventListener = () => {
    document.getElementById("newProjectButton").addEventListener("click", newProject);
  }

  const newProject = () => {
      var start = project(numberProjects);
      start.openProjectWindow();
      start.createNewProjectEventListeners();
      numberProjects++;
  }

  createNavBar();
  createButton();
  createProjectContainer();
  createEventListener();

};

const start = main();
