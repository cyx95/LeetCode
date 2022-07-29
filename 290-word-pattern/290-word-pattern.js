/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let pMap = new Map();
    let sMap = new Map();
    
    let arr = s.split(' ');
    
    if (arr.length != pattern.length) {
        return false;
    }
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let char = pattern.charAt(i)
    
        if (pMap.has(char) && pMap.get(char) != word) {
            return false
        }
        if (sMap.has(word) && sMap.get(word) != char) {
            return false;
        }
        pMap.set(char, word);
        sMap.set(word, char)
    }
    return true;
};