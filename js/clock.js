const stopBtn = document.querySelector(".stop");

let timeContent = document.querySelector(".timer h1");
let time = new Date().toLocaleTimeString("it-IT");
timeContent.innerHTML = time;

let stopInterval = setInterval(() => {
  time = new Date().toLocaleTimeString("it-IT");
  timeContent.innerHTML = time;
}, 1000);

stopBtn.addEventListener("click", () => {
  clearInterval(stopInterval);
});
