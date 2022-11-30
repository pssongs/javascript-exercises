const fibonacci = function(num) {
    num = Number(num)

    if (num < 0) {
        return "OOPS"
    }

    if (num == 0){
        return 0
    }

    if (num == 1){
        return 1
    }

    let array = [1]
    let fib = 1
    let oneBefore = 1
    let twoBefore
    
    for (let i = 2; i <= num; i++){
        array.push(fib)

        let temp = fib

        fib += oneBefore
        twoBefore = oneBefore
        oneBefore = temp
    }

    return array.pop()
};

// Do not edit below this line
module.exports = fibonacci;
