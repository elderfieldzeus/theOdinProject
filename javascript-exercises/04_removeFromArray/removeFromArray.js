const removeFromArray = function(array, toBeRemoved) {
    let newArray = array, args = Array.from(arguments).slice(1);
    for(let i = 0; i < newArray.length; i++){
        for(let j = 0; j < args.length; j++){
            if(newArray[i] === args[j]) {
                newArray.splice(i, 1);
                i--;
            }
        
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
console.log(removeFromArray([1,2,3,4], 3, 2));