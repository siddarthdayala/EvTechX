import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom";


 import IndexPage from './pages/IndexPage';
import TwoWheelers from './pages/TwoWheelers';
import FourWheelers from './pages/FourWheelers';
import TwoWheelersList from './pages/TwoWheelersList';
  
 const router = createBrowserRouter([
  {
   path: "/",
   element: <IndexPage />,
  },

  {
    path: "/twowheelers",
    element: <TwoWheelers />,
  },

  {
    path: "/fourwheelers",
    element: <FourWheelers />,
  },

  {
    path: "/t_cList",
    element: <TwoWheelersList />
  }
 ]);
  
 ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
 );


