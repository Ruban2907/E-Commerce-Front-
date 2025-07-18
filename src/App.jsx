import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Index from '../src/page/home'
import About from '../src/page/about'
import Header from './shared/components/Header'
import Final from './shared/components/Final'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={ <Index/> }/>
        <Route path='/about' element={ <About/> }/>
      </Routes>
      <Final/>
      </BrowserRouter>
    </>
  )
}

export default App
