const fibonacci = function(num) {
    if(num < 0) return "OOPS";
    let fibo = [0, 1, 1];
    for(let i = 3; i <= num; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo[num];
};

// Do not edit below this line
module.exports = fibonacci;
