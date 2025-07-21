import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Index from '../src/page/home'
import About from '../src/page/about'
import Blog from './page/blog'
import Header from './shared/components/Header'
import Final from './shared/components/Final'
import Contact from './page/contact.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={ <Index/> }/>
        <Route path='/about' element={ <About/> }/>
        <Route path='/stories' element={ <Blog/>} />
        <Route path='/contact' element={ <Contact/>} />
      </Routes>
      <Final/>
      </BrowserRouter>
    </>
  )
}

export default App
