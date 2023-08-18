
export class PrintAllPossibleCombinations {

    array: number[] = [];

    constuctor() {
    }

    printCombinations(size: number, input: string, result: string) {
        if (result.length === 4) {
            // console.log(result);
            this.array.push(Number(result));
            return;
        }

        for (let i = 0; i < input.length; i++) {
            let newResult = result + input[i];
            let newInput = input.substring(0, i) + input.substring(i + 1);
            this.printCombinations(size, newInput, newResult);
        }
    }
}

let obj = new PrintAllPossibleCombinations();
obj.printCombinations(10, "1234567890", "");
console.log(obj.array.length);