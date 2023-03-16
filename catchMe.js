var target=document.querySelector(".catch");
target.addEventListener("mouseover",changePosition);
var min=0;
var max=90;
function changePosition(){
    console.log("hi");
var tp=Math.round(Math.random()*(max-min+1))+min;
var lt=Math.round(Math.random()*(max-min+1))+min;
target.style.top=tp+"%";
target.style.left=lt+"%";
}


