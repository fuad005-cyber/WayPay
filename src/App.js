import './App.css';
import Login from './login/Login';
import Signup from './signup/Signup';
import Firstpage from './first page/Firstpage';
import Header from './header/Header';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';

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
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />, // Layout с Header
      children: [
        { index: true, element: <Firstpage /> },         // путь "/"
        { path: 'Signup', element: <Signup /> },         // путь "/Signup"
        { path: 'login', element: <Login /> },           // путь "/login"
        // { path: 'news', element: <News /> },
        // { path: 'contact', element: <Contact /> },
        // { path: 'about-us', element: <AboutUs /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
