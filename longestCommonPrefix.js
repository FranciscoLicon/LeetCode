/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
    if(strs.length === 0){
        return "";
    }
    let longestWord = strs.sort((a,b) =>{
        return b.length - a.length;
    })[0];
    const filtered = strs.filter((value,index,arr)=>{
        return value != longestWord;
    })
    let isPrefix = false;
    while(longestWord != ""){
        isPrefix = filtered.every(str => str.startsWith(longestWord))
        if(isPrefix){
            return longestWord;
        } else {
            longestWord = longestWord.slice(0,-1);
        }
   }
   return longestWord;
};

console.log(longestCommonPrefix(["a","aa","aaa","aaaa","aa"])); //a
