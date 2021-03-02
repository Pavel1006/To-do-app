document.getElementById("button").onclick = function task() {
  let inptValue = document.getElementById("firstImp").value;
  let text =
    ' <div id="border"><input type="checkbox"><span id="val"> test 1</span><button id="delete" type="button">delete</button></div>';
  /* document.getElementById("val").innerHTML = inptValue;
  if (document.getElementById("delete").onclick) {
   return (document.getElementById("delete").style.display = "none");
  }
  */
  return (document.getElementById("task").innerHTML = text);
};
