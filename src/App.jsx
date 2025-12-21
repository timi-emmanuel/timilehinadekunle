import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Experience from './components/Experience'
import CursorFollower from './components/CursorFollower'
import ScrollProgress from './components/ScrollProgress'
import MouseOrbs from './components/MouseOrbs'


function App() {
  return (
    <div className='bg-slate-50 dark:bg-dark min-h-screen pt-2 overflow-x-hidden transition-colors duration-300'>
      <CursorFollower />
      <ScrollProgress />
      <MouseOrbs />
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
