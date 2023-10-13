//=============================== Intution ===================================================

//Create a new array with each index is an array of size 2 in which 1st index represents index
//of element in the input array and second index contains value.

// sort the array on the basis of value.

// Now try to covert the sequence of elements present in sorted array to the input array.

// Number of swaps required to convert sorted array to input array will be the answer.

//==============================================================================================
class MinimumSwapsToSort {
	//Function to find the minimum number of swaps required to sort the array.
	minSwaps(nums: number[]) {
		// code here
		let arr = new Array(nums.length);
		for (let i = 0; i < nums.length; i++) {
			arr[i] = [i, nums[i]];
		}
		arr.sort((a, b) => a[1] - b[1]);
		let count = 0;
		console.log(arr, "arr");

		for (let i = 0; i < arr.length; i++) {
			if (arr[i][0] != i) {
				count++;
				this.swap(arr, i, arr[i][0]);

				//We will do this to check if after swapping the index of swapped element 
				//is same as current index or not
				i = i - 1;
			}
		}
		console.log(arr, "arr");
		return count;
	}

	swap(arr: number[], i: number, j: number) {
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
}



console.log(new MinimumSwapsToSort().minSwaps([7, 16, 14, 17, 6, 9, 5, 3, 18]));
