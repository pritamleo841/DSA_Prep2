/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let map = new Map();
    for(let s of text){
        map.set(s,(map.get(s) || 0)+1);
    }
    //Added 0 to indicate that a word can have 0 ballon words in it
    return Math.floor(
        Math.min(map.get('b'),map.get('a'),map.get('l')/2,map.get('o')/2,map.get('n')) || 0
    );
};