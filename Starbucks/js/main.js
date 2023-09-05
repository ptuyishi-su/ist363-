//console.log("js has been loaded");

//variable, methods and functions

//1. variables
const myName= "Patrick Tuyishime"
console.log(myName)

const myAge=21
const myCity="Syracuse"

console.log(myAge,myCity)
const introduction =`Hi, my name is ${myName}, I'm ${myAge}, and I'm from ${myCity}.`;
console.log(introduction)

//2. methods
const menuBtn=document.getElementById("menuBtn");
const overlay=document.getElementById("overlay");
const closeBtn =document.getElementById("closeBtn");
//"event name", callback function
menuBtn.addEventListener("click", function(){
  //console.log("menuBtn has been clicked")
  overlay.classList.add("active")
});//end of menuBtn click  event 

closeBtn.addEventListener("click", function(){
  overlay.classList.remove("active");
}); //end of closeBtn click event 

