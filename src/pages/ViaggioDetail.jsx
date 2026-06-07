import './ViaggioDetail.css';
import BackButton from '../components/BackButton';
/* ── SVG Icons — stesso colore #ffe500 stile Servizi.jsx ── */
const SvgTrain = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="13" rx="2"/>
    <path d="M4 11h16"/>
    <path d="M12 3v8"/>
    <path d="M8 19l-2 2M16 19l2 2M8 19h8"/>
    <circle cx="8" cy="15" r="1" fill="currentColor" stroke="none"/>
    <circle cx="16" cy="15" r="1" fill="currentColor" stroke="none"/>
  </svg>
);
const SvgBus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 6v6M15 6v6M2 12h19.6M18 18h2a1 1 0 0 0 1-1v-6a8 8 0 0 0-8-8H9a8 8 0 0 0-8 8v6a1 1 0 0 0 1 1h2"/>
    <circle cx="7" cy="18" r="2"/>
    <circle cx="17" cy="18" r="2"/>
    <path d="M9 18h6"/>
  </svg>
);
const SvgFerry = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1"/>
    <path d="M4 18l-1-5h18l-2 5"/>
    <path d="M12 2v6.5l3 1.5"/>
    <path d="M12 2L8 6"/>
  </svg>
);
const SvgTicket = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z"/>
    <path d="M13 5v2M13 17v2M13 11v2"/>
  </svg>
);
const SvgSub = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <path d="M16 2v4M8 2v4M3 10h18"/>
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
  </svg>
);
const SvgPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
  </svg>
);

/* ── Dati ── */
const treni = [
  {
    nome: 'Trenitalia',
    tipo: 'Biglietti + Abbonamenti',
    desc: 'Il principale operatore ferroviario italiano. Regionale, Intercity e Alta Velocità Frecciarossa/Frecciargento. Abbonamenti mensili e annuali disponibili.',
  },
  {
    nome: 'Italo',
    tipo: 'Biglietti + Abbonamenti',
    desc: 'Operatore privato ad alta velocità sulle principali tratte italiane. Tariffe flessibili, abbonamenti mensili per pendolari, programma fedeltà.',
  },
];

const pullman = [
  {
    nome: 'FlixBus',
    desc: 'Rete europea di autobus low cost. Oltre 400 destinazioni in Italia e tutta Europa con tariffe a partire da pochi euro.',
  },
  {
    nome: 'MarinoBus',
    desc: 'Storica compagnia italiana specializzata in lunghe percorrenze e tratte Sud-Nord. Ampia rete di fermate in Campania e dintorni.',
  },
  {
    nome: 'ItaBus',
    desc: 'Compagnia di autobus del Gruppo ITA Airways. Collegamento tra le principali città italiane con servizio a bordo.',
  },
  {
    nome: 'FedericoBus',
    desc: 'Autolinee regionali con copertura del territorio campano e tratte verso le principali destinazioni del Sud Italia.',
  },
];

const traghetti = [
  {
    nome: 'Travelmar',
    desc: 'Servizio marittimo costiero lungo la Costiera Amalfitana e Cilentana. Tratte tra Salerno, Amalfi, Positano e Palinuro.',
  },
  {
    nome: 'Grimaldi Lines',
    desc: 'Grandi traghetti per traversate nel Mediterraneo. Sardegna, Sicilia, Spagna, Grecia e Tunisia.',
  },
  {
    nome: 'Liberty Lines',
    desc: 'Aliscafi veloci per le isole della Sicilia: Eolie, Egadi, Pantelleria, Ustica e Pelagie.',
  },
  {
    nome: 'GNV',
    desc: 'Grandi Navi Veloci per Sardegna, Sicilia, Spagna, Marocco e Tunisia. Cabine e poltrone disponibili.',
  },
  {
    nome: 'LNG',
    desc: 'Traghetti per le isole del Golfo di Napoli: Ischia, Capri e Procida. Servizio rapido e frequente.',
  },
  {
    nome: 'SNAV',
    desc: 'Aliscafi e traghetti per le isole del Golfo di Napoli e Eolie. Tratte rapide con partenze da Napoli.',
  },
];

/* ── Componente sezione ── */
function Sezione({ icon, titolo, sottotitolo, items }) {
  return (
    <section className="vd-section">
      <div className="vd-section-header">
        <div className="vd-section-icon">{icon}</div>
        <div>
          <h2 className="vd-section-title">{titolo}</h2>
          <p className="vd-section-sub">{sottotitolo}</p>
        </div>
      </div>
      <div className={`vd-grid vd-grid-${items.length <= 2 ? '2' : items.length <= 3 ? '3' : '4'}`}>
        {items.map((item) => (
          <div className="vd-card" key={item.nome}>
            <div className="vd-card-top">
              <p className="vd-card-nome">{item.nome}</p>
              {item.tipo && (
                <span className="vd-card-tipo">
                  {item.tipo.includes('Abbonamenti') ? <SvgSub /> : <SvgTicket />}
                  {item.tipo}
                </span>
              )}
            </div>
            <p className="vd-card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ViaggioDetail() {
  return (
    <div className="vd-page">
      <BackButton to="/servizi" />

      <section className="vd-hero">
        <h1>Biglietteria <span>Viaggi</span></h1>
      </section>

      <Sezione
        icon={<SvgTrain />}
        titolo="Treni"
        sottotitolo="Biglietti e abbonamenti ferroviari"
        items={treni}
      />

      <Sezione
        icon={<SvgBus />}
        titolo="Pullman"
        sottotitolo="Autobus nazionali e internazionali"
        items={pullman}
      />

      <Sezione
        icon={<SvgFerry />}
        titolo="Traghetti e Aliscafi"
        sottotitolo="Navigazione costiera e insulare"
        items={traghetti}
      />

      <div className="vd-contact">
        <p className="vd-contact-text">Vuoi prenotare un viaggio? <span>Contattaci.</span></p>
        <div className="vd-contact-links">
          <a href="tel:+390899849153" className="vd-contact-btn"><SvgPhone /> 089 9849153</a>
          <a href="tel:+393500321970" className="vd-contact-btn"><SvgPhone /> 350 0321970</a>
        </div>
      </div>
    </div>
  );
}

export default ViaggioDetail;
