import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import ProjeDevam from './pages/ProjeDevam';
import TamamProje from './pages/TamamProje';
import Hakkimizda from './pages/Hakkimizda/Hakkinda';
import Iletisim from './pages/Iletisim/Iletisim';

import GelecekProje from './pages/GelecekProje/GelecekProje';
import DigerSektorler from './pages/DigerSektorler/DigerSektorler';
import Doseme from './pages/Doseme/Doseme';
import Giyim from './pages/Giyim/Giyim';
import Turizm from './pages/Turizm/Turizm';
import Insaat from './pages/Insaat/Insaat';
import Hizmetler from './pages/Hizmetler/Hizmetler'
import Projeler from './pages/Projeler/Projeler';
import Hizmet1 from './pages/HizmetlerDevam/Hizmet1';

import Hizmet2 from './pages/HizmetlerDevam/Hizmet2';

import Hizmet3 from './pages/HizmetlerDevam/Hizmet3';

 import Gizlilik from './pages/Gizlilik'; 
 import Cerez from './pages/Cerez'; 

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkinda" element={<Hakkimizda />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/projeler/devam" element={<ProjeDevam />} />
        <Route path="/projeler/tamam" element={<TamamProje />} />
<Route path="/projeler/gelecek" element={<GelecekProje/>}/>
      
        <Route path="/DigerSektorler" element={<DigerSektorler/>}/>
        <Route path='/projeler' element={<Projeler/>}/>
        <Route path="/doseme" element={<Doseme/>}/>
        <Route path='/giyim' element={<Giyim/>}/>
       
        <Route path="/turizm" element={<Turizm/>}/>
        <Route path="/insaat" element={<Insaat/>}/>
        <Route path="/hizmetler" element={<Hizmetler/>}/>
        <Route path='/Hizmet1' element={<Hizmet1/>}/>
        <Route path='/Hizmet2' element={<Hizmet2/>}/>
        <Route path='/Hizmet3' element={<Hizmet3/>}/>
       

<Route path="/gizlilik" element={<Gizlilik />} />
<Route path="/cerez" element={<Cerez />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;