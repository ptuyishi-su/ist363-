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


//array and objects


//basic variable
const cofeeName = "Mocha"
const cofeeHeadline = document.createElement("h2");
cofeeHeadline.textContent= cofeeName 
document.body.appendChild(cofeeHeadline);


//objectss
const coffee = {
  name: "Mocha",
  price: 3.99,
  description: "This is Mocha Coffee"
};

//console.log(coffee.description);

const coffeeOBJHeadline = document.createElement("h2")
coffeeOBJHeadline.textContent= coffee.name;
document.body.appendChild(coffeeOBJHeadline)

const coffees= ["Mocha", "Latte", "espresso"];
//console.log(coffees[2])

coffees.forEach(function(coffee){
  console.log(coffee)
});


