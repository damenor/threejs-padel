import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Intro from './Intro'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Intro>
    <App />
  </Intro>,
)