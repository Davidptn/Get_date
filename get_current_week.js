const moment = require('moment');

function getCurrentWeek() {
    const day = moment().format("dddd");
    console.log(day);
}

getCurrentWeek();