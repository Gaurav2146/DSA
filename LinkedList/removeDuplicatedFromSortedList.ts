/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {

    if (head == null || head.next == null) {
        return head;
    }

    let curr = head;
    let next = head.next;

    while (next != null) {
        if (curr.val == next.val) {
            while (curr != null && next != null && curr.val == next.val) {

                if (next && next.next != null) {
                    curr.next = next.next;
                    next = next.next;
                }
                else {
                    curr.next = null;
                    next = null;
                }
            }
        }
        curr = next;
        if (next) {
            next = next.next;
        }
    }
    return head;
};