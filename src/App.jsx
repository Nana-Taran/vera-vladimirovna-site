import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import FAB from './components/vera/FAB';
import Home from './pages/Home';
import PageNotFound from './lib/PageNotFound';

import Uslugi from './pages/Uslugi';
import Yasnovidenie from './pages/Yasnovidenie';
import Taro from './pages/Taro';
import Gadanie from './pages/Gadanie';
import SnyatieNegativa from './pages/SnyatieNegativa';
import LyubovnayaMagiya from './pages/LyubovnayaMagiya';
import OnlineKonsultaciya from './pages/OnlineKonsultaciya';
import OMne from './pages/OMne';
import FaqPage from './pages/FaqPage';
import Ierusalim from './pages/Ierusalim';
import Kontakty from './pages/Kontakty';
import Privacy from './pages/Privacy';

// GEO — Русские
import RusskieVAnglii from './pages/geo/RusskieVAnglii';
import RusskieVArgentine from './pages/geo/RusskieVArgentine';
import RusskieVAvstralii from './pages/geo/RusskieVAvstralii';
import RusskieVAvstrii from './pages/geo/RusskieVAvstrii';
import RusskieVBelgii from './pages/geo/RusskieVBelgii';
import RusskieVFinlyandii from './pages/geo/RusskieVFinlyandii';
import RusskieVFrantsii from './pages/geo/RusskieVFrantsii';
import RusskieVGermanii from './pages/geo/RusskieVGermanii';
import RusskieVGretsii from './pages/geo/RusskieVGretsii';
import RusskieVIspanii from './pages/geo/RusskieVIspanii';
import RusskieVItalii from './pages/geo/RusskieVItalii';
import RusskieVIzraile from './pages/geo/RusskieVIzraile';
import RusskieVKanade from './pages/geo/RusskieVKanade';
import RusskieVNiderlandakh from './pages/geo/RusskieVNiderlandakh';
import RusskieVOae from './pages/geo/RusskieVOae';
import RusskieVPortugalii from './pages/geo/RusskieVPortugalii';
import RusskieVShvetsii from './pages/geo/RusskieVShvetsii';
import RusskieVShveytsarii from './pages/geo/RusskieVShveytsarii';
import RusskieVTailande from './pages/geo/RusskieVTailande';
import RusskieVTurtsii from './pages/geo/RusskieVTurtsii';
// GEO — Украинцы
import UkraintsvAnglii from './pages/geo/UkraintsvAnglii';
import UkraintsvAvstrii from './pages/geo/UkraintsvAvstrii';
import UkraintsvBelgii from './pages/geo/UkraintsvBelgii';
import UkraintsvChekhii from './pages/geo/UkraintsvChekhii';
import UkraintsvFinlyandii from './pages/geo/UkraintsvFinlyandii';
import UkraintsvFrantsii from './pages/geo/UkraintsvFrantsii';
import UkraintsvGermanii from './pages/geo/UkraintsvGermanii';
import UkraintsvGretsii from './pages/geo/UkraintsvGretsii';
import UkraintsvIspanii from './pages/geo/UkraintsvIspanii';
import UkraintsvItalii from './pages/geo/UkraintsvItalii';
import UkraintsvIzraile from './pages/geo/UkraintsvIzraile';
import UkraintsvKanade from './pages/geo/UkraintsvKanade';
import UkraintsvKipre from './pages/geo/UkraintsvKipre';
import UkraintsvNiderlandakh from './pages/geo/UkraintsvNiderlandakh';
import UkraintsvNorvegii from './pages/geo/UkraintsvNorvegii';
import UkraintsvPolshe from './pages/geo/UkraintsvPolshe';
import UkraintsvPortugalii from './pages/geo/UkraintsvPortugalii';
import UkraintsvRumynii from './pages/geo/UkraintsvRumynii';
import UkraintsvShvetsii from './pages/geo/UkraintsvShvetsii';
import UkraintsvShveytsarii from './pages/geo/UkraintsvShveytsarii';
import UkraintsvSlovakii from './pages/geo/UkraintsvSlovakii';
import UkraintsvSsha from './pages/geo/UkraintsvSsha';
import UkraintsvVengrii from './pages/geo/UkraintsvVengrii';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <FAB />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uslugi" element={<Uslugi />} />
        <Route path="/yasnovidenie" element={<Yasnovidenie />} />
        <Route path="/taro" element={<Taro />} />
        <Route path="/gadanie" element={<Gadanie />} />
        <Route path="/snyatie-negativa" element={<SnyatieNegativa />} />
        <Route path="/lyubovnaya-magiya" element={<LyubovnayaMagiya />} />
        <Route path="/online-konsultaciya" element={<OnlineKonsultaciya />} />
        <Route path="/o-mne" element={<OMne />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/ierusalim" element={<Ierusalim />} />
        <Route path="/kontakty" element={<Kontakty />} />
        <Route path="/privacy" element={<Privacy />} />
        {/* GEO — Русские */}
        <Route path="/russkie-v-anglii" element={<RusskieVAnglii />} />
        <Route path="/russkie-v-argentine" element={<RusskieVArgentine />} />
        <Route path="/russkie-v-avstralii" element={<RusskieVAvstralii />} />
        <Route path="/russkie-v-avstrii" element={<RusskieVAvstrii />} />
        <Route path="/russkie-v-belgii" element={<RusskieVBelgii />} />
        <Route path="/russkie-v-finlyandii" element={<RusskieVFinlyandii />} />
        <Route path="/russkie-v-frantsii" element={<RusskieVFrantsii />} />
        <Route path="/russkie-v-germanii" element={<RusskieVGermanii />} />
        <Route path="/russkie-v-gretsii" element={<RusskieVGretsii />} />
        <Route path="/russkie-v-ispanii" element={<RusskieVIspanii />} />
        <Route path="/russkie-v-italii" element={<RusskieVItalii />} />
        <Route path="/russkie-v-izraile" element={<RusskieVIzraile />} />
        <Route path="/russkie-v-kanade" element={<RusskieVKanade />} />
        <Route path="/russkie-v-niderlandakh" element={<RusskieVNiderlandakh />} />
        <Route path="/russkie-v-oae" element={<RusskieVOae />} />
        <Route path="/russkie-v-portugalii" element={<RusskieVPortugalii />} />
        <Route path="/russkie-v-shvetsii" element={<RusskieVShvetsii />} />
        <Route path="/russkie-v-shveytsarii" element={<RusskieVShveytsarii />} />
        <Route path="/russkie-v-tailande" element={<RusskieVTailande />} />
        <Route path="/russkie-v-turtsii" element={<RusskieVTurtsii />} />
        {/* GEO — Украинцы */}
        <Route path="/ukraintsy-v-anglii" element={<UkraintsvAnglii />} />
        <Route path="/ukraintsy-v-avstrii" element={<UkraintsvAvstrii />} />
        <Route path="/ukraintsy-v-belgii" element={<UkraintsvBelgii />} />
        <Route path="/ukraintsy-v-chekhii" element={<UkraintsvChekhii />} />
        <Route path="/ukraintsy-v-finlyandii" element={<UkraintsvFinlyandii />} />
        <Route path="/ukraintsy-v-frantsii" element={<UkraintsvFrantsii />} />
        <Route path="/ukraintsy-v-germanii" element={<UkraintsvGermanii />} />
        <Route path="/ukraintsy-v-gretsii" element={<UkraintsvGretsii />} />
        <Route path="/ukraintsy-v-ispanii" element={<UkraintsvIspanii />} />
        <Route path="/ukraintsy-v-italii" element={<UkraintsvItalii />} />
        <Route path="/ukraintsy-v-izraile" element={<UkraintsvIzraile />} />
        <Route path="/ukraintsy-v-kanade" element={<UkraintsvKanade />} />
        <Route path="/ukraintsy-na-kipre" element={<UkraintsvKipre />} />
        <Route path="/ukraintsy-v-niderlandakh" element={<UkraintsvNiderlandakh />} />
        <Route path="/ukraintsy-v-norvegii" element={<UkraintsvNorvegii />} />
        <Route path="/ukraintsy-v-polshe" element={<UkraintsvPolshe />} />
        <Route path="/ukraintsy-v-portugalii" element={<UkraintsvPortugalii />} />
        <Route path="/ukraintsy-v-rumynii" element={<UkraintsvRumynii />} />
        <Route path="/ukraintsy-v-shvetsii" element={<UkraintsvShvetsii />} />
        <Route path="/ukraintsy-v-shveytsarii" element={<UkraintsvShveytsarii />} />
        <Route path="/ukraintsy-v-slovakii" element={<UkraintsvSlovakii />} />
        <Route path="/ukraintsy-v-ssha" element={<UkraintsvSsha />} />
        <Route path="/ukraintsy-v-vengrii" element={<UkraintsvVengrii />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
