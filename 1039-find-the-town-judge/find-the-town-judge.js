/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    const trusted = new Array(n + 1).fill(0);
    /**
    A basic intuition can be concluded from question is that, 
    if a person is believing someone else than himself than that person 
    is not qualified for being a judge or if a person is trusted by others 
    and has everyone's favour i.e total of N-1 favours, 
    than this person is truly the judge.
    
    Trusted[person[0]] it means that this person trust another person and hence => this person is not judge town
    Trusted[person[1]] it means that this person has been trusted by another so this person has a change to be the judge tower.
    Let look at in this example:
    n = 4
    [[4,3],[1,3],[1,4],[2,3],[2,4]]
    We create Trust [0,0,0,0,0] (n+1)
    [4,3] the person 4 trust person 3
    => [0,0,0,1,-1]
    [1,3] the person 1 trust person 3
    => [0,-1,0,2,-1]
    [1,4] the person 1 trust person 4
    => [0,-2,0,2,0]
    [2,3] the person 2 trust person 3
    => [0,-2,-1,3,0]
    The last one [2,4] the person 2 trust person 4
    => [0,-2,-2,3,1]
    => The result is 3 it means that this person has been trusted by three different persons.
    */
    for (let [i, j] of trust) {
        trusted[i] -= 1;
        trusted[j] += 1;
    }
    for (let i = 1; i < trusted.length; i++) {
        if (trusted[i] === n - 1) return i;
    }
    return -1;
};