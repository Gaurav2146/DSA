// Given a set of N jobs where each jobi has a deadline and profit associated with it.

// Each job takes 1 unit of time to complete and only one job can be scheduled at a time. We earn the profit associated with job if and only if the job is completed by its deadline.

// Find the number of jobs done and the maximum profit.

// Note: Jobs will be given in the form (Jobid, Deadline, Profit) associated with that Job.


// Example 1:

// Input:
// N = 4
// Jobs = {(1,4,20),(2,1,10),(3,1,40),(4,1,30)}
// Output:
// 2 60
// Explanation:
// Job1 and Job3 can be done with
// maximum profit of 60 (20+40).
// Example 2:

// Input:
// N = 5
// Jobs = {(1,2,100),(2,1,19),(3,2,27),
//         (4,1,25),(5,1,15)}
// Output:
// 2 127
// Explanation:
// 2 jobs can be done with
// maximum profit of 127 (100+27).

// Your Task :
// You don't need to read input or print anything. Your task is to complete the function JobScheduling() which takes an integer N and an array of Jobs(Job id, Deadline, Profit) as input and returns the count of jobs and maximum profit as a list or vector of 2 elements.


// Greedy approach for job sequencing problem:
// Greedily choose the jobs with maximum profit first, by sorting the jobs in decreasing order of their profit. This would help to maximize the total profit as choosing the job with maximum profit for every time slot will eventually maximize the total profit

// Follow the given steps to solve the problem:

// Sort all jobs in decreasing order of profit. 
// Iterate on jobs in decreasing order of profit.For each job , do the following : 
// Find a time slot i, such that slot is empty and i < deadline and i is greatest.Put the job in 
// this slot and mark this slot filled. 
// If no such i exists, then ignore the job. 


class JobSequencingProblem {
    //Function to find the maximum profit and the number of jobs done.
    JobScheduling(arr: [{ id: number, dead: number, profit: number }], n: number) {
        // code here
        arr.sort((a, b) => b.profit - a.profit)
        let maxDeadline = Number.MIN_SAFE_INTEGER;
        for (let i = 0; i < n; i++) {
            maxDeadline = Math.max(maxDeadline, arr[i].dead)
        }
        let scheduleJob = Array(maxDeadline + 1).fill(-1)
        let count = 0
        let maxProfit = 0
        for (let i = 0; i < n; i++) {
            for (let k = arr[i].dead; k > 0; k--) {
                if (scheduleJob[k] === -1) {
                    count++
                    maxProfit += arr[i].profit
                    scheduleJob[k] = arr[i].id
                    break
                }
            }
        }


        return [count, maxProfit]
    }
}