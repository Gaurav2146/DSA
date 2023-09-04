//========================================== KRUSKALS ALGORITHMS =======================================
//1. We will get array of array as an input.
//2. Each index of an array will be an array of size 3.
//3. First Index - Source vertex , Second Index - Destination Vertex , 3rd Vertex - Weight
//4. Sort the input array on the basis of edge weight from low to high and Loop through the input array.
//5. In each Iteration, take out source and destination vertex. Do the FIND operation and If both vertex
//   are present in same set then skip that edge.
//6. If both the vertices are not present in same set then do the UNION operation.
//7. In the UNION operation we update the parent array data of any child node with data of parent node.
//8. After looping all the edges from the input list, using parent array we can draw our minimum spanning tree.
//=======================================================================================================