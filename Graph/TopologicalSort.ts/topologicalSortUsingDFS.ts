
//=====================================Topological sort using DFS =========================================
// Topological sort can be done on only that graph which is Directed and Acyclic.
//Create Adjecency list for your graph.
//Create a STACK.
//Create a visited node map which will tell if the node is visisted or not.
//Do DFS traversal for each node of the graph if it is not visited.
//Imp - when we will return after DFS call from any node then we will put that node data in the stack.
//POP the stack and the result will be a valid topological sort.
//===========================================================================================================