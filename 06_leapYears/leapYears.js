const leapYears = function(year) {
    if (typeof year != "number") {
        return "ERROR";
    }
    
    if (year%100==0){
        if(year%400==0){
            return true;
        } else return false;
    } else if (year%4==0) {
        return true;
    } else return false;
};

/* Odins solution
const leapYears = function(year) {
  return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
};
*/

// Do not edit below this line
module.exports = leapYears;
