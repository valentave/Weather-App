import { getWeather } from "./getWeather";
import humidityPng from '../assets/humidity.png'
import rainPng from '../assets/humidity.png'
import snowPng from '../assets/humidity.png'
import windPng from '../assets/humidity.png'

const $main = document.querySelector('.main');

function formatDate(timestamp) {
    let newTimestamp = parseInt(`${timestamp}000`);
    const date = new Date(newTimestamp);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    const formattedDate = `${dayOfWeek}, ${month} ${day}, ${year}`;

    return formattedDate;
}

function formatHour(timestamp) {
    let newTimestamp = parseInt(`${timestamp}000`);
    const date = new Date(newTimestamp);
    let hour = date.getHours();
    let minutes = date.getMinutes();
    if (hour < 10) hour = '0' + hour;
    if (minutes < 10) minutes = '0' + minutes;

    const formattedHour = `${hour}:${minutes}hs.`
    return formattedHour;
}

export async function displayWeather(city, celOrFar) {
    const weather = await getWeather(city);
    // Create current section
    const $current = document.createElement('section');
    $current.classList.add('current');

    // Create weather section
    const $currentWeather = document.createElement('div');
    $currentWeather.classList.add('current__weather');
    const formattedDate = formatDate(weather.timestamp);
    const formattedHour = formatHour(weather.timestamp);
    const temperature = (celOrFar === 'celcius') ? `${weather.celcius}°C` : `${weather.fahrenheit}°F`;
    const opositeTemperature = (celOrFar === 'celcius') ? '°F' : '°C';
    $currentWeather.innerHTML = `
        <p class="current__city">${weather.city}, ${weather.region} - ${weather.country}</p>
        <p class="current__date">${formattedDate}</p>
        <p class="current__hour">${formattedHour}</p>
        <p class="current__temperature">${temperature}</p>
        <button class="current_change-temperature current__btn">Display ${opositeTemperature}</button>
        <img src="${weather.conditionIcon}" alt="${weather.condition}" class="current__image">
        `;
    $current.appendChild($currentWeather);

    // Creater extra data section
    const $currentExtra = document.createElement('div');
    $currentExtra.classList.add('current__extra');
    const wind = (celOrFar === 'celcius') ? `${weather.windKPH} km/h` : `${weather.windMPH} mph`;
    $currentExtra.innerHTML = `
        <div class="current__extra-div">
            <img class="current__extra-img" src="${humidityPng}">
            <p class="current__extra-p">Humidity:</p>
            <p class="current__extra-date">${weather.humidity}%</p>
        </div>
        <div class="current__extra-div">
            <img class="current__extra-img" src="${rainPng}">
            <p class=current__extra-p"">Chance of rain:</p>
            <p class="current__extra-date">${weather.chanceOfRain}%</p>
        </div>
        <div class="current__extra-div">
            <img class="current__extra-img" src="${snowPng}">
            <p class="current__extra-p">Chance of snow:</p>
            <p class="current__extra-date">${weather.chanceOfSnow}%</p>
        </div>
        <div class="current__extra-div">
            <img class="current__extra-img" src="${windPng}">
            <p class="current__extra-p">Wind speed:</p>
            <p class="current__extra-date">${wind}</p>
        </div>
        `;
    $current.appendChild($currentExtra);
    $main.innerHTML = '';
    $main.appendChild($current);

    // Create forecast section
    const $forecast = document.createElement('section');
    $forecast.classList.add('forecast');
}

