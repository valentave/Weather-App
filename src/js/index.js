import { displayWeather } from "./displayWeather";

displayWeather('casilda', 'celcius');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => displayWeather(input.value, 'celcius'));