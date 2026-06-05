import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import NavBar from './components/Header/NavBar'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <NavBar/>
    </div>
  )
}

export default App
