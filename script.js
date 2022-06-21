//Creating the settings pop up box
let settings = document.querySelector(".settings");
let show = document.querySelector(".show");
let closeButton = document.querySelector(".closeButton");
let cancelButton = document.getElementById("cancelButton");

function updatedNameValue() {
  var taskName = document.getElementById("taskName").value;
  
}
console.log(taskName);

function updatedDateValue() {
  var taskDate = document.getElementById("taskDate").value;
}

function updatedTimeValue() {
  var taskTime = document.getElementById("taskTime").value;
}

function updatedPriorityValue() {
  var taskPriority = document.getElementById("taskPriority").value;
}


/*function myFunction() {
  var x = document.getElementById("mySelect").value;
  document.getElementById("demo").innerHTML = "You selected: " + x;
}*/

var submitTask = document.getElementById("submitTask");

const allTasks = [];




function addTask() {
  
  var wholeTask = {
    Name : taskName,
    Date : taskDate,
    Time : taskTime,
    Priority: taskPriority
  }

  allTasks.push(wholeTask);

  console.log(wholeTask);
  
}


  

  //document.createElement("h1").innerHTML = wholeTask[0];





/*<div id="task1" class="tasks">
          <label id="checkboxLabel">
            <input type="checkbox" class="checkbox">
            <span></span>
            Task Name
          </label>
          
          <p id="dueDate1">Due Date</p>
          <p id="estimatedTime1"><em>Estimated Time Left:</em> Days:0 Hours:0 Minutes:0</p>
        </div>*/

//console.log(wholeTask);



function toggleSettings() {
  
    settings.classList.toggle("showSettings");
  
}
function settingsOnClick(event) {
  
    if (event.target === settings) {
        toggleSettings();
    }
}

submitTask.addEventListener("click", addTask);

submitTask.addEventListener("click", toggleSettings);

show.addEventListener("click", toggleSettings);

closeButton.addEventListener("click", toggleSettings);

cancelButton.addEventListener("click", toggleSettings);

window.addEventListener("click", settingsOnClick);