

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {

    if(head == null)
    {
        return head;
    }
    
    let leftLeftNode:ListNode|null = null;
    let leftNode:ListNode|null = null;
    let rightNode:ListNode|null = null;
  
    let curr:ListNode|null = head;
    let count = 1;
  
    while(curr!=null)
    {
       if(count == left - 1)
       {
           leftLeftNode = curr;
       } 
       if(count == left)
       {
           leftNode = curr;
       }
       if(count == right)
       {
           rightNode = curr;
       }
       curr = curr.next;
       count = count + 1;
    }
  
    let isUpdatingHeadRequired = false;
  
    if(leftLeftNode == null)
    {
        isUpdatingHeadRequired = true;
    }
    
    let rightRightNode:ListNode|null = rightNode.next;
  
    if(leftLeftNode)
    {
     leftLeftNode.next = rightNode;
    }
    
    //Start reversing
     let prevNode = leftNode;
     let nextNode:ListNode|null = leftNode.next;
     
     while(nextNode!=rightRightNode)
     {  
        let nextVal:ListNode|null = nextNode.next;
        nextNode.next = prevNode;
  
         prevNode = nextNode;
         nextNode = nextVal;
     }
  
     leftNode.next = rightRightNode;
  
     if(isUpdatingHeadRequired)
     {
         head = rightNode;
     }
  
    return head;
  };