class ProductArrayPuzzle {
    productExceptSelf(nums: number[], n: number) {
        //code here
        let leftProductArray = new Array(n);
        leftProductArray[0] = 1;
        let rightProductArray = new Array(n);
        rightProductArray[n - 1] = 1;

        let resultArray = new Array(n);

        for (let i = 1; i < n; i++) {
            leftProductArray[i] = nums[i - 1] * leftProductArray[i - 1];
        }

        for (let i = n - 2; i >= 0; i--) {
            rightProductArray[i] = nums[i + 1] * rightProductArray[i + 1];
        }

        for (let i = 0; i < n; i++) {
            resultArray[i] = leftProductArray[i] * rightProductArray[i];
        }

        return resultArray;
    }
}