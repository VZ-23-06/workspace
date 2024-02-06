import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import KontaktList from './components/kontaktList/KontaktList'
import KontaktDetails from './components/kontaktDetails/KontaktDetails'
import AddKontakt from './components/addKontakt/AddKontakt'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/kontaktlist' element={<KontaktList />} />
        <Route path='/kontaktlist/:myKey' element={<KontaktDetails />} />
        <Route path='/addkontakt' element={<AddKontakt />} />
      </Routes>
    </>
  )
}

export default App
