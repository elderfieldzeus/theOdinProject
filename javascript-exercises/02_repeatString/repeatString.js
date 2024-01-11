const repeatString = function(string, num) {
    let newString = "";
    for(let i = 0; i < num; i++){
        newString = newString.concat(string);
    }
    return num >= 0 ? newString : "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
