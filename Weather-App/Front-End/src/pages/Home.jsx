import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import Forecast from "../components/Forecast";
import ErrorBox from "../components/ErrorBox";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Mock data for demonstration
  const mockWeatherData = {
    name: "Chennai",
    country: "IN",
    temp: 32,
    feels_like: 36,
    humidity: 65,
    pressure: 1013,
    wind_speed: 3.5,
    visibility: 10000,
    description: "partly cloudy",
    icon: "02d",
    sunrise: "06:15 AM",
    sunset: "06:20 PM",
  };

  const mockForecastData = [
    {
      dt: Date.now() / 1000 + 86400,
      temp: { max: 33, min: 28 },
      weather: [{ description: "sunny", icon: "01d" }],
    },
    {
      dt: Date.now() / 1000 + 172800,
      temp: { max: 32, min: 27 },
      weather: [{ description: "cloudy", icon: "03d" }],
    },
    {
      dt: Date.now() / 1000 + 259200,
      temp: { max: 31, min: 26 },
      weather: [{ description: "rainy", icon: "10d" }],
    },
    {
      dt: Date.now() / 1000 + 345600,
      temp: { max: 32, min: 27 },
      weather: [{ description: "partly cloudy", icon: "02d" }],
    },
    {
      dt: Date.now() / 1000 + 432000,
      temp: { max: 33, min: 28 },
      weather: [{ description: "sunny", icon: "01d" }],
    },
  ];

  const handleSearch = async (query) => {
    setLoading(true);
    setError("");

    // Simulate API call delay
    setTimeout(() => {
      try {
        // For demo purposes, we'll use mock data
        // In real app, you would call your weatherAPI service here
        setWeatherData(mockWeatherData);
        setForecastData(mockForecastData);
      } catch (err) {
        setError("Failed to fetch weather data. Please try again.");
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  const handleErrorClose = () => {
    setError("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Weather Forecast
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Get accurate weather information for any location worldwide. Plan your
          day with confidence.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-12">
        <SearchBar onSearch={handleSearch} loading={loading} />
      </div>

      {/* Error Display */}
      {error && <ErrorBox message={error} onClose={handleErrorClose} />}

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="loading-spinner"></div>
        </div>
      )}

      {/* Weather Display */}
      {weatherData && !loading && (
        <div className="space-y-8">
          <WeatherCard weatherData={weatherData} />
          <Forecast forecastData={forecastData} />
        </div>
      )}

      {/* Empty State */}
      {!weatherData && !loading && (
        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <div className="text-6xl mb-4">🌤️</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Search for Weather
            </h3>
            <p className="text-gray-500">
              Enter a city name above to get current weather conditions and
              forecast.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
