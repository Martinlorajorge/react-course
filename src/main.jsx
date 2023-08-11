import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import { Post } from './Posts'
import { Counter } from './Contador'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Counter />
    </>
    {/* <App /> */}
  </React.StrictMode>
)
