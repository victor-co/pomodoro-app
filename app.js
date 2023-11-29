let timerInterval;
let seconds = 0;
let minutes = 25;
let hours = 0;

function startTimer() {
    if (!timerInterval) {
        updateTimer();  // Chame a função para iniciar imediatamente
        timerInterval = setInterval(updateTimer, 1000);
        document.getElementById('startButton').innerText = 'Pause';
    } else {
        clearInterval(timerInterval);
        timerInterval = null;
        document.getElementById('startButton').innerText = 'Start';
    }
}


function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    seconds = 0;
    minutes = 25;
    hours = 0;
    updateDisplay();
    document.getElementById('startButton').innerText = 'Start';
}

function startBreak() {
    if (!timerInterval) {
        seconds = 0;
        minutes = 5;
        hours = 0;
        updateDisplay();
        timerInterval = setInterval(updateTimer, 1000);
        document.getElementById('startButton').innerText = 'Pause';
    }
}

function updateTimer() {
    if (seconds > 0) {
        seconds--;
    } else {
        if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else {
            clearInterval(timerInterval);
            timerInterval = null;
            document.getElementById('startButton').innerText = 'Start';
        }
    }
    updateDisplay();
}

function updateDisplay() {
    const formattedTime = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
    document.getElementById('timer').innerText = formattedTime;
}

function pad(value) {
    return value < 10 ? '0' + value : value;
}
