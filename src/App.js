import './App.css';
import Herosection from './components/herosection';
import Navbar from './components/navbar';
import OurStory from './components/our-story';

import React from 'react';
function App() {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      {/* <OurStory/> */}
    </div>
  );
}

export default App;
