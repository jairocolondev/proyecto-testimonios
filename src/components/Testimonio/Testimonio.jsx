import img1 from '../../assets/imagenes/testimonio-01.jpg';
import './Testimonio.css';

function Testimonio() {
  return (
    <div className='container-testimonio'>
      <img
        className='image-testimonio'
        src={img1}
        alt='Foto de Pablo Cervantes'
      />
      <div className='container-text-testimonio'>
        <h2 className='name-testimonio'>Pablo Cervantes</h2>
        <h3 className='profesion-testimonio'>
          <strong>Profesión:</strong> Diseñador Web
        </h3>
        <p className='text-testimonio'>
          Lorem ipsum do lor sit amet consectetur adipisicing elit. Quisquam
          voluptatibus, quia, quidem, voluptatum dolores voluptas repellendus
          vel quas quibusdam doloribus doloremque. Quisquam voluptatibus, quia,
          quidem, voluptatum dolores voluptas repellendus vel quas quibusdam
          doloribus doloremque.
        </p>
        {/* <div className='container-link-perfil'>
          <a className='link-perfil' href='#'>
            Link al perfil
          </a>
        </div> */}
      </div>
    </div>
  );
}

export { Testimonio };
