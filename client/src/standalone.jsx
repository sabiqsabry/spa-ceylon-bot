import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/chatbot.css'
import StandaloneChat from './StandaloneChat.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StandaloneChat />
  </StrictMode>,
)
