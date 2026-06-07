import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Servizi from './pages/Servizi';
import SpedizioniNazionali from './pages/SpedizioniNazionali';
import RitiroMerce from './pages/RitiroMerce';
import PagamentiDetail from './pages/PagamentiDetail';
import IdentitaDetail from './pages/IdentitaDetail';
import AttivazioniSim from './pages/AttivazioniSim.jsx';
import ViaggioDetail from './pages/ViaggioDetail';
import ScrollToTop from './components/ScrollToTop';

const DEFAULT_TITLE = 'Hermes Servizi';
const AWAY_MESSAGES = ['Non andare via!', 'Hermes Servizi'];

function App() {
  useEffect(() => {
    let interval = null;
    let step = 0;

    const startBlinking = () => {
      step = 0;
      document.title = AWAY_MESSAGES[0];
      interval = setInterval(() => {
        step++;
        document.title = AWAY_MESSAGES[step % AWAY_MESSAGES.length];
      }, 1200);
    };

    const stopBlinking = () => {
      clearInterval(interval);
      interval = null;
      document.title = DEFAULT_TITLE;
    };

    const handleVisibility = () => {
      if (document.hidden) {
        startBlinking();
      } else {
        stopBlinking();
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      clearInterval(interval);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/"                             element={<Home />} />
          <Route path="/servizi"                      element={<Servizi />} />
          <Route path="/servizi/spedizioni-nazionali" element={<SpedizioniNazionali />} />
          <Route path="/servizi/ritiro-merce"         element={<RitiroMerce />} />
          <Route path="/servizi/pagamenti"            element={<PagamentiDetail />} />
          <Route path="/servizi/identita-digitale"    element={<IdentitaDetail />} />
          <Route path="/servizi/attivazione-sim"      element={<AttivazioniSim />} />
          <Route path="/servizi/viaggi"               element={<ViaggioDetail />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
