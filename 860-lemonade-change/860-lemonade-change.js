/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let hash = {};
    
    for (let bill of bills) {
        if (bill === 5) {
            hash[5] = hash[5] ? hash[5] + 1 : 1;
        } else if (bill === 10) {
            if (hash[5] > 0) {
                hash[5] -= 1;
                hash[10] = hash[10] ? hash[10] + 1 : 1; 
            } else {
                return false;
            }
        } else {
             if (hash[5] > 0 && hash[10] > 0) {
                 hash[5] -= 1;
                 hash[10] -= 1;
            } else if (hash[5] >= 3) {
                hash[5] -= 3
            } else {
                return false;
            }
        }
    }
    return true;
};