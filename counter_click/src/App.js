import './App.css';
import Button1 from './components/button.js';
import Counter from './components/counter.js';
import logo_jlimnes from './img/logo_jlimones.jpg';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0); 

  const manClick = () => {
    setNumClicks(numClicks + 1);
  };

  const resetCounter = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='contain_logo'>
        <img className='logo'
          src={logo_jlimnes} 
          alt='logo'/>
      </div>
      <div className='main_container'>
        <Counter
          numClicks={numClicks} />
        <Button1
          texto='Cilck'
          is_click={true}
          manClick={manClick} 
          />
        <Button1
          texto='Reset'
          is_click={false}
          manClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
