const palindromes = function (string) {
    let newString = string.toLowerCase().replace(/[^a-z0-9]/g, '').replace(' ', '');
    let reversed = newString.split('').reverse().join('');
    
    console.log(reversed);

    if(newString == reversed) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
//console.log(palindromes("Animal loots foliated detail of stool lamina."));