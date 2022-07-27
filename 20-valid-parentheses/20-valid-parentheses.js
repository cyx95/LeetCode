/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    if (s.length === 0) {
        return false;
    }
    
    const parenthesis = {
        "{": "}",
        "[": "]",
        "(": ")"
    }
    
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] in parenthesis) {
            stack.push(s[i])
        } else if (s[i] !== parenthesis[stack.pop()]) {
            return false;
        }
    }
    return stack.length === 0;
};