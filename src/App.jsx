

import { ToastContainer } from "react-toastify"

import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom"
import RootLayout from "./_root/RootLayout.jsx"
import Home from "./pages/Home.jsx"
import Dice from "./pages/Dice.jsx"

export default function App() {


  // using hashrouter in order to be able to use gh pages and upload out webiste on github.
  const router = createHashRouter([
    {
      element: <RootLayout />,
      errorElement: <h2>page not found</h2>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/dice",
          element: <Dice />

        }
      ]
    }
  ])


  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer /> 
    </>

  )
}
