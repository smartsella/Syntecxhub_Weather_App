import {
  Thermometer,
  Droplets,
  Wind,
  Eye,
  Gauge,
  Sunrise,
  Sunset,
} from "lucide-react";

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const {
    name,
    country,
    temp,
    feels_like,
    humidity,
    pressure,
    wind_speed,
    visibility,
    description,
    icon,
    sunrise,
    sunset,
  } = weatherData;

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

  const WeatherDetail = ({ icon: Icon, label, value, unit }) => (
    <div className="flex items-center space-x-3 p-3 bg-white/50 rounded-xl backdrop-blur-sm">
      <div className="p-2 bg-blue-100 rounded-lg">
        <Icon className="h-5 w-5 text-blue-600" />
      </div>
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className="font-semibold text-gray-800">
          {value} {unit}
        </p>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-xl text-white p-6 max-w-2xl mx-auto">
      {/* Location and Main Info */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-1">
          {name}, {country}
        </h2>
        <p className="text-blue-100 capitalize">{description}</p>
      </div>

      {/* Main Weather Display */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-6xl">{getWeatherIcon(icon)}</div>
        <div className="text-right">
          <div className="text-5xl font-bold mb-2">{Math.round(temp)}°C</div>
          <p className="text-blue-100">Feels like {Math.round(feels_like)}°C</p>
        </div>
      </div>

      {/* Weather Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <WeatherDetail
          icon={Thermometer}
          label="Feels Like"
          value={Math.round(feels_like)}
          unit="°C"
        />
        <WeatherDetail
          icon={Droplets}
          label="Humidity"
          value={humidity}
          unit="%"
        />
        <WeatherDetail
          icon={Wind}
          label="Wind Speed"
          value={wind_speed}
          unit="m/s"
        />
        <WeatherDetail
          icon={Gauge}
          label="Pressure"
          value={pressure}
          unit="hPa"
        />
        <WeatherDetail
          icon={Eye}
          label="Visibility"
          value={(visibility / 1000).toFixed(1)}
          unit="km"
        />
      </div>

      {/* Sunrise & Sunset */}
      <div className="flex justify-between items-center bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
        <div className="text-center">
          <Sunrise className="h-6 w-6 text-yellow-300 mx-auto mb-2" />
          <p className="text-sm text-blue-100">Sunrise</p>
          <p className="font-semibold">{sunrise}</p>
        </div>
        <div className="text-center">
          <Sunset className="h-6 w-6 text-orange-400 mx-auto mb-2" />
          <p className="text-sm text-blue-100">Sunset</p>
          <p className="font-semibold">{sunset}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
