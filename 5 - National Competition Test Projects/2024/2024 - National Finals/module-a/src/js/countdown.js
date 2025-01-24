// Target date and time in Asia/Shanghai timezone
const COUNTDOWN_TARGET = new Date('2026-09-22T00:09:00.000+08:00');

const getDaysElement = () => document.querySelector('#countdown-days');
const getHoursElement = () => document.querySelector('#countdown-hours');
const getMinutesElement = () => document.querySelector('#countdown-minutes');
const getSecondsElement = () => document.querySelector('#countdown-seconds');

let interval = null;

/**
 * Decrements the values in the countdown.
 */
const updateCountdown = () => {
  const now = new Date();
  const diff = COUNTDOWN_TARGET - now;

  if (diff <= 0 && interval != null) {
    // The countdown has ended
    clearInterval(interval);
  }

  const formatter = new Intl.NumberFormat('en-US');

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  getDaysElement().textContent = formatter.format(days).padStart(3, '0');
  getHoursElement().textContent = formatter.format(hours).padStart(2, '0');
  getMinutesElement().textContent = formatter.format(minutes).padStart(2, '0');
  getSecondsElement().textContent = formatter.format(seconds).padStart(2, '0');
};

/**
 * Prepares the countdown.
 */
const initCountdown = () => {
  interval = setInterval(updateCountdown, 1000);
};

document.addEventListener('DOMContentLoaded', initCountdown);
