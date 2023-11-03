// Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
// The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.
// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 
// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

function mySqrt(x: number): number {

    if (x == 1 || x == 0) {
        return x;
    }

    let low = 0;
    let high = x;
    let res: number;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (mid * mid == x) {
            res = mid;
            break;
        }
        else if (mid * mid < x) {
            res = mid;
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return res;
};