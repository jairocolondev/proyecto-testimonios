import { Testimonio } from './components/Testimonio/Testimonio';
import testimoniosData from './components/Testimonio/testimoniosData';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='container-general'>
        <h1>Testimonios</h1>
        {testimoniosData.map((testimonio, index) => (
          <Testimonio
            key={index}
            imageName={testimonio.imageName}
            name={testimonio.name}
            profesion={testimonio.profesion}
            testimonio={testimonio.testimonio}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
