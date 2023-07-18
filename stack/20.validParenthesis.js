// will lookup if match exist in stack.
function isValid(str) {
    const map = {
        ")": "(",
        "}": "{",
        "]": "["
    };
    const stack = [];

    for (const char of str) {
        const isBracket = map[char] ? true : false;
        if (!isBracket) {
            console.log(char, isBracket);
            stack.push(char);
            continue;
        }
        const isEqual = stack[stack.length - 1] === map[char];
        if (isEqual) {
            stack.pop();
            continue;
        }
        return false;
    }

    return stack.length === 0;
}

console.log(isValid('(){}[]'));
