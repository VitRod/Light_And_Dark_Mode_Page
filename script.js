const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const nightMode = 'Dark Mode';
const dayMode = 'Light Mode';
const themeDark = 'dark';
const themeLight = 'light';
const dayNight1 = 'rgb(255 255 255 / 50%)';
const dayNight2 = 'rgb(0 0 0 / 50%)';
const mySun = 'fa-sun';
const myMoon = 'fa-moon';
const dataTheme = 'data-theme';

// Sets Mode Style
function toggleThemDarkLight(dayNight, nightDay, myMode, sun, moon, modeState) {
    // Background color of nav and text box
    nav.style.backgroundColor = dayNight;
    textBox.style.backgroundColor = nightDay;
    toggleIcon.children[0].textContent = myMode;
    toggleIcon.children[1].classList.replace(sun, moon);
    // Image Mode through Template Strings
    image1.src = `img/undraw_profile_${modeState}.svg`;
    image2.src = `img/undraw_developer_activity_${modeState}.svg`;
    image3.src = `img/undraw_feedback_${modeState}.svg`;
}








