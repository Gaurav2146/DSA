
//Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function reverseList(head: ListNode | null): ListNode | null {

    if (head === null) {
        return head;
    }

    let prevNode = head;
    let nextNode = head.next;

    head.next = null;

    while (nextNode != null) {
        let nextVal = nextNode.next;
        nextNode.next = prevNode;

        prevNode = nextNode;
        nextNode = nextVal;
    }

    head = prevNode;
    return head;
};


function reverseListRecursive(head: ListNode | null): ListNode | null {

    if (head == null || head.next === null) {
        return head;
    }

    let nextNode = head.next;

    let newHead = reverseListRecursive(nextNode);

    head.next = null;
    nextNode.next = head;

    return newHead;
};





 
  

  
  
  
  
  