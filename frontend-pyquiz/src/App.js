import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout  from "./components/Layout";
import Home  from "./components/Home";
import Agregar from './components/Agregar';
import Pruebas from './components/Pruebas';
import Default  from "./components/Default";
import PruebaIniciada from './components/PruebaIniciada';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route path="/" element={<Home />} />
           <Route path="agregar" element={<Agregar />} />
           <Route path="pruebas" element={<Pruebas />} />
           <Route path="pruebaIniciada" element={<PruebaIniciada />} />
           <Route path="*" element={<Default />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
