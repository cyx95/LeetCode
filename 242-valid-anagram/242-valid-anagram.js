/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    let hash = {};
    
    for (let char of s) {
        if (hash[char]) {
            hash[char]++;
        } else {
            hash[char] = 1;
        }
    }
    
    for (let char of t) {
        if (!hash[char]) {
            return false;
        } else {
            hash[char]--
        }
    }
    
    return true;
};