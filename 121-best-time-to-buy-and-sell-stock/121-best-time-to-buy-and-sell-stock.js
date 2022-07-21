/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let maxProfit = 0;
    let minBuyPrice = Infinity;
    
    for (let i = 0; i < prices.length; i++) {
        if (minBuyPrice > prices[i]) {
            minBuyPrice = prices[i];
        }
        
        let profit = prices[i] - minBuyPrice;
        
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }
    return maxProfit;
};

// time complexity = o(n)
// space complexity = o(1)