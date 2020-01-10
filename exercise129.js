/*
129. Write a JavaScript program to find the smallest prime number strictly greater than 
a given number. 
*/

function func(num) {
    for (var i = num + 1;; i++) {
        var isPrime = true;
        for (var d = 2; Math.pow(d, 2) <= i; d++) {
            if (i % d === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            return i;
        }
    }
}
