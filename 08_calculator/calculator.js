const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function() {
  let total = 0;
  for(let i = 0; i<arguments["0"].length; i++){
    total += arguments["0"][i];
  }
  return total;
};

const multiply = function() {
  let total = 1;
  console.log(arguments["0"]);
  for(let i = 0; i<arguments["0"].length; i++){
    total *= arguments["0"][i];
  }
  return total;
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
  let result = 1;
  for(let i = a; i>0; i--){
    result *= i;
  } return result;
}; 

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
