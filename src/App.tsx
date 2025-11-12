// src/App.tsx
import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const dressCodeRef = useRef<HTMLDivElement | null>(null);
  const hotelsRef = useRef<HTMLDivElement | null>(null);
  const attractionsRef = useRef<HTMLDivElement | null>(null);
  const rsvpRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Menu', ref: menuRef },
    { label: 'Dress Code', ref: dressCodeRef },
    { label: 'Hotels', ref: hotelsRef },
    { label: 'Attractions', ref: attractionsRef },
  ];

  return (
    <div className="app-wrapper">
      {/* Header */}
      <header className="header">
        {/* Left Group */}
        <div className="nav-left">
          {navItems.map((item) => (
            <span
              key={item.label}
              className="nav-item"
              onClick={() => scrollTo(item.ref)}
            >
              {item.label}
            </span>
          ))}
        </div>

        {/* Right: RSVP */}
        <span
          className="rsvp-header"
          onClick={() => scrollTo(rsvpRef)}
        >
          RSVP
        </span>

        {/* Mobile Hamburger */}
        <button
          className="hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
          {navItems.map((item) => (
            <button
              key={item.label}
              className="mobile-nav-item"
              onClick={() => scrollTo(item.ref)}
            >
              {item.label}
            </button>
          ))}
          <button
            className="mobile-nav-item"
            onClick={() => scrollTo(rsvpRef)}
          >
            RSVP
          </button>
        </div>
      </div>

      {/* Section 1 – Home */}
      <section className="section section-1">
        <button className="rsvp-button" onClick={() => scrollTo(rsvpRef)}>
          RSVP
        </button>
      </section>

      {/* Section 2 – Menu */}
      <section ref={menuRef} className="section section-2">
        <div className="section-content">
          <h1 className="section-title">Menu</h1>
          <p className="section-text">Delicious dining options for every taste.</p>
        </div>
      </section>

      {/* Section 3 – Dress Code */}
      <section ref={dressCodeRef} className="section section-3">
        <div className="section-content">
          <h1 className="section-title">Dress Code</h1>
          <p className="section-text">
            Cocktail attire encouraged. Jackets for gentlemen, dresses for ladies.
          </p>
        </div>
      </section>

      {/* Section 4 – Hotels */}
      <section ref={hotelsRef} className="section section-4">
        <div className="section-content">
          <h1 className="section-title">Hotels</h1>
          <p className="section-text">Discover the best places to stay.</p>
        </div>
      </section>

      {/* Section 5 – Attractions */}
      <section ref={attractionsRef} className="section section-5">
        <div className="section-content">
          <h1 className="section-title">Attractions</h1>
          <p className="section-text">Explore the highlights of the area.</p>
        </div>
      </section>

      {/* Section 6 – RSVP */}
      <section ref={rsvpRef} className="section section-6">
        <div className="section-content">
          <h1 className="section-title">RSVP</h1>
          <p className="section-text">Let us know you're coming!</p>
          <form className="rsvp-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email" required />
            <button type="submit">Send RSVP</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;