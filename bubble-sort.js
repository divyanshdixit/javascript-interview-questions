// Bubble Sorting:

// ascend order
// two adjucent elements to be compared
// if those elements are not in sorted order then their position will be swaped
// start from first element (0 index);

var arr = [7,8,3,4,2];
// result is [2,3,4,7,8]

// i=0, i+1
/*
phase:1 // 4

arr[i] > arr[i+1]
7 > 8
7,8,3,4,2
arr[i+1] > arr[i+2]
8 > 3
7,3,8,4,2
arr[i+2] > arr[i+3]
8 > 4
7,3,4,8,2
arr[i+3] > arr[i+4]
8>2
7,3,4,2,8

phase 2: // 3

arr[i] > arr[i+1]
7>3
3,7,4,2,8
arr[i+1] > arr[i+2]
7 > 4
3,4,7,2,8
arr[i+2] > arr[i+3]
7 > 2
3,4,2,7,8
arr[i+3] > arr[i+4]
7 > 8
3,4,2,7,8

phase 3: // 2
arr[i] > arr[i+1]
3 > 4
3,4,2,7,8
arr[i+1] > arr[i+2]
4>2
3,2,4,7,8
arr[i+2] > arr[i+3]
4 > 7
3,2,4,7,8
arr[i+3] > arr[i+4]
7 > 8
3,2,4,7,8

phase 4: // 1

arr[i] > arr[i+1]
3>2
2,3,4,7,8
arr[i+1] > arr[i+2]
3 > 4
2,3,4,7,8
arr[i+2] > arr[i+3]
4>7
2,3,4,7,8
arr[i+3] > arr[i+4]
7>8
2,3,4,7,8

*/

// n-1 => 5 -1 = 4
var n = arr.length;

for(let i=0; i<n-1; i++){
    for(let j=0; j<n-1-i; j++){ // 4, 3, 2, 1
        if(arr[j] > arr[j+1]){
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp
        }
    }
}
console.log(arr);

// 
var arr1 = [1,2,3,6,5];
// phase n-1, 4

// phase 1
// arr[i] > arr[i+1]
1>2
2>3
3>6
6>5
1,2,3,5,6
// phase 2:
1>2
2>3
3>5
5>6
1,2,3,5,6


for(let i=0; i<n-1; i++){
    var flag = false;
    for(let j=0; j<n-1-i; j++){ // 4, 3, 2, 1
        if(arr1[j] > arr1[j+1]){
            var temp = arr1[j];
            arr1[j] = arr1[j+1];
            arr1[j+1] = temp

            flag = true;
        }
    }
    if(!flag)
        break;
}

console.log(arr1);