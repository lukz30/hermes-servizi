import './IdentitaDetail.css';
import BackButton from '../components/BackButton';
/* ── SVG Icons — stesso stile di Servizi.jsx ── */
const SvgId = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"/>
    <circle cx="8" cy="12" r="2"/>
    <path d="M14 9h4M14 12h4M14 15h2"/>
  </svg>
);
const SvgMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m2 7 10 7 10-7"/>
  </svg>
);
const SvgSmartphone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="2" width="10" height="20" rx="2"/>
    <path d="M12 18h.01"/>
  </svg>
);
const SvgHealthCard = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"/>
    <path d="M12 9v6M9 12h6"/>
  </svg>
);
const SvgSpid = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
  </svg>
);
const SvgPec = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M8 11l2 2 5-5"/>
  </svg>
);
const SvgFirma = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9"/>
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>
  </svg>
);
const SvgCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <path d="M16 2v4M8 2v4M3 10h18"/>
  </svg>
);
const SvgPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
  </svg>
);

/* ── Dati servizi ── */
const servizi = [
  {
    id: 'spid',
    icon: <SvgSpid />,
    titolo: 'SPID',
    sottotitolo: 'Sistema Pubblico di Identità Digitale',
    desc: "Accedi a tutti i servizi della Pubblica Amministrazione italiana con un'unica identità digitale.",
    docs: [
      { icon: <SvgId />,          label: "Documento d'identità" },
      { icon: <SvgHealthCard />,  label: 'Tessera sanitaria' },
      { icon: <SvgMail />,        label: 'Email valida' },
      { icon: <SvgSmartphone />,  label: 'Smartphone' },
    ],
    note: null,
  },
  {
    id: 'pec',
    icon: <SvgPec />,
    titolo: 'PEC',
    sottotitolo: 'Posta Elettronica Certificata',
    desc: 'Comunicazioni ufficiali con valore legale equivalente alla raccomandata con ricevuta di ritorno.',
    docs: [
      { icon: <SvgId />,          label: "Documento d'identità" },
      { icon: <SvgHealthCard />,  label: 'Tessera sanitaria' },
      { icon: <SvgMail />,        label: 'Email valida' },
    ],
    note: null,
  },
  {
    id: 'firma',
    icon: <SvgFirma />,
    titolo: 'FIRMA DIGITALE',
    sottotitolo: 'Firma Remota Qualificata',
    desc: 'Firma documenti informatici con piena validità legale, in sostituzione della firma autografa.',
    docs: [
      { icon: <SvgId />,          label: "Documento d'identità" },
      { icon: <SvgHealthCard />,  label: 'Tessera sanitaria' },
      { icon: <SvgMail />,        label: 'Email valida' },
      { icon: <SvgSmartphone />,  label: 'Smartphone' },
    ],
    note: '* Richiede SPID già attivo.',
  },
];

function IdentitaDetail() {
  const waUrl = 'https://wa.me/393500321970?text=Salve%2C+vorrei+prenotare+un+appuntamento+per+i+servizi+di+identit%C3%A0+digitale.';

  return (
    <div className="id-page">
     <BackButton to="/servizi" />

      {/* Hero */}
      <section className="id-hero">
        <h1>Identità <span>Digitale</span></h1>
      </section>

      {/* NAMIRIAL */}
      <div className="id-namirial">
        <span className="id-namirial-logo">NAMIRIAL</span>
        <span className="id-namirial-desc">Ente Certificatore ufficiale per identità digitali e firme elettroniche qualificate.</span>
      </div>

      {/* Cards servizi */}
      <div className="id-grid">
        {servizi.map((s) => (
          <div className="id-card" key={s.id}>
            <div className="id-card-icon">{s.icon}</div>

            <div className="id-card-header">
              <h2 className="id-card-title">{s.titolo}</h2>
              <span className="id-card-sub">{s.sottotitolo}</span>
            </div>

            <p className="id-card-desc">{s.desc}</p>

            <p className="id-docs-label">Cosa portare</p>
            <div className="id-docs">
              {s.docs.map((d) => (
                <div className="id-doc-item" key={d.label}>
                  <div className="id-doc-icon">{d.icon}</div>
                  <span className="id-doc-label">{d.label}</span>
                </div>
              ))}
            </div>

            {s.note && <p className="id-card-note">{s.note}</p>}
          </div>
        ))}
      </div>

      {/* Prenotazione */}
      <div className="id-prenotazione">
        <div className="id-preno-text">
          <div className="id-preno-icon"><SvgCalendar /></div>
          <div>
            <p className="id-preno-title">È gradita la prenotazione</p>
            <p className="id-preno-desc">Per ridurre i tempi di attesa ti consigliamo di prenotare prima di venire.</p>
          </div>
        </div>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" className="id-wa-btn">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Prenota su WhatsApp
        </a>
      </div>

      {/* Contatti */}
      <div className="id-contact">
        <p className="id-contact-text">Hai altre domande? <span>Contattaci.</span></p>
        <div className="id-contact-links">
          <a href="tel:+390899849153" className="id-contact-btn"><SvgPhone /> 089 9849153</a>
          <a href="tel:+393500321970" className="id-contact-btn"><SvgPhone /> 350 0321970</a>
        </div>
      </div>
    </div>
  );
}

export default IdentitaDetail;
