/*
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
Expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
Expected output: Array [0, 1, 2, Array [3, 4]]
*/

let depth = 2
let finalArray = []
const arr2 = [0, 1, 2, [[[3, 4]]]]
const arrayType = typeof arr2[3] 



for(let i = 0; i < arr2.length; i++){
    if (typeof arr2[i] === arrayType){
        let flatten = arr2[i]
        for (j = 0; j < depth; j++){
            let extractArray = flatten[0]
            console.log(extractArray)
        }
    }
}

