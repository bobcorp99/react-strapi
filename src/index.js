import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import './styles/clients.css'
import './styles/project.css'
import { RouterProvider } from "react-router-dom"
import router from './router'
import Her from './mainpg'
import Head from './header'
import Foot from './footer'
import Client from './clients'
// import PostRequest from './views/Feedback'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Head />
    <Her />
    <RouterProvider router={router} />

    <Client />
    <Foot />
  </React.StrictMode>

)