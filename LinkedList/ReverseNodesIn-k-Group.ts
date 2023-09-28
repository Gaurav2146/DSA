
//Definition for singly-linked list.
//   class ListNode {
//       val: number
//       next: ListNode | null
//       constructor(val?: number, next?: ListNode | null) {
//           this.val = (val===undefined ? 0 : val)
//           this.next = (next===undefined ? null : next)
//       }
//   }
 

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {


    let count = 0;

    let temp = head;

    while (temp != null) {
        temp = temp.next;
        count++;
    }

    let num = Math.floor(count / k);

    let new_head = solve(head, null, head, k, k, num);

    return new_head;

};


function solve(head: ListNode | null, prevNode: ListNode | null, node: ListNode | null, k: number, n: number, num: number):ListNode | null {
    if (num == 0) {
        return head;
    }

    if (node == null) {
        return null;
    }

    if (node.next == null && n != 1) {
        return node;
    }
    else if (node.next == null && n == 1) {
        node.next = prevNode;
        head.next = null;
        head = node;
        return head;
    }

    if (n == 1) {

        let next_node = node.next;

        node.next = prevNode;

        let old_head = head;

        head = node;

        let newHead = head;

        let resulthead = solve(next_node, old_head, next_node, k, k, num - 1);

        if (old_head) {
            old_head.next = resulthead;
        }

        return newHead;

    }
    else if (n == k) {
        let next_node = node.next;

        let newHead = solve(head, node, next_node, k, n - 1, num);

        return newHead;
    }
    else {
        let next_node = node.next;

        node.next = prevNode;

        let newHead = solve(head, node, next_node, k, n - 1, num);

        return newHead;
    }
}