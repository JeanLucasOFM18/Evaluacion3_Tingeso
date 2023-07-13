import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout  from "./components/Layout";
import Home  from "./components/Home";
import Agregar from './components/Agregar';
import Pruebas from './components/Pruebas';
import PruebaBasica from './components/PruebaBasica';
import PruebaIntermedia from './components/PruebaIntermedia';
import PruebaAvanzada from './components/PruebaAvanzada';
import Default  from "./components/Default";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route path="/" element={<Home />} />
           <Route path="agregar" element={<Agregar />} />
           <Route path="pruebas" element={<Pruebas />} />
           <Route path="pruebaBasica" element={<PruebaBasica />} />
           <Route path="pruebaIntermedia" element={<PruebaIntermedia />} />
           <Route path="pruebaAvanzada" element={<PruebaAvanzada />} />
           <Route path="*" element={<Default />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
