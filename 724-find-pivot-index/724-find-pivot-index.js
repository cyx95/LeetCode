/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum = 0;
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (sum - nums[i] - leftSum === leftSum) {
            return i
        }
        leftSum += nums[i];
    }
    return -1;
};