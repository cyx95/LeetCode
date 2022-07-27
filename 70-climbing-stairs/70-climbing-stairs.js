/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    if (n < 4) {
        return n;
    }
    
    let firstSum = 2;
    let secondSum = 3;
    
    for (let i = 4; i < n; i++) {
        secondSum = firstSum + secondSum;
        firstSum = secondSum - firstSum;
    }
    return firstSum + secondSum;
};