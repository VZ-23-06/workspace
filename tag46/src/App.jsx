import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import KontaktList from './components/kontaktList/KontaktList'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/kontaktlist' element={<KontaktList />} />
      </Routes>
    </>
  )
}

export default App
