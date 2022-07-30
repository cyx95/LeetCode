/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function(nums1, nums2) {
//     return _.intersection(nums1, nums2)
// };

var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    
    return [...set1].filter(n => set2.has(n))
}