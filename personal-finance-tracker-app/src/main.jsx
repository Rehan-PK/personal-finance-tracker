import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import ExpenseApp from './ExpenseApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <ExpenseApp />
  </StrictMode>,
)
