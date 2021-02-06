/**
 * @param {number} x
 * @return {boolean}
 */

const reverseInt = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);

const isPalindrome = (x) => {
    if(x < 0){
        return false;
    }   
    return x === reverseInt(x);
}
console.log(isPalindrome(121)); //true