import './SpedizioniNazionali.css';
import BackButton from '../components/BackButton';
const SvgDestinazione = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
);
const SvgPeso = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2h12l2 6H4L6 2z"/>
    <rect x="2" y="8" width="20" height="13" rx="2"/>
    <path d="M12 12v5M9 14h6"/>
  </svg>
);
const SvgCorriere = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 8v4l3 3"/>
  </svg>
);
const SvgShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);
const SvgPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
  </svg>
);

const fattori = [
  { icon: <SvgDestinazione />, label: 'Destinazione', desc: 'Italia, Europa o resto del mondo: la distanza incide sulla tariffa base.' },
  { icon: <SvgPeso />, label: 'Peso volumetrico', desc: 'Dimensioni e peso determinano il costo della merce da spedire.' },
  { icon: <SvgCorriere />, label: 'Scelta del corriere', desc: 'Ogni corriere ha listini diversi: noi ti aiutiamo a selezionare il più conveniente per il tuo invio.' },
];

const accessori = [
  { label: 'Contrassegno', desc: 'Il destinatario paga alla consegna. Aggiunta di commissione variabile.' },
  { label: 'Assicurazione', desc: 'Copre il valore del contenuto in caso di smarrimento o danno.' },
  { label: 'Consegna al piano', desc: 'Il corriere consegna il pacco direttamente al piano indicato.' },
  { label: 'Consegna con appuntamento', desc: ' È possibile concordare giorno e fascia oraria con il destinatario.' },
  { label: 'Firma del destinatario', desc: 'Prova di consegna con firma obbligatoria.' },
];

function SpedizioniNazionali() {
  return (
    <div className="detail-page">
      <BackButton to="/servizi" />

      <section className="detail-hero">
        <h1>Spedizioni <span>Nazionali e Internazionali</span></h1>
      </section>

      <section className="detail-section">
        <h2 className="section-title">Come viene calcolata la tariffa?</h2>
        <div className="factors-grid">
          {fattori.map((f) => (
            <div className="factor-card" key={f.label}>
              <div className="factor-icon">{f.icon}</div>
              <h3>{f.label}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="detail-section">
        <div className="highlight-box">
          <div className="highlight-icon"><SvgShield /></div>
          <div>
            <p className="highlight-title">Imballaggio professionale gratuito</p>
            <p className="highlight-desc">Provvediamo noi all'imballaggio del tuo pacco. Scatole, pluriball, nastro e protezioni sono inclusi nel servizio di spedizione senza costi aggiuntivi.</p>
          </div>
        </div>
      </section>

      <section className="detail-section">
        <h2 className="section-title">Accessori opzionali</h2>
        <p className="section-subtitle">Puoi arricchire la tua scelta con opzioni aggiuntive. Ecco alcuni esempi:</p>
        <div className="accessori-grid">
          {accessori.map((a) => (
            <div className="accessorio-card" key={a.label}>
              <span className="accessorio-dot" />
              <div>
                <p className="accessorio-label">{a.label}</p>
                <p className="accessorio-desc">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="detail-contact">
        <p className="detail-contact-text">Vuoi un preventivo? <span>Contattaci.</span></p>
        <div className="detail-contact-links">
          <a href="tel:+390899849153" className="detail-contact-btn">
            <SvgPhone /> 089 9849153
          </a>
          <a href="tel:+393500321970" className="detail-contact-btn">
            <SvgPhone /> 350 0321970
          </a>
        </div>
      </div>
    </div>
  );
}

export default SpedizioniNazionali;
