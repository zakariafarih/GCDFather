import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TestApp from './TestApp.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'

console.log('Main.jsx is loading...')

const rootElement = document.getElementById('root')
console.log('Root element found:', !!rootElement)

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ErrorBoundary>
        <TestApp />
      </ErrorBoundary>
    </StrictMode>,
  )
  console.log('App rendered successfully')
} else {
  console.error('Root element not found!')
}
