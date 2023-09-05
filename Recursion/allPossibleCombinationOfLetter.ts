
class PossibleCombinationofNumber {

    constructor() {
    }

    calculate(input: string) {

        let combinations = this.calculateCombinations(input);
        console.log(combinations.output, "Possible combinations");
    }

    calculateCombinations(input: string) {

        let flag = false;
        let output: any[] = []

        if (input.length == 0) {
            return { flag: flag, output: output };
        }

        if (input.length > 0 && input[0] == "0") {
            return { flag: flag, output: output };
        }

        if (Number(input) > 0 && Number(input) <= 26) {
            output.push([Number(input)]);
            flag = true;
        }

        if (input.length == 1) {
            return { flag: flag, output: output };
        }

        for (let i = 1; i < input.length; i++) {

            let comb1 = this.calculateCombinations(input.substring(0, i));

            let comb2 = this.calculateCombinations(input.substring(i));

            if (comb1.flag == true && comb2.flag == true) {

                flag = true;

                for (let j = 0; j < comb1.output.length; j++) {

                    for (let k = 0; k < comb2.output.length; k++) {

                        let arr = [];

                        arr = [...comb1.output[j], ...comb2.output[k]]

                        output.push(arr);
                    }
                }

            }
        }

        return { flag: flag, output: output };

    }

}


let object = new PossibleCombinationofNumber();

let input = "226";
//let input = "100";
//let input = "205";

object.calculate(input);

