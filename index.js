// API id and placeholders
const api = '';
// const city = `melbourne`;
// const country = `Au`;
// const measurement = `units=metric`
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&${measurement}&appid=${api}`;

// method to fetch weather from API
// const fetchweather = city => 
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&${measurement}&appid=${api}`)
//         .then(response => response.json())
const fetchweather = (temporaryvariable) => 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${temporaryvariable}&appid=${api}&units=metric`)
        .then(response => response.json())
        // .then (data => console.log(data))

// output of weather info to html
const inputItem = (name, temp, description, emoji) => `
    <div class="card text-dark bg-light mb-3 w-75 align-items-center">
            <div class="card-header">Weather</div>
                <div class="card-body justify-content-between align-items-center">
                    <h5 class="card-title">${name}</h5>
                        <p class="card-text">${temp}</p>
                        <p class="card-text">${description}</p>
                        <p class="card-text">${emoji}</p>
                </div>
            </div>
        </div>
    </div>
`;

// emojis object used to find the right emoji from the icon code sent from the api
const emojis = {
    '01d': '☀️',
    '02d': '⛅️',
    '03d': '☁️',
    '04d': '☁️',
    '09d': '🌧',
    '10d': '🌦',
    '11d': '⛈',
    '13d': '❄️',
    '50d': '💨',
    '01n': '☀️',
    '02n': '⛅️',
    '03n': '☁️',
    '04n': '☁️',
    '09n': '🌧',
    '10n': '🌦',
    '11n': '⛈',
    '13n': '❄️',
    '50n': '💨',
  };

// create variables for html items
const cityinput = document.querySelector('#cityWeather');
const submitclick = document.querySelector('.submit-btn');
const weatherContainer = document.querySelector('#weather-container');

// event listener
submitclick.addEventListener('click', (event) => {
    event.preventDefault();
    // get city from input field
    let city = cityinput.value;

    // if input is not a city
    if (city !== name){
        cityWeather.classList.add("is-invalid");
        cityWeather.classList.remove("is-valid");
    } else {
        cityWeather.classList.add("is-valid");
        cityWeather.classList.remove("is-invalid");
        }

    // fetch weather for city
    fetchweather(city)
        .then(data => {
            const name = data.name;
            const temp = data.main.temp;
            const description = data.weather[0].description;
            const emoji = emojis[data.weather[0].icon];

            // create the card html
            const cardHtml = inputItem(name, temp, description, emoji);

            //render
            weatherContainer.innerHTML = cardHtml;
        });
});


