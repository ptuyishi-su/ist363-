// console.log("yeaaah")
//1. create variables for buttons
const ascendingBtn =document.getElementById("ascendingBtn")
const descendingBtn =document.getElementById("descendingBtn")
const coffeeList =document.getElementById("coffeeList")
const priceRanges = document.getElementById("priceRanges")

let filteredCoffees=[...coffees];
let sortDirection ="ascending";
//2 functions
const buildTextElement=(element, className, content) =>{
    const newElement = document.createElement(element);
    newElement.classList.add(className);
    newElement.textContent = content;
    return newElement;
}
const displayList=(arr)=>{
    purgeList();
    arr.forEach((coffee)=>{
        // 1 . deconstruct the coffee object
        const { title, price, description, image } = coffee;
    
        // 2. create the html elements
        const coffeeArticle = document.createElement("article");
        coffeeArticle.classList.add("coffee-item");
    
        const coffeeImage = document.createElement("img");
        coffeeImage.src = `images/${image.fileName}`;
        coffeeImage.width = image.width;
        coffeeImage.height = image.height;
        coffeeImage.alt = image.altText;
    
        
        const coffeeTitle = buildTextElement("h2", "coffee-title", title);
        const coffeePrice = buildTextElement("h3", "coffee-price", `$${price}`);
    
        // const coffeeDescription = document.createElement("p");
        // coffeeDescription.classList.add("coffee-description");
        // coffeeDescription.textContent = description;
        const coffeeDescription = buildTextElement("h3", "coffee-description", description);

    
        // 3. append the elements to the parent article
        coffeeArticle.appendChild(coffeeImage);
        coffeeArticle.appendChild(coffeeTitle);
        coffeeArticle.appendChild(coffeePrice);
        coffeeArticle.appendChild(coffeeDescription);
    
        // 4. append the article to the body
        coffeeList.appendChild(coffeeArticle);
    }); // end of coffees forEach method

};
const purgeList = () =>{
    coffeeList.innerHTML="";
}  
const sortListByDirection=(direction, arr)=>{
    // console.log({direction});
    sortDirection= "direction";
    const sortedListArr = [...arr].sort((a,b) =>{
        if (direction=== "ascending"){
            if (a.title < b.title){
                return -1;
            }
        
        } else {
            if (a.title > b.title){
                return -1;
            }
        }
    });
    return sortedListArr
}


//3. create event listneres for buttons
ascendingBtn.addEventListener("click", function() {
    //console.log("ascending button has been clicked");
    // purgeList();
    const sortedList = sortListByDirection("ascending", filteredCoffees);
    //console.log({sortedList});
    displayList(sortedList);
}); 

descendingBtn.addEventListener("click", function(){
     console.log("descending button has been clicked");
    //  purgeList();
     const sortedList =sortListByDirection("descending", filteredCoffees)
    //  console.log({sortedList});
    displayList(sortedList);

});

priceRanges.addEventListener("change", (event)=>{
    console.log("price range has been changed");
    console.log(event.target.value)
    const selectedRange = event.target.value;

    if (selectedRange==="all"){
        // purgeList();
        // displayList(coffees);
        filteredCoffees = sortListByDirection(sortDirection, [...coffees])
    } else {
        const [minValue, maxValue] = selectedRange.split("-");
        console.log({minValue, maxValue});
        const tempFilteredCofees = getFilteredCoffees(minValue,maxValue);
        filteredCoffees= sortListByDirection(sortDirection, tempFilteredCofees)


    // purgeList();
    }
    displayList(filteredCoffees)

});
    

const getFilteredCoffees=(minValue, maxValue) => {
    const filteredArr =coffees.filter((coffees) => {
        const { price} =coffees;
        return price >= minValue && price <= maxValue;
    });
    console.log({filteredArr})
    return filteredArr;
}


const sortedStaterList = sortListByDirection(sortDirection, filteredCoffees);
displayList( sortedStaterList)
