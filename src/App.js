import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Experience from "./Components/Experience";
import Acheive from "./Components/Acheive";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";


function App() {
  return (
    < div>
     <NavBar/>
     <Home/>
     <Projects/>
     <Experience/>
    
     <Acheive/>
     <Contact/>
    </div>
  );
}

export default App;