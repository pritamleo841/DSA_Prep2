/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    let newChar = "";
    let resChar = "";
    let open = 0;
    
    for(let i of s.split("")){
        if(i == '(')
            open++;
        else if(i == ')'){
            if(open==0)continue;
            open--;
        }
        newChar+=i;
    }
    
    for(let i of newChar.split("").reverse()){
        if(i=="(" && open-->0) continue;
        resChar+=i;
    }
    
    return resChar.split("").reverse().join("");
};