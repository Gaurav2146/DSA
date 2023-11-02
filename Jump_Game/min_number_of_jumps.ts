function jump(nums: number[]): number {

    let DP = new Map();

    return min_jumps(nums, 0, 0, DP);
};

function min_jumps(nums: number[], output: number, index: number, DP: Map<string, number>) {

    if (index >= nums.length - 1) {
        return output;
    }

    let key = output + "-" + index;

    if (DP.has(key)) {
        return DP.get(key);
    }

    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i <= nums[index]; i++) {
        min = Math.min(min, min_jumps(nums, output + 1, index + i, DP));
    }
    DP.set(key, min);
    return min;
}