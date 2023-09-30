

/**
 * @param {Node} head
 * @returns {Node}
*/


class LinkedListNode {
    data: number;
    next: LinkedListNode | null;
    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}


class RemoveDuplicatesFromUnsortedLinkedList {
    //Function to remove duplicates from unsorted linked list.
    removeDuplicates(head: LinkedListNode | null): LinkedListNode | null {
        //your code here

        if (head == null || head.next == null) {
            return head;
        }

        let set = new Set();
        let prev = null;
        let curr = head;
        let next = head.next;

        while (curr != null) {

            if (set.has(curr.data) == false) {
                set.add(curr.data)
                prev = curr;
                curr = next;
                if (next) {
                    next = next.next;
                }
            }
            else {
                if (prev) {
                    prev.next = next;
                }
                else {
                    head = next;
                }
                prev.next = next;
                curr = next;
                if (next) {
                    next = next.next;
                }
            }
        }
        return head;
    }
}

