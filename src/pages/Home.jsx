import './Home.css';
import logoHermes from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="hero-container">
      <main className="hero-content">

        <img src={logoHermes} alt="Hermes Servizi Logo" className="hero-main-logo" />

        <p className="hero-description">
          La tua posta, le tue pratiche, la tua tranquillità: soluzioni rapide e sicure con l'attenzione di un ufficio sempre al tuo fianco.
        </p>

        {/* Il Link ora si comporta direttamente come il pulsante */}
        <Link to="/servizi" className="hero-button">
          Scopri di più
        </Link>

      </main>
    </div>
  );
};

export default Home;