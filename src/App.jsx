import { useEffect, useState } from 'react';
import './App.css';
import InputUser from './components/InputUser';
import Loading from './components/Loading';
import ShowDetails from './components/ShowDetails';

function App() {
  const [cityDetail, setCityDetail] = useState('Kathmandu');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (param) => {
    try {
      setLoading(true);
      setError(null); // Reset error state before a new fetch
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=5c8c185b2c37add6d9777b12a5b4d651`
      );

      if (!res.ok) {
        throw new Error('City not found or API error');
      }

      const data = await res.json();
      setWeatherData(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData('Kathmandu');
  }, []);

  const handleSearch = () => {
    if (cityDetail.trim() !== '') {
      fetchWeatherData(cityDetail);
    } else {
      setError('Please enter a city name');
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="h-screen w-full bg-gradient-to-br from-blue-600 to-blue-900 text-white">
      {/* Header */}
      <div className="flex justify-center gap-4 items-center py-4 bg-blue-700 shadow-md">
        <InputUser
          cityName={cityDetail}
          onCityNameChange={(city) => setCityDetail(city)}
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg shadow-md transition duration-300"
        >
          Search
        </button>
      </div>

      {/* Error Display */}
      {error && (
        <div className="text-center mt-4 text-red-500 font-semibold">
          {error}
        </div>
      )}

      {/* Weather Details */}
      {weatherData ? (
        <ShowDetails details={weatherData} />
      ) : (
        <div className="flex justify-center items-center mt-20 text-lg font-medium">
          Please search for a city to see weather details.
        </div>
      )}
    </div>
  );
}

export default App;
