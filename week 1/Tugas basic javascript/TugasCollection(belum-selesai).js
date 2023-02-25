//input : 1,2,3,4,5
//output : 10,14


function minMaxSum(arr) {
    let minSum = Infinity;
    let maxSum = -Infinity;
    let totalSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      totalSum += arr[i];
    }
  
    for (let i = 0; i < arr.length; i++) {
      let sum = totalSum - arr[i];
      if (sum < minSum) {
        minSum = sum;
      }
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  
    console.log(minSum + " " + maxSum);
  }
  
  // contoh penggunaannya
  minMaxSum([1, 2, 3, 4, 5]); 
  
