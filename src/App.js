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

  // Таймер 2 секунды для preloader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  // Роуты
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
