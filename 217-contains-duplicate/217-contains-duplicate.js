/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     if (nums.length === 0 || nums.length === 1) {
//         return false;
//     }
    
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] === nums[i]) {
//                 return true;
//             }
//         }
//     }
//     return false;
// };

var containsDuplicate = function(nums) {
    let hash = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            return true;
        } else {
            hash[nums[i]] = true;
        }
    }
    return false;
}