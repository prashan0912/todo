import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Todocontext from './context/Todocontext.js'

createRoot(document.getElementById('root')).render(
  <TodoContext.Provider>
    <App />
  </TodoContext.Provider >
);
