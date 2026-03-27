import { StrictMode } from 'react'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



// Importando as páginas
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import Dashboard from './pages/dashboard/Dashboard'
import Dashboard2 from './pages/dash2/Dash2'
import './main.css'


// As rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "cadastro",
    element: <Cadastro />,
  },
  {
    path: "/login/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/login/dash2",
    element: <Dashboard2 />,
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
