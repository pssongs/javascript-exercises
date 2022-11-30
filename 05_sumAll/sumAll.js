const sumAll = function() {
    if((typeof(arguments[0]) != "number") ||
        (typeof(arguments[1]) != "number") ||
        (arguments[0] < 0) ||
        (arguments[1] < 0)){
            return "ERROR"
    } else {
        let x = arguments[0]
        let y = arguments[1]
        let result = x
        while (x < y){
            x++
            result += x
        }
        while (x > y){
            x--
            result += x
        }
        return result
    }
};

// Do not edit below this line
module.exports = sumAll;
