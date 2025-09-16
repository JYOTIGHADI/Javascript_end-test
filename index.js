// 1. Write a function that takes an array of integers and returns a new array containing only the elements that appear more than once.

// Example:
// Input → [4, 5, 9, 4, 9, 2]
// Output → [4, 9]


function findDuplicates(arr) {
      let duplicates = [];
  
for (let i = 0; i < arr.length; i++) {
 for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
        if (!duplicates.includes(arr[i])) {
    duplicates.push(arr[i]);
        }
      }
    }
  }

return duplicates;
}

let numbers = [4, 5, 9, 4, 9, 2];

console.log(findDuplicates(numbers)); 





// 2. Write a function to rotate a 2D matrix (n x n) by 90 degrees clockwise.

// Example:
// Input →

// [[1,2,3],
//  [4,5,6],
//  [7,8,9]]


// Output →

// [[7,4,1],
//  [8,5,2],
//  [9,6,3]]

function rotateMatrix(matrix) {
    const n = matrix.length;
    let rotated = Array.from({ length: n }, () => Array(n).fill(0));                            
    for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
              rotated[j][n - 1 - i] = matrix[i][j];
        }   
    }
    return rotated;
}       
let matrix = [  
    [1, 2, 3],  

    [4, 5, 6],

    [7, 8, 9]
];  

console.log(rotateMatrix(matrix));






// 3. Binary Search Problem
// Implement binary search to find the index of a given number in a sorted array. If not found, return -1.

// Example:
// Input → [2, 5, 7, 10, 14, 20], target = 10
// Output → 3

function binarysearch(arr, target) {
    let left=0;
    let right=arr.length-1;
    while(left<=right){
     let mid =Math.floor((left+right)/2);
    if(arr[mid]===target){
            return mid;
        }
   else if(arr[mid]<target){
            left=mid+1;
        }
        else{
            right=mid-1;
        }           
    }
}
let arr = [2, 5, 7, 10, 14, 20];
let target = 10;
console.log(binarysearch(arr, target));





// 4. Subarray Problem
// Write a function to find the maximum sum of any contiguous subarray of size k.

// Example:
// Input → [2, 1, 5, 1, 3, 2], k = 3
// Output → 9 (5 + 1 + 3)

function maxSubarraySum(arr, k) {
    let maxSum = 0;
    let currentSum = 0;                 
 for (let i = 0; i < k; i++) {
     currentSum += arr[i];
    }       
    maxSum = currentSum;
    for (let i = k; i < arr.length; i++) {
     currentSum += arr[i] - arr[i - k];
      maxSum = Math.max(maxSum, currentSum);  
    }
    return maxSum;


}
let array = [2, 1, 5, 1, 3, 2];

let k = 3;

console.log(maxSubarraySum(array, k));







// 5. String Problem
// Write a function to find the longest substring without repeating characters.

// Example:
// Input → "abcabcbb"
// Output → "abc" (length = 3)

function longestSubstring(s) {
 let charMap = new Map();
 let left = 0;
 let maxLength = 0;
 let longestSubstr = "";

for (let right = 0; right < s.length; right++) {
    if (charMap.has(s[right])) {
            left = Math.max(left, charMap.get(s[right]) + 1);
        }
        charMap.set(s[right], right);
        if (right - left + 1 > maxLength) {
            maxLength = right - left + 1;
            longestSubstr = s.slice(left, right + 1);
        }
    }
    console.log(longestSubstr);
    return maxLength;
}

let inputString = "abcabcbb";

console.log(longestSubstring(inputString));





