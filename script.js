const newYear = '01 Jan 2023';
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds")


countdown();
setInterval(countdown, 1000);

function countdown() {
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();
    const diff = newYearsDate - currentDate;

    const totalSeconds = diff / 1000;
    const days = Math.floor((totalSeconds / 3600) / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = addZero(hours)
    minutesEl.innerHTML = addZero(minutes)
    secondsEl.innerHTML = addZero(seconds)

}

function addZero(value) {
    return value < 10 ? (`0${value}`) : value;
}