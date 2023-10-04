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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    if (list1 == null) {
        return list2;
    }

    if (list2 == null) {
        return list1;
    }

    if (list1.next == null && list1.val < list2.val) {
        list1.next = list2;
        return list1;
    }

    if (list2.next == null && list2.val < list1.val) {
        list2.next = list1;
        return list2;
    }

    let res = null;

    if (list1.val < list2.val) {
        let next = list1.next;
        res = list1;
        list1.next = mergeTwoLists(next, list2)
    }
    else if (list2.val < list1.val) {
        let next = list2.next;
        res = list2;
        list2.next = mergeTwoLists(next, list1)
    }
    else {
        let next = list1.next;
        res = list1;
        list1.next = mergeTwoLists(next, list2)
    }

    return res;
};



