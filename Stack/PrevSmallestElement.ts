
class PrevSmallestElement {

    findPrevious(array: number[]) {

        let smallestPrevious: number[] = [];

        for (let i = 0; i < array.length; i++) {
            smallestPrevious[i] = i;
        }

        let stack: number[] = [];

        for (let i = 0; i < array.length; i++) {

            if (stack.length == 0) {
                smallestPrevious[i] = 0;
            }
            else if (array[stack[stack.length - 1]] < array[i]) {
                smallestPrevious[i] = stack[stack.length - 1] + 1;
            }
            else if (array[stack[stack.length - 1]] >= array[i]) {

                let index = stack[stack.length - 1];

                while (stack.length > 0 && array[index] >= array[i]) {

                    stack.pop();

                    if (stack.length > 0) {
                        index = stack[stack.length - 1];
                    }
                    else {
                        index = -1;
                    }
                }
                smallestPrevious[i] = index + 1;
            }

            stack.push(i);
        }

        return smallestPrevious;
    }
}


console.log(new PrevSmallestElement().findPrevious([1, 2, 3]));