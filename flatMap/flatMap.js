const arr1 = [1, 2, [3], [4, 5], 6, []];
// Expected output: Array [1, 2, 3, 4, 5, 6]

let finalArray = []

const arrayType = typeof arr1[2] 


for( let i = 0; i < arr1.length; i++) {
    let arrObject = arr1[i]
    if (typeof arrObject === arrayType){
        for (let j = 0; j < arrObject.length; j++){
            finalArray.push(arrObject[j])
        }
    } else {
        finalArray.push(arrObject)
    }
}

console.log(finalArray)