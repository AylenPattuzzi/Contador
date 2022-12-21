import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import EjercicioContador from './Components/EjercicioContador/EjercicioContador'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
   <EjercicioContador/>
  </React.StrictMode>,
)
