import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/*import './index.css'*/
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext.jsx'
import { Alert } from 'react-bootstrap'
import { AlertaProvider } from './context/AlertaContext.jsx'
import Alerta from './components/Notificacion/Alerta.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AlertaProvider>
        <Alerta />
        <CarritoProvider>
          <App />
        </CarritoProvider>
      </AlertaProvider>
    </BrowserRouter>
  </StrictMode>,
)
