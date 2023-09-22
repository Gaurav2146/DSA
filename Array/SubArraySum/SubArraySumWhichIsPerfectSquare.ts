function main(input: string): number {

    let inputArray: string[] = input.split(" ");
    let lengthOfArray = Number(inputArray[0]);

    if (lengthOfArray == 0) {
        return 0;
    }

    let arr = [];
    let i = 1;
    while (lengthOfArray != 0) {
        arr.push(Number(inputArray[i]))
        i++;
        lengthOfArray--;
    }

    let sum = 0;

    if (arr.length == 1) {
        if (isPerfectSquare(arr[0])) {
            sum++;
        }
        return sum;
    }

    if (arr.length == 2) {
        if (isPerfectSquare(arr[0])) {
            sum++;
        }

        if (isPerfectSquare(arr[1])) {
            sum++;
        }

        if (isPerfectSquare(arr[0] + arr[1])) {
            sum++;
        }

        return sum;
    }

    ////////////////////////////////////////////////////////////

    let prefixArray = [];
    prefixArray.push(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        let val: number = arr[i] + prefixArray[i - 1];
        prefixArray.push(val);
    }

    //////////////////////////////////////////////////////////////

    for (let i = 0; i < prefixArray.length; i++) {
        if (isPerfectSquare(prefixArray[i])) {
            sum++;
        }

        let j = i - 1;

        while (j >= 0) {
            if (isPerfectSquare(prefixArray[i] - prefixArray[j])) {
                sum++;
            }
            j--;
        }
    }

    return sum;
}

function isPerfectSquare(num: number) {
    let sq = Math.floor(Math.sqrt(num));

    // Check if currSubSum is
    // a perfect square or not
    if (sq * sq == num) {
        return true;
    }

    return false;
}

console.log(main("100 158 510 500 770 440 419 204 490 317 456 584 297 752 658 582 39 284 90 988 935 413 140 948 416 459 281 259 371 652 66 783 161 575 634 930 366 404 485 207 720 941 791 368 44 448 302 82 731 391 421 17 155 561 316 922 19 948 180 741 599 245 523 112 172 508 393 537 911 878 744 982 170 534 350 213 981 651 294 63 41 66 79 547 626 394 468 996 694 999 737 644 244 611 755 767 119 148 303 29 25"));