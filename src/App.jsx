import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Experience from './components/Experience'


function App() {
  return (
    <div className='bg-dark min-h-screen pt-2 overflow-x-hidden'>
      <Navbar/>    
      <Hero/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>          
    </div>
  )
}

export default App
