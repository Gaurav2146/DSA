class nextGreaterElement {

    findNextGreaterElement(array: number[]) {
        if (array.length == 0) {
            return [];
        }
        let stack = [];
        let nextGreaterElementArray = [];
        for (let i = 0; i < array.length; i++) {
            nextGreaterElementArray.push(-1);
        }

        stack.push([array[0], 0]);
        for (let i = 1; i < array.length; i++) {
            let top = stack[stack.length - 1];
            if (top[0] >= array[i]) {
                stack.push([array[i], i]);
            }
            else {
                let topElement = stack[stack.length - 1];
                while (stack.length > 0 && topElement[0] < array[i]) {
                    let poppedElement = stack.pop();
                    if (poppedElement && poppedElement[1]) {
                        nextGreaterElementArray[poppedElement[1]] = i;
                    }
                    topElement = stack[stack.length - 1];
                }
                stack.push([array[i], i]);
            }
        }
        return nextGreaterElementArray;
    }
}

console.log(new nextGreaterElement().findNextGreaterElement([18, 7, 6, 12, 15, 13, 16, 2]));