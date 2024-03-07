/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if(head.next===null)return null;
    let fast=head;
    let mid=head;
    let prev=head;
    while(fast && fast.next!=null){
        prev=mid;
        mid=mid.next;
        fast=fast.next.next;
    }
    prev.next=mid.next;
    return head;
};