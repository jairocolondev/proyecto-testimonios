import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import imagesMap from './imagesMap';
import './Testimonio.css';
function Testimonio(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/products')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  console.log(data);

  return (
    <div className='container-testimonio'>
      <img
        className='image-testimonio'
        src={imagesMap[props.imageName]}
        alt={`Foto de ${props.name}`}
      />

      <div className='container-text-testimonio'>
        <h2 className='name-testimonio'>{props.name}</h2>
        <h3 className='profesion-testimonio'>
          <strong>Profesión:</strong> {props.profesion}
        </h3>
        <p className='text-testimonio'>{props.testimonio}</p>
        {/* <div className='container-link-perfil'>
          <a className='link-perfil' href='#'>
            Link al perfil
          </a>
        </div> */}
      </div>
    </div>
  );
}

Testimonio.propTypes = {
  imageName: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  profesion: PropTypes.string.isRequired,
  testimonio: PropTypes.string.isRequired,
};

export { Testimonio };
