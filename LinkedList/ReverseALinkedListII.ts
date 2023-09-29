

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {

    if (head == null) {
        return head;
    }

    let leftLeftNode: ListNode | null = null;
    let leftNode: ListNode | null = null;
    let rightNode: ListNode | null = null;

    let curr: ListNode | null = head;
    let count = 1;

    while (curr != null) {
        if (count == left - 1) {
            leftLeftNode = curr;
        }
        if (count == left) {
            leftNode = curr;
        }
        if (count == right) {
            rightNode = curr;
        }
        curr = curr.next;
        count = count + 1;
    }

    let isUpdatingHeadRequired = false;

    if (leftLeftNode == null) {
        isUpdatingHeadRequired = true;
    }

    let rightRightNode: ListNode | null = rightNode.next;

    if (leftLeftNode) {
        leftLeftNode.next = rightNode;
    }

    //Start reversing
    let prevNode = leftNode;
    let nextNode: ListNode | null = leftNode.next;

    while (nextNode != rightRightNode) {
        let nextVal: ListNode | null = nextNode.next;
        nextNode.next = prevNode;

        prevNode = nextNode;
        nextNode = nextVal;
    }

    leftNode.next = rightRightNode;

    if (isUpdatingHeadRequired) {
        head = rightNode;
    }

    return head;
};



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

function reverseBetweenRecursive(head: ListNode | null, left: number, right: number): ListNode | null {

    if (head == null) {
        return head;
    }

    let leftLeftNode = null;
    let leftNode = null;
    let rightNode = null;

    let curr = head;
    let count = 1;

    while (curr != null) {
        if (count == left - 1) {
            leftLeftNode = curr;
        }
        if (count == left) {
            leftNode = curr;
        }
        if (count == right) {
            rightNode = curr;
        }
        curr = curr.next;
        count = count + 1;
    }

    let isUpdatingHeadRequired = false;

    if (leftLeftNode == null) {
        isUpdatingHeadRequired = true;
    }

    let rightRightNode = rightNode.next;

    //Start reversing
    let newHead: ListNode | null = reverseRecursive(leftNode, rightNode)

    if (leftNode) {
        leftNode.next = rightRightNode;
    }

    if (isUpdatingHeadRequired == false) {
        leftLeftNode.next = newHead;
    }
    else {
        head = newHead;
    }

    return head;
};


function reverseRecursive(left: ListNode | null, right: ListNode | null) {
    if (left == null) {
        return null;
    }

    if (left == right) {
        right.next = null;
        return right;
    }

    if (left.next === right) {
        right.next = left;
        left.next = null;
        return right;
    }

    let nextNode = left.next;

    let newHead: ListNode | null = reverseRecursive(nextNode, right)

    if (nextNode) {
        nextNode.next = left;
    }

    left.next = null;

    return newHead;
}