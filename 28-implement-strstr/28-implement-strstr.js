/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function(haystack, needle) {
    
//     for (let i = 0 ; i < haystack.length; i++) {
//         for (let j = 0; j < needle.length; j++) {
//             if (haystack[i + j] !== needle[j]) break
            
//             if (j + 1 === needle.length) return i
//         }  
//     }
//     return -1
// };

var strStr = function (haystack, needle) {
    if (needle === '') {
        return 0
    } else {
        return haystack.indexOf(needle)
    }
}