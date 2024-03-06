/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    //dummy nodes
    let bigger_node = new ListNode(0);
    let smaller_node = new ListNode(0);
    //dummy node pointers
    let bigger = bigger_node;
    let smaller = smaller_node;
    while(head!=null){
        //sort out the smaller and bigger value nodes
        if(head.val<x){
            smaller.next=head;
            smaller=smaller.next;
        }else{
            bigger.next=head;
            bigger=bigger.next;
        }
        head=head.next;
    }
    //attach at approprite positions
    bigger.next=null;
    smaller.next=bigger_node.next;
    return smaller_node.next;
};