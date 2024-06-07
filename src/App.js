import React, { useState } from 'react';
import './App.css';

function App() {

  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = '5c6ce25dd67e475588c201112240406';

  const fetchWeatherData = (location) => {
    setLoading(true);
    setError('');
    setWeatherData(null);

    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch(() => {
        alert('Failed to fetch weather data');
        setLoading(false);
      });
  };

  const handleSearch = () => {
    if (city) {
      fetchWeatherData(city);
    }
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>

      {loading ? (
        <p>Loading data…</p>
      ) : (
        weatherData && (
          <div className="weather-cards">
            <div className='weather-card'>
              <h2>Temperature</h2>
              <p>{weatherData.current.temp_c}°C</p>
            </div>
            <div className='weather-card'>
              <h2>Humidity</h2>
              <p>{weatherData.current.humidity}%</p>
            </div>
            <div className='weather-card'>
              <h2>Condition</h2>
              <p>{weatherData.current.condition.text}</p>
            </div>
            <div className='weather-card'>
              <h2>Wind Speed</h2>
              <p>{weatherData.current.wind_kph} kph</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default App;
