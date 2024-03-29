/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let seek = target - nums[i];
        if (map.has(seek) && map.get(seek) !== i) {
            return [map.get(seek), i]
        }
        map.set(nums[i], i)
    }
};