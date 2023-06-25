function lengthOfLongestSubstring(s) {
    const set = new Set();
    let l = 0;
    let max = 0;

    for(let r=0; r <s.length; r++) {
        while(set.has(s[r])){
            set.delete(s[l]);
            l++;
        }
        set.add(s[r]);
        max = Math.max(max, set.size);
    }
    console.log(max);
    return max;
}

lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("bbbbb");
lengthOfLongestSubstring("pwwkew");
lengthOfLongestSubstring("au");
lengthOfLongestSubstring("dvdf");
