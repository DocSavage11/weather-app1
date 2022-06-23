import './App.css';
import React, {useState} from 'react';

const api = {
  key: "6457cf0a565b01747776b99d5d79e8b4",
  base: "api.openweathermap.org" 
  // https://home.openweathermap.org/api_keys
}


function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}$units=metric$APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {setWeather(result); setQuery=(""); console.log(result);})
    }
  }

  const dateBuilder = (d) => {
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();


    return `${day} ${date} ${month} ${year}`
  }




  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" className='search-bar' placeholder='Search....' onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search} />

          <div className="location-box">
            <div className="location">New York City, US</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>

          <div className="weather-box">
            <div className="temperature">15°c</div>
            <div className="weather">Sunny</div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
