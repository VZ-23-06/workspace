import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import About from "./pages/about/About"
import UseEffectComponent from './pages/useEffectHook/UseEffectComponent'
import ProductsList from './components/productsList/ProductsList'
import ProductsDetails from './components/productsDetails/ProductsDetails'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/useeffectcomponent' element={<UseEffectComponent />} />
        <Route path='/productlist' element={<ProductsList />} />
        <Route path='/productlist/:dasIdVomUseParamUndDasKommtVomUrl' element={<ProductsDetails />} />
      </Routes>
    </>
  )
}

export default App
