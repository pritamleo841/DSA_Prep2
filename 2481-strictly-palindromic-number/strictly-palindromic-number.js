/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
    for(let base=2;base<=n-2;base++){
        if(!isPalindrome(fromDeci(base,n)))return false;
    }
    return true;
};
function isPalindrome(num){
    return num===num.split('').reverse().join('');
};

function reVal(num) {
    if (num >= 0 && num <= 9)
        return String.fromCharCode(num + 48);
    else
        return String.fromCharCode(num - 10 + 65);
};

// Function to convert a given decimal number
// to a base 'base' and
function fromDeci(base1, inputNum) {
    let s = "";

    // Convert input number is given
    // base by repeatedly dividing it
    // by base and taking remainder
    while (inputNum > 0) {
        s += reVal(inputNum % base1);
        inputNum = parseInt(inputNum / base1, 10);
    }
    let res = s.split('');

    // Reverse the result
    res.reverse();
    return res.join("");
}