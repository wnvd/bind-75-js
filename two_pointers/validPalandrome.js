function valid(s) {
    const regex = /[^a-zA-Z0-9]/g;
    s = s.toLowerCase();
    const newStr = s.replace(regex, '');
    const reversed = reverseStr(newStr);

    return newStr === reversed;
}
function reverseStr(s) {
    return s.split('').reverse().join('');
}

valid("A man, a plan, a canal: Panama")
