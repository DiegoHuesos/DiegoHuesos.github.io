//Button function:
 function close(elementId){
    var element= document.getElementById(elementId);
    element.parentNode.removeChild(element);
} 

function generateId(){

//Create newDiv::
var newDiv=document.createElement("div");


//Create new botton "x":
var closeButton=document.createElement("button");
var x=document.createTextNode("x");
closeButton.appendChild(x);

//Create image:
var img = document.createElement("img");
img.setAttribute("src", "user.png");
img.setAttribute("width", "80px");


//Generate random ID, save it as String:
var rand= Math.floor((Math.random() * 1000) + 1);
var t=document.createTextNode(String(rand));

//Give a random ID to the object:
newDiv.id=rand;

//Add newDiv to the container that has flexbok property:
document.getElementById("container").appendChild(newDiv);

//Add all the elements of the newDiv:
newDiv.appendChild(closeButton);
newDiv.appendChild(img);
newDiv.appendChild(document.createElement("br"));
newDiv.appendChild(t);


//Add event to the closeButton at the final of the script in order to don't have propagation problems:
closeButton.addEventListener("click", close.bind(this, rand) ); 
}