// Write a JavaScript program to compute the absolute difference between a specified number and 19.
//  Returns triple the absolute difference if the specified number is greater than 19.  


function seezDiference(n){
    if(n <= 19){
        let result = 19 - n ;
        console.log(result);
    } else {
        result = 3 * (n - 19);
        console.log(result);
    }
}

seezDiference(2)
seezDiference(34)