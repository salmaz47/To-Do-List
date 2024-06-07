const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask()
{
  if (inputBox.value.length==0)
  {
    alert("Kindly Add Task Name!!!!")
  }
  else
  {
    let li =document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u2715";
    li.appendChild(span);
  }
  inputBox.value="";
  save()
}
 listContainer.addEventListener("click" ,function(e){
  if (e.target.tagName === "LI")
  {
    e.target.classList.toggle("checked");
  save()
  }
 else if (e.target.tagName === "SPAN")
 {
  e.target.parentElement.remove();
  save()
 }
},false) 

function save()
{
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask()
{
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();