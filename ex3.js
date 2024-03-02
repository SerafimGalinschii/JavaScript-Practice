// Write a JavaScript program to get the current date.

function getDate(){
    today = new Date();

    todayDay = today.getDate();
    todayMonth = today.getMonth() + 1;
    thisYear = today.getFullYear();
    const addZeroToDay = (todayDay < 10) ? '0'+todayDay : todayDay;
    const  addZeroToMonth  = (todayMonth < 10) ? '0'+todayMonth : todayMonth + 1;
    todayDate = addZeroToMonth + '/' + addZeroToDay + '/' + thisYear
   
    console.log(`Today date is : ${todayDate}`);
}

getDate();