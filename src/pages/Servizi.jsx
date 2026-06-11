import { Link } from 'react-router-dom';
import './Servizi.css';
import BackButton from '../components/BackButton';

const IcoUfficio    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 8h4M7 11h4M15 8h2M15 11h2"/></svg>;
const IcoTelefonia  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M12 18h.01"/><path d="M10 6h4"/><circle cx="17" cy="5" r="3" strokeWidth="1.4"/><path d="M17 4v2l1 1" strokeWidth="1.4"/></svg>;
const IcoVendita    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>;
const IcoSpedizioni = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"/><path d="m3 6 9 6 9-6"/><path d="M16 18h6M19 15l3 3-3 3"/></svg>;
const IcoPagamenti  = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M6 15h2M10 15h4"/></svg>;
const IcoIdentita   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>;
const IcoViaggi     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17h2l1.5-4.5M14 17h5a2 2 0 0 0 0-4h-1l-2-4H8L6.5 12.5"/><circle cx="7.5" cy="17" r="1.5"/><circle cx="17.5" cy="17" r="1.5"/><path d="M3 9h4"/></svg>;

const servizi = [
  {
    id: 4,
    icon: <IcoSpedizioni />,
    title: 'Spedizioni e Logistica',
    items: [
      { text: 'Spedizioni Nazionali e Internazionali', link: '/servizi/spedizioni-nazionali' },
      { text: 'Punto di Ritiro Merce', link: '/servizi/ritiro-merce' },
      'Raccomandate',
      'Deposito Bagagli',
      'Prodotti da Imballaggio',
    ],
  },
  {
    id: 5,
    icon: <IcoPagamenti />,
    title: 'Pagamenti e Servizi Finanziari',
    link: '/servizi/pagamenti',
    items: ['PagoPA', 'Bollettini Postali', 'Bollettino Passaporto', 'MAV / RAV', 'Modello F24', 'Bollo Auto', 'Bonifico Ordinario / Istantaneo', 'Trasferimento Denaro', 'Carte Prepagate'],
  },
  {
    id: 6,
    icon: <IcoIdentita />,
    title: 'Identità Digitale e Pratiche',
    link: '/servizi/identita-digitale',
    items: ['SPID*', 'PEC*', 'Firma Digitale*', 'Servizi al Cittadino'],
    note: '* è gradita la prenotazione.',
  },
  {
    id: 2,
    icon: <IcoTelefonia />,
    title: 'Telefonia e Ricariche',
    items: [
      { text: 'Attivazione SIM Telefoniche', link: '/servizi/attivazione-sim' },
      'Ricariche Telefoniche',
      'Ricariche Conti Gioco',
      "Codici d'Acquisto",
    ],
  },
  {
    id: 1,
    icon: <IcoUfficio />,
    title: 'Servizi di Ufficio',
    items: ['Stampe', 'Fotocopie', 'Invio Email', 'Scansione dei Documenti'],
  },
  {
    id: 7,
    icon: <IcoViaggi />,
    title: 'Viaggi e Trasporti',
    link: '/servizi/viaggi',
    items: ['Biglietteria Treni', 'Biglietteria Pullman', 'Biglietteria Traghetti'],
  },
  {
    id: 3,
    icon: <IcoVendita />,
    title: 'Vendita al Dettaglio e Svago',
    items: ['Gadget', 'Articoli per la Casa', 'Cancelleria', 'Giochi di Carte Collezionabili'],
  },
];

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7v10"/>
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/>
  </svg>
);

function Servizi() {
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Via+Nizza+72+Salerno';

  return (
    <div className="servizi-page">
     <BackButton to="/" label="Servizi" />

      <section className="servizi-hero">
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="servizi-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="badge-pin-icon">
            <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          Dove Siamo
        </a>
        <h1>I Nostri <span>Servizi</span></h1>
        <p>Tutto quello di cui hai bisogno in un unico punto. Scopri la gamma completa di servizi disponibili.</p>
      </section>

      <div className="servizi-grid">
        {servizi.map((s) => (
          <div className="service-card" key={s.id}>
            <div className="card-icon-wrap">{s.icon}</div>
            <h2 className="card-title">{s.title}</h2>

            <ul className="card-list">
              {s.items.map((item) => {
                const isObj = typeof item === 'object';
                const text = isObj ? item.text : item;
                const link = isObj ? item.link : null;
                return (
                  <li key={text}>
                 {link ? (
                          <Link to={link} className="card-list-link">
                            {text} <ArrowIcon />
                          </Link>
                 ) : text}
                  </li>
                );
              })}
            </ul>

            {/* Spacer spinge la nota e il link sempre in fondo */}
            <div className="card-spacer" />

            {/* Nota posizionata subito sopra la linea divisoria */}
            {s.note && <p className="card-note">{s.note}</p>}

            {s.link && (
              <Link to={s.link} className="card-arrow-label">
                Scopri di più <ArrowIcon />
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Orari */}
      <div className="servizi-orari">
        <div className="orari-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
          </svg>
        </div>
        <div className="orari-body">
          <p className="orari-label">Orari di apertura</p>
          <div className="orari-row">
            <span className="orari-giorni">Lun – Sab</span>
            <div className="orari-fasce">
              <span className="orari-fascia">09:00 – 13:30</span>
              <span className="orari-sep">·</span>
              <span className="orari-fascia">16:00 – 19:00</span>
            </div>
          </div>
          <div className="orari-row orari-chiuso-row">
            <span className="orari-giorni">Domenica</span>
            <span className="orari-chiuso">Chiuso</span>
          </div>
        </div>
      </div>

      {/* Contatti */}
      <div className="servizi-contact">
        <div>
          <p className="contact-tagline"><span>Hai domande?</span> Siamo qui per te.</p>
        </div>
        <div className="contact-links">
          <a href="mailto:hermes.stp@libero.it" className="contact-link">
            <span className="contact-icon"><MailIcon /></span>
            hermes.stp@libero.it
          </a>
          <a href="tel:+390899849153" className="contact-link">
            <span className="contact-icon"><PhoneIcon /></span>
            089 9849153
          </a>
          <a
            href="https://www.instagram.com/hermesservizi.salerno"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link contact-link-ig"
          >
            <span className="contact-icon"><InstagramIcon /></span>
            hermesservizi.salerno
          </a>
        </div>
      </div>
    </div>
  );
}

export default Servizi;
