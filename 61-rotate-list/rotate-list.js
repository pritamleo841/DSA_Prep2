/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let tail = new ListNode(0,head);
    let listLen=0;
    while(tail.next!=null){
        listLen++;
        tail=tail.next;
    }
    tail.next=head; //circular list
    let newHeadIdx = listLen-(k%listLen);
    for(let i=0;i<newHeadIdx;i++){
        tail=tail.next;
    }
    head=tail.next;
    tail.next=null; //single list
    return head;
};