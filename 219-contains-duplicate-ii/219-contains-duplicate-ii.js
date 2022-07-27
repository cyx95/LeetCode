/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    
    let hash = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        
        let value = nums[i];
        
        if (hash.has(value) && (i - hash.get(value))<= k){
            return true;
        }
        hash.set(value, i);
    }
    return false;
};