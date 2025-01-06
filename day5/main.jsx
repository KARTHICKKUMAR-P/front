import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

try {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App/>
    </StrictMode>,
  )
} catch (error) {
  console.error("Error rendering the application:", error);
}
