import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import './styles/clients.css'
import './styles/project.css'
import './styles/feedback.css'
import { RouterProvider } from "react-router-dom"
import router from './router'
import Her from './mainpg'
import Head from './header'
import Foot from './footer'
import Client from './clients'
import Feed from './feedback'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Head />
    <Her />
    <RouterProvider router={router} />
    <Feed />
    <Client />
    <Foot />
  </React.StrictMode>

)