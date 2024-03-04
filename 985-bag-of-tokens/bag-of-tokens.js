/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    let score=0,max_score=0;
    let left=0,right=tokens.length-1;
    tokens.sort((a,b)=>a-b);
    
    while(left<=right){
        if(tokens[left]<=power){
            power-=tokens[left];
            score+=1;
            left++;
            max_score=Math.max(score,max_score);
        }
        //We gain power when score>0 and power<=left token
        else if(score>0){
            power+=tokens[right];
            score-=1;
            right--;
        }else{
            break;
        }
    }
    return max_score;
};