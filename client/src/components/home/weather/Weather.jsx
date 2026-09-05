import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

import Sun from "../../../assets/Home/weather/sun.svg";
import SunCloud from "../../../assets/Home/weather/sunCloud.svg";
import Storm2 from "../../../assets/Home/weather/storm2.svg";
import Rain2 from "../../../assets/Home/weather/rain2.svg";
import MoonCloud from "../../../assets/Home/weather/moonCloud.svg";
import Rainy from "../../../assets/Home/weather/rainy.svg";
import Snow2 from "../../../assets/Home/weather/snow2.svg";

import "./weather.css";

// Hourly temperature data for the chart
const hourlyData = [
  { time: "1 AM", temp: 27 },
  { time: "2 AM", temp: 19 },
  { time: "3 AM", temp: 20 },
  { time: "4 AM", temp: 25 },
  { time: "5 AM", temp: 21 },
  { time: "6 AM", temp: 28 },
  { time: "7 AM", temp: 29 },
  { time: "8 AM", temp: 21 },
];

// Daily temperature data for the weekly forecast
const dailyData = [
  { day: "Tue", icon: Sun, maxTemp: 29, minTemp: 20 },
  { day: "Wed", icon: SunCloud, maxTemp: 29, minTemp: 20 },
  { day: "Thu", icon: Storm2, maxTemp: 29, minTemp: 20 },
  { day: "Fri", icon: Rain2, maxTemp: 29, minTemp: 20 },
  { day: "Sat", icon: SunCloud, maxTemp: 29, minTemp: 20 },
  { day: "Sun", icon: MoonCloud, maxTemp: 29, minTemp: 20 },
  { day: "Mon", icon: Rainy, maxTemp: 29, minTemp: 20 },
  { day: "Tue", icon: Snow2, maxTemp: 29, minTemp: 20 },
];

// Component for displaying daily weather forecast
const DayComponent = ({ day, icon, maxTemp, minTemp }) => (
  <div className="dayComponent">
    <h5>{day}</h5>
    <img src={icon} alt={`${day} weather`} />
    <div>
      <span className="maxTemp">{maxTemp}°</span>
      <span className="minTemp">{minTemp}°</span>
    </div>
  </div>
);

DayComponent.propTypes = {
  day: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  maxTemp: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
};

// Component for rendering the weather chart and details
const WeatherChart = ({
  temp = 29,
  tempImage = "/images/index/weather/sun.svg",
  precipitation = 2,
  humidity = 70,
  wind = 3,
  city = "New York",
  cityInitials = "NY",
  day = "Wednesday",
  time = "04:00",
}) => (
  <div className="chartWrapper">
    <div className="topDiv">
      <div className="topDivLeft">
        <div className="gradeSection">
          <img src={tempImage} alt="Weather icon" />
          <span>{temp}°C</span>
        </div>
        <div className="xtraWeatherInfo">
          <span>Precipitation: {precipitation}%</span>
          <span>Humidity: {humidity}%</span>
          <span>Wind: {wind} km/h</span>
        </div>
      </div>
      <div className="topDivRight">
        <h2>
          {city}, {cityInitials}
        </h2>
        <p>
          {day}, {time}
        </p>
      </div>
    </div>
    <div className="chart">
      <ResponsiveContainer width="100%" height={168}>
        <LineChart
          data={hourlyData}
          margin={{ top: 20, right: 20, bottom: 30, left: 20 }}
        >
          <XAxis dataKey="time" tickLine={false} axisLine={false} />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#FFA726"
            dot={{ r: 4, fill: "#FFA726" }}
          />
          <Tooltip
            formatter={(value) => [`${value}°C`]}
            labelFormatter={(label) => label}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="bottomDiv">
      {dailyData.map((point, index) => (
        <DayComponent
          key={`${point.day}-${index}`}
          day={point.day}
          icon={point.icon}
          maxTemp={point.maxTemp}
          minTemp={point.minTemp}
        />
      ))}
    </div>
  </div>
);

WeatherChart.propTypes = {
  temp: PropTypes.number,
  tempImage: PropTypes.string,
  precipitation: PropTypes.number,
  humidity: PropTypes.number,
  wind: PropTypes.number,
  city: PropTypes.string,
  cityInitials: PropTypes.string,
  day: PropTypes.string,
  time: PropTypes.string,
};

// Component for rendering individual weather cards
const WeatherCard = ({
  precipitation,
  humidity,
  wind,
  temp,
  tempImage,
  imageUrl,
  className,
  city,
  day,
  time,
}) => (
  <div
    className={`card ${className || ""}`}
    style={{
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="overlay">
      <div className="overlayTop">
        <div className="overlayTopLeft">
          <span>Precipitation: {precipitation}%</span>
          <span>Humidity: {humidity}%</span>
          <span>Wind: {wind} km/h</span>
        </div>
        <div className="overlayTopRight">
          <h2>{city}</h2>
          <p>
            {day}, {time}
          </p>
        </div>
      </div>
      <div className="overlayBottom">
        <img src={tempImage} alt="Weather icon" />
        <span>
          {temp}
          <span>°C</span>
        </span>
      </div>
    </div>
  </div>
);

WeatherCard.propTypes = {
  precipitation: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  humidity: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  wind: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  temp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  tempImage: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
  city: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

// Main Weather component
const Weather = ({ weatherChartData }) => (
  <div className="dashboard">
    <div className="left">
      <WeatherChart {...weatherChartData} />
    </div>
    <div className="right">
      <WeatherCard
        precipitation={0}
        humidity={41}
        wind={27}
        temp={32}
        tempImage="/images/index/weather/cardSunny.svg"
        city="Ankara"
        imageUrl="/images/index/weather/ankara.svg"
        className="sunny"
        day="Tuesday"
        time="2:00 PM"
      />
      <WeatherCard
        precipitation={18}
        humidity={32}
        wind={16}
        temp={16}
        tempImage="/images/index/weather/cardSnow2.svg"
        city="Alaska"
        imageUrl="/images/index/weather/alaska.svg"
        className="snow"
        day="Tuesday"
        time="3:00 AM"
      />
      <WeatherCard
        precipitation={70}
        humidity={50}
        wind={14}
        temp={24}
        tempImage="/images/index/weather/cardRain.svg"
        city="Berlin"
        imageUrl="/images/index/weather/berlin.svg"
        className="rainy"
        day="Tuesday"
        time="10:00 PM"
      />
      <WeatherCard
        precipitation={10}
        humidity={44}
        wind={14}
        temp={27}
        tempImage="/images/index/weather/cardMoonCloud.svg"
        city="Paris"
        imageUrl="/images/index/weather/paris.svg"
        className="moonCloud"
        day="Tuesday"
        time="10:00 PM"
      />
    </div>
  </div>
);

Weather.propTypes = {
  weatherChartData: PropTypes.object,
};

export default Weather;
