let startTime = 0;
let timerInterval;

function startTimer() {
  const timerDisplay = document.querySelector('.time-count');
  startTime = 0;

  function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    return `${padZero(minutes)}:${padZero(seconds)}`;
  }

  function padZero(number) {
    return number < 10 ? `0${number}` : number;
  }

  timerInterval = setInterval(() => {
    startTime++;
    timerDisplay.textContent = formatTime(startTime);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

// // Запуск таймера
// startTimer();

// // Остановка таймера
// stopTimer();

export { startTimer, stopTimer };