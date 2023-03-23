const clock = document.querySelector(".clock");

function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  hours.padStart(2, '0');
  const minutes = now.getMinutes();
  minutes.padStart(2, '0');
  const seconds = now.getSeconds();
  seconds.padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;
  clock.textContent = timeString;
}

setInterval(updateTime, 1000);
