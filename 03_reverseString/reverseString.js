const reverseString = function(string) {
    let result = "";
    let length = string.length;
    for(let i = length-1; i>-1; i--){
        result += string.charAt(i);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
