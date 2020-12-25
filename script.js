"use strict";

// Selectors
const time = document.querySelector(".time");
const days = document.querySelectorAll(".day");

// Functions

const changeTime = setInterval(function () {
  const now = new Date();
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  time.textContent = `${hour}:${min}:${sec}`;
}, 1000);

const changeDay = function (days) {
  const today = new Date().getDate();

  days.forEach(function (day) {
    if (today === day.textContent) {
      days.classList.add("active");
    }
  });
};

// Event Listeners
document.addEventListener("click", changeDay(days));
