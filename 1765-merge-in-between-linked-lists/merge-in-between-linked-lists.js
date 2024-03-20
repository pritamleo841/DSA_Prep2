/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let end = list1,start=null;
    for(let i=0;i<b;i++){
        if(i===a-1)start=end;
        end=end.next;
    }
    //at a-1 , we connect start.next to list2
    start.next=list2;
    while(list2.next!=null){
        list2=list2.next;
    }
    //connect end of list2 to node right after b
    list2.next = end.next;
    //cut off b from list
    end.next=null;
    return list1;
};