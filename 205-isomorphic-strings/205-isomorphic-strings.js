/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    let sMap = new Map();
    let tMap = new Map();
    
    for (let i = 0; i < s.length; i++) {
        let char1 = s.charAt(i);
        let char2 = t.charAt(i);
        
        if (sMap.has(char1)) {
            if (sMap.get(char1) != char2) {
                return false;
            }
        }
        if (tMap.has(char2)) {
            if (tMap.get(char2) != char1) {
                return false;
            }
        }
        
        sMap.set(char1, char2);
        tMap.set(char2, char1);
    }
    return true;
};