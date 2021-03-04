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
  //applend the text
  span.innerHTML = inptValue;
  button.appendChild(document.createTextNode("delete"));
  //make the complete task
  div.appendChild(input);
  div.appendChild(span);
  div.appendChild(button);
  //delete button
  if (button.clicked === true) {
    return (div.innerHTML = "");
  }
  //check
  //if (document.getElementById("delete").clicked === true) {
  // alert("button was clicked");
  //}
  //result
  return document.getElementById("task").appendChild(div);
}
document.getElementById("button").onclick = theTasks;
