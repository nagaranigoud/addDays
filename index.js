let addDays = require("date-fns/addDays");

function days(d) {
    let date = addDays(new Date(2020, 7, 22), d);
    console.log(${newDate.getDate()}-${newDate.getMonth()+1}-${newDate.getFullYear()});

}

days(2);
