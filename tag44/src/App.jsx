import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import ProductList from './pages/productList/ProductList'
import ProductDetails from './pages/productDetails/ProductDetails'
import Profil from './pages/profil/Profil'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profil' element={<Profil />} />
        <Route path='/productlist' element={<ProductList />} />
        <Route path='/productlist/:pizza' element={<ProductDetails />} />
      </Routes>
    </>
  )
}

export default App
