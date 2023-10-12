class MinimumSwapsToSort
{
    //Function to find the minimum number of swaps required to sort the array.
	minSwaps(nums:number[])
	{
		// code here
		let arr = new Array(nums.length);
		
		for(let i=0; i < nums.length; i++)
		{
		    arr[i] = [i,nums[i]];
		}
		
		arr.sort((a,b)=>a[1]-b[1]);
		
		let count = 0;

		console.log(arr , "arr");
		
		for(let i=0; i < arr.length; i++)
		{
			if(arr[i][0]!=i)
		    {
		        count++;
		        this.swap(arr,i,arr[i][0]);
		        i = i - 1;
		    }
		}
		return count;
	}
	
	swap(arr:number[],i:number,j:number)
	{
	    let temp = arr[i];
	    arr[i] = arr[j];
	    arr[j] = temp;
	}
}

console.log(new MinimumSwapsToSort().minSwaps([7 ,16, 14, 17, 6, 9, 5, 3, 18]));
