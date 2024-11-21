const MiliSeconds = document.getElementById("miliseconds");
const Seconds = document.getElementById("seconds");
const Minutes = document.getElementById("minutes");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const restartBtn = document.getElementById("restart");
let counterMS = 1;
let counterS = 1;
let counterMin = 1;
let flag = false;
function SecondsIncrement(i) {
    {
        let increasing = setInterval(
          () => {
            i.innerHTML = counterMS;
            counterMS++;
            if (i.innerHTML == 59) {
              counterMS = 0;
              Seconds.innerHTML = counterS;
              counterS++;
            }
            if (counterMS == 59 && counterS == 59) {
              counterS = 0;
              Minutes.innerHTML = counterMin;
              counterMin++;
            }
            stopBtn.addEventListener(
              "click",
              (e) => (e.target = clearInterval(increasing))
            );
            if (flag) {
              clearInterval(increasing);
              MiliSeconds.innerHTML = "00";
              flag = false;
            }
          },
      
          1
        );

    }
}
restartBtn.addEventListener("click", (e) => {
  e.target = flag = true;
  counterMin = 0;
  counterMS = 0;
  counterS = 0;
  Minutes.innerHTML = "00";
  Seconds.innerHTML = "00";
  Hours.innerHTML = "00";
});
startBtn.addEventListener(
  "click",
  (e) => (e.target = SecondsIncrement(MiliSeconds))
);
