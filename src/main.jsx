import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ContactdataProvider } from './context/ContactContext.jsx' // ✅ CORRECT
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <ContactdataProvider>

    <BrowserRouter>
      <App />
      <ToastContainer
        position="top-left"
        autoClose={2000}
      />
    </BrowserRouter>
  </ContactdataProvider>

)
