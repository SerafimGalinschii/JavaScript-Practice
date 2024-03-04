// Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.



function checkDistance(n){
    let result 
    if (n <= 13){
        result = 13 - n;
        console.log(result);
    } else {
        result = (n - 13) * 2;
        console.log(result);
    }
} 

checkDistance(43)
checkDistance(12)
