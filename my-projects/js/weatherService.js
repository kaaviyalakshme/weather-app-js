const API_KEY= '0d4bdd23db7b0c14957fa486f9ff4ff8';
export function getWeather(city){
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => data);
}