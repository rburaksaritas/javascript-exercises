const palindromes = function (string) {
    string = string.toLowerCase();
    let breaks = [" ", ",", ".", "!", "?", ";", ":"];
    for(let i = 0; i<breaks.length; i++){
        string = string.replaceAll(breaks[i], "");
    }
    let lettersToCheck = Math.floor(string.length/2);
    let lastIndex = string.length-1;
    for(let i = 0; i<lettersToCheck; i++){
        if(string[i]!=string[lastIndex-i]){
            return false;
        }
    }  return true;
};

// Do not edit below this line
module.exports = palindromes;
