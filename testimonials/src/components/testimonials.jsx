import '../style/testimonials.css';

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
