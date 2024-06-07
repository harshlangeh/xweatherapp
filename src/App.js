import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!city) return;
    
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.get('https://api.weatherapi.com/v1/current.json', {
        params: {
          key: '5c6ce25dd67e475588c201112240406',  // Replace with your actual API key
          q: city
        }
      });
      setWeather(response.data);
    } catch (error) {
      alert('Failed to fetch weather data');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Weather Application</h1>
      <div>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading && <p>Loading data…</p>}
      {error && <p>{error}</p>}
      {weather && (
        <div className="weather-cards">
          <div className="weather-card">
            <p>Temperature: {weather.current.temp_c} °C</p>
          </div>
          <div className="weather-card">
            <p>Humidity: {weather.current.humidity} %</p>
          </div>
          <div className="weather-card">
            <p>Condition: {weather.current.condition.text}</p>
          </div>
          <div className="weather-card">
            <p>Wind Speed: {weather.current.wind_kph} kph</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
























// import React, { useState } from 'react';
// import './App.css';

// function App() {

 
 
 
 
 
 
 
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const API_KEY = '5c6ce25dd67e475588c201112240406';

//   const fetchWeatherData = (location) => {
//     setLoading(true);
//     setError('');
//     setWeatherData(null);

//     fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         setWeatherData(data);
//         setLoading(false);
//       })
//       .catch(() => {
//         alert('Failed to fetch weather data');
//         setLoading(false);
//       });
//   };

//   const handleSearch = () => {
//     if (city) {
//       fetchWeatherData(city);
//     }
//   };

//   return (
//     <div className="weather-app">
//       <h1>Weather App</h1>
//       <input
//         type="text"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         placeholder="Enter city name"
//       />
//       <button onClick={handleSearch}>Search</button>

//       {loading ? (
//         <p>Loading data…</p>
//       ) : (
//         weatherData && (
//           <div className="weather-cards">
//             <div className='weather-card'>
//               <h2>Temperature</h2>
//               <p>{weatherData.current.temp_c}°C</p>
//             </div>
//             <div className='weather-card'>
//               <h2>Humidity</h2>
//               <p>{weatherData.current.humidity}%</p>
//             </div>
//             <div className='weather-card'>
//               <h2>Condition</h2>
//               <p>{weatherData.current.condition.text}</p>
//             </div>
//             <div className='weather-card'>
//               <h2>Wind Speed</h2>
//               <p>{weatherData.current.wind_kph} kph</p>
//             </div>
//           </div>
//         )
//       )}
//     </div>
//   );
// }

// export default App;
