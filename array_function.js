const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

/*FILTER
Get characters with mass greater than 100
Get characters with height less than 200
Get all male characters
Get all female characters*/
const greater100Characters = characters.filter((element) =>{
    return element.mass > 100;
})
console.log({greater100Characters})
const shorterChar = characters.filter((element) => {
    return element.height < 200;
})
console.log({shorterChar})
const maleChar = characters.filter((element)=> element.gender === 'male')
console.log({maleChar})
const femaleChar = characters.filter((element) => element.gender ==='female')
console.log({femaleChar})
/*
MAP
Get an array of all names
Get an array of all heights
Get an array of objects with just name and height properties
Get an array of all first names
*/
console.log('starts MAP')
const allNames = characters.map((element) => element.name)
console.log({allNames})
const allHeights = characters.map((element) => element.height)
console.log({allHeights})
const nameAndHeight = characters.map((element) =>({
    name: element.name, 
    height: element.height
}))
console.log(nameAndHeight)
const firstNames = characters.map((element) => element.name.split(" ")[0])
console.log(firstNames)
/*
REDUCE
Get the total mass of all characters
Get the total height of all characters
Get the total number of characters by eye color (hint. a map of eye color to count)
Get the total number of characters in all the character names
*/
console.log('STARTS REDUCE')
const totalMass = characters.reduce((accumulator, current) =>{
    return accumulator + current.mass
}, 0)
console.log({totalMass})
const totalHeight = characters.reduce((acc, curr) => acc+curr.height, 0)
console.log({totalHeight})
const charByEyeColor = characters.reduce((acc, curr) => {
    const color = curr.eye_color;
    if(acc[color]){
        acc[color]++;
    }else{
     acc[color] = 1;
    }
    return acc
}, {})
console.log({charByEyeColor})
const totalNameChar = characters.reduce((acc, curr) => acc + curr.name.length ,0)
console.log({totalNameChar})
/*
SORT
Sort by name
Sort by mass
Sort by height
Sort by gender
EVERY
Does every character have blue eyes?
Does every character have mass more than 40?
Is every character shorter than 200?
Is every character male?
SOME
Is there at least one male character?
Is there at least one character with blue eyes?
Is there at least one character taller than 200?
Is there at least one character that has mass less than 50?
*/