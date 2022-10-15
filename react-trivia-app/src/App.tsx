import React from 'react';
import './css/App.css';
import Trivia from './components/Trivia';
import BlobYellow from './images/blob-yellow.png';
import BlobBlue from './images/blob-blue.png';

function App() {
  return (
    <div className="App">
      <img id="blob-yellow" src={BlobYellow} alt="A yellow blob used to enhance the background"/>
      <img id="blob-blue" src={BlobBlue} alt="A blue blob used to enhance the background"/>
      <Trivia/>
    </div>
  );
}

export default App;
