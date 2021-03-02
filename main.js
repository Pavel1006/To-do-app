document.getElementById("button").onclick = function task() {
  let inptValue = document.getElementById("firstImp").value;
  return (document.getElementById("task").innerHTML = inptValue);
};
