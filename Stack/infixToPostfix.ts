// Lets initialize the result with an empty string “”;
// Scan the infix expression from left to right.
// If you find any operator then add that in your result.
// If you find an open bracket then push that bracket in the stack.
// If you find any operand then check if there is already an operand present on top of the
// stack with higher precedence, if so then pop that operand and add it to the result.
// Check the above condition until you find any operand who has less precedence than the
// current operand or an open bracket.
// Push the operand to stack.
// If you find any closed bracket then pop the stack until you find an open bracket and append
// it to the result.
// After that pop that open bracket too.
// Once all the infix expression scanning is done then pop all the remaining elements from
// the stack and add it to the result.

class infixToPostfix {

    convert(infix: string) {

        let stack = [];

        let res = "";

        for (let i = 0; i < infix.length; i++) {

            if (infix[i] == '(') {
                stack.push(infix[i]);
            }
            else if (infix[i] == '*' || infix[i] == '/' || infix[i] == '-' || infix[i] == '+') {

                if (stack.length > 0) {
                    let top = stack[stack.length - 1];
                    while ((stack.length > 0) &&
                        (top != "(") &&
                        (this.priority(top) > this.priority(infix[i]))
                    ) {
                        res = res + top;
                        stack.pop();
                        top = stack[stack.length - 1];
                    }
                }
                stack.push(infix[i]);
            }
            else if (infix[i] == ')') {
                if (stack.length > 0) {
                    let top = stack[stack.length - 1];
                    while (stack.length > 0 && top != "(") {

                        res = res + top;
                        stack.pop();
                        top = stack[stack.length - 1];
                    }
                }
                if (stack.length > 0) {
                    stack.pop();
                }
            }
            else {
                res = res + infix[i];
            }
        }

        while (stack.length > 0) {
            res = res + stack.pop();
        }

        return res;
    }

    priority(operand: string): number {
        if (operand == "*" || operand == "/") {
            return 3;
        }

        if (operand == "+") {
            return 2;
        }

        return 1;
    }

}

console.log(new infixToPostfix().convert("((A+B)*C-D)*E"));