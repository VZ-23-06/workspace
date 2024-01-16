
import './App.css'
import Haupt from './assets/components/haupt/Haupt'
import Nav from './assets/components/nav/Nav'


// ! ⬆️ Hier werden nur Packeges und Components importiert

function App() {
  // ! ⤵️ Das IST Vanila JS
  //  ! Ab hier werden die Daten bearbeitet, functionen geschrieben usw.
  //  ! das ist wie ein Fließband in einer Fabrik



  // ! bis zum hier
  {/* REACT FRAGMENT */ }
  // ! AB hier sind wir in einem JSX BEREICH
  // ! Dass wir hier sowohl HTML ELEMENTE als auch REACT Components schreiben können
  return (

    <>

      {/* // ! DAS ist ein HTML ELEMENT */}
      <h1>Guten Morgen</h1>
      {/* // ! DAS ist ein Component */}
      <Nav />
      <Haupt />
    </>
  )
}

export default App
