// Stopwatch logic
let display = document.getElementById("display");
let timer = null, milliseconds = 0;
let lapsContainer = document.getElementById("laps");
let lapCount = 0;

function formatTime(ms) {
    let hrs = Math.floor(ms / 3600000);
    let mins = Math.floor((ms % 3600000) / 60000);
    let secs = Math.floor((ms % 60000) / 1000);
    let milli = Math.floor((ms % 1000) / 10);
    return `${hrs.toString().padStart(2,"0")}:${mins.toString().padStart(2,"0")}:${secs.toString().padStart(2,"0")}.${milli.toString().padStart(2,"0")}`;
}

function updateDisplay() {
    display.textContent = formatTime(milliseconds);
}

document.getElementById("startBtn").onclick = () => {
    if (timer) return;
    timer = setInterval(() => { milliseconds += 10; updateDisplay(); }, 10);
};

document.getElementById("stopBtn").onclick = () => {
    clearInterval(timer);
    timer = null;
};

document.getElementById("resetBtn").onclick = () => {
    clearInterval(timer);
    timer = null;
    milliseconds = 0;
    updateDisplay();
    lapsContainer.innerHTML = "";
    lapCount = 0;
};

document.getElementById("lapBtn").onclick = () => {
    lapCount++;
    let lapTime = formatTime(milliseconds);
    let lapEntry = document.createElement("div");
    lapEntry.textContent = `Lap ${lapCount}: ${lapTime}`;
    lapsContainer.prepend(lapEntry); // newest lap on top
};

    // Theme toggle logic
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});