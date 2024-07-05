/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //buy at the lowest price day and sell at the higest price day
    let buy = Infinity;
    let sell=0;
    for(let i=0;i<prices.length;i++){
        buy = Math.min(buy,prices[i]);
        sell = Math.max(sell,prices[i]-buy);
    }
    return sell;
    
};