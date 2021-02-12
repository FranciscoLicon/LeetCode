/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
    if(strs.length === 0){
        return "";
    }
    let minWord = strs.sort((a,b) =>{
        return b.length - a.length;
    })[strs.length-1];
    const filtered = strs.filter((value,index,arr)=>{
        return value != minWord;
    })
    let isPrefix = false;
    while(minWord != ""){
        isPrefix = filtered.every(str => str.startsWith(minWord))
        if(isPrefix){
            return minWord;
        } else {
            minWord = minWord.slice(0,-1);
        }
   }
   return minWord;
};

console.log(longestCommonPrefix(["a","aa","aaa","aaaa","aa"])); //a
