import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
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

function App() {
  return (
    <Router>
      <ScrollToTop />
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
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
