/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    const str = x + '';
    const modStr = str.split('').reverse().join('');
    return x === +modStr
};
// @lc code=end

