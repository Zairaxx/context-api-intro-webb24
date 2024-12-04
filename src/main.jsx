import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { CounterContextProvider } from './context/MyContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
<CounterContextProvider>
    <Router>
      <App />
    </Router>
  </CounterContextProvider>
  
  </StrictMode>,
)
