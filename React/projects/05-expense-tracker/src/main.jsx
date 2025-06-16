import { createRoot } from 'react-dom/client'
import ExpenseTracker from './components/ExpenseTracer'

import './index.css'

createRoot(document.getElementById('root')).render(
    <>
      <ExpenseTracker/>
    </>
)
