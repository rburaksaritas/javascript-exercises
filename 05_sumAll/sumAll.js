const sumAll = function(min, max) {
    if (typeof min != "number" || typeof max != "number" || min<0 || max<0){
        return "ERROR";
    }
    
    let sum = 0;
    
    if (min>max){
        let temp = min;
        min = max;
        max = temp;
    }

    for (let i=min; i<max+1; i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
