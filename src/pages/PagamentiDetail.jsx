import './PagamentiDetail.css';
import BackButton from '../components/BackButton';
const SvgPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
  </svg>
);

// Icona Invio — stile Servizi.jsx (outline, strokeWidth 1.6)
const IcoInvio = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
  </svg>
);

// Icona Ritiro — freccia verso il basso, stile Servizi.jsx
const IcoRitiro = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M2 12l10 10 10-10"/>
  </svg>
);

const pagamenti = [
  { label: 'PagoPA',              tariffa: '€ 1,50' },
  { label: 'Bollettino Postale',  tariffa: '€ 1,50' },
  { label: 'Bollettino Passaporto',tariffa: '€ 1,50' },
  { label: 'MAV / RAV',           tariffa: '€ 1,50' },
  { label: 'Modello F24',         tariffa: '€ 1,50' },
  { label: 'Bollo Auto',          tariffa: '€ 1,60' },
  { label: 'Bonifico Ordinario',  tariffa: '€ 2,50' },
  { label: 'Bonifico Istantaneo', tariffa: '€ 3,50' },
  { label: 'Carte Prepagate',     tariffa: 'a partire da € 2,00' },
];

const transferPartners = [
  { nome: 'Western Union',      colore: '#FFD700', testo: '#000', iniziali: 'WU'  },
  { nome: 'RIA Money Transfer', colore: '#FF6100', testo: '#fff', iniziali: 'RIA' },
];

function PagamentiDetail() {
  return (
    <div className="detail-page">
     <BackButton to="/servizi" />

      <section className="detail-hero">
        <h1>Pagamenti e <span>Servizi Finanziari</span></h1>
      </section>

      {/* Sezione 1 — Pagamenti */}
      <section className="detail-section">
        <h2 className="section-title">Le nostre tariffe</h2>
        <p className="section-subtitle">Accettiamo tutti i principali metodi di pagamento.</p>

        <div className="tariffe-grid">
          {pagamenti.map((p) => (
            <div className="tariffa-card" key={p.label}>
              <div className="tariffa-left">
                <span className="tariffa-dot" />
                <p className="tariffa-label">{p.label}</p>
              </div>
              <div className="tariffa-right">
                <span className="tariffa-prezzo">{p.tariffa}</span>
                {p.nota && <span className="tariffa-nota">{p.nota}</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="over70-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>
          </svg>
          <p>Per PagoPA, Bollettini Postali e MAV/RAV: se l'intestatario ha <strong>più di 70 anni</strong>, la commissione è ridotta a <strong>€ 1,20</strong>.</p>
        </div>
      </section>

      {/* Separatore */}
      <div className="section-divider">
        <span>Trasferimento Denaro</span>
      </div>

      {/* Sezione 2 — Trasferimento denaro */}
      <section className="detail-section">
        <h2 className="section-title">Invia o ricevi denaro nel mondo</h2>

        <div className="partners-row">
          {transferPartners.map((p) => (
            <div className="partner-badge" key={p.nome} style={{ background: p.colore, color: p.testo }}>
              <span className="partner-iniziali">{p.iniziali}</span>
              <span className="partner-nome">{p.nome}</span>
            </div>
          ))}
        </div>

        <div className="transfer-grid">
          <div className="transfer-card">
            <div className="transfer-card-header invio">
              <IcoInvio />
              <h3>Invio</h3>
            </div>
            <p className="transfer-subtitle">Cosa portare:</p>
            <ul className="transfer-list">
              <li>Documento d'identità valido.</li>
                <li>Tessera sanitaria (se in possesso).</li>
                <li>Dati anagrafici del ricevente.</li>
            </ul>
          </div>

          <div className="transfer-card">
            <div className="transfer-card-header ritiro">
              <IcoRitiro />
              <h3>Ricezione</h3>
            </div>
            <p className="transfer-subtitle">Cosa portare:</p>
            <ul className="transfer-list">
              <li>Documento d'identità valido.</li>
              <li>Codice MTCN o PIN del mittente.</li>
            </ul>
          </div>
        </div>

        <div className="tariffa-variabile-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
            <path d="M12 6v6l4 2"/>
          </svg>
          <div>
            <p className="tariffa-variabile-title">La tariffa varia in base a:</p>
            <ul className="tariffa-variabile-list">
              <li>Paese di destinazione.</li>
              <li>Importo inviato.</li>
              <li>Modalità di ricezione (denaro in minuti, trasferimento su conto bancario).</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="detail-contact">
        <p className="detail-contact-text">Hai domande? <span>Contattaci.</span></p>
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

export default PagamentiDetail;
