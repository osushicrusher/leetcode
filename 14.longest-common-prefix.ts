/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
    let prefix = '';

    for (let i = 0; i <= strs[0].length; i++) {
        const nextPrefix = strs[0].slice(0, i);
        console.log(nextPrefix)

        if(strs.every(str => str.slice(0, i) === nextPrefix)) {
            prefix = nextPrefix;
        }
    }

    return prefix;
};
// @lc code=end

