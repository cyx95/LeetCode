/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let cache = {};
    
    for (let i = 0; i < numbers.length; i++) {
        let num = target - numbers[i]
        if (cache[num]) {
            return [cache[num] - 1, i + 1]
        } else {
            cache[numbers[i]] = i + 2
        }
    }
};