import './Layout.scss';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <nav className="menu">
        <Link to="/">Home</Link> | <Link to="/sobre">Sobre</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
}
