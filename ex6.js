
console.log('--------------------------------')

function january1(){
    
    

    for (year = 2024; year <= 2050; year++){
        d = new Date(year, 0, 0 );
        if(d.getDay() === 0 ){
            
            console.log(`January 1 st in : ${year}`)
        }
    }
}

january1();