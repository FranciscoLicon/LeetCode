/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
    for(let i = 0; i< nums.length; i++){
        if(nums[i]=== nums[i+1]){
            nums.splice(i+1,1);
            i--;
        }
    }
    return nums.length;
};

console.log(removeDuplicates([1,1,2,2,2,3,3,4,5,6,6,7,8]));//8