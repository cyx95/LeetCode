/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        let el = nums[i];
        if (hash[el]) {
            hash[el] += 1
        } else {
            hash[el] = 1
        }
        if (hash[el] > (nums.length / 2)) {
            return el
        }
    }
};