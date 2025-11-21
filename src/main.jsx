import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MemeGallery from './MemeGallery.jsx'
import { Analytics } from '@vercel/analytics/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MemeGallery />
    <Analytics />
  </React.StrictMode>
)
