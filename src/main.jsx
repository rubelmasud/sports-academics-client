import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routers.jsx';
import AuthProvider from './Providers/AuthProvider';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="max-w-screen-2xl mx-auto">
        <Toaster />
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
