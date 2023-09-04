//======================================= Disjoint Set =====================================================
// 1. Create a parent array and set parent of each node as -1.
// 2. Create a rank array and make value of rank of all nodes as 0.
// 3. You will get input as an array of edges.
// 4. Process each edge one by one and see if source and destination are in same set.
// 5. Source and destination vertex will be in the same set only if absolute parent of both the nodes are same.
// 6. If they are in same set then skip otherwise do UNION operation.
// 7. In UNION operation make vertex with bigger rank as parent of other vertex.
// 8. If both source and destination has same rank, then randomly make any one as parent and other as child
//     also increase the rank of parent node by 1.
//
// 9. In find operation we mainly need to find absolute parent, so we can use path compression technique by
//    updating parent array to store absolute parent after every find operation to reduce the number of iteration
//    to find absolute parent of any node.
//
// 10. We can detect cycle in undirected graph using Disjoint Set.
// 11. While procession any edge if both source and destination belongs to same set i.e. both has same
//     absolute parent then we can say that there is a cycle in undirected graph.
//==========================================================================================================