import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"



const App = () => {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-[1609px] min-h-screen mx-auto p-4">
      <Home />
    </div>
     <Footer/>
    </>
    
  )
}

export default App