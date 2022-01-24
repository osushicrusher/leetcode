/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
    const hashmap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    const strArr = s.split('')
    let sum = 0
    for (let i = 0; i < strArr.length; i++) {
        if(hashmap[strArr[i]] < hashmap[strArr[i+1]]) {
            sum += hashmap[strArr[i+1]] - hashmap[strArr[i]]
            i++
        } else {
            sum += hashmap[strArr[i]]
        }
    }
    return sum
};
// @lc code=end

