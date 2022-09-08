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
console.log({nameAndHeight})
const firstNames = characters.map((element) => element.name.split(" ")[0])
console.log({firstNames})
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
SOME
Is there at least one male character?
Is there at least one character with blue eyes?
Is there at least one character taller than 210?
Is there at least one character that has mass less than 50?
*/
console.log('SOME')
const atLeastMaleChar = characters.some((element) => {
    return element.gender === 'male'
})
console.log(atLeastMaleChar)
const atLeastBlue = characters.some((element) => element.eye_color === 'blue')
console.log(atLeastBlue)
const taller200 = characters.some((element) => element.height > 210)
console.log(taller200)
const massLess50  = characters.some((element) => element.mass < 50)
console.log(massLess50)
/*
SORT
Sort by name
Sort by mass
Sort by height
Sort by gender
*/
console.log('SORT')
const byMass = characters.sort((a,b) =>{
    return a.mass - b.mass
})
console.log({byMass})
const byHeight = characters.sort((a,b) => a.height - b.height)
console.log({byHeight})
const byName = characters.sort((a,b) =>{
    if (a.name < b.name){
        return -1
    }else{
        return 1
    }
})
console.log({byName})
const byGender = characters.sort((a,b) => {
    if(a.gender==='female') return -1
    return 1
})
console.log({byGender})
/*
EVERY
Does every character have blue eyes?
Does every character have mass more than 40?
Is every character shorter than 200?
Is every character male?
*/
console.log('EVERY')
const everyBlueEyes = characters.every((element) => element.eye_color === 'blue')
console.log({everyBlueEyes})
const everyMassGreater40 = characters.every((element) => element.mass > 40)
console.log({everyMassGreater40})
const everyShorter200 = characters.every((element) => element.height < 200)
const everyBool = !everyShorter200 ? characters.map((element) =>{
    if (element.height >200){
        let obj = {
            name: element.name,
            height: element.height
        }
        return obj
    } else return 'ok' }) : 'all characters are shorther than 200'
console.log({everyShorter200},{everyBool})

const everyCharMale = characters.every((element) => {
   return element.gender === 'male'
})
console.log({everyCharMale})

const charactersWithSkills = characters.map((item) =>{
    if (item.name.split(' ')[0] === 'Luke'){
        return{
            ...item,
            skills: 'green lightsaber, force, chosen one'
        }
    }
    else if (item.name.split(' ')[0] === 'Leia'){
        return{
            ...item,
            skills: 'hidden force, chosen one, charming'
        }
    }
    else if (item.name.split(' ')[0] === 'Darth'){
        return{
            ...item,
            skills: 'red lightsaber, insane force (with choking), dark side'
        }
    }
    else if (item.name.split(' ')[0] === 'Anakin'){
        return{
            ...item,
            skills: 'blue lightsaber, force, anger and ambition'
        }
    }
})
console.log({charactersWithSkills})