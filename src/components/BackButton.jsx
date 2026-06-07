import { Link } from 'react-router-dom';
import './BackButton.css';

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
);

function BackButton({ to }) {
  const label = to === '/' ? 'Torna alla Home' : 'Torna ai Servizi';

  return (
    <Link to={to} className="back-btn">
      <span className="back-btn-inner">
        <ArrowIcon />
        {label}
      </span>
    </Link>
  );
}

export default BackButton;