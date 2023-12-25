import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import  GlobalCss from "./assets/global.styled.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalCss/>
    <App />
  </React.StrictMode>,
)
