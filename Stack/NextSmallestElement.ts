
class NextSmallestElement {

    findNext(array: number[]) {

        let smallestNext: number[] = [];

        for (let i = 0; i < array.length; i++) {
            smallestNext[i] = i;
        }

        let stack: number[] = [];

        for (let i = array.length - 1; i >= 0; i--) {

            if (stack.length == 0) {
                smallestNext[i] = array.length - 1;
            }
            else if (array[stack[stack.length - 1]] < array[i]) {
                smallestNext[i] = stack[stack.length - 1] - 1;
            }
            else if (array[stack[stack.length - 1]] >= array[i]) {

                let index = stack[stack.length - 1];

                while (stack.length > 0 && array[index] >= array[i]) {

                    stack.pop();

                    if (stack.length > 0) {
                        index = stack[stack.length - 1];
                    }
                    else {
                        index = array.length;
                    }
                }

                smallestNext[i] = index - 1;
            }

            stack.push(i);
        }

        return smallestNext;

    }
}


console.log(new NextSmallestElement().findNext([1, 2, 3]));