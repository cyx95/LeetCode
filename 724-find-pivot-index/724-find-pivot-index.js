/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    //initialize full sum and left sum
    let leftSum = 0;
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        //calculate full sum
        sum += nums[i]                                 
    }
    
    for (let i = 0; i < nums.length; i++) {
        //if the sum - current index - left sum === left sum, found the pivot index
        if (sum - nums[i] - leftSum === leftSum) {    
            return i
        }
        //if not, add to the left sum
        leftSum += nums[i];
    }
    return -1;
};