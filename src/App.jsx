import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import NavBar from './components/Header/NavBar'
import ScrollingScreen from './components/ScrollingScreen/ScrollingScreen'
import Statistic from './components/Statistics/Statistics'
import Works from './components/Works/Works'
import Description from './components/Description/Description'
import Tabela from './components/Tabela/Tabela'
import Address from './components/Address/Address'
import Footer from './components/Footer/Footer'
import SideBar from './components/SideBar/SideBar'
import ScrollDescription from './components/ScrollDescription/ScrollDescription'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <SideBar/>
      <NavBar/>
      <ScrollingScreen/>
      <Statistic/>
      <Works/>
      <Description/>
      <ScrollDescription/>
      <Tabela/>
      <Address/>
      <Footer/>
    </div>
  )
}

export default App
