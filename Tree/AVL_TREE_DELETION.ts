
	// JavaScript program for insertion in AVL Tree 
	class AVLNode { 
        key:number;
        height:number;
        left:AVLNode;
        right:AVLNode;
		constructor(d:number) { 
		this.key = d; 
		this.height = 1; 
		this.left = null; 
		this.right = null; 
		} 
	} 


let root;

// A utility function to get height of the tree 
function height(N: AVLNode) {
    if (N == null)
        return 0;
    return N.height;
}

// A utility function to get maximum of two integers 
function max(a: number, b: number) {
    return (a > b) ? a : b;
}

// A utility function to right rotate subtree rooted with y 
// See the diagram given above. 
function rightRotate(y: AVLNode) {
    let x = y.left;
    let T2 = x.right;

    // Perform rotation 
    x.right = y;
    y.left = T2;

    // Update heights 
    y.height = max(height(y.left), height(y.right)) + 1;
    x.height = max(height(x.left), height(x.right)) + 1;

    // Return new root 
    return x;
}

// A utility function to left rotate subtree rooted with x 
// See the diagram given above. 
function leftRotate(x: AVLNode) {
    let y = x.right;
    let T2 = y.left;

    // Perform rotation 
    y.left = x;
    x.right = T2;

    // Update heights 
    x.height = max(height(x.left), height(x.right)) + 1;
    y.height = max(height(y.left), height(y.right)) + 1;

    // Return new root 
    return y;
}

// Get Balance factor of node N 
function getBalance(N: AVLNode) {
    if (N == null)
        return 0;
    return height(N.left) - height(N.right);
}

function insert(node: AVLNode, key: number) {

if(node == null)
{
    return new AVLNode(key);
}

if(node.key < key)
{
    node.right = insert(node.right,key);
}

if(node.key > key)
{
    node.left = insert(node.left,key);
}

//duplicate key is not allowed
if(node.key == key)
{
    return node;
}

//Update height
node.height = 1 + max(height(node.left), height(node.right)); 

//Calculate Balance Factor
let balance = getBalance(node);

//left left case
if(balance > 1)
{
  if(node.left && node.left.key > key)
  {
     return rightRotate(node);
  }
}

//left right
if(balance > 1)
{
  if(node.left && node.left.key < key)
  {
   leftRotate(node.left);
   return rightRotate(node);
  }
}

//right left
if(balance < -1)
{
  if(node.right && node.right.key > key)
  {
  rightRotate(node.right);
  return leftRotate(node);
  }
}

//right right
if(balance < -1)
{
   if(node.right && node.right.key < key)
   {
      return leftRotate(node);
   }
}
return node;
}

/* Given a non-empty binary search tree, return the 
node with minimum key value found in that tree. 
Note that the entire tree does not need to be 
searched. */
function minValueNode(node: AVLNode) {
    let current = node;

    /* loop down to find the leftmost leaf */
    while (current.left != null)
        current = current.left;

    return current;
}

function deleteNode(root: AVLNode, key: number) {
    // STEP 1: PERFORM STANDARD BST DELETE 
    if (root == null)
        return root;

    // If the key to be deleted is smaller than 
    // the root's key, then it lies in left subtree 
    if (key < root.key)
        root.left = deleteNode(root.left, key);

    // If the key to be deleted is greater than the 
    // root's key, then it lies in right subtree 
    else if (key > root.key)
        root.right = deleteNode(root.right, key);

    // if key is same as root's key, then this is the node 
    // to be deleted 
    else {

        // node with only one child or no child 
        if ((root.left == null) || (root.right == null)) {
            let temp = null;
            if (temp == root.left)
                temp = root.right;
            else
                temp = root.left;

            // No child case 
            if (temp == null) {
                temp = root;
                root = null;
            }
            else // One child case 
                root = temp; // Copy the contents of 
            // the non-empty child 
        }
        else {

            // node with two children: Get the inorder 
            // successor (smallest in the right subtree) 
            let temp = minValueNode(root.right);

            // Copy the inorder successor's data to this node 
            root.key = temp.key;

            // Delete the inorder successor 
            root.right = deleteNode(root.right, temp.key);
        }
    }

    // If the tree had only one node then return 
    if (root == null)
        return root;

    // STEP 2: UPDATE HEIGHT OF THE CURRENT NODE 
    root.height = max(height(root.left), height(root.right)) + 1;

    // STEP 3: GET THE BALANCE FACTOR OF THIS NODE (to check whether 
    // this node became unbalanced) 
    let balance = getBalance(root);

    // If this node becomes unbalanced, then there are 4 cases 
    // Left Left Case 
    if (balance > 1 && getBalance(root.left) >= 0)
        return rightRotate(root);

    // Left Right Case 
    if (balance > 1 && getBalance(root.left) < 0) {
        root.left = leftRotate(root.left);
        return rightRotate(root);
    }

    // Right Right Case 
    if (balance < -1 && getBalance(root.right) <= 0)
        return leftRotate(root);

    // Right Left Case 
    if (balance < -1 && getBalance(root.right) > 0) {
        root.right = rightRotate(root.right);
        return leftRotate(root);
    }

    return root;
}

// A utility function to print preorder traversal of 
// the tree. The function also prints height of every 
// node 
function preOrder(node: AVLNode) {
    if (node != null) {
        console.log(node.key + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}

/* Constructing tree given in the above figure */
root = insert(root, 9);
root = insert(root, 5);
root = insert(root, 10);
root = insert(root, 0);
root = insert(root, 6);
root = insert(root, 11);
root = insert(root, -1);
root = insert(root, 1);
root = insert(root, 2);

/* The constructed AVL Tree would be 
    9 
    / \ 
    1 10 
    / \ \ 
    0 5 11 
    / / \ 
    -1 2 6 
    */
console.log("Preorder traversal of the constructed AVL tree is : " + "</br>");
preOrder(root);

// root = deleteNode(root, 10);

// /* The AVL Tree after deletion of 10 
//     1 
//     / \ 
//     0 9 
//     /	 / \ 
//     -1 5 11 
//     / \ 
//     2 6 
//     */

// console.log("Preorder traversal after " + "deletion of 10 :" + "</br>");
// preOrder(root);


