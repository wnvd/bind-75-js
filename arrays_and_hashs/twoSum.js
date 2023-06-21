
// twoSum([2,7,11,15], 9);

/**
    * we substract each element to target 
    * and if the given number exist in our map
    * we return the indecis.
    */

function twoSum2(nums, target) {
    let map = {};
    for(let i=0; i <nums.length; i++) {
       map[nums[i]] = i;
    }
    console.log(map);
    for(let i=0; i<nums.length; i++) {
        let check = target - nums[i];
        if(map[check] && map[check] !== i) {
            console.log(i, map[check]);
            return [i ,map[check]];
        }
    }
};

twoSum2([2,7,11,15], 9);
twoSum2([1,3,4,2], 6);
