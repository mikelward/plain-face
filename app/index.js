import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

clock.granularity = "minutes";

const myTime = document.getElementById("myTime");
const myDate = document.getElementById("myDate");

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
  let hours = util.zeroPad(now.getHours());
  let mins = util.zeroPad(now.getMinutes());
  myTime.text = `${hours}:${mins}`;
  myDate.text = `${dayName[now.getDay()]} ${monthName[now.getMonth()]} ${now.getDate()}`;
}
