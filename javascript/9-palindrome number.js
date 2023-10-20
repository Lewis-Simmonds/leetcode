/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const x_str = x.toString();
    console.log(x_str);
    for (let i = 0; i < x_str.length; i++) {
        if (x_str[i] !== x_str[x_str.length - 1 - i]) {
            return false;
        };
    };
    return true;
};