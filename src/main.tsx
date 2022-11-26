import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

import Main from './pages/Main'
import Branding from './pages/Branding'
import Applications from './pages/Applications'
import Error from './pages/Error'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
  },
  {
    path: '/branding',
    element: <Branding />,
  },
  {
    path: '/applications',
    element: <Applications />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
