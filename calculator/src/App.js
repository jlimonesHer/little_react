import './App.css';
import logo_jlimones from './img/logo_jlimones.jpg'
import Button from './components/button'

function App() {
  return (
    <div className="App">
      <div className='container_logo'>
        <img className='img_logo'
          src={logo_jlimones}
          alt='logo jlimones' />
      </div>
      <div className='container_calculator'>
        <div className='row'>
          <Button>1</Button>
          <Button>+</Button>
        </div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
      </div>
    </div>
  );
}

export default App;
