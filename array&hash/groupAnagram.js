function groupAnagarm(str) {
    let hashMap = {};
    let res = [];
    for (const word of str) {
        let sortedWord = reorder(word);
        if (!hashMap[sortedWord]) {
            hashMap[sortedWord] = [];
        }
        hashMap[sortedWord].push(word);
    }
    for(const key in hashMap) {
       res.push(hashMap[key]); 
    }
    return res;
};
function reorder(word) {
    return word.split('').sort().join('');
}
groupAnagarm(["eat", "tea", "tan", "ate", "nat", "bat"]);
