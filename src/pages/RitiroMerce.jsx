import './RitiroMerce.css';
import BackButton from '../components/BackButton';
/* ── SVG Icons ── */
const SvgReso = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
    <path d="M3 3v5h5"/>
  </svg>
);
const SvgShirt = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/>
  </svg>
);
const SvgBox = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
    <path d="m3.3 7 8.7 5 8.7-5M12 22V12"/>
  </svg>
);
const SvgCart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
  </svg>
);
const SvgPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
  </svg>
);

const intro = [
  { icon: <SvgReso />,  text: 'Devi effettuare un reso?' },
  { icon: <SvgShirt />, text: 'Vuoi svuotare il tuo armadio online?' },
  { icon: <SvgBox />,   text: 'Aspetti un pacco e non sei mai a casa?' },
  { icon: <SvgCart />,  text: 'Hai ordinato su un e-commerce e preferisci ritirare qui?' },
];

import logoBrt    from '../assets/loghi/logo-brt.png';
import logoPoste  from '../assets/loghi/logo-poste.png';
import logoAmazon from '../assets/loghi/logo-amazon.png';
import logoGls    from '../assets/loghi/logo-gls.png';
import logoFedex  from '../assets/loghi/logo-fedex.png';

const corrieri = [
  {
    nome: 'BRT – Bartolini',
    logo: logoBrt,
    desc: 'Uno dei principali corrieri espressi in Italia. Ritiro pacchi e resi.',
    tracking: 'https://www.brt.it/it/tracking',
  },
  {
    nome: 'Poste Italiane',
    logo: logoPoste,
    desc: 'Servizi postali nazionali, raccomandate, paccocelere e molto altro.',
    tracking: 'https://www.poste.it/cerca/index.html#/risultati-spedizioni',
  },
  {
    nome: 'Amazon Shipping',
    logo: logoAmazon,
    desc: 'Punto di ritiro ufficiale Amazon. Ritira i tuoi ordini in totale comodità.',
    tracking: 'https://track.amazon.it',
  },
  {
    nome: 'GLS',
    logo: logoGls,
    desc: 'Rete europea di distribuzione. Resi e ritiri nazionali e internazionali.',
    tracking: 'https://gls-group.com/IT/it/servizi-online/ricerca-spedizioni',
  },
  {
    nome: 'FedEx / TNT',
    logo: logoFedex,
    desc: 'Spedizioni express internazionali. Affidabilità globale con tracciamento preciso.',
    tracking: 'https://www.fedex.com/it-it/tracking.html',
  },
];

function RitiroMerce() {
  return (
    <div className="ritiro-page">
     <BackButton to="/servizi" />

      <section className="ritiro-hero">
        <h1>Punto di <span>Ritiro Merce</span></h1>
      </section>

      {/* Intro domande */}
      <section className="ritiro-section">
        <div className="ritiro-intro-grid">
          {intro.map((i) => (
            <div className="ritiro-intro-card" key={i.text}>
              <span className="ritiro-intro-icon">{i.icon}</span>
              <p>{i.text}</p>
            </div>
          ))}
        </div>

      </section>

      {/* Corrieri */}
      <section className="ritiro-section">
        <p className="ritiro-section-subtitle">Siamo punto di ritiro ufficiale per i seguenti corrieri:</p>
        <div className="ritiro-corrieri-grid">
          {corrieri.map((c) => (
            <div className="ritiro-corriere-card" key={c.nome}>
              <img
                src={c.logo}
                alt={c.nome}
                className="ritiro-corriere-logo"
              />
              <div className="ritiro-corriere-info">
                <p className="ritiro-corriere-nome">{c.nome}</p>
                <p className="ritiro-corriere-desc">
                  {c.desc}{' '}
                  <a
                    href={c.tracking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ritiro-tracking-text"
                  >
                    Scopri dov'è il tuo pacco.
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Come funziona */}
      <section className="ritiro-section">
        <h2 className="ritiro-section-title">Come funziona?</h2>
        <div className="ritiro-steps-list">
          {[
            'Il corriere deposita il tuo pacco al nostro indirizzo.',
            'Ricevi una notifica di avvenuta consegna.',
            'Passa a ritirare comodamente il tuo pacco durante i nostri orari di apertura.',
            "Mostra un documento d'identità e ritira la tua merce.",
          ].map((step, i) => (
            <div className="ritiro-step-row" key={i}>
              <span className="ritiro-step-num">{i + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="ritiro-contact">
        <p className="ritiro-contact-text">Hai bisogno di più informazioni? <span>Contattaci.</span></p>
        <div className="ritiro-contact-links">
          <a href="tel:+390899849153" className="ritiro-contact-btn"><SvgPhone /> 089 9849153</a>
          <a href="tel:+393500321970" className="ritiro-contact-btn"><SvgPhone /> 350 0321970</a>
        </div>
      </div>
    </div>
  );
}

export default RitiroMerce;