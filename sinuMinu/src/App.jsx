import { useState } from 'react'
import Home from "./Container/Home/Home"
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Container/Layout/Layout';
import Contact from './Container/Contact/Contact';
import About from './Container/About/About';
import Work from './Container/Work/Work';

function App() {
  // const [count, setCount] = useState(0)


  const router = createBrowserRouter([

    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/work",
          element: <Work/>
        }
      ]
    }

  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
