import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Karthi from './Karthi.jsx'

try {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      {/* <App/> */}
      <Karthi/>
    </StrictMode>,
  )
} catch (error) {
  console.error("Error rendering the application:", error);
}
