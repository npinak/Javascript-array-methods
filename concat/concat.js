/*const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"] */

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const numberOfArrays = 2
let finalArray = [...array1,...array2]


console.log(finalArray)