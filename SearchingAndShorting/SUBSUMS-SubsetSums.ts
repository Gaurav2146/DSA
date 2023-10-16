// Given a sequence of N (1 ≤ N ≤ 34) numbers S1, ..., SN (-20,000,000 ≤ Si ≤ 20,000,000), determine how many
// subsets of S (including the empty one) have a sum between A and B (-500,000,000 ≤ A ≤ B ≤ 500,000,000), inclusive.

// Input
// The first line of standard input contains the three integers N, A, and B. The following N lines contain
// S1 through SN, in order.

// Output
// Print a single integer to standard output representing the number of subsets satisfying the above property.
// Note that the answer may overflow a 32-bit integer.

// Example
// Input:
// 3 -1 2
// 1
// -2
// 3

// Output:
// 5
// The following 5 subsets have a sum between -1 and 2:

// 0 = 0 (the empty subset)
// 1 = 1
// 1 + (-2) = -1
// -2 + 3 = 1
// 1 + (-2) + 3 = 2


