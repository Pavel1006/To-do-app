function theTasks() {
  //create the elements
  let div = document.createElement("div");
  let span = document.createElement("span");
  let input = document.createElement("input");
  let button = document.createElement("button");
  //create the atributes
  let idDiv = document.createAttribute("id");
  let idSpan = document.createAttribute("id");
  let idButton = document.createAttribute("id");
  let inpCheck = document.createAttribute("type");
  let buttonAtr = document.createAttribute("type");
  //value of input
  let inptHtml = document.getElementById("firstImp");
  let inptValue = inptHtml.value;
  //set the value of atributes
  idDiv.value = "border";
  idSpan.value = "val";
  idButton.value = "delete";
  inpCheck.value = "checkbox";
  buttonAtr.value = "button";
  //set how's atribute is
  div.setAttributeNode(idDiv);
  span.setAttributeNode(idSpan);
  input.setAttributeNode(inpCheck);
  button.setAttributeNode(idButton);
  button.setAttributeNode(buttonAtr);
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
  inptHtml.value = "";
  //delete button
  button.addEventListener("click", function () {
    return div.parentNode.removeChild(div);
  });
}

document.getElementById("button").onclick = theTasks;
