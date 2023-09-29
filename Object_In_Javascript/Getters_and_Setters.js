// [ 0,0,0,0,0,0] let m is size of array.

// let I want to implement n stacks then

// size of each stack = m/n

// let there be n pointers pointing the index of array as top of each stack.

// lets place top pointers of each stack in an array with size n with name topPointerArray.

//Intitally pointer of each stack will be :-
// let index = m/n - 1;
// for(let i=0; i < n; i++)
//{
//    topPointerArray[i] = index;
//    index = index +  m/n;
//}
//

// Index i represention index at which top pointer of ith stack is present.

// If any element is pushed we decrease the pointer index by 1.

// When any element is popped we return the current index element and increase the top index bt 1.

//Create an array of size n in which index i will store size of ith stack.

//If size of stack is becoming greater than m/n after push operation then don't push the data in stack
//and throw stack overflow error. If stack size is zero and pop operation is called then return stack
//underflow error.

//On successful push increase the size of stack by one and on successful pop decrease the same by 1.

//









