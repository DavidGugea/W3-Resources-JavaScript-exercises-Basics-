/*
120. Write a JavaScript program to check if a point lies strictly inside a given circle. 
Go to the editor
Input:
Center of the circle (x, y)
Radius of circle: r
Point inside a circle (a, b)
*/

function func(a, b, x, y, r) {
    var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
    r *= r;
    if (dist_points < r) {
        return true;
    }
    return false;
}

console.log(func(0, 0, 2, 4, 6));
console.log(func(0, 0, 6, 8, 6));