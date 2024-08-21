function updateTime() {
    const now = new Date();
    const utcHours = now.getUTCHours();
    const utcMinutes = now.getUTCMinutes();
    const utcSeconds = now.getUTCSeconds();

    // Adjust for UTC +3
    const hours = (utcHours + 3) % 24;
    const minutes = utcMinutes.toString().padStart(2, '0');
    const seconds = utcSeconds.toString().padStart(2, '0');
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds}`;

    document.getElementById('localtime-text').textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime(); // Initial call to display time immediately
