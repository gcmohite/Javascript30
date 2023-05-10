'use strict';

const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.minute-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360;
  hoursHand.style.transform = `rotate(${hoursDegrees + 90}deg)`;

  // console.log(seconds);
}

setDate();

setInterval(setDate, 1000);
