// [100, 4, 200, 1, 3, 2]
// [1, 2, 3, 4]
function longConSeq(nums) {
    if (!nums.length) return 0;

    nums.sort((a, b) => a - b);

    let [maxCount, count] = [1, 1];
    for (let i = 1; i < nums.length; i++) {
        const isPrevDuplicate = nums[i] === nums[i - 1];
        if (isPrevDuplicate) continue;

        const isStreak = nums[i] === ((nums[i - 1]) + 1);
        if (isStreak) {
            count++;
            continue;
        }
        maxCount = Math.max(maxCount, count);
        count = 1;
    }
    maxCount = Math.max(maxCount, count);
    return maxCount;
}

longConSeq([100, 4, 200, 1, 3, 2])
longConSeq([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])
longConSeq([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]);
