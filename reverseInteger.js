const reverseString = (str) =>{
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}

const reverse = (x) =>{
    let str = x.toString();
    let revstr = reverseString(str);
    const res = parseInt(revstr,10);
    if(res < Math.pow(-2,31) || res > Math.pow(2,31)-1) {
        return 0;
    }
    if(x < 0){
        
        return res*-1;
    }
    return res;
}

console.log(reverse(981)); //189