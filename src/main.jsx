import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { route } from './components/Routes/Routes';
import { Toaster } from 'react-hot-toast';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} /> 
    <Toaster/>
  </React.StrictMode>
);
