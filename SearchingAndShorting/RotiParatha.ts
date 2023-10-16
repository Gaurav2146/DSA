// PRATA - Roti Prata
// no tags
// IEEE is having its AGM next week and the president wants to serve cheese prata after the meeting.
// The subcommittee members are asked to go to food connection and get P (P<=1000) pratas 
//packed for the function. The stall has L cooks (L<=50) and each cook has a rank R (1<=R<=8).
// A cook with a rank R can cook 1 prata in the first R minutes 1 more prata in the next 2R minutes,
// 1 more prata in 3R minutes and so on (he can only cook a complete prata) (For example if a cook is 
//ranked 2, he will cook one prata in 2 minutes one more prata in the next 4 mins an one more in the 
//next 6 minutes hence in total 12 minutes he cooks 3 pratas in 13 minutes also he can cook only 3 pratas 
//as he does not have enough time for the 4th prata). The webmaster wants to know the minimum time to get 
//the order done. Please write a program to help him out.

// Input
// The first line tells the number of test cases. Each test case consist of 2 lines.
// In the first line of the test case we have P the number of prata ordered.
// In the next line the first integer denotes the number of cooks L and L integers
// follow in the same line each denoting the rank of a cook.

// Output
// Print an integer which tells the number of minutes needed to get the order done.

// Example
// Input:
// 3
// 10
// 4 1 2 3 4
// 8
// 1 1
// 8
// 8 1 1 1 1 1 1 1 1

// Output:
// 12
// 36
// 1

class RotiParatha {

    calculate(parathas: number, cooks: number[]) {

        let time = 1;
        let numberOfParatha = 0;

        while (numberOfParatha < parathas) {

            numberOfParatha = this.numberOfParathasCookedInGivenTime(cooks, time);

            if (numberOfParatha < parathas) {
                time = time * 2;
            }
        }

        let lower_limit = time / 2;
        let upper_limit = time;
        let ans;

        while (lower_limit <= upper_limit) {

            let mid = Math.floor((lower_limit + upper_limit) / 2);

            let parathaMade = this.numberOfParathasCookedInGivenTime(cooks, mid);

            if (parathaMade > parathas) {
                ans = mid;
                upper_limit = mid - 1;
            }
            else if (parathaMade < parathas) {
                lower_limit = mid + 1;
            }
            else {
                ans = mid;
                upper_limit = mid - 1;
            }
        }

        return ans;
    }

    numberOfParathasCookedInGivenTime(cooks: number[], time: number) {

        let totalParatha = 0;

        for (let i = 0; i < cooks.length; i++) {

            let count = 1;
            let rank = cooks[i];
            let cookRank = rank;
            let time_taken = 0;

            while (time_taken + cookRank <= time) {

                totalParatha++;
                count++;
                time_taken = time_taken + cookRank;
                cookRank = count * rank;
            }
        }

        return totalParatha;
    }
}

console.log(new RotiParatha().calculate(8, [1, 1, 1, 1, 1, 1, 1, 1]));