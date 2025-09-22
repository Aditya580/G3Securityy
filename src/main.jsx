import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './Components/About/About.jsx'
import Services from './Components/Services/Services.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Connect from'./Components/Connect/Connect.jsx'
import { HelmetProvider } from "react-helmet-async";
import RetailSecurity from './Components/Services/RetailSecurity.jsx'
import Manpower from './Components/Services/Manpower.jsx'
import CorporateSecurity from './Components/Services/CorporateSecurity.jsx'
import Housekeeping from './Components/Services/Housekeeping.jsx'
import Technicalmanpower from './Components/Services/Technicalmanpower.jsx'
import Loading from './Components/Services/Loading.jsx'
import Construction from './Components/Services/Construction.jsx'


const router =createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children :[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'about',
        element:<About/>
      },
     {
        path: "services",
        element: <Services />,
        children: [
          { path: "retail-security", element: <RetailSecurity /> },
          // add other service detail routes here
        ],
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {

        path:'connect',
        element:<Connect/>
      },
        {

        path:'retail-security',
        element:<RetailSecurity/>
      },
         {

        path:'manpower',
        element:<Manpower/>
      },
      {

        path:'corporate-security',
        element:<CorporateSecurity/>
      },
       {

        path:'housekeeping',
        element:<Housekeeping/>
      },
       {

        path:'loading',
        element:<Loading/>
      },
       {

        path:'technicalmanpower',
        element:<Technicalmanpower/>
      },
       {

        path:'construction-security',
        element:<Construction/>
      },

      
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <HelmetProvider>
     <RouterProvider router={router}/>
  </HelmetProvider>
  </React.StrictMode>,
)
