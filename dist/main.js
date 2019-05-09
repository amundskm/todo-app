/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/hideButtons.js":
/*!****************************!*\
  !*** ./src/hideButtons.js ***!
  \****************************/
/*! exports provided: hideButtons, showButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideButtons\", function() { return hideButtons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showButtons\", function() { return showButtons; });\nfunction hideButtons(){\n  var buttons = document.getElementsByTagName('BUTTON');\n  console.log(buttons);\n  var i;\n  for (i = 0; i < buttons.length; i++){\n    buttons[i].style.display = \"none\";\n  };\n}\n\nfunction showButtons(){\n  var buttons = document.getElementsByTagName('BUTTON');\n  var i;\n  for (i = 0; i < buttons.length; i++){\n    buttons[i].style.display = \"block\";\n  };\n}\n\n\n\n\n//# sourceURL=webpack:///./src/hideButtons.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\nconst main = () => {\n  let numberProjects = 0\n\n  const createNavBar = () => {\n    var parent = document.getElementById(\"content\");\n    var child = document.createElement(\"header\");\n\n    child.id = \"navbar\";\n    child.style.display = \"flex\";\n    child.style.alignItems = \"center\";\n    child.style.width = \"100%\";\n    child.style.height = \"55px\";\n    child.style.backgroundColor = \"#D3D3D3\";\n\n    parent.appendChild(child);\n  }\n\n  const createButton = () => {\n    var parent = document.getElementById(\"navbar\");\n    var child = document.createElement(\"button\");\n\n    child.id = \"newProjectButton\";\n    child.innerText = \"New Project\";\n    child.style.backgroundColor= \"#efefef\";\n    child.style.border= \"none\";\n    child.style.padding= \"15px 32px\";\n    child.style.textAlign= \"center\";\n    child.style.textDecoration= \"none\";\n    child.style.display= \"inline-block\";\n    child.style.fontSize= \"16px\";\n\n    parent.appendChild(child);\n  };\n\n  const createProjectContainer = () => {\n    var parent = document.getElementById(\"content\");\n    var child = document.createElement(\"div\");\n    child.id = \"projectContainer\";\n    child.style.display = \"flex\";\n    child.style.flexWrap =\"nowrap\";\n    child.style.paddingTop = \"60px\";\n    parent.appendChild(child);\n  }\n\n  const createEventListener = () => {\n    document.getElementById(\"newProjectButton\").addEventListener(\"click\", newProject);\n  }\n\n  const newProject = () => {\n      var start = Object(_project_js__WEBPACK_IMPORTED_MODULE_0__[\"project\"])(numberProjects);\n      start.openProjectWindow();\n      start.createNewProjectEventListeners();\n      numberProjects++;\n  }\n\n  createNavBar();\n  createButton();\n  createProjectContainer();\n  createEventListener();\n\n};\n\nconst start = main();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"project\", function() { return project; });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _hideButtons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hideButtons.js */ \"./src/hideButtons.js\");\n\n\n\nconst project = (number) => {\n  var name = '';\n  var description = '';\n  var projectNumber = number;\n  var numberTasks = 0;\n\n  const openProjectWindow = () => {\n    Object(_hideButtons_js__WEBPACK_IMPORTED_MODULE_1__[\"hideButtons\"])();\n    var parent = document.getElementById(\"content\");\n    var child = document.createElement(\"div\");\n    var htmlBlock = `<h1style=\"padding-left:25%; padding-right:auto;\">New Project</h1>\n                     <label style=\"padding-left:10px;\">Name:</label>\n                     <input type=\"text\" name=\"name\" value=\"${name}\" id=\"projectName\" style=\"width: 300px; margin-left:25px;\">\n                     <label style=\"padding-left:10px;\">Description:</label>\n                     <textarea name=\"desc\" id=\"projectDescription\"  style=\"width: 300px; margin-left:25px;\">\n                       ${description}\n                     </textarea>\n                     <div style=\"display: flex; justify-content:  space-evenly;\">\n                       <button id=\"projectCancel\" style=\"width: 100px; margin-top: 15px; margin-left: 25px;\">Cancel</button>\n                       <button id=\"projectSubmit\" style=\"width: 100px; margin-top: 15px; margin-left: 25px;\">Submit</button>\n                     </div>`\n    child.id = \"projectForm\";\n    child.innerHTML = htmlBlock;\n    child.style.position = \"absolute\";\n    child.style.display = \"flex\";\n    child.style.flexDirection = \"column\";\n    child.style.justifyContent = \"center\";\n    child.style.backgroundColor = \"#fff\";\n    child.style.border = \"1px solid #222\"\n    child.style.height = \"225px\";\n    child.style.width = \"400px\";\n    child.style.top= \"20%\";\n    child.style.left= \"35%\";\n    child.style.zIndex = \"100\";\n\n    parent.appendChild(child);\n\n  }\n\n  const createNewProjectEventListeners = () => {\n    document.getElementById(\"projectSubmit\").addEventListener(\"click\", saveProject);\n    document.getElementById(\"projectCancel\").addEventListener(\"click\", removeProjectForm);\n  }\n\n  const saveProject = () => {\n    if (validateProject()){\n      name = document.getElementById(\"projectName\").value;\n      description = document.getElementById(\"projectDescription\").value;\n\n      removeProjectForm();\n      buildProject();\n    }\n  }\n\n  const validateProject = () => {\n    const projectName = document.getElementById(\"projectName\").value;\n    const projectDescription = document.getElementById(\"projectDescription\").value;\n    if(projectName === '' || projectDescription === ''){\n      alert(\"Please fill in both boxes.\");\n      return false;\n    } else{\n      return true;\n    }\n  }\n\n  const removeProjectForm = () => {\n    var element = document.getElementById(\"projectForm\");\n    element.parentNode.removeChild(element);\n    Object(_hideButtons_js__WEBPACK_IMPORTED_MODULE_1__[\"showButtons\"])();\n  }\n\n  const buildProject = () => {\n    var parent = document.getElementById(\"projectContainer\");\n    var child = document.createElement(\"div\");\n    var htmlBlock = `<h1 id=\"name${projectNumber}\" style=\"padding-left:25%; padding-right:auto;\">${name}</h1>\n                     <h4 id=\"description${projectNumber}\"> ${description} </h4>\n                     <div style=\"display: flex; justify-content: space-evenly;\">\n                       <button id=\"newTask${projectNumber}\">New Task</button>\n                       <button id=\"editProject${projectNumber}\">Edit</button>\n                       <button id=\"deleteProject${projectNumber}\">Delete</button>\n                     </div>`\n    child.id = `project${projectNumber}`;\n    child.innerHTML = htmlBlock;\n    child.style.backgroundColor = \"#fff\";\n    child.style.minWidth = \"350px\";\n    child.style.padding = \"5px\";\n    child.style.border = \"1px solid black\";\n    parent.appendChild(child);\n\n    createProjectEventListeners();\n  }\n\n  const createProjectEventListeners = () => {\n    document.getElementById(`editProject${projectNumber}`).addEventListener(\"click\", editProject);\n    document.getElementById(`deleteProject${projectNumber}`).addEventListener(\"click\", deleteProject);\n    document.getElementById(`newTask${projectNumber}`).addEventListener(\"click\", addNewTask);\n  }\n\n  const editProject = () => {\n    openProjectWindow();\n    editProjectEventListeners();\n  };\n\n  const editProjectEventListeners = () => {\n    document.getElementById(\"projectSubmit\").addEventListener(\"click\", saveEditProject);\n    document.getElementById(\"projectCancel\").addEventListener(\"click\", removeProjectForm);\n  }\n\n  const saveEditProject = () => {\n    if (validateProject()){\n      name = document.getElementById(\"projectName\").value;\n      description = document.getElementById(\"projectDescription\").value;\n      parent = document.getElementById(`project${projectNumber}`);\n      document.getElementById(`name${projectNumber}`).innerText = name;\n      document.getElementById(`description${projectNumber}`).innerText = description;\n      removeProjectForm();\n    }\n  }\n\n  const deleteProject = () => {\n    document.getElementById(`project${projectNumber}`).remove();\n  };\n\n  const addNewTask = () => {\n    var newTask = Object(_task_js__WEBPACK_IMPORTED_MODULE_0__[\"task\"])(projectNumber, numberTasks);\n    newTask.openTaskWindow();\n    newTask.createNewTaskEventListeners();\n    numberTasks++\n  };\n\n  return {openProjectWindow, createNewProjectEventListeners};\n};\n\n\n\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/*! exports provided: task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"task\", function() { return task; });\n/* harmony import */ var _hideButtons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hideButtons.js */ \"./src/hideButtons.js\");\n\n\nconst task = (pNumber, tNumber) => {\n  var taskNumber = tNumber;\n  var projectNumber = pNumber;\n  var name='';\n  var description='';\n  var dueDate='';\n  var priority=0;\n\n  const openTaskWindow = () => {\n    Object(_hideButtons_js__WEBPACK_IMPORTED_MODULE_0__[\"hideButtons\"])();\n\n    var windowParent = document.getElementById(\"content\");\n    var child = document.createElement(\"div\");\n    var htmlBlock = `<h1style=\"padding-left:25%; padding-right:auto;\">New Task</h1>\n                     <label style=\"padding-left:10px;\">Name:</label>\n                     <input type=\"text\" name=\"name\" value=\"${name}\" id=\"taskName\" style=\"width: 300px; margin-left:25px;\">\n                     <label style=\"padding-left:10px;\">Description:</label>\n                     <textarea name=\"desc\" id=\"taskDescription\"  style=\"width: 300px; margin-left:25px;\">\n                       ${description}\n                     </textarea>\n                     <div style=\"display: flex; justify-content:  space-evenly;\">\n                       <button id=\"taskCancel\" style=\"width: 100px; margin-top: 15px; margin-left: 25px;\">Cancel</button>\n                       <button id=\"taskSubmit\" style=\"width: 100px; margin-top: 15px; margin-left: 25px;\">Submit</button>\n                     </div>`\n    child.id = \"taskForm\";\n    child.innerHTML = htmlBlock;\n    child.style.position = \"absolute\";\n    child.style.display = \"flex\";\n    child.style.flexDirection = \"column\";\n    child.style.justifyContent = \"center\";\n    child.style.backgroundColor = \"#fff\";\n    child.style.border = \"1px solid #222\"\n    child.style.height = \"225px\";\n    child.style.width = \"400px\";\n    child.style.top= \"20%\";\n    child.style.left= \"35%\";\n    child.style.marginTop = \"113px\";\n    child.style.marginLeft = \"200px\";\n    child.style.zIndex = \"100\";\n\n    windowParent.appendChild(child);\n\n\n  }\n\n  const createNewTaskEventListeners = () => {\n    document.getElementById(\"taskSubmit\").addEventListener(\"click\", saveTask);\n    document.getElementById(\"taskCancel\").addEventListener(\"click\", removeTaskForm);\n  }\n\n  const saveTask = () => {\n    if (validateTask()){\n      name = document.getElementById(\"taskName\").value;\n      description = document.getElementById(\"taskDescription\").value;\n\n      removeTaskForm();\n      buildTask();\n    }\n  }\n\n  const validateTask = () => {\n    const taskName = document.getElementById(\"taskName\").value;\n    const taskDescription = document.getElementById(\"taskDescription\").value;\n    if(taskName === '' || taskDescription === ''){\n      alert(\"Please fill in both boxes.\");\n      return false;\n    } else{\n      return true;\n    }\n  }\n\n  const removeTaskForm = () => {\n    var element = document.getElementById(\"taskForm\");\n    element.parentNode.removeChild(element);\n    Object(_hideButtons_js__WEBPACK_IMPORTED_MODULE_0__[\"showButtons\"])();\n  }\n\n  const buildTask = () => {\n    var parent = document.getElementById(`project${projectNumber}`);\n    var child = document.createElement(\"div\");\n    var htmlBlock = `<h3 id=\"name${taskNumber}\" style=\"padding-left:25%; padding-right:auto;\">${name}</h1>\n                     <p id=\"description${taskNumber}\"> ${description} </p>\n                     <button id=\"editTask${taskNumber}\">Edit</button>\n                     <button id=\"deleteTask${taskNumber}\">Delete</button>\n                    `\n    child.id = `task${taskNumber}`;\n    child.innerHTML = htmlBlock;\n    child.style.backgroundColor = \"#fff\";\n    child.style.padding = \"5px\";\n    child.style.border = \"1px solid black\";\n    parent.appendChild(child);\n\n    createTaskEventListeners();\n  }\n\n  const createTaskEventListeners = () => {\n    document.getElementById(`editTask${taskNumber}`).addEventListener(\"click\", editTask);\n    document.getElementById(`deleteTask${taskNumber}`).addEventListener(\"click\", deleteTask);\n  }\n\n  const editTask = () => {\n    openTaskWindow();\n    editTaskEventListeners();\n  };\n\n  const editTaskEventListeners = () => {\n    document.getElementById(\"taskSubmit\").addEventListener(\"click\", saveEditTask);\n    document.getElementById(\"taskCancel\").addEventListener(\"click\", removeTaskForm);\n  }\n\n  const saveEditTask = () => {\n    if (validateTask()){\n      name = document.getElementById(\"taskName\").value;\n      description = document.getElementById(\"taskDescription\").value;\n      parent = document.getElementById(`task${taskNumber}`);\n      document.getElementById(`name${taskNumber}`).innerText = name;\n      document.getElementById(`task${taskNumber}`).innerText = description;\n      removeTaskForm();\n    }\n  }\n\n  const deleteTask = () => {\n    document.getElementById(`task{taskNumber}`).remove();\n  };\n\n  return {openTaskWindow, createNewTaskEventListeners};\n};\n\n\n\n\n//# sourceURL=webpack:///./src/task.js?");

/***/ }),

/***/ 0:
/*!***********************************************************!*\
  !*** multi ./src/project.js ./src/task.js ./src/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /home/amundskm/enviroment/todo-app/src/project.js */\"./src/project.js\");\n__webpack_require__(/*! /home/amundskm/enviroment/todo-app/src/task.js */\"./src/task.js\");\nmodule.exports = __webpack_require__(/*! /home/amundskm/enviroment/todo-app/src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/project.js_./src/task.js_./src/index.js?");

/***/ })

/******/ });