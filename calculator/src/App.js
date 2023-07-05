import './App.css';
import Button from './components/button'
import Input from './components/Input'
import Head from './components/Head'
import logo_jlimones from './img/logo_jlimones.jpg'
import ButtonClear from './components/ButtonClear'
import {useState} from 'react';
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('');

  const AddInput = value => {
    const operators = '+-/*.';
    const lastChar = input.toString();
    if (!(operators.includes(value.split('')[value.length - 1]))
      || !((operators.includes(lastChar.split('')[lastChar.length - 1])))
      && input)
      setInput(input + value);
    else
      {alert('Invalid action')};
  };

  const Calculator = () => {
      const operators = '+-/*.';

      if (input && !operators.includes((input.toString()).split('')[[(input.toString()).length -1]]))
        setInput(evaluate(input));
      else
        {alert('Invalid action');};
  };
  
  return (
    <div className="App">
      <Head img = { logo_jlimones}/>
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
