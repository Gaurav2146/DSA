
function cnttrue(A: string) {

    return calculate(A, 0, A.length - 1)

}

function calculate(str: string, i: number, j: number) {
    if (i > j) {
        return [0, 0];
    }

    if (i == j) {
        if (str[i] == "T") {
            return [1, 0];
        }

        if (str[i] == "F") {
            return [0, 1];
        }
    }

    let number_of_ways = [0, 0];

    for (let k = i; k < j - 1; k = k + 2) {
        let temp1 = calculate(str, i, k);
        let temp2 = calculate(str, k + 2, j);

        console.log(temp1, "temp1");
        console.log(temp2, "temp2");

        if (str[k + 1] == "|") {
            if (temp1[0] > 0 || temp2[0] > 0) {
                number_of_ways[0] = number_of_ways[0] + temp1[0] + temp2[0];
                number_of_ways[1] = number_of_ways[1] + Math.min(temp1[1], temp2[1])
            }
        }

        if (str[k + 1] == "&") {
            if (temp1[0] > 0 && temp2[0] > 0) {
                number_of_ways[0] = number_of_ways[0] + Math.min(temp1[0], temp2[0]);
                number_of_ways[1] = number_of_ways[1] + temp1[1] + temp2[1];
            }
        }

        if (str[k + 1] == "^") {

            number_of_ways[0] = number_of_ways[0] + temp1[1] * temp2[0] + temp1[0] * temp2[1];
            number_of_ways[1] = number_of_ways[1] + Math.min(temp1[0], temp2[0]);
        }

    }

    return number_of_ways;
}


console.log(cnttrue("F|T^T&F"));