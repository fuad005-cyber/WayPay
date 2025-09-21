import './App.css';
import Login from './login/Login';
import Signup from './signup/Signup';
import Firstpage from './first page/Firstpage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const route = createBrowserRouter([
    { /* {
        path:"/news",
      element: <News />
      },*/},
      { /* {
        path:"/contact",
      element: <Contact />
      },*/},
      { /* {
        path:"/About us",
      element: < />
      },*/},
    {
      path:"/",
      element: <Firstpage />
    },
    {path:"/Signup",
    element: <Signup />,
    },
    {path:"/login",
    element: <Login />,
    },
  ]);
  return (
    <div className="App">
     <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
