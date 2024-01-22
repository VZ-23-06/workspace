import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import UserList from "./components/userList/UserList"
import UserDetail from "./components/userDetail/UserDetail"
function App() {
  // App.jsx ist wie eine Verwaltung
  return (
    <>
      <Routes>
        {/* Hier werden die Adresse useren componenten festgestellt */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/userlist" element={<UserList />} />
        {/* was man ab : schreibt ist das, was man als useParams() in UserDetail Component übernehmen */}
        <Route path="/userlist/:pizza" element={<UserDetail />} />
      </Routes>
    </>
  )
}

export default App
