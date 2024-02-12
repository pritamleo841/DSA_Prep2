/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    let tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    let huns = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    let thos = ['', 'M', 'MM', 'MMM']; //upto 3999

    let th = thos[Math.floor(num / 1000)];
    let hu = huns[Math.floor((num % 1000) / 100)];
    let tn = tens[Math.floor((num % 100) / 10)];
    let on = ones[Math.floor(num % 10)];
    return th + hu + tn + on;
};