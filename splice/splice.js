/*
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

*/


// Expected output: Array ["Jan", "Feb", "March", "April", "June"]
const months = ['Jan', 'March', 'April', 'June'];
const spliceElement = 'Feb'
const spliceIndex = 1 
let finalArray = []

for (let i = 0; i < months.length ; i++){
    if (i === spliceIndex){
        finalArray.push(spliceElement)
        finalArray.push(months[i])
    } else{
        finalArray.push(months[i])
    }
}


console.log(finalArray)
