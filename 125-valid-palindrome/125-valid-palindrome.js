/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let phrase = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    
    return phrase === phrase.split('').reverse().join('');
};