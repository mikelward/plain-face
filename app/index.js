import clock from "clock";
import { display } from "display";
import * as document from "document";
import { me as appbit } from "appbit";
import * as util from "../common/utils";

if (display.aodAvailable && appbit.permissions.granted("access_aod")) {
    // Support AOD.
    display.aodAllowed = true;
}

clock.granularity = "minutes";

const myTime = document.getElementById("myTime");
const myDate = document.getElementById("myDate");
const myTime2 = document.getElementById("myTime2");
const myTime3 = document.getElementById("myTime3");

const dayName = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat',
};

const monthName = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
};

clock.ontick = (evt) => {
  let now = evt.date;
  myTime.text = formatTime(now);
  myDate.text = `${dayName[now.getDay()]} ${monthName[now.getMonth()]} ${now.getDate()}`;
  myTime2.text = `${formatTimeWithOffset(now, -7)}`;
  myTime3.text = `${formatTimeWithOffset(now, 11)}`;
}

function formatTime(date) {
    return `${util.zeroPad(date.getHours())}:${util.zeroPad(date.getMinutes())}`;
}

function dateToTimezone(date, offsetMinutes) {
    return new Date(date.getTime() + date.getTimezoneOffset()*60*1000 + offsetMinutes*60*1000);
}

function formatTimeWithOffset(date, offsetHours) {
    const offsetTime = dateToTimezone(date, offsetHours*60);
    return `${formatTime(offsetTime)} ${util.addSign(util.zeroPad(offsetHours))}00`;
}
