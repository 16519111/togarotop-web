import Login from './pages/login';
import Dashboard from './pages/dashboard';
import About from './pages/about';
import Menu from './pages/menu';
import Create from './pages/create';
import Find from './pages/find';
import Navbar from './components/navbar';
import Products from './pages/products';
import { COLORS } from './consts/colors';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <>
        <Dashboard/>
      </>,
  },
  {
    path: "/about",
    element: 
      <>
        <About/>
      </>,
  },
  {
    path: "/products",
    element: 
      <>
        <Products/>
      </>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/create",
    element: 
      <>
        <Navbar/>
        <Create/>
      </>,
  },
  {
    path: "/find",
    element: 
      <>
        <Navbar/>
        <Find/>
      </>,
  },
]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
