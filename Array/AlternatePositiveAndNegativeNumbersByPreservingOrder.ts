

class AlternatePositiveAndNegativeNumbersByPreservingOrder {
    rearrange(arr: number[], n: number) {

        let positiveCount = 0;
        let negativeCount = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 0) {
                positiveCount++;
            }
            else {
                negativeCount++;
            }
        }

        let start = -1;
        let end = -1;

        if (positiveCount > negativeCount) {

            for (let i = 0; i < arr.length; i++) {

                if (i % 2 != 0 && arr[i] >= 0) {

                    let index = i;

                    while (arr[index] >= 0) {
                        index++;
                    }

                    this.rightRotate(arr, i, index);

                }
                else if (i % 2 == 0 && arr[i] < 0) {

                    let index = i;

                    while (arr[index] < 0) {
                        index++;
                    }

                    this.rightRotate(arr, i, index);

                }

            }



        } else {

            for (let i = 0; i < arr.length; i++) {

                if (i % 2 == 0 && arr[i] >= 0) {

                    let index = i;

                    while (arr[index] >= 0) {
                        index++;
                    }

                    this.rightRotate(arr, i, index);

                }
                else if (i % 2 != 0 && arr[i] < 0) {

                    let index = i;

                    while (arr[index] < 0) {
                        index++;
                    }

                    this.rightRotate(arr, i, index);

                }

            }


        }

        return arr;
    }

    rightRotate(arr: number[], i: number, j: number) {

        let lastData = arr[j];
        let prevData = arr[i];

        for (let a = i; a < j; a++) {
            let currData = arr[i + 1];
            arr[i + 1] = prevData;
            prevData = currData;
        }

        arr[i] = lastData;
    }

}

let input_array = [-5, -2, 5, -2, 4, -7, 1, 8, 0, -8];

console.log(new AlternatePositiveAndNegativeNumbersByPreservingOrder().rearrange(input_array, input_array.length));