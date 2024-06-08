import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

const WeatherCard = ({ title, data }) => {
  return (
    <div className="weather-card">
      <div className="card">
      <h3>{title}</h3>
      <p>{data}</p>
      </div>
    </div>
  );
};

const WeatherDisplay = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (city) {
      setLoading(true);
      axios
        .get(`https://api.weatherapi.com/v1/current.json`, {
          params: {
            key: "5c6ce25dd67e475588c201112240406",
            q: city
          }
        })
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
          alert("Failed to fetch weather data");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [city]);

  return (
    <div className="weather-display">
      {loading && <p>Loading data...</p>}
      {!loading && weatherData && (
        <div className="weather-cards">
          <WeatherCard
            title="Temperature"
            data={`${weatherData.current.temp_c}°C`}
          />
          <WeatherCard
            title="Humidity"
            data={`${weatherData.current.humidity}%`}
          />
          <WeatherCard
            title="Condition"
            data={weatherData.current.condition.text}
          />
          <WeatherCard
            title="Wind Speed"
            data={`${weatherData.current.wind_kph} kph`}
          />
        </div>
      )}
    </div>
  );
};

function App() {
  const [city, setCity] = useState("");

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay city={city} />
    </div>
  );
}

export default App;








// 2cd7eb0ec874489ba7110428232509



































// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// const App = () => {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get('https://api.weatherapi.com/v1/current.json', {
//         params: {
//           key: '5c6ce25dd67e475588c201112240406',
//           q: city
//         }
//       });
//       setWeather(response.data);
//     } catch (error) {
//       alert('Failed to fetch weather data');
//       setWeather(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Weather Application</h1>
//       <div>
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Enter city name"
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       { loading ? <p>Loading data…</p> : weather ? (
//         <div className="weather-cards">
//           <div className="weather-card">
//             <h1>Temperature </h1>
//             <p>{weather.current.temp_c} °C</p>
//           </div>
//           <div className="weather-card">
//             <h1>Humidity </h1>
//             <p>{weather.current.humidity} %</p>
//           </div>
//           <div className="weather-card">
//             <h1>Condition</h1>
//             <p>{weather.current.condition.text}</p>
//           </div>
//           <div className="weather-card">
//             <h1>Wind Speed</h1>
//             <p>{weather.current.wind_kph} kph</p>
//           </div>
//         </div>
//       ) : "Please enter a city in the search box"}
//     </div>
//   );
// };

// export default App;
























// // import React, { useState } from 'react';
// // import './App.css';

// // function App() {

 
 
 
 
 
 
 
// //   const [city, setCity] = useState('');
// //   const [weatherData, setWeatherData] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState('');

// //   const API_KEY = '5c6ce25dd67e475588c201112240406';

// //   const fetchWeatherData = (location) => {
// //     setLoading(true);
// //     setError('');
// //     setWeatherData(null);

// //     fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`)
// //       .then(response => {
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
// //         return response.json();
// //       })
// //       .then(data => {
// //         setWeatherData(data);
// //         setLoading(false);
// //       })
// //       .catch(() => {
// //         alert('Failed to fetch weather data');
// //         setLoading(false);
// //       });
// //   };

// //   const handleSearch = () => {
// //     if (city) {
// //       fetchWeatherData(city);
// //     }
// //   };

// //   return (
// //     <div className="weather-app">
// //       <h1>Weather App</h1>
// //       <input
// //         type="text"
// //         value={city}
// //         onChange={(e) => setCity(e.target.value)}
// //         placeholder="Enter city name"
// //       />
// //       <button onClick={handleSearch}>Search</button>

// //       {loading ? (
// //         <p>Loading data…</p>
// //       ) : (
// //         weatherData && (
// //           <div className="weather-cards">
// //             <div className='weather-card'>
// //               <h2>Temperature</h2>
// //               <p>{weatherData.current.temp_c}°C</p>
// //             </div>
// //             <div className='weather-card'>
// //               <h2>Humidity</h2>
// //               <p>{weatherData.current.humidity}%</p>
// //             </div>
// //             <div className='weather-card'>
// //               <h2>Condition</h2>
// //               <p>{weatherData.current.condition.text}</p>
// //             </div>
// //             <div className='weather-card'>
// //               <h2>Wind Speed</h2>
// //               <p>{weatherData.current.wind_kph} kph</p>
// //             </div>
// //           </div>
// //         )
// //       )}
// //     </div>
// //   );
// // }

// // export default App;
