import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import ExpenseApp from './ExpenseApp'
import ExpenseApp2 from './ExpenseApp2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ExpenseApp /> */}
    <ExpenseApp2 />
  </StrictMode>,
)
