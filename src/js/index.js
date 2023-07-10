import { changeForecast } from "./changeForecast";
import { displayWeather } from "./displayWeather";
import { getClientCity } from "./getIpAddress";
import { changeUnity } from "./changeUnity";
import "../css/style.css"
import "../css/header.css"
import "../css/main.css"
import "../css/current.css"
import "../css/forecast.css"

export const unity = {
    active: 'celcius',
};

// Display template weather
displayWeather(await getClientCity(), unity.active);

// Display weather of input.value
const $searchBar = document.querySelector('.header__search-bar');
const $searchButton = document.querySelector('.header__search-button');
$searchButton.addEventListener('click', () => displayWeather($searchBar.value, unity));

// Change between forecast days and forecast hours
const $main = document.querySelector('.main');
$main.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('days-label')) changeForecast('days');
    else if (target.classList.contains('hours-label')) changeForecast('hours');
    else if (target.classList.contains('current__btn')) changeUnity();
})

