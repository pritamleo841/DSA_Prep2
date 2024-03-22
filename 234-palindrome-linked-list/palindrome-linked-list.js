/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(head==null)return true;
    let mid = findMiddle(head);
    let last = reverse(mid);

    let current=head;
    while(last!=null){
        if(last.val!=current.val)return false;
        current=current.next;
        last=last.next;
    }
    return true;
};
const reverse = (head)=>{
    let prev=null;
    let current=head;
    let next=null;
    while(current!=null){
        let temp = current.next;
        current.next=prev;
        prev=current;
        current=temp;
    }
    return prev;
};
const findMiddle=(head)=>{
    let slow=head;
    let fast=head;
    while(fast!=null && fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow;
};