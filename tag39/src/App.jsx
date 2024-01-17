import cars from "./assets/data/cars"
import './App.css'
import CarList from './assets/components/carList/CarList'

function App() {
  // ! APP.jsx ist wie eine Verwaltung
  // ! Hier ist Vanila JS Bereich
  console.log(cars);
  return (
    // ! Hier ist JSX d.H sowohl HTML ELEMENTE als auch React Component
    <>
      <CarList cars={cars}/>
    </>
  )
}

export default App
