// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38


function getTodaysDate(){
    today = new Date();
    
    d = today.getDay();

    const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    

    console.log(`Today is : ${Days[d]}`);

    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();

    const prepand = (h >= 12) ? "PM" : "AM";

    const hours = (h > 12) ? (h -12) : h


    console.log(`Current time is : ${hours} ${prepand} ${m} min ${s} sec`)

}

getTodaysDate();