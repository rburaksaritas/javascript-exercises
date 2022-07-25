const fibonacci = function(number) {
    if (number<1) {return "OOPS"};
    if (number == 1 || number == 2) {return 1};
    let fibonacci = [1,1];
    for(let i = 2; i<number; i++){
        fibonacci.push(fibonacci[i-1]+fibonacci[i-2]);
    }
    return fibonacci.pop();
};

// Do not edit below this line
module.exports = fibonacci;
