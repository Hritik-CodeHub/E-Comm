import './App.css'
import Footer from './components/layout/Footer.tsx'
import Navbar from './components/Navbar/Navbar'
import  Home  from './pages/Home.tsx'

function App() {
  return (
     <div className="min-h-screen ">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
    
  )
}

export default App
