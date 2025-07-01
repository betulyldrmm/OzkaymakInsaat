import React from 'react';
import { useLocation } from 'react-router-dom'; // React Router kullanıyorsanız
import '../components/Header.css';

const BuildingIcon = ({ size = 80, color = '#fff' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Sol bina */}
    <rect x="10" y="30" width="20" height="36" stroke={color} strokeWidth="3" />
    <line x1="15" y1="32" x2="15" y2="68" stroke={color} strokeWidth="2.5" />
    <line x1="20" y1="32" x2="20" y2="68" stroke={color} strokeWidth="2.5" />
    <line x1="25" y1="32" x2="25" y2="68" stroke={color} strokeWidth="2.5" />
    
    {/* Sağ bina */}
    <rect x="35" y="15" width="30" height="50" stroke={color} strokeWidth="3" />
    {[...Array(6)].map((_, row) =>
      [...Array(5)].map((_, col) => (
        <rect
          key={`${row}-${col}`}
          x={38 + col * 5}
          y={18 + row * 8}
          width="3"
          height="3"
          fill={color}
        />
      ))
    )}
  </svg>
);

const Header = () => {
  const location = useLocation();
  
  // Mavi arka plan olması gereken sayfalar
  const blueBackgroundPages = ['/projeler/devam', '/projeler/tamam','/iletisim','/Hizmet1','/Hizmet2','/Hizmet3','/projeler/gelecek','/gizlilik','/cerez'];
  
  // Mevcut sayfa mavi arka plan gerektiriyor mu?
  const needsBlueBackground = blueBackgroundPages.includes(location.pathname);
  
  return (
    <div className={`header-container ${needsBlueBackground ? 'blue-background' : 'transparent'}`}>
      <div className="logo">
        <BuildingIcon size={90} color="#fff" />
        <h1 className="baslik">ÖZKAYMAK İNŞAAT</h1>
      </div>
      
      <header className="header">
        <nav className="navbar">
          <ul className="nav-list">
            <li><a href="/">Ana Sayfa</a></li>
            <li><a href="/hakkinda">Hakkımızda</a></li>
            
            <li className="dropdown">
              <a href="/DigerSektorler">Diğer Sektörlerde Biz</a>
              <ul className="dropdown-menu">
                <li><a href="/doseme">Döşemelik Kumaş</a></li>
                <li><a href="/giyim">Giyimlik Kumaş</a></li>
                <li><a href="/turizm">Turizm & Otel</a></li>
                <li><a href="/insaat">İnşaat</a></li>
              </ul>
            </li>
            
            <li className="dropdown">
              <a href="/projeler">Projeler</a>
              <ul className="dropdown-menu">
                <li><a href="/projeler/devam">Kirazlı Metro Evleri</a></li>
                <li><a href="/projeler/tamam">Parola Residance</a></li>
              </ul>
            </li>
            
            <li><a href="/hizmetler">Hizmetler</a></li>
            <li><a href="/iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;