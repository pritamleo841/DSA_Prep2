/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left, right) {
    /***
    we will remove last digit from binary representation of both left
    and right number until we reach a point where both have same 
    element at the same position.
    And will also keep track of how many times we removed elements 
    by keeping a count of it.

    lets apply it practically:

    first loop:
                101 >> 1 = 10
                111 >> 1 = 11
                cnt = 1

    Second loop:
                10 >> 1 = 1
                11 >> 1 = 1
                cnt = 2

    Third loop:
                1 == 1 

    So now since they are equal we will add those many 0's at the 
    end of the current element we have by using left shift operator.

        1 << cnt  = 1 << 2  => 100(4) 

    Result = 4
    */
    // let count = 0;
    // while (left != right) {
    //     left >>= 1;
    //     right >>= 1;
    //     count++;
    // }
    // return left << count;

    /***
    FASTER METHOD :
    The trick here is that :
    Bitwise-AND of any two numbers will always produce a number less than 
    or equal to the smaller number.

    Consider the following example:

        12 ---- 1100
        11 ---- 1011
        10 ---- 1010
        9  ---- 1001
        8  ---- 1000
        7  ---- 0111
        6  ---- 0110
        5  ---- 0101
									
        Desired Range: [5,12]

        Starting from 12, the loop will first do
        12 & 11 = 8

        Next iteration, the loop will do
        8 & 7 = 0

        why did we skip anding of 10,9? Because even if we did so, 
        the result would eventually be anded with 8 whose value would be 
        lesser than equal to 8.

        Hence, you start from the range end and keep working your way down
        the range till you reach the start.
    */
    while(right>left)
           right = right & (right-1);
    return right&left;
};