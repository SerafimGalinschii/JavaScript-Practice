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
