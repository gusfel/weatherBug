const WeatherBlock = ({ date, info }) => {
  return (
    <div>
      <h2>{date}</h2>
      <h4>{info.weather[0].main}</h4>
      <h3>{info.main.temp}</h3>
    </div>
  )
}

export default WeatherBlock

// {
//   date: '2021-09-16',
//   info: {
//     dt: 1631793600,
//     main: {
//       temp: 54.34,
//       feels_like: 53.6,
//       temp_min: 53.24,
//       temp_max: 54.34,
//       pressure: 1011,
//       sea_level: 1011,
//       grnd_level: 1009,
//       humidity: 88,
//       temp_kf: 0.61
//     },
//     weather: [ [Object] ],
//     clouds: { all: 45 },
//     wind: { speed: 5.59, deg: 221, gust: 7.14 },
//     visibility: 10000,
//     pop: 0,
//     sys: { pod: 'n' },
//     dt_txt: '2021-09-16 12:00:00'
//   }
// }