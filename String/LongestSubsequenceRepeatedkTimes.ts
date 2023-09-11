function longestSubsequenceRepeatedK(s: string, k: number): string {

    if (k <= 1) {
        return s;
    }

    let map = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            let len = map.get(s[i]);
            if(len)
            {
                len = len + 1;
                map.set(s[i], len);
            }
        }
        else {
            map.set(s[i], 1);
        }
    }

    let possibleCharacters = [];

    for (let [key, value] of map) {
        let numOfTimesCharacterRepeated = Number.parseInt((value / k).toString());

        if (numOfTimesCharacterRepeated >= 1) {
            for (let i = 0; i < numOfTimesCharacterRepeated; i++) {
                possibleCharacters.push(key);
            }
        }

    }

    if (possibleCharacters.length == 0) {
        return "";
    }

    console.log(possibleCharacters, "possibleCharacters");

    let allSubtrings:string[] = [];

    findAllStringsPossibleFromGivenCharacter(possibleCharacters, allSubtrings, "");

    console.log(allSubtrings, "allSubtrings");

    let allSubsequences = [];;

    for (let i = 0; i < allSubtrings.length; i++) {
        let str = "";

        for (let j = 0; j < k; j++) {
            str = str + allSubtrings[i];
        }

        if (isSubsequence(s, str)) {
            allSubsequences.push(allSubtrings[i]);
        }
    }

    return findLexographicallyMaximumString(allSubsequences)

}

function findLexographicallyMaximumString(allSubsequences: string[]): string {

    let maximumLengthString = 0;

    for (let i = 0; i < allSubsequences.length; i++) {
        if (allSubsequences[i].length > maximumLengthString) {
            maximumLengthString = allSubsequences[i].length;
        }

    }

    let possibleAnswers = [];

    for (let i = 0; i < allSubsequences.length; i++) {
        if (allSubsequences[i].length == maximumLengthString) {
            possibleAnswers.push(allSubsequences[i]);
        }

    }

    possibleAnswers.sort();

    return possibleAnswers[possibleAnswers.length - 1];
}


function findAllStringsPossibleFromGivenCharacter(possibleCharacters: string[], allSubtrings: string[], result: string) {
    if (possibleCharacters.length == 0) {
        return;
    }

    for (let i = 0; i < possibleCharacters.length; i++) {
        let newresult = result + possibleCharacters[i];

        allSubtrings.push(newresult);

        let newpossibleCharacters = [...possibleCharacters];

        newpossibleCharacters.splice(i, 1);

        findAllStringsPossibleFromGivenCharacter(newpossibleCharacters, allSubtrings, newresult)
    }

}


function isSubsequence(s: string, res: string): boolean {
    let j = 0;
    for (let i = 0; i < s.length; i++) {

        if (j < res.length && s[i] == res[j]) {
            j++;
        }

    }

    if (j == res.length) {
        return true;
    }

    return false;

}