/*function task() {
  let inptValue = document.getElementById("firstImp").text;
  let text =
    ' <div id="border"><input type="checkbox"><span id="val"> test 1</span><button id="delete" type="button">delete</button></div>';
  let v = (document.getElementById("val").innerHTML = inptValue);
  if (document.getElementById("delete").onclick) {
   return (document.getElementById("delete").style.display = "none");
  }
  
  return document.write(v);
  (document.getElementById("task").innerHTML = text);
}
document.getElementById("button").onclick = task;
document.getElementById("delete").onclick = function sterge() {
  return (document.getElementById("delete").style.display = "none");
};*/

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
  //document.getElementById("val").attribute = inptValue;
  span.innerHTML = inptValue;
  button.appendChild(document.createTextNode("delete"));
  //make the complete task
  div.appendChild(input);
  div.appendChild(span);
  div.appendChild(button);
  return document.getElementById("task").appendChild(div);
}
document.getElementById("button").onclick = theTasks;
