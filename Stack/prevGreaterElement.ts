class prevGreaterElement {

    findPrevGreaterElement(array: number[]) {
        if (array.length == 0) {
            return [];
        }
        let stack = [];
        let prevGreaterElementArray = [];
        for (let i = 0; i < array.length; i++) {
            prevGreaterElementArray.push(-1);
        }

        stack.push([array[0], 0]);
        for (let i = 1; i < array.length; i++) {
            let top = stack[stack.length - 1];
            if (top[0] > array[i]) {
                prevGreaterElementArray[i] = top[1];
                stack.push([array[i], i]);
            }
            else {
                let topElement = stack[stack.length - 1];
                while (stack.length > 0 && topElement[0] <= array[i]) {
                    stack.pop();
                    topElement = stack[stack.length - 1];
                }

                if (stack.length > 0) {
                    prevGreaterElementArray[i] = stack[stack.length - 1][1];
                }
                stack.push([array[i], i]);
            }
        }
        return prevGreaterElementArray;
    }
}

console.log(new prevGreaterElement().findPrevGreaterElement([18, 7, 6, 12, 15, 13, 16, 2]));