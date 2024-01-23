import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import About from "./pages/about/About"
import UseEffectComponent from './pages/useEffectHook/UseEffectComponent'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/useeffectcomponent' element={<UseEffectComponent />} />
      </Routes>
    </>
  )
}

export default App
