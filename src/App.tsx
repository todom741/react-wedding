// src/App.tsx
import React, { useRef, useState } from 'react';
import './App.css';

// Translations
const translations = {
  en: {
    menu: 'Menu',
    dressCode: 'Dress Code',
    hotels: 'Hotels',
    attractions: 'Attractions',
    rsvp: 'RSVP',
    homeRsvp: 'RSVP',
    menuText: 'Delicious dining options for every taste.',
    menuIntro: 'Featured menu items from Swan Coach House in Atlanta, GA.',
    menuItem1: 'The Swan\'s Favorite',
    menuItem1Desc: ['Signature Chicken Salad', 'Frozen Fruit Salad', 'Cheese Straws', 'House-made timbales'],
    menuItem2: 'Shrimp Salad Plate',
    menuItem2Desc: ['Two house-made timbales', 'Seasonal fresh fruit', 'Cheese straws', 'Petite lettuces'],
    menuItem3: 'Pimiento Cheese Tea Sandwich',
    menuItem3Desc: ['Classic Southern favorite', 'Served with tea sandwiches', 'Fresh homemade soup cup', 'Cucumber cream cheese option'],
    menuItem4: 'Grilled Salmon Sandwich',
    menuItem4Desc: ['Caramelized onions', 'Toasted focaccia bread', 'Tartar sauce on side', 'Choice of house or Caesar salad'],
    dressCodeText: 'Cocktail attire encouraged.',
    men: 'Men',
    women: 'Women',
    menItems: ['Dark suit or tuxedo', 'Dress shirt', 'Tie or bow tie', 'Dress shoes'],
    womenItems: ['Cocktail dress', 'Elegant gown', 'Dressy separates', 'Heels or dress sandals'],

    // Hotels
    hotelsIntro: 'Recommended hotels near the venue in Atlanta, GA.',
    hotel1: 'The Ritz-Carlton, Atlanta',
    hotel1Desc: ['Luxury downtown hotel', 'Walking distance to venues', 'Spa & fine dining', '5-star service'],
    hotel2: 'InterContinental Buckhead Atlanta',
    hotel2Desc: ['Upscale Buckhead location', 'Rooftop pool', 'Award-winning restaurant', 'Complimentary shuttle'],
    hotel3: 'The Whitley, a Luxury Collection Hotel',
    hotel3Desc: ['Historic luxury in Buckhead', 'Elegant rooms', 'Southern cuisine', 'Event spaces'],
    hotel4: 'W Atlanta - Midtown',
    hotel4Desc: ['Modern boutique hotel', 'Rooftop bar with views', 'Pet-friendly', 'Central location'],

    // Attractions
    attractionsIntro: 'Top attractions to explore in Atlanta, GA.',
    attr1: 'Georgia Aquarium',
    attr1Desc: ['World\'s largest aquarium', 'Whale sharks & dolphins', 'Ocean Voyager exhibit', 'Family-friendly'],
    attr2: 'World of Coca-Cola',
    attr2Desc: ['Interactive museum', 'Taste 100+ sodas', 'Vault of the Secret Formula', 'Downtown Atlanta'],
    attr3: 'Piedmont Park',
    attr3Desc: ['Atlanta\'s Central Park', 'Walking trails', 'Dog park & lake', 'Free concerts'],
    attr4: 'Atlanta Botanical Garden',
    attr4Desc: ['30 acres of gardens', 'Orchid center', 'Canopy walk', 'Seasonal exhibits'],

    hotelsText: 'Discover the best places to stay.',
    attractionsText: 'Explore the highlights of the area.',
    rsvpTitle: 'RSVP',
    rsvpText: 'Let us know you\'re coming!',
    name: 'Your Name',
    email: 'Email',
    appetizer: 'Appetizer',
    entree: 'Entree',
    submit: 'Send RSVP',
    appetizers: ['Select Appetizer', 'Caesar Salad', 'Bruschetta', 'Shrimp Cocktail'],
    entrees: ['Select Entree', 'Grilled Salmon', 'Filet Mignon', 'Vegetable Risotto'],
  },
  es: {
    menu: 'Menú',
    dressCode: 'Código de Vestimenta',
    hotels: 'Hoteles',
    attractions: 'Atracciones',
    rsvp: 'RSVP',
    homeRsvp: 'RSVP',
    menuText: 'Deliciosas opciones gastronómicas para todos los gustos.',
    menuIntro: 'Artículos destacados del menú de Swan Coach House en Atlanta, GA.',
    menuItem1: 'El Favorito del Cisne',
    menuItem1Desc: ['Ensalada de Pollo Signature', 'Ensalada de Fruta Congelada', 'Pajitas de Queso', 'Timbales caseros'],
    menuItem2: 'Plato de Ensalada de Camarones',
    menuItem2Desc: ['Dos timbales caseros', 'Fruta fresca de temporada', 'Pajitas de queso', 'Lechugas pequeñas'],
    menuItem3: 'Sándwich de Té de Queso Pimiento',
    menuItem3Desc: ['Clásico sureño favorito', 'Servido con sándwiches de té', 'Taza de sopa casera fresca', 'Opción de queso crema con pepino'],
    menuItem4: 'Sándwich de Salmón a la Parrilla',
    menuItem4Desc: ['Cebollas caramelizadas', 'Pan de focaccia tostado', 'Salsa tártara al lado', 'Elección de ensalada de la casa o César'],
    dressCodeText: 'Se recomienda vestimenta de cóctel.',
    men: 'Caballeros',
    women: 'Damas',
    menItems: ['Traje oscuro o esmoquin', 'Camisa de vestir', 'Corbata o pajarita', 'Zapatos elegantes'],
    womenItems: ['Vestido de cóctel', 'Vestido elegante', 'Conjunto sofisticado', 'Tacones o sandalias elegantes'],

    // Hotels
    hotelsIntro: 'Hoteles recomendados cerca del lugar en Atlanta, GA.',
    hotel1: 'The Ritz-Carlton, Atlanta',
    hotel1Desc: ['Hotel de lujo en el centro', 'A poca distancia caminando', 'Spa y restaurante gourmet', 'Servicio 5 estrellas'],
    hotel2: 'InterContinental Buckhead Atlanta',
    hotel2Desc: ['Ubicación exclusiva en Buckhead', 'Piscina en la azotea', 'Restaurante premiado', 'Servicio de traslado gratuito'],
    hotel3: 'The Whitley, un Hotel de Lujo',
    hotel3Desc: ['Lujo histórico en Buckhead', 'Habitaciones elegantes', 'Cocina sureña', 'Espacios para eventos'],
    hotel4: 'W Atlanta - Midtown',
    hotel4Desc: ['Hotel boutique moderno', 'Bar en la azotea con vistas', 'Admite mascotas', 'Ubicación central'],

    // Attractions
    attractionsIntro: 'Principales atracciones para explorar en Atlanta, GA.',
    attr1: 'Acuario de Georgia',
    attr1Desc: ['El acuario más grande del mundo', 'Tiburones ballena y delfines', 'Exhibición Ocean Voyager', 'Ideal para familias'],
    attr2: 'Mundo de Coca-Cola',
    attr2Desc: ['Museo interactivo', 'Prueba más de 100 refrescos', 'Bóveda de la Fórmula Secreta', 'Centro de Atlanta'],
    attr3: 'Parque Piedmont',
    attr3Desc: ['El Central Park de Atlanta', 'Senderos para caminar', 'Parque para perros y lago', 'Conciertos gratuitos'],
    attr4: 'Jardín Botánico de Atlanta',
    attr4Desc: ['30 acres de jardines', 'Centro de orquídeas', 'Paseo por el dosel', 'Exhibiciones estacionales'],

    hotelsText: 'Descubre los mejores lugares para hospedarte.',
    attractionsText: 'Explora los puntos destacados de la zona.',
    rsvpTitle: 'RSVP',
    rsvpText: '¡Confírmanos tu asistencia!',
    name: 'Tu Nombre',
    email: 'Correo',
    appetizer: 'Aperitivo',
    entree: 'Plato Principal',
    submit: 'Enviar RSVP',
    appetizers: ['Selecciona Aperitivo', 'Ensalada César', 'Bruschetta', 'Cóctel de Camarones'],
    entrees: ['Selecciona Plato', 'Salmón a la Parrilla', 'Filete Mignon', 'Rissoto de Verduras'],
  },
};

