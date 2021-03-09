function createTask() {
  //create the elements
  let div = document.createElement("div");
  let span = document.createElement("span");
  let input = document.createElement("input");
  let button = document.createElement("button");
  let inptValue = document.getElementById("firstImp").value;
  //put the atributes
  input.type = "checkbox";
  div.id = "border";
  input.id = "input";
  span.id = "val";
  button.id = "delete";
  button.type = "button";
  //append the text
  span.innerHTML = inptValue;
  button.appendChild(document.createTextNode("delete"));
  //make the complete task
  div.appendChild(input);
  div.appendChild(span);
  div.appendChild(button);
  //result
  document.getElementById("task").appendChild(div);
  //clean the input
  document.getElementById("firstImp").value = "";
  //delete button
  button.addEventListener("click", () => {
    div.parentNode.removeChild(div);
  });
}

document.getElementById("button").onclick = createTask;
