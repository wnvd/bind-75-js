function topKFrequent(nums, k) {
    let freq = {};
    for(let i=0; i<nums.length; i++) {
        if(!freq[nums[i]]) {
            freq[nums[i]] = 1;
        } else {
            freq[nums[i]]++;
        }
    }
    let keyValue = Object.keys(freq).map((keys) => [Number(keys), freq[keys]]);
    let sortedRes = keyValue.sort((a,b) => b[1]-a[1]);
    
    let res = [];
    for(let i=0; i<k; i++) {
        res.push(sortedRes[i][0]);
    }
    return res;
};

topKFrequent([1, 1, 3, 3, 3, 1, 2, 2,], 2);
