



function calculateLeftDays(){
    let today = new Date ();

    let date = new Date(today.getFullYear(), 11, 25);

    if (today.getMonth() == 11 && today.getDate() >= 25){

        date.setFullYear(today.getFullYear + 1);

    }

    let dayOne = 1000 * 60 * 60 * 24;

    let daysLeft = Math.ceil((date.getTime() - today.getTime()) / dayOne );
    console.log(`Days left untill Christmas : ${daysLeft}`);

    }
    calculateLeftDays();
    