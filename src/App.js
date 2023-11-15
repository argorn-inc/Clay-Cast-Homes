import './App.css';
import Footer from './components/HomePage/Footer';
import Herosection from './components/HomePage/herosection';
import Navbar from './components/HomePage/navbar';
import OurStory from './components/HomePage/our-story';


function App() {
  return (
    <div>
     <Navbar/>
     <Herosection/>
     <OurStory/>
     <Footer/>
     
     
    </div>
  );
}

export default App;
