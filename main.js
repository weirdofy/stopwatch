let timerStart = document.querySelector("#timer-start"),
  timerStop = document.querySelector("#timer-stop"),
  timerReset = document.querySelector("#timer-reset"),
  ms = 0,
  sec = 0,
  mins = 0,
  hours = 0,
  msText = document.querySelector("#miliseconds"),
  secsText = document.querySelector("#seconds"),
  minsText = document.querySelector("#minutes"),
  hoursText = document.querySelector("#hours"),
  time =
    String(ms) + ":" + String(sec) + ":" + String(mins) + ":" + String(hours);

function timeStart() {
  ms++;
  msText.innerHTML = ms;

  if (ms == 100) {
    sec++;
    ms = 0;
    msText.innerHTML = "00";
    secsText.innerHTML = sec;

    if (sec == 60) {
      mins++;
      sec = 0;
      secsText.innerHTML = "00";
      minsText.innerHTML = mins;

      if (mins == 60) {
        hours++;
        mins = 0;
        minsText.innerHTML = "00";
        hoursText.innerHTML = hours;
      }
    }
  }

  if (ms <= 9) {
    msText.innerHTML = "0" + ms;
  }
  if (sec <= 9) {
    secsText.innerHTML = "0" + sec;
  }
  if (mins <= 9) {
    minsText.innerHTML = "0" + mins;
  }
  if (hours <= 9) {
    hoursText.innerHTML = "0" + hours;
  }
}

timerStart.addEventListener("click", () => {
  timerStart.style = "display:none";
  timerStop.style = "display:block";
  interval = setInterval(timeStart, 10);
});

timerStop.addEventListener("click", () => {
  timerStart.style = "display:block";
  timerStop.style = "display:none";
  clearInterval(interval);
});

timerReset.addEventListener("click", () => {
  ms = 0;
  sec = 0;
  mins = 0;
  hours = 0;
  msText.innerHTML = "00";
  secsText.innerHTML = "00";
  minsText.innerHTML = "00";
  hoursText.innerHTML = "00";
});
