const clock = document.querySelector(".clock");

function updateTime() {
  let now = new Date();
  let hours = now.getHours();
  hours = hours.toString();
  hours = hours.padStart(2, '0');
  let minutes = now.getMinutes();
  minutes = minutes.toString();
  minutes = minutes.padStart(2, '0');
  let seconds = now.getSeconds();
  seconds = seconds.toString();
  seconds = seconds.padStart(2, '0');
  let timeString = `${hours}:${minutes}:${seconds}`;
  clock.textContent = timeString;
}

setInterval(updateTime, 1000);
