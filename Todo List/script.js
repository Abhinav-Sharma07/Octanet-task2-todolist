document.addEventListener("DOMContentLoaded", function () {
    var addTaskBtn = document.getElementById("addTaskBtn");
    var taskInput = document.getElementById("taskInput");
    var prioritySelect = document.getElementById("prioritySelect");
    var taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function () {
        var task = taskInput.value.trim();
        var priority = prioritySelect.value;

        if (task !== "") {
            var li = document.createElement("li");
            li.classList.add(priority);
            li.innerHTML = '<span>' + task + '</span>';

            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function () {
                li.remove();
            });
            li.appendChild(deleteButton);

            var upButton = document.createElement("button");
            upButton.textContent = "Move Up";
            upButton.addEventListener("click", function () {
                var prevLi = li.previousElementSibling;
                if (prevLi) {
                    taskList.insertBefore(li, prevLi);
                }
            });
            li.appendChild(upButton);

            var downButton = document.createElement("button");
            downButton.textContent = "Move Down";
            downButton.addEventListener("click", function () {
                var nextLi = li.nextElementSibling;
                if (nextLi) {
                    taskList.insertBefore(nextLi, li);
                }
            });
            li.appendChild(downButton);

            var doneButton = document.createElement("button");
            doneButton.textContent = "Mark as Done";
            doneButton.addEventListener("click", function () {
                li.classList.toggle("done");
            });
            li.appendChild(doneButton);

            taskList.appendChild(li);
            taskInput.value = "";
            prioritySelect.value = "low";
        }
    });

    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTaskBtn.click();
        }
    });
});