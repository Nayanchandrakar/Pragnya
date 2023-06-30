import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Appcontext } from './Context/Appcontext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Appcontext>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Appcontext>
)
