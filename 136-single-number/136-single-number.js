/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hash = {};
    
    if (nums.length === 1) {
        return nums[0]
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1
        } else {
            hash[nums[i]] += 1
        }
    }
    
    for (let [key, value] of Object.entries(hash)) {
        if (value === 1) {
            return key
        }
    }
};