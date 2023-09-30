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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {

    if (lists.length == 0) {
        return null;
    }

    let res = lists[0];

    for (let i = 1; i < lists.length; i++) {
        res = sort(res, lists[i]);
    }

    return res;
};

function sort(list1: ListNode | null, list2: ListNode | null) {

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

    if (list1.val < list2.val) {
        list1.next = sort(list1.next, list2);
        return list1;
    }
    else {
        list2.next = sort(list1, list2.next);
        return list2;
    }
}