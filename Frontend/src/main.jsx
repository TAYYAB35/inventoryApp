import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import { LoginScreen } from './screens/index.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Route without layout */}
      <Route path="/login" element={<LoginScreen />} />

      {/* Route with layout */}
      <Route path="/*" element={<App />} />
    </>
  )
)

const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>

      <RouterProvider router={router} />
    </QueryClientProvider>

  </StrictMode>
)
