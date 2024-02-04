import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <section className="App">

      <div className='yellow'></div>
      <article className='home-article'>
        <h1>Welcome to my simple Blog</h1>
        
        <Link to="/blog"><button>Go to articles</button></Link>
      </article>
    </section>
  )
}

export default App

