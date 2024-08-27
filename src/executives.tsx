import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ExecutivesApp from './ExecutivesApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ExecutivesApp/>
  </StrictMode>,
)
