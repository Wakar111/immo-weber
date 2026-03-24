import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import UeberUns from './pages/UeberUns';
import IhreVorteile from './pages/IhreVorteile';
import Leistungen from './pages/Leistungen';
import Arbeitsgebiet from './pages/Arbeitsgebiet';
import Angebote from './pages/Angebote';
import ImmoSuche from './pages/ImmoSuche';
import Referenzen from './pages/Referenzen';
import Auszeichnungen from './pages/Auszeichnungen';
import Kontakt from './pages/Kontakt';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/ihre-vorteile" element={<IhreVorteile />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/arbeitsgebiet" element={<Arbeitsgebiet />} />
          <Route path="/angebote" element={<Angebote />} />
          <Route path="/immobilien-suche" element={<ImmoSuche />} />
          <Route path="/referenzen" element={<Referenzen />} />
          <Route path="/auszeichnungen" element={<Auszeichnungen />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
