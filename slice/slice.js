const slicedArray = [1, 2, 3, 4, 5]
let emptyArray = []
const sliceAt = 3

for (let i = 0; i < sliceAt - 1 ; i++) {
    emptyArray.push(slicedArray[i])
}

console.log(emptyArray)