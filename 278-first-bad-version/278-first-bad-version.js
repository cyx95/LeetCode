/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let right = n;
        let left = 0;
        
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            let version = isBadVersion(mid);
            if (version !== isBadVersion(mid + 1)) {
                return mid + 1;
            } else if (version === false) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    };
};