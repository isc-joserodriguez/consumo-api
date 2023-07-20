import axios from 'axios';
import './App.css';

function App() {
  console.log(process.env);
  const getHelados = async () => {
    const { data } = await axios.get(
      process.env.REACT_APP_API_URI + '/helados'
    );
    console.log(data);
  };
  const crearHelado = async () => {
    const { data } = await axios.post(
      process.env.REACT_APP_API_URI + '/helados',
      {
        sabor: 'Fresa',
        marca: 'Nestle',
        precio: 3,
        contenido: 1,
      }
    );
    console.log(data);
  };
  return (
    <div className="App">
      <button onClick={crearHelado}>Guardar</button>
      <button onClick={getHelados}>Mostrar</button>
    </div>
  );
}

export default App;
