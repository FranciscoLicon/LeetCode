/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let maxSubstring = "";
    let currentSubstring = "";
    let aux = 0;
    if(s.length === 1 || s.length === 0){
        return s.length;
    }
    for(let i = 0; i < s.length; i++ ){
        if(!currentSubstring.includes(s[i])){
            currentSubstring = currentSubstring + s[i];
        } else {
            aux ++;
            if(maxSubstring.length < currentSubstring.length){
                maxSubstring = currentSubstring;
            }
            currentSubstring = "";
            i = aux-1;
        }
    }
    if(maxSubstring.length < currentSubstring.length){
        maxSubstring = currentSubstring;
    }
    return maxSubstring.length;
};