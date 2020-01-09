import document from "document";
import clock from "clock";

let myClock = document.getElementById("myClock");
let wackenCounter = document.getElementById("wacken-counter");
clock.granularity = 'seconds'; // seconds, minutes, hours

clock.ontick = function (evt) {
    myClock.text = ("0" + evt.date.getHours()).slice(-2) + ":" +
        ("0" + evt.date.getMinutes()).slice(-2) + ":" +
        ("0" + evt.date.getSeconds()).slice(-2);
    wackenCounter.text = ("00" + evt.date.getDay()).slice(-3);
};
