/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let dummy = new ListNode(0);
    dummy.next=head;
    let prev = dummy;
    //adjust prev pointer to right index
    for(let i=0;i<left-1;i++){
        prev=prev.next;
    }
    let curr=prev.next;
    //reversing
    for(let i=0;i<right-left;i++){
        let forw=curr.next;
        curr.next=forw.next;
        forw.next=prev.next;
        prev.next=forw;
    }
    return dummy.next;
};