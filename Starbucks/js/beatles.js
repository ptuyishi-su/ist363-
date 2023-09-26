// 1. learn how to write arrow function
// old method
// function calculateAverage(a,b){
//     const results=(a+b)/2;
//     return results
// }

const calculateAverage = (a, b) => {
    return (a+b)/2;
}
console.log(calculateAverage(4,27))

const addTen =(num)=>{
    return num+10;
}

console.log(addTen(10))


// 2. review forEach array method
// const beatles=["Paul", "George", "Ringo", "John"];
// //console.log(beatles)

// // beatles.forEach((beatle) => {
//     // console.log({beatle})
// // });

// // review sort Array methods
// // beatles.sort();
// // console.log({beatles});
// const sortedBeatles=[...beatles].sort((a,b) =>{
//     if (a < b) {
//         return -1
//     }
// })
// console.log({sortedBeatles})

const beatles =[
    {
        name: "Paul",
        age: 80
    },
    {
        name: "George",
        age: 61
    },
    {
        name: "Ringo",
        age: 53
    },
    {
        name: "John",
        age: 90
    }
];

const sortedBeatlesByAge= [...beatles].sort((a,b) =>{
    if (a.age <b.age){
        return -1;
    }
});
console.log(sortedBeatlesByAge);
