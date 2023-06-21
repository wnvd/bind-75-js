function maxArea(height) {
    let [l, r, max] = [0, height.length - 1, 0];

    while (l < r) {
        const [lHeight, rHeight] = getHeight(height, l, r);
        const area = getArea(height, l, r);

        max = Math.max(max, area);

        if(lHeight <= rHeight) {
            l++;
        }
        if(rHeight < lHeight) {
            r--;
        }
    }
        return max;
}

function getHeight(height, l, r) {
    return [height[l], height[r]];
}

function getArea(height, l, r) {
    const [lHeight, rHeight] = getHeight(height, l, r);
    const _height = Math.min(lHeight, rHeight);

    const _length = r - l;

    return _length * _height;
}
maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
