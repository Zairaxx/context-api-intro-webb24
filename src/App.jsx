import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './page/HomePage'


function App() {
  const [count, setCount] = useState(10)

  const increment = () => {
    setCount(count+1)
  }
  
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage increment={increment}count={count}/>}></Route>
    </Routes>
    
    </>
  )
}

export default App
