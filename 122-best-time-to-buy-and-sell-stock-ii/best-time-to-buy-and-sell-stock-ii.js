/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //find the maximum sub profits=> Maximum buy and minimum sell day
    let i=0,buy,sell,profit=0,N=prices.length-1;
    while(i<N){
        while(i<N && prices[i+1]<=prices[i])i++;
        buy=prices[i];

        while(i<N && prices[i+1]>prices[i])i++;
        sell=prices[i];
        profit+=sell-buy;
    }
    return profit;
};