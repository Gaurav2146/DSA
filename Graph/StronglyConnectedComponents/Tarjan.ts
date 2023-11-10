//========================================== TARJAN'S Algo ===============================================
// 1. Create 4 arrays.
// 2. Create DiscoveryTime array, Low Array, Parent Array and Visited array.
// 3. Start a timer with value 0.
// 4. On every new node procession inceasing the timer value by 1.
// 5. For every processed node, Discovery value will be timer value at that time and low value will also be
//    the timer value at that time/
// 6. For all adjecent nodes if node is not parent and is already visited with discovery time less than the
//    Low value of current node then update the low value with formula Math.min(Dis[adjecent],Low[node]).
// 7. While returning from DFS call update the Low value of parent also according the formula
//    Math.min(Low(child),Low(Node));
// 8. If at any point of time we found out that Low(Child) > Dis[Node] then there is a bridge from Node to
//    child.
// 9. In the above case, Node will be considered as articulation point if Node is not root and if it is
//    root then the Node should have more than one child. i.e number of adjecent node should be greater
//    than 1.
//========================================================================================================

class Tarjan
{

    


}