 let timer;
    let isRunning = false;
    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0;

    const display = document.getElementById("display");
    const startPauseBtn = document.getElementById("startPauseBtn");
    const resetBtn = document.getElementById("resetBtn");

    function formatTime() {
      const min = minutes < 10 ? "0" + minutes : minutes;
      const sec = seconds < 10 ? "0" + seconds : seconds;
      const ms = milliseconds < 100 ? (milliseconds < 10 ? "00" + milliseconds : "0" + milliseconds) : milliseconds;
      return `${min}:${sec}.${ms}`;
    }

    function startStopwatch() {
      timer = setInterval(() => {
        milliseconds++;
        if (milliseconds === 1000) {
          milliseconds = 0;
          seconds++;
        }
        if (seconds === 60) {
          seconds = 0;
          minutes++;
        }
        display.textContent = formatTime();
      }, 1);  // update time every 1ms
    }

    function stopStopwatch() {
      clearInterval(timer);
    }

    startPauseBtn.addEventListener("click", () => {
      if (isRunning) {
        stopStopwatch();
        startPauseBtn.textContent = "Start";
      } else {
        startStopwatch();
        startPauseBtn.textContent = "Pause";
      }
      isRunning = !isRunning;
    });

    resetBtn.addEventListener("click", () => {
      stopStopwatch();
      minutes = 0;
      seconds = 0;
      milliseconds = 0;
      display.textContent = formatTime();
      startPauseBtn.textContent = "Start";
      isRunning = false;
    });
 
