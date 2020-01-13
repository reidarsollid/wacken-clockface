import document from "document";
import clock from "clock";

let myClock = document.getElementById("myClock");
let myClock2 = document.getElementById("myClock2");
let wackenCounter = document.getElementById("wacken-counter");
let end = new Date("2020-07-30");
clock.granularity = 'seconds'; // seconds, minutes, hours

clock.ontick = function (evt) {
    //Difference in miliseconds
    let today = evt.date;
    //Difference in miliseconds
    let diff = Math.abs(end - today);
    let years = parseInt(diff / 31536000000);
    diff -= years * 31536000000;

    let days = parseInt(diff / 86400000);

    let clockText= ("0" + evt.date.getHours()).slice(-2) + ":" +
        ("0" + evt.date.getMinutes()).slice(-2) + ":" +
        ("0" + evt.date.getSeconds()).slice(-2);
    myClock.text = clockText;
    myClock2.text = clockText;
    wackenCounter.text = ("0" + days).slice(-3);
};