type Lang = 'en' | 'es';

function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = translations[lang];

  const menuRef = useRef<HTMLDivElement | null>(null);
  const dressCodeRef = useRef<HTMLDivElement | null>(null);
  const hotelsRef = useRef<HTMLDivElement | null>(null);
  const attractionsRef = useRef<HTMLDivElement | null>(null);
  const rsvpRef = useRef<HTMLDivElement | null>(null);

  // Scroll refs
  const menuScrollRef = useRef<HTMLDivElement | null>(null);
  const hotelsScrollRef = useRef<HTMLDivElement | null>(null);
  const attractionsScrollRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollHorizontal = (container: HTMLDivElement | null, direction: 'left' | 'right') => {
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const navItems = [
    { label: t.menu, ref: menuRef },
    { label: t.dressCode, ref: dressCodeRef },
    { label: t.hotels, ref: hotelsRef },
    { label: t.attractions, ref: attractionsRef },
    { label: t.rsvp, ref: rsvpRef },
  ];

  return (
    <div className="app-wrapper">
      {/* Header */}
      <header className="header">
        <div className="nav-left">
          {navItems.map((item) => (
            <span key={item.label} className="nav-item" onClick={() => scrollTo(item.ref)}>
              {item.label}
            </span>
          ))}
        </div>

        <div className="nav-right">
          <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>
            English
          </button>
          <button className={`lang-btn ${lang === 'es' ? 'active' : ''}`} onClick={() => setLang('es')}>
            Español
          </button>
        </div>

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
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
        <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
          {navItems.map((item) => (
            <button key={item.label} className="mobile-nav-item" onClick={() => scrollTo(item.ref)}>
              {item.label}
            </button>
          ))}
          <div className="mobile-lang-group">
            <button className={`mobile-lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => { setLang('en'); setIsMobileMenuOpen(false); }}>
              English
            </button>
            <button className={`mobile-lang-btn ${lang === 'es' ? 'active' : ''}`} onClick={() => { setLang('es'); setIsMobileMenuOpen(false); }}>
              Español
            </button>
          </div>
        </div>
      </div>

      {/* Section 1 – Home */}
      <section className="section section-1">
        <button className="rsvp-button" onClick={() => scrollTo(rsvpRef)}>
          {t.homeRsvp}
        </button>
      </section>

      {/* Section 2 – Menu (SCROLLABLE) */}
      <section ref={menuRef} className="section section-2">
        <div className="scrollable-container">
          <h1 className="section-title">{t.menu}</h1>
          <p className="section-text">{t.menuIntro}</p>

          <div className="scroll-controls">
            <button
              className="scroll-arrow left"
              onClick={() => scrollHorizontal(menuScrollRef.current, 'left')}
            >
            </button>
            <button
              className="scroll-arrow right"
              onClick={() => scrollHorizontal(menuScrollRef.current, 'right')}
            >
            </button>
          </div>

          <div className="scrollable-grid" ref={menuScrollRef}>
            {/* Menu Item 1 */}
            <div className="scrollable-card">
              <h2 className="scrollable-label">{t.menuItem1}</h2>
              <ul className="scrollable-list">
                {t.menuItem1Desc.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            {/* Menu Item 2 */}
            <div className="scrollable-card">
              <h2 className="scrollable-label">{t.menuItem2}</h2>
              <ul className="scrollable-list">
                {t.menuItem2Desc.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            {/* Menu Item 3 */}
            <div className="scrollable-card">
              <h2 className="scrollable-label">{t.menuItem3}</h2>
              <ul className="scrollable-list">
                {t.menuItem3Desc.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            {/* Menu Item 4 */}
            <div className="scrollable-card">
              <h2 className="scrollable-label">{t.menuItem4}</h2>
              <ul className="scrollable-list">
                {t.menuItem4Desc.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 – Dress Code */}
      <section ref={dressCodeRef} className="section section-3">
        <div className="dress-code-container">
          <h1 className="section-title dress-code-title">{t.dressCode}</h1>
          <p className="section-text dress-code-subtitle">{t.dressCodeText}</p>

          <div className="dress-code-grid">
            <div className="dress-code-card">
              <h2 className="dress-code-label">{t.men}</h2>
              <ul className="dress-code-list">
                {t.menItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="dress-code-card">
              <h2 className="dress-code-label">{t.women}</h2>
              <ul className="dress-code-list">
                {t.womenItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 – Hotels (SCROLLABLE) */}
      <section ref={hotelsRef} className="section section-4">
        <div className="scrollable-container">
          <h1 className="section-title">{t.hotels}</h1>
          <p className="section-text">{t.hotelsIntro}</p>

          <div className="scroll-controls">
            <button
              className="scroll-arrow left"
              onClick={() => scrollHorizontal(hotelsScrollRef.current, 'left')}
            >
            </button>
            <button
              className="scroll-arrow right"
              onClick={() => scrollHorizontal(hotelsScrollRef.current, 'right')}
            >
            </button>
          </div>

          <div className="scrollable-grid" ref={hotelsScrollRef}>
            {/* Hotel 1 */}
            <div className="scrollable-card">
              <h2 className="scrollable-label">{t.hotel1}</h2>
              <ul className="scrollable-list">
                {t.hotel1Desc.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            {/* Hotel 2 */}
            <div className="scrollable-card">
              <h2 className="scrollable-label">{t.hotel2}</h2>
              <ul className="scrollable-list">
                {t.hotel2Desc.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            {/* Hotel 3 */}
            <div className="scrollable-card">
              <h2 className="scrollable-label">{t.hotel3}</h2>
              <ul className="scrollable-list">
                {t.hotel3Desc.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            {/* Hotel 4 */}
            <div className="scrollable-card">
              <h2 className="scrollable-label">{t.hotel4}</h2>
              <ul className="scrollable-list">
                {t.hotel4Desc.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 – Attractions (SCROLLABLE) */}
      <section ref={attractionsRef} className="section section-5">
        <div className="scrollable-container">
          <h1 className="section-title">{t.attractions}</h1>
          <p className="section-text">{t.attractionsIntro}</p>

          <div className="scroll-controls">
            <button
              className="scroll-arrow left"
              onClick={() => scrollHorizontal(attractionsScrollRef.current, 'left')}
            >
            </button>
            <button
              className="scroll-arrow right"
              onClick={() => scrollHorizontal(attractionsScrollRef.current, 'right')}
            >
            </button>
          </div>

          <div className="scrollable-grid" ref={attractionsScrollRef}>
            {/* Attraction 1 */}
            <div className="scrollable-card">
              <h2 className="scrollable-label">{t.attr1}</h2>
              <ul className="scrollable-list">
                {t.attr1Desc.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            {/* Attraction 2 */}
            <div className="scrollable-card">
              <h2 className="scrollable-label">{t.attr2}</h2>
              <ul className="scrollable-list">
                {t.attr2Desc.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            {/* Attraction 3 */}
            <div className="scrollable-card">
              <h2 className="scrollable-label">{t.attr3}</h2>
              <ul className="scrollable-list">
                {t.attr3Desc.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            {/* Attraction 4 */}
            <div className="scrollable-card">
              <h2 className="scrollable-label">{t.attr4}</h2>
              <ul className="scrollable-list">
                {t.attr4Desc.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 – RSVP */}
      <section ref={rsvpRef} className="section section-6">
        <div className="section-content">
          <h1 className="section-title">{t.rsvpTitle}</h1>
          <p className="section-text">{t.rsvpText}</p>
          <form className="rsvp-form">
            <input type="text" placeholder={t.name} required />
            <input type="email" placeholder={t.email} required />
            <select className="rsvp-select" required>
              {t.appetizers.map((opt) => (
                <option key={opt} value={opt === t.appetizers[0] ? '' : opt} disabled={opt === t.appetizers[0]}>
                  {opt}
                </option>
              ))}
            </select>
            <select className="rsvp-select" required>
              {t.entrees.map((opt) => (
                <option key={opt} value={opt === t.entrees[0] ? '' : opt} disabled={opt === t.entrees[0]}>
                  {opt}
                </option>
              ))}
            </select>
            <button type="submit">{t.submit}</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;