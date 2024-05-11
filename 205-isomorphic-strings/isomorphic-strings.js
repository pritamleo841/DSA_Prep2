/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let charMap = new Map();
    let revCharMap = new Map();

    if (s.length != t.length)
        return false;

    for (let i = 0; i < s.length; i++) {
        let first = s[i];
        let second = t[i];

        if (
            (charMap.has(first) && charMap.get(first) != second) ||
            (revCharMap.has(second) && revCharMap.get(second) != first)
        ) return false;

        charMap.set(first, second);
        revCharMap.set(second, first);
    }
    return true;
};