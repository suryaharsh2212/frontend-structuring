import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import {Route, RouterProvider,  createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './assets/Home.jsx';
import Layout from './assets/Layout.jsx';
import Dashboard from './assets/Dashboard.jsx';
import Logout from './Logout.jsx';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />} />
      <Route path='login' element={<LoginForm />} />
      <Route path='register' element={<RegistrationForm />} />
      <Route path='dashboard' element={<Dashboard/>} />
      <Route path='' element={<Logout/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider  router={router}/>
  </React.StrictMode>
)

