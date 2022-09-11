import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

clock.granularity = "minutes";

const myTime = document.getElementById("myTime");
const myDate = document.getElementById("myDate");

clock.ontick = (evt) => {
  let now = evt.date;
  let hours = util.zeroPad(now.getHours());
  let mins = util.zeroPad(now.getMinutes());
  myTime.text = `${hours}:${mins}`;
  myDate.text = now.toLocaleDateString('en-US');
}
