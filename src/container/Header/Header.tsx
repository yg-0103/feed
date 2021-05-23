import React from 'react';
import { useLocation } from 'react-router';
import './Header.scss';

function Header() {
  const location = useLocation();

  const handleGoback = () => {
    window.history.back();
  };
  return (
    <header className="Header-container">
      <div>
        {location.pathname.match(/\/[0-9]/) ? (
          <button title="뒤로가기" onClick={handleGoback}>
            〈
          </button>
        ) : (
          <h2>[2021.05.23] 김연구</h2>
        )}
      </div>
    </header>
  );
}

export default Header;
