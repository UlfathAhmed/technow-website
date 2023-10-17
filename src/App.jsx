
import Navbar from "./components/Navbar";
import About from "./components/About";
import Partners from "./components/Partners";
import Gradient from "./components/Gradient";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Service from "./components/Service";
import HomeSlider from "./components/HomeSlider";
import Home from "./components/Home";
import Commitments from "./components/Commitments";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Advantages from "./components/Advantages";
import Services from "./components/Services";





function App() {


  return (
    <>
      < Navbar />
      < Home />
      < HomeSlider/>
      < About />
      < Commitments />
      < Partners /> 
      < Advantages />
      < Gradient />
      < Service />
      {/* < Services /> */}
      < Skills />
      < Product />
      < Contact />
      < Footer/>
    </>
  )
}

export default App
