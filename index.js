// let sum = 6
// let a = [5, -2, 4, 9, 1]
 
function bruteForceTwoSum(array, sum){
    let sumArray = []
    for(let i = 0; i < array.length; i ++){ 
        for(let j = 1; j < array.length; j++){
            if (array[i] + array[j] === sum){
                return sumArray.push([array[i], array[j]])
            } else {
                return sumArray = null
            }
        }
    }    
    return sumArray
}
 
