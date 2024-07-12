const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let ex=0
	let len=arr.length
	let sum=0
	const ans=[]
	for(let i=0;i<len;i++){
	    sum=sum+arr[i]
	    if(sum>n){
	        if(arr[i]<=n){
	            sum=arr[i]
	        }
	        ans.push(arr.slice(ex,i))
	        ex=i
	    }
	}
	if(sum<=n)
	ans.push(arr.slice(ex,len))
	return ans
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
