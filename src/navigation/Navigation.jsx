import React from "react";
import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as TrackerIcon } from "../assets/icons/tracker.svg";
import { ReactComponent as TripsIcon } from "../assets/icons/trips.svg";
import { ReactComponent as SettingsIcon } from "../assets/icons/settings.svg";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navigation.css";

const tabs = [
  { name: "Home", path: "/", icon: HomeIcon },
  { name: "Live Tracker", path: "/live-tracker", icon: TrackerIcon },
  { name: "My Trips", path: "/my-trips", icon: TripsIcon },
  { name: "Settings", path: "/settings", icon: SettingsIcon },
];

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bottom-nav">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;
        return (
          <div className="nav-item-wrapper" key={tab.name}>
            <NavLink to={tab.path} className={`nav-item ${isActive ? "active" : ""}`}>
              {/* Вставляем SVG как компонент */}
              <tab.icon className="nav-icon" />
              <p>{tab.name}</p>
            </NavLink>

            {isActive && (
              <motion.div
                className="active-indicator"
                layoutId="underline"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Navigation;
