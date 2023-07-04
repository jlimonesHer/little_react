import './App.css';
import logo_jlimones from './img/logo_jlimones.jpg'
import Button from './components/button'
import Input from './components/Input'
import ButtonClear from './components/ButtonClear'
import {useState} from 'react';
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('');

  const AddInput = value => {
    setInput(input + value);
  };

  const Calculator = () => {
    if (input)
      setInput(evaluate(input));
    else
      alert('No ha escrito nada');
  };

  return (
    <div className="App">
      <div className='container_logo'>
        <img className='img_logo'
          src={logo_jlimones}
          alt='logo jlimones' />
      </div>
      <div className='container_calculator'>
        <Input input={ input } />
        <div className='row'>
          <Button manClick={AddInput}>1</Button>
          <Button manClick={AddInput}>2</Button>
          <Button manClick={AddInput}>3</Button>
          <Button manClick={AddInput}>+</Button>
        </div>
        <div className='row'>
          <Button manClick={AddInput}>4</Button>
          <Button manClick={AddInput}>5</Button>
          <Button manClick={AddInput}>6</Button>
          <Button manClick={AddInput}>-</Button>
        </div>
        <div className='row'>
          <Button manClick={AddInput}>7</Button>
          <Button manClick={AddInput}>8</Button>
          <Button manClick={AddInput}>9</Button>
          <Button manClick={AddInput}>*</Button>
        </div>
        <div className='row'>
          <Button manClick={Calculator}>=</Button>
          <Button manClick={AddInput}>0</Button>
          <Button manClick={AddInput}>.</Button>
          <Button manClick={AddInput}>/</Button>
        </div>
        <div className='row'>
          <ButtonClear manClear={() => setInput('')}>
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
