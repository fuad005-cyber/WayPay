import React, { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from "./preloader/Preloader";
import Header from "./header/Header";
import Firstpage from "./first page/Firstpage";
import Login from "./login/Login";
import Signup from "./signup/Signup";

// Layout-компонент с Header
function Layout() {
  return (
    <>
      <Header />
      <Outlet /> {/* Здесь будут отображаться дочерние страницы */}
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("preloaderShown");

    if (hasLoaded) {
      setLoading(false); // Если preloader уже показывался, сразу отключаем
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("preloaderShown", "true"); // Отмечаем, что preloader уже был
      }, 3200); // Время отображения preloader в мс

      return () => clearTimeout(timer);
    }
  }, []);

  // Роуты приложения
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Firstpage /> },
        { path: "signup", element: <Signup /> },
        { path: "login", element: <Login /> },
      ],
    },
  ]);

  return (
    <div className="App">
      {loading ? <Preloader /> : <RouterProvider router={router} />}
    </div>
  );
}

export default App;
