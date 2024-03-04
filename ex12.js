// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum. 



function sumIntergers(x,z){
    if (x === z){
        let result = (x+z) * 3;
        console.log(result);
    } else{
        result = x + z;
        console.log(result);
    }
    
}

sumIntergers(2,2)
sumIntergers(3,4)