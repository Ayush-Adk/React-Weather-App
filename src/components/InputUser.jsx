import React from 'react'

function InputUser({
    cityName,
    onCityNameChange
}) {
  return (
    <div className=' text-center '>
        <label htmlFor="">Enter city name: </label>
        <input type="text" 
        className=' border-solid border-2 border-black w-80 p-1 rounded-md text-black'
        value={cityName}
        onChange={(e)=>onCityNameChange(e.target.value)}
        />

    </div>
  )
}

export default InputUser