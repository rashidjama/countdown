// cache the DOM
const dayEl = document.querySelector(".day");
const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".min");
const secEl = document.querySelector(".sec");

function timeDifference(targetDate, currentDate) {
  let milliseconds = Math.floor(targetDate - currentDate);
  let seconds = Math.floor(milliseconds / 1000);
  let mints = Math.floor(seconds / 60);
  let hours = Math.floor(mints / 60);
  let days = Math.floor(hours / 24);

  hours = hours - (days * 24);
  mints = mints - (days * 24 * 60) - (hours * 60);
  seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (mints * 60);

  if (days < 10) {
    days = "0" + days;
  };

  if (hours < 10) {
    hours = "0" + hours;
  };

  if (mints < 10) {
    mints = "0" + mints;
  };

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return {
    rDays: days,
    rHours: hours,
    rMints: mints,
    rSec: seconds
  };

}


let timer = setInterval(function() {
  let currentDate = new Date();
  let targetDate = new Date('June 26, 2020 22:25');
  let remaingTime = targetDate - currentDate;
  let obj = timeDifference(targetDate, currentDate);
  
  if (remaingTime <= 0) {
    clearInterval(timer)
  } else {
  dayEl.textContent = obj.rDays;
  hourEl.textContent = obj.rHours;
  minEl.textContent = obj.rMints;
  secEl.textContent = obj.rSec;
  }
}, 1000)

