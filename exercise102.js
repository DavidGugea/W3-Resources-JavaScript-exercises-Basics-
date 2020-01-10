/*
102. Write a JavaScript program to find the number of inversions of a given array of integers. Go to the editor
Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j.
*/

function func(arr) {
    var ctr = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) 
              ctr++;
        }
    }
    return ctr;
}

console.log(func([0, 3, 2, 5, 9]));