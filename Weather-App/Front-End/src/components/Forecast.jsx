import { format } from "date-fns";

const Forecast = ({ forecastData }) => {
  if (!forecastData || forecastData.length === 0) return null;

  const getWeatherIcon = (iconCode) => {
    const iconMap = {
      "01d": "☀️",
      "01n": "🌙",
      "02d": "⛅",
      "02n": "☁️",
      "03d": "☁️",
      "03n": "☁️",
      "04d": "☁️",
      "04n": "☁️",
      "09d": "🌧️",
      "09n": "🌧️",
      "10d": "🌦️",
      "10n": "🌦️",
      "11d": "⛈️",
      "11n": "⛈️",
      "13d": "❄️",
      "13n": "❄️",
      "50d": "🌫️",
      "50n": "🌫️",
    };
    return iconMap[iconCode] || "🌈";
  };

  const ForecastItem = ({ day }) => (
    <div className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-white/80">
      <p className="font-semibold text-gray-700 mb-2">
        {format(new Date(day.dt * 1000), "EEE")}
      </p>
      <div className="text-3xl mb-2">{getWeatherIcon(day.weather[0].icon)}</div>
      <p className="text-sm text-gray-600 capitalize mb-2 text-center">
        {day.weather[0].description}
      </p>
      <div className="flex items-center space-x-2">
        <span className="font-bold text-blue-600">
          {Math.round(day.temp.max)}°
        </span>
        <span className="text-gray-400">{Math.round(day.temp.min)}°</span>
      </div>
    </div>
  );

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        5-Day Forecast
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {forecastData.slice(0, 5).map((day, index) => (
          <ForecastItem key={index} day={day} />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
