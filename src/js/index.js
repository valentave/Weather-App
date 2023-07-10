import { changeForecast } from "./changeForecast";
import { displayWeather } from "./displayWeather";
import { getClientCity } from "./getIpAddress";

// Display template weather
displayWeather(await getClientCity(), 'celcius');

// Display weather of input.value
const $searchBar = document.querySelector('.header__search-bar');
const $searchButton = document.querySelector('.header__search-button');
$searchButton.addEventListener('click', () => displayWeather($searchBar.value, 'celcius'));

// Change between forecast days and forecast hours
const $main = document.querySelector('.main');
$main.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('days-label')) changeForecast('days');
    if (target.classList.contains('hours-label')) changeForecast('hours');
})

