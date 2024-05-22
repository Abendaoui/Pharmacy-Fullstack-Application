import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'
import { AuthProvider } from './contexts/AuthContext'
import { CartProvider } from './contexts/cartContext'
import { NotificationProvider } from './contexts/NotificationContext'
import './assets/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>load ...</div>}>
      <AuthProvider>
        <CartProvider>
          <NotificationProvider>
            <RouterProvider router={router} />
          </NotificationProvider>
        </CartProvider>
      </AuthProvider>
    </Suspense>
  </React.StrictMode>
)
