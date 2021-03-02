document.getElementById("button").onclick = function task() {
  let inptValue = document.getElementById("firstImp").value;
  let taskInpt = (document.getElementById("task").innerHTML = inptValue);
  let text =
    ' <div><input id="border" type="checkbox"><span> value</span><button type="button">delete</button></div><br>';

  return (document.getElementById("task").innerHTML = text);
};
