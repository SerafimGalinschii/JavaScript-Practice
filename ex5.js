// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  


function leapYear(year){
    return (year % 400 === 0) ? (year % 100 === 0) : (year % 4 === 0);
}
console.log(leapYear(2016));
console.log(leapYear(2017));
console.log(leapYear(2016));
console.log(leapYear(2019));
console.log(leapYear(2000));

