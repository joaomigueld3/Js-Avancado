let arr = []
let sentence = "the cat has claws"
let sentenceArr = sentence.split("")
console.log({sentenceArr})
sentenceArr.forEach(element =>{
    if(element!=" ")
        arr.push(element)
})
console.log({arr})


//6. nested array destructuring
    let users = ['joao', 'mane', 'maria',['jose','claudia']]
    users[3][1] = 'claudia'
    let [,,,[,claudia]] = ['joao', 'mane', 'maria',['jose','claudia']]
    

//8 . concat, join, fill
let arr1 = [1,2,3,4]
let arr2 = [5,6,7]
let res = arr1.concat(arr2) // 1,2,3,4,5,6,7
let resJoin = arr1.join('->') // 1->2->3->4
console.log(resJoin)
const colors = ['joao', 'maria', 'mane']
colors.fill('jose');
console.log(colors); // ['jose', 'jose', 'jose']


//9. strings(includes,indexOf,reverse,sort)
    const names = ['tom', 'alex', 'bob']
    names.sort(); // returns ["alex", "bob", "tom"]

    const numbers = [23, 5, 100, 56, 9, 13, 37, 10, 1]
    numbers.sort(); //[1, 10, 100, 13, 23, 37, 5, 56, 9]
    console.log(numbers)
    numbers.sort((a, b) => (a-b));//ascending
    console.log(numbers)
    numbers.sort((a, b) => (b-a));//descending
    console.log(numbers)

// write a function to print from 1 to 100 without loops
function printZerontoToHundred (number) {
    if(number === 101) 
        return 0;
    else
        console.log(number);
        return printZerontoToHundred(number+1);
}
printZerontoToHundred(1)