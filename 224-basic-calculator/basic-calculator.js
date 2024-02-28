/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    /**
    This solution simply converts the example formula below
    -(14-(2-4))+3
    into
    -14 + 2 -4 + 3
    */
    let res=0;
    let sum=0,sign=1;
    let stack=[1];
    const isDigit=(ch)=>{
        return ch>='0' && ch<='9';
    };
    for(let char of s){
        if(isDigit(char)){
            sum=sum*10+(char-'0');
        }else{
            res+=sum*sign*stack[stack.length-1];
            sum=0;
            if(char==='-')sign=-1;
            else if(char==='+')sign=1;
            else if(char==='('){
                stack.push(stack[stack.length-1]*sign);
                sign=1;
            }
            else if(char===')'){
                stack.pop();
            }
        }
    }
    return res+=(sign*sum);
};