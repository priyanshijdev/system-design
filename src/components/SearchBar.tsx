import React, { useState } from 'react'

export const SearchBar = (onSearch: any) => {
    const [city, setCity] = useState("");

    const handleSearch = () =>{
        if(city !== ""){
            console.log(`Searching for weather in ${city}`);
            onSearch(city);

    }
}

  return (
    <div className="search-bar">
        <input
        type='text'
        placeholder='Search for a city'
        value={city}
        onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}></button>
        </div>

  )
}

