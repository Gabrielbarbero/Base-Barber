import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import NavBar from './components/Header/NavBar'
import ScrollingScreen from './components/Scrolling_Screen/ScrollingScreen'
import Statistic from './components/Statistics/Statistics'
import Works from './components/Works/Works'
import Description from './components/Description/Description'
import Tabela from './components/Tabela/Tabela'
import Adress from './components/Address/Address'
import Footer from './components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <NavBar/>
      <ScrollingScreen/>
      <Statistic/>
      <Works/>
      <Description/>
      <Tabela/>
      <Adress/>
      <Footer/>
    </div>
  )
}

export default App
