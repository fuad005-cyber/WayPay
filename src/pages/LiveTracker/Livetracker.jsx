import { Link } from "react-router-dom";
import "./Livetracker.css";
import React, { useState } from 'react';
import livemapLogo from "../../assets/icons/livemap.svg";
import bell from "../../assets/icons/bell.svg";
import dot from "../LiveTracker/dot.svg";
import location from "../LiveTracker/location.svg";
import transport from "../LiveTracker/transport.svg";

const Livetracker = () => {
  const [currentLocation, setCurrentLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [transportType, setTransportType] = useState('');

  const handleSearch = () => {
    console.log('Current Location:', currentLocation);
    console.log('Destination:', destination);
    console.log('Transport Type:', transportType);
    // Добавьте логику для поиска
  };

  return (
    <div className="livetracker-container container py-5">
      {/* Header Section */}
      <div className="livetracker-header d-flex justify-content-between align-items-center mb-4">
        <div className="livemap d-flex align-items-center">
          <img src={livemapLogo} alt="Live Map Logo" className="livemap-logo" />
          <h2 className="m-0">Live Map</h2>
        </div>

        <button className="notification-btn">
          <img src={bell} alt="bell" className="bell-button" />
        </button>
      </div>

      {/* Form Section */}
      <div className="livetracker-form">
        {/* Current Location Input */}
        <div className="input-group d-flex align-items-center mb-3 p-3 rounded-3 bg-light">
          <img src={location} alt="location" className="location-icon me-3" />
          <input
            type="text"
            value={currentLocation}
            onChange={(e) => setCurrentLocation(e.target.value)}
            placeholder="Enter current location"
            className="location-input form-control border-0"
          />
        </div>

        {/* Destination Input */}
        <div className="input-group d-flex align-items-center mb-3 p-3 rounded-3 bg-light">
          <img src={dot} alt="dot" className="dot-icon me-3" />
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Where are you going?"
            className="destination-input form-control border-0"
          />
        </div>

        {/* Transport Type Selection */}
        <div className="input-group d-flex align-items-center mb-3 p-3 rounded-3 bg-light">
          <img src={transport} alt="transport" className="transport-icon me-3" />
          <select
            value={transportType}
            onChange={(e) => setTransportType(e.target.value)}
            className="transport-select form-select border-0"
          >
            <option value="">Select Transport</option>
            <option value="bus">Bus</option>
            <option value="train">Train</option>
            {/* Add more transport types as needed */}
          </select>
        </div>

        {/* Search Button */}
        <button className="search-btn btn btn-primary w-100 py-3" onClick={handleSearch}>
          Find Transport to track
        </button>
      </div>
    </div>
  );
};

export default Livetracker;
