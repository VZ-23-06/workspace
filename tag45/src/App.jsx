import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <section className="App">

      <div className='yellow'></div>
      <article className='home-article'>
        <h1>Welcome to my simple Blog</h1>

        <Link to="/blog"><button className="text-[#ffa200] hover:bg-white border-2 border-[#ffcc00] bg-white hover:bg-[#ffcc00] rounded-[10px] w-[120px] h-[35px] font-extrabold text-lg leading-5 transition-colors duration-300	">Go to articles</button></Link>
      </article>
    </section>
  )
}

export default App

