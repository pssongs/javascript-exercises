const add = function() {
	return (arguments[0]+arguments[1])
};

const subtract = function() {
	return (arguments[0]-arguments[1])
};

const sum = function(array) {
  let sum = 0
	array.forEach(element => {
    sum += element
  });
  return sum
};

const multiply = function(array) {
  let result = 1
  array.forEach(element => {
    result = result * element
  });
  return result
};

const power = function() {
	return arguments[0] ** arguments[1]
};

const factorial = function(num) {
	let result = 1;
  for (let i = num; i > 0; i--){
    result = result * i
  }
  return result
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
