// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050. 

console.log('--------------------------------')

function january1(){
    
    

    for (year = 2024; year <= 2050; year++){
        d = new Date(year, 0, 1 );
        if(d.getDay() === 0 ){
            
            console.log(`January 1 st in : ${year}`)
        }
    }
}

january1();