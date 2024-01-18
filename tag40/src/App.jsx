
import { useState } from 'react'
import './App.css'
import Counter from './assets/components/counter/Counter'
import Form from './assets/components/form/Form';
import cars from "./assets/data/cars"
import ListItem from './assets/components/listItem/ListItem';

function App() {
  //                                     Boolean
  const [darkMode, setDarkMode] = useState(false)
  const [data, setData] = useState(cars)
  console.log(darkMode);

  // console.log(cars);
  console.log(data);

  return (
    <>
      <div className={`${darkMode ? "dark" : "light"}`}>
        <button onClick={() => setDarkMode(!darkMode)}>Change Mode</button>
        <h1>useState</h1>
        <Counter />
        <Form />
        {/* das linke data ist das,was wir weiter übergeben */}
        <ListItem übergebendeData={data} />
      </div>

    </>
  )
}

export default App
