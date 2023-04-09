/* const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]
*/

// Fill with 0 from position 2 until position 4
// Expected output: Array [1, 2, 0, 0]
const array1 = [1, 2, 3, 4]
const fillNumber = 0
const fillStart = 2
let finalArray = []

for (let i = 0; i < array1.length; i++){
    if (i >= fillStart ){
        finalArray.push(0)
    } else { 
        finalArray.push(array1[i])
    }
}

console.log(finalArray)
