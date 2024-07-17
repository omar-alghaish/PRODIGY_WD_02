let startStopBtn = document.getElementById('startStop');
let resetBtn = document.getElementById('reset');
let lapBtn = document.getElementById('lap');
let display = document.getElementById('display');
let laps = document.getElementById('laps');

let timer;
let isRunning = false;
let time = 0;

function formatTime(time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateDisplay() {
    display.textContent = formatTime(time);
}

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        startStopBtn.textContent = 'Start';
    } else {
        timer = setInterval(() => {
            time++;
            updateDisplay();
        }, 1000);
        startStopBtn.textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    time = 0;
    updateDisplay();
    startStopBtn.textContent = 'Start';
    laps.innerHTML = '';
}

function lap() {
    if (isRunning) {
        let lapTime = formatTime(time);
        let lapItem = document.createElement('div');
        lapItem.textContent = lapTime;
        laps.appendChild(lapItem);
    }
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', lap);

updateDisplay();
