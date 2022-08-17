/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arr = [];
    
    for (let i = 0; i < nums.length; i++) {
        let squared = nums[i] * nums[i]
        arr.push(squared);
    }
    return arr.sort(function(a, b) {return a - b})
};

