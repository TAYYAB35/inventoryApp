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
import ProtectedRoute from './components/ProtectedRoute.jsx'
import GuestRoute from './components/GuestRoute.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Route without layout */}
      <Route path="/login" element={
        <GuestRoute>
          <LoginScreen />
        </GuestRoute >
      } />

      {/* Protected routes inside layout */}
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <App />
          </ProtectedRoute>
        }
      />
    </>
  )
)

const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
)
