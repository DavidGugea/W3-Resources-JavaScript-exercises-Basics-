/*
143. Write a JavaScript program to sort the strings of a given array of strings 
in the order of increasing lengths.  Go to the editor
Note: Do not change the order if the lengths of two string are same.
*/

function func(givenArray){
    let objectARRAY = new Array();
    let returnArray = new Array();
    let strORDER = function(str, length){
        this.str = str;
        this.length = length;
    };
    for(let i = 0; i < givenArray.length; i++){
        let order = new strORDER(givenArray[i], givenArray[i].length);
        objectARRAY.push(order);
    }
    
    objectARRAY.sort(function(a, b){
        return a.length-b.length;
    });

    return objectARRAY;
}

console.log(func(["xyz","acd","aa","bb","zzz","", "a","b"]));