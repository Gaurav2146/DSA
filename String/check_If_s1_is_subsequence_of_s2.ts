export class checkIfIsSubsequence {

    constructor() {
    }

    checkIfSubsequence(s1: string, s2: string): boolean {

        if (s1.length == 0 && s2.length != 0) {
            return true;
        }

        if (s1.length == 0 && s2.length == 0) {
            return true;
        }

        if (s1.length != 0 && s2.length == 0) {
            return false;
        }

        for (let i = 0; i < s2.length; i++) {
            if (s2[i] == s1[0]) {
                return this.checkIfSubsequence(s1.substring(1), s2.substring(i + 1));
            }
        }

        return false;

    }

}

let checkIfIsSubsequenceObj = new checkIfIsSubsequence();
console.log(checkIfIsSubsequenceObj.checkIfSubsequence("abnc", "afsgbnc"));