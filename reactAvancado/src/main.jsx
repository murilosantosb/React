import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { CounterContextProvider } from './context/CounterContext.jsx'

import { TitleColorContextProvider } from './context/TitleColorContext.jsx'

import { ThemeContextProvider } from './context/BackgroundThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
         <ThemeContextProvider>
         <CounterContextProvider>

         <TitleColorContextProvider>
         <App />
         </TitleColorContextProvider>

         </CounterContextProvider>
      </ThemeContextProvider>
  </React.StrictMode>,
)
