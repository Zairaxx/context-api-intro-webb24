import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { CounterContextProvider } from './context/MyContext.jsx'
import { TestContextProvider } from './context/TestContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TestContextProvider>
      <CounterContextProvider>
        <Router>
          <App />
        </Router>
      </CounterContextProvider>
    </TestContextProvider>
  </StrictMode>,
)
