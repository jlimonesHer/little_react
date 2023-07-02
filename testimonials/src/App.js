import './App.css';
import {Testimonio} from './components/testimonials.jsx';

function App() {
  return (
    <div className="App">
      <div className='main_container'>
        <h1>Esto es lo que dicen nuestros alumnos
          sobre freeCodeCamp:
        </h1>
     <Testimonio
          name='Emma Bostian'
          country='Suecia'
          img='3'
          job='Ingeniera de software'
          company='Spotify'
          testim='En un mundo lleno de misterios y maravillas, cada día es una oportunidad para descubrir, aprender y crecer. La naturaleza nos inspira con su belleza y la ciencia con sus avances. Aprovechemos este presente para forjar un futuro mejor, lleno de esperanza y comprensión mutua.'
        />   
     <Testimonio
          name='Sara'
          country='España'
          img='93'
          job='Ingeniera de software'
          company='Google'
          testim='Descubre la excelencia en la informática con nuestro bootcamp de última generación. Aprende los fundamentos y las últimas tendencias en programación, desarrollo web y análisis de datos. Sumérgete en un ambiente colaborativo con expertos de la industria. Adquiere habilidades clave en solo semanas. ¡Inicia tu transformación en la carrera informática ahora mismo!'
        />   
     <Testimonio
          name='Bart Simpson'
          country='USA'
          img='34'
          job='Ingeniera de software'
          company='React'
          testim='Eleva tu carrera en tecnología con nuestro bootcamp intensivo. Obtén conocimientos prácticos en programación, ciberseguridad y desarrollo de aplicaciones. Aprende de instructores de élite y trabaja en proyectos reales. Descubre nuevas oportunidades laborales en el mundo digital. Impulsa tu futuro en solo semanas. ¡Únete a nuestro bootcamp y alcanza tus metas informáticas!'
        />   
      </div>
    </div>
  );
}

export default App;
