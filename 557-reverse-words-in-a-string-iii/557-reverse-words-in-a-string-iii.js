/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ')
    
    let reversed = arr.map(word => {
        return word.split('').reverse().join('')
    })  
    return reversed.join(' ')
};