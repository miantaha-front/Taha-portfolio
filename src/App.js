import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/navbar';
import SectionA from './Components/SectionA';
import About from './Components/About';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Workflow from './Components/WorkFlow';
import TechStack from './Components/TechStack';
import Project from './Components/Project';
import Contact from './Components/ConatctForm';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavigationBar/>
       <SectionA/>
       <About/>
       <Education/>
       <Experience/>
       <Workflow/>
       <TechStack/>
       <Project/>
       <Contact/>
       <Footer/>
      </header>
    </div>
  );
}

export default App;
