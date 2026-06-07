import './AttivazioniSim.css';
import BackButton from '../components/BackButton';

/* ── SVG Icons — stile card-icon-wrap di Servizi.jsx ── */
const SvgSim = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2"/>
    <path d="M15 2v4a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V2"/>
    <path d="M9 13h6M9 17h4"/>
  </svg>
);
const SvgTransfer = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M15 6l6 6-6 6"/>
  </svg>
);
const SvgNew = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 8v8M8 12h8"/>
  </svg>
);
const SvgCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);
const SvgId = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"/>
    <circle cx="8" cy="12" r="2"/>
    <path d="M14 9h4M14 12h4M14 15h2"/>
  </svg>
);
const SvgGlobe = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const SvgPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
  </svg>
);

/* ── Dati DIGI ── */
const digiPiani = [
  {
    nome: 'Illimitato 5',
    prezzo: '€5',
    periodo: '/mese',
    giga: '30 GB',
    highlight: false,
    features: [
      'Minuti illimitati verso tutti in Italia',
      'Minuti illimitati verso numeri DIGI',
      '1.000 SMS verso DIGI + 10 SMS nazionali',
      'Giga cumulabili',
    ],
  },
  {
    nome: 'Illimitato 6',
    prezzo: '€6',
    periodo: '/mese',
    giga: '50 GB',
    highlight: true,
    features: [
      'Minuti illimitati verso tutti in Italia',
      'Minuti illimitati verso numeri DIGI',
      '250 minuti internazionali inclusi',
      '1.000 SMS verso DIGI + 10 SMS nazionali',
      'Giga cumulabili',
    ],
  },
  {
    nome: 'Illimitato 8',
    prezzo: '€8',
    periodo: '/mese',
    giga: '100 GB',
    highlight: false,
    features: [
      'Minuti illimitati verso tutti in Italia',
      'Minuti illimitati verso numeri DIGI',
      '300 minuti internazionali inclusi',
      '1.000 SMS verso DIGI + 10 SMS nazionali',
      'Giga cumulabili',
    ],
  },
];

/* ── Dati LYCA ── */
const lycaPiani = [
  {
    nome: 'Solo Portabilità',
    prezzo: '€5,99',
    periodo: '/mese',
    giga: '150 GB',
    tipo: 'portabilita',
    highlight: false,
    features: [
      'Minuti e SMS nazionali illimitati',
      '5G incluso',
    ],
  },
  {
    nome: 'Solo Nuovi Numeri',
    prezzo: '€6,99',
    periodo: '/mese',
    giga: '200 GB',
    tipo: 'nuovi numeri',
    highlight: false, // FIX: era true, rimosso highlight
    features: [
      'Minuti nazionali illimitati',
      '100 SMS Nazionali',
    ],
  },
];

function AttivazioniSim() {
  return (
    <div className="sim-page">
      <BackButton to="/servizi" />

      {/* Hero */}
      <section className="sim-hero">
        <h1>Attivazione <span>SIM Telefoniche</span></h1>
      </section>

      {/* ── SEZIONE DIGI ── */}
      <section className="sim-section">
        <div className="sim-operator-header">
          <div className="sim-op-icon digi"><SvgSim /></div>
          <div>
            <h2 className="sim-op-title">DIGI Mobile</h2>
            <p className="sim-op-sub">Prezzi fissi, per sempre.</p>
          </div>
        </div>

        {/* Portabilità vs Nuovo numero */}
        <div className="sim-tipo-grid">
          <div className="sim-tipo-card">
            <div className="sim-tipo-icon"><SvgTransfer /></div>
            <div>
              <p className="sim-tipo-label">Portabilità</p>
              <p className="sim-tipo-desc">Mantieni il tuo numero attuale passando a DIGI: basta fornire i dati del tuo vecchio operatore.</p>
            </div>
          </div>
          <div className="sim-tipo-card">
            <div className="sim-tipo-icon"><SvgNew /></div>
            <div>
              <p className="sim-tipo-label">Nuovo numero</p>
              <p className="sim-tipo-desc">Ottieni un nuovo numero con DIGI: l'attivazione della SIM è immediata.</p>
            </div>
          </div>
        </div>

        <div className="sim-piani-grid">
          {digiPiani.map((p) => (
            <div className={`sim-piano-card ${p.highlight ? 'highlight' : ''}`} key={p.nome}>
              {p.highlight && <span className="piano-badge">Più scelto</span>}
              <div className="piano-giga">{p.giga}</div>
              <div className="piano-prezzo">
                <span className="piano-euro">{p.prezzo}</span>
                <span className="piano-periodo">{p.periodo}</span>
              </div>
              <p className="piano-nome">{p.nome}</p>
              <ul className="piano-features">
                {p.features.map((f) => (
                  <li key={f}><SvgCheck />{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── SEZIONE LYCA ── */}
      <section className="sim-section">
        <div className="sim-operator-header">
          <div className="sim-op-icon lyca"><SvgSim /></div>
          <div>
            <h2 className="sim-op-title">LYCA Mobile</h2>
            <p className="sim-op-sub">Prezzi fissi, per sempre. Puoi navigare anche in 5G.</p>
          </div>
        </div>

        {/* FIX: "active" dinamico basato su tipo invece di hardcoded */}
        <div className="sim-tipo-grid">
          {lycaPiani.map((p) => (
            <div className="sim-tipo-card" key={p.tipo}>
              <div className="sim-tipo-icon">
                {p.tipo === 'portabilita' ? <SvgTransfer /> : <SvgNew />}
              </div>
              <div>
                <p className="sim-tipo-label">
                  {p.tipo === 'portabilita' ? 'Portabilità' : 'Nuovo numero'}
                </p>
                <p className="sim-tipo-desc">
                  {p.tipo === 'portabilita'
                    ? 'Approfitta delle migliori offerte senza rinunciare al tuo numero attuale.' // FIX: era "atttuale"
                    : 'Attivi una SIM con numero nuovo. Disponibile con piani nazionali e internazionali. Chiedi in sede le offerte attive.'}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FIX: griglia centrata a 2 colonne per Lyca */}
        <div className="sim-piani-grid two-col">
          {lycaPiani.map((p) => (
            <div className={`sim-piano-card ${p.highlight ? 'highlight' : ''}`} key={p.nome}>
              {p.highlight && <span className="piano-badge">Più scelto</span>}
              <div className="piano-giga">{p.giga}</div>
              <div className="piano-prezzo">
                <span className="piano-euro">{p.prezzo}</span>
                <span className="piano-periodo">{p.periodo}</span>
              </div>
              <p className="piano-nome">{p.nome}</p>
              <ul className="piano-features">
                {p.features.map((f) => (
                  <li key={f}><SvgCheck />{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </section>

      {/* Contatti */}
      <div className="sim-contact">
        <p className="sim-contact-text">Vuoi attivare una SIM? <span>Contattaci.</span></p>
        <div className="sim-contact-links">
          <a href="tel:+390899849153" className="sim-contact-btn"><SvgPhone /> 089 9849153</a>
          <a href="tel:+393500321970" className="sim-contact-btn"><SvgPhone /> 350 0321970</a>
        </div>
      </div>
    </div>
  );
}

export default AttivazioniSim;
