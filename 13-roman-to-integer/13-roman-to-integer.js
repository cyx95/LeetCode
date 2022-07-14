/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    //Map to store roman numerals
    let romanMap = new Map();
    //Fill the map
    romanMap.set("I", 1);
    romanMap.set("V", 5);
    romanMap.set("X", 10);
    romanMap.set("L", 50);
    romanMap.set("C", 100);
    romanMap.set("D", 500);
    romanMap.set("M", 1000);
    //Length of string
    let n = s.length; 
    //Place to store result
    let num = romanMap.get(s[n - 1]);
    //Loops from right to left
    for (let i = n - 2; i >= 0; i--) {
        //check if roman at right of current roman is bigger or smaller
        if (romanMap.get( s[i] ) >= romanMap.get( s[i + 1] )) {
            num += romanMap.get(s[i]);
        } else {
            num -= romanMap.get(s[i]);
        }
    }
    return num
};