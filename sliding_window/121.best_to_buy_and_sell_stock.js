function maxProfit(prices) {
    let [left, right, max] = [0, 1, 0];

    while(right < prices.length) {
        const canSlide = prices[right] <= prices[left];
        if(canSlide) left = right;

        const profit = prices[right] - prices[left];
        max = Math.max(max, profit);
        right++;
    }
    return max;
};

maxProfit([7, 1, 5, 3, 6, 4]);
maxProfit([1, 2]);
