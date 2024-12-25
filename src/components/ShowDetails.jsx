import React from 'react';

function ShowDetails({ details }) {
  const { main, name, sys, wind } = details;

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-us', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="flex justify-center text-center mt-7">
      <fieldset className="border-2 border-white h-96 w-1/3 rounded-lg grid p-6 bg-gradient-to-b from-blue-50 to-blue-100 shadow-lg">
        <h1 className="text-6xl font-bold text-blue-700">
          {parseInt(main.temp - 273.15)}°C
        </h1>
        <hr className="my-4 border-blue-200" />
        <div className="flex justify-around mt-4 text-lg font-semibold text-gray-700">
          <h1>{name}, {sys.country}</h1>
          <h1>{getCurrentDate()}</h1>
        </div>
        <hr className="my-4 border-blue-200" />
        <h1 className="text-lg font-medium text-gray-700">
          Wind: <span className="font-bold">{wind.speed} m/s</span>
        </h1>
        <hr className="my-4 border-blue-200" />
        <h1 className="text-lg font-medium text-gray-700">
          Humidity: <span className="font-bold">{main.humidity}%</span>
        </h1>
        <hr className="my-4 border-blue-200" />
        <h1 className="text-lg font-medium text-gray-700">
          Pressure: <span className="font-bold">{main.pressure} hPa</span>
        </h1>
      </fieldset>
    </div>
  );
}

export default ShowDetails;
