//
//1. We need to find the prevous index element which has value less than current element and is
//   closest to current element.
//
//2. Intiatlize smallestPrevious array with contains index of prevoius smallest element.
//
//3. Initially intialize the value with it's index.
//
//4. Create a stack.
//
//5. If stack is empty then set smallestPrevious[i]=0 since there is no element in stack which is
//   smaller than current element.
//
//6. If stack top value is less than current index value. set smallestPrevious[i]= stack[stack.length-1] 
//   because top element of the stack is having smallest element closet in the left from current element.
//
//7. If stack top value is greater than current element then pop the elment until you find small element 
//   index in the stack or stack becomes empty. set smallestPrevious[i] as top of the stack if stack is 
//   not empty and if it is empty then set it to 0. 
//
//8. Push the current element in stack.
//
//Explaination - Why we are adding current element in the stack?
//
// Answer - If we go to the next element then we will check for current element if it is smaller to the next
// element. If current element is smaller then we do not need to check back. If current element is larger then
// we will pop the current element because since current element larger than next element so for elements
// coming after next element will have either next element as closest smallest element or element with value 
// less than next val will be the answer.
// Now, since current element is larger than next val, it can not be used to find smaller element than next val.
// So, we pop the top element from stack if it is larger than current element because the top elemet of stack
// will have no effect on future calculations because we are serching for smaller values and larger values will
// be ignored. We also don't wany any larger value before small data in stack because in that case our algorithm
// will not work. 
// Stack structure will be such that the largest data will be on top of the stack, and after that we will have
// smaller data in dececending order from top to bottom.
//

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