import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import './index.css'
import App from './App.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      {/* <Route path='/login' element={<LoginScreen />} /> */}


      {/* <Route path='' element={<PrivateRouter />}>
        
      </Route>

      <Route path='' element={<AdminRoute />}>
        
      </Route> */}

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
