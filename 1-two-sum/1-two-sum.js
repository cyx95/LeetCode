/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
var twoSum = function(nums, target) {
    let indices = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                indices.push(i);
                indices.push(j);
            }
        }
    }
    return indices;
    
};
*/

var twoSum = function(nums, target) {
    
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let need = target - nums[i];
        if (map.has(need) && map.get(need) !== i) {
            return [i, map.get(need)];
        }
        map.set(nums[i], i)
    }
}