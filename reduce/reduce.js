const summationArray = [0, 1, 2, 3, 4]
let finalSum = 0

for(let i = 0; i < summationArray.length; i++){
    let number = summationArray[i]

    finalSum = finalSum + number
}

console.log(finalSum)