// import React, { useEffect, useState } from "react";

// import './App.css';

// import Weather from './components/weather';
// export default function Weather() {
  
//   const [lat, setLat] = useState([]);
//   const [long, setLong] = useState([]);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       navigator.geolocation.getCurrentPosition(function(position) {
//         setLat(position.coords.latitude);
//         setLong(position.coords.longitude);
//       });

//       await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
//       .then(res => res.json())
//       .then(result => {
//         setData(result)
//         console.log(result);
//       });
//     }
//     fetchData();
//   }, [lat,long])
  
//   return (
//     <div className="weather">
    
    
//   </div>
// );
// }

import React, { Component } from 'react'

// class Weather extends Component {
//     state= {
//         weatherData: ""
//     }
//     componentDidMount(){
//         this.fetchWeatherData();
//     }
//     fetchWeatherData = () => {
//         fetch( `http://api.openweathermap.org/data/2.5/weather?q=Cincinnati,us&appid=c2ec68b928b81de7d16b995e3c59a452`)
//         .then(res => res.json())
//         .then(data => {
//             this.setState({
//                 weatherData: data
//             })
//         })
//     }

//   render() {
//     return (
//       <div>
//       <h1></h1>
//       {[this.state.weatherData.main]}
//       </div>
//     )
//   }
// }
// export default Weather



