var reverse = function(x) {
    const isNegative = x < 0;
    let num = Math.abs(x);
    let reversed = 0;
    
    while (num > 0) {
        const digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    
    if (reversed > Math.pow(2, 31) - 1) {
        return 0;
    }
    
    return isNegative ? -reversed : reversed;
};