// simple 
function containsDup(nums) {
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            console.log(nums[i],nums[j]);
            if(nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}

// 2 approach
// if we sort the array
function containsDup2(nums) {
    nums.sort((a,b)=> a-b);

    return nums;
}

function hasDup(nums) {
    for(let curr=0; curr<nums.length-1; curr++) {
        const next = curr + 1;
        if(curr === next) return true;
    }
    return false
}

containsDup2([1,3,2,1]);
