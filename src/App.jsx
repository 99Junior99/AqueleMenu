import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Importando as páginas
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import Dashboard from './pages/dashboard/Dashboard'
import Pratos from './pages/pratos/Pratos'
import Estatísticas from './pages/estatísticas/Estatísticas'
import Serviços from './pages/serviços/Serviços'
import Definições from './pages/definições/Definições'

import Error from "./pages/error/Error"
import './App.css'



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
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/pratos",
        element: <Pratos />,
    },
    {
        path: "/estatísticas",
        element: <Estatísticas />,
    },
    {
        path: "/serviços",
        element: <Serviços />,
    },
    {
        path: "/definições",
        element: <Definições />,
    },
    {
        path: "*",
        element: <Error />,
    }

])

const App = () => {

    return (
        <>
            <RouterProvider router={router} />

        </>
    )
}

export default App
