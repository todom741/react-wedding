// src/App.tsx
import React, { useRef } from 'react';
import './App.css';

function App() {
  const hotelsRef = useRef<HTMLDivElement>(null);

  const scrollToHotels = () => {
    hotelsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-wrapper">
      {/* Header – stays fixed on top */}
      <header className="header">
        <nav className="nav">
          <span className="nav-item" onClick={scrollToHotels}>
            Hotels
          </span>
          <span className="nav-item">Menu</span>
          <span className="nav-item rsvp-header">RSVP</span>
        </nav>
      </header>

      {/* Section 1 – First Background */}
      <section className="section section-1">
        <button className="rsvp-button">RSVP</button>
      </section>

      {/* Section 2 – Second Background (Hotels) */}
      <section ref={hotelsRef} className="section section-2">
        <div className="section-content">
          <h1 className="section-title">Hotels</h1>
          <p className="section-text">
            Explore our recommended accommodations.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;