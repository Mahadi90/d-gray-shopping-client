import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import AuthProivder from './providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProivder>
<RouterProvider router={router}></RouterProvider>
</AuthProivder>
  </React.StrictMode>,
)