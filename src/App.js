import './App.css';
import Login from './login/Login';
import Signup from './signup/Signup';
import Firstpage from './first page/Firstpage';
import Header from './header/Header';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Layout-компонент, содержащий Header
function Layout() {
  return (
    <>
      <Header />
      <Outlet /> {/* Здесь отображаются дочерние страницы */}
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  // ⏳ Таймер на 2 секунды
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2000 мс = 2 секунды

    return () => clearTimeout(timer);
  }, []);

  // Роутер
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />, // Layout с Header
      children: [
        { index: true, element: <Firstpage /> },  // путь "/"
        { path: 'Signup', element: <Signup /> },  // путь "/Signup"
        { path: 'login', element: <Login /> },    // путь "/login"
      ],
    },
  ]);

  return (
    <div className="App">
      {loading ? (
        // LOADING SCREEN
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-white">
          <h1 className="mb-4">Loading...</h1>
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        // MAIN CONTENT (роуты)
        <RouterProvider router={router} />
      )}
    </div>
  );
}

export default App;
