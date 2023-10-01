class mergeKSortedArray {
    mergeKArrays(arr:number[][],K:number):number[]{
        //code here
        
        let res:number[] = [];
        
        for(let i=0; i < arr.length - 1; i=i+2)
        {
            this.merge(arr[i] , arr[i+1] , res);
        }
        
        return res;
        
    }
    
    merge(arr1:number[],arr2:number[],res:number[])
    {
        
        if(arr1.length == 0)
        {
            res = [...res,...arr2];

            return;
        }
        
         if(arr2.length == 0)
        {
            res = [...res,...arr1];
            return;
        }
        
        if(arr1[0] < arr2[0])
        {
            res.push(arr1[0]);
            arr1.shift();
            this.merge(arr1,arr2,res);
            return;
        }
        else
        {
            res.push(arr2[0]);
            arr2.shift();
            this.merge(arr1,arr2,res);
            return;
        }
    }
}

console.log(new mergeKSortedArray().mergeKArrays([[1,2,3],[4,5,6],[7,8,9]],3));



