function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    let map = {};
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (!map[t[i]]) {
            return false;
        } else {
            map[t[i]]--;
        }
    }
    return true;
};

isAnagram('anagram', 'nagaram');
