//  [-1,0,1,2,-1,-4]
// [[-1,-1,2],[-1,0,1]]
function threeSum(nums) {
    let res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        let a = nums[i];

        if (i > 0 && a === nums[i-1]) continue;
        let [l, r] = [i + 1, nums.length - 1];
        while (l < r) {
            const sum = a + nums[l] + nums[r];
            if (sum > 0) {
                r--;
            } else if (sum < 0) {
                l++;
            } else {
                res.push([a, nums[l], nums[r]]);
                l++;
                r--;

                while(nums[l] === nums[l-1] && l <r) {
                    l++;
                }
            }
        }
    }
    console.log(res);
    return res;
}

threeSum([-1, 0, 1, 2, -1, -4]);
threeSum([0, 1, 1]);
threeSum([0, 0, 0, 0]);
threeSum([-2,0,0,2,2]);
