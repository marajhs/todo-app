let input = document.getElementById("taskInput");
let addbtn = document.getElementById("addbtn");
let taskList = document.getElementById("task");

addbtn.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    let li = document.createElement("li");
    let taskTextSpan = document.createElement("span"); // Span for task text
    taskTextSpan.textContent = input.value;
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    // Add event listener for delete button
    deleteButton.addEventListener("click", function () {
      li.remove(); // Remove the parent <li> when the button is clicked
    });

    li.appendChild(taskTextSpan); // Append the span first
    li.appendChild(deleteButton); // Then append the button
    taskList.appendChild(li);
    input.value = "";
  }
});
