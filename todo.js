document.addEventListener("DOMContentLoaded", function() {
    var taskInput = document.getElementById("taskInput");
    var addTaskBtn = document.getElementById("addTaskBtn");
    var taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function() {
        var task = taskInput.value;

        if (task !== "") {
            var li = document.createElement("li");
            li.textContent = task;

            li.addEventListener("click", function() {
                li.classList.toggle("completed");
            });

            taskList.appendChild(li);
            taskInput.value = "";
        }
    });
});