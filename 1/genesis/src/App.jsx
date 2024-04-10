import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Genres from './pages/Genres'
import Artist from './pages/Artist'
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home/>,
    },
        {
      path: "/genres",
      element: <Genres/>,
    },
        {
      path: "/artists",
      element: <Artist/>,
    },
  ]
)

const App = () => {
  return (
      <RouterProvider>

      </RouterProvider>
  )
}

export default App
