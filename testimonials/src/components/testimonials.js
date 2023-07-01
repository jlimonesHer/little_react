import React from 'react';
import '../style/testimonials.css';

// export function Testimonio(props) {
//   return (
//     <div className='testim_container'>
//       <img 
//         className='img_testim'
//         src={require('../img/3.jpeg')}
//         alt='foto Emma'/>
//         <div className='content_text_testim'>
//           <p className='name_testim'>Emma Bostian en suecia</p>
//           <p className='job_title'>Ingeniera de software en Spotify</p>
//           <p className='text_testim'>"En un mundo lleno de misterios y maravillas, cada día es una oportunidad para descubrir, aprender y crecer. La naturaleza nos inspira con su belleza y la ciencia con sus avances. Aprovechemos este presente para forjar un futuro mejor, lleno de esperanza y comprensión mutua."</p>
//         </div>
//     </div>
//   ); 
// }

export function Testimonio(props) {
  return (
    <div className='testim_container'>
      <img 
        className='img_testim'
        src={require(`../img/${props.img}.jpeg`)}
        alt='Foto'/>
        <div className='content_text_testim'>
          <p className='name_testim'><strong>{props.name}</strong> en {props.country}</p>
          <p className='job_title'>{props.job} en <strong>{props.company}</strong></p>
          <p className='text_testim'>"{props.testim}"</p>
        </div>
    </div>
  ); 
}
