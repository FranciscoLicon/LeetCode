/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} 
 */
const twoSum = (nums, target) => {
    let map = new Map;
    for (let i = 0; i < nums.length; i++) {
        let comp = target - nums[i];
        if (map.has(comp)) {
            return [map.get(comp), i]
        }
        map.set(nums[i], i);
    }
}


console.log(twoSum([3,2,4],6));
