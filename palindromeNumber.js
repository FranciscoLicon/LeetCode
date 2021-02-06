/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    if(x < 0){
        return false;
    }   
    return x === reverseInt(x);
}

const reverseInt = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);

console.log(isPalindrome(121)); //true