// src/App.tsx
import React, { useRef, useState } from 'react';
import './App.css';

// === Translation Types ===
interface Translation {
  // General
  menu: string;
  dressCode: string;
  hotels: string;
  attractions: string;
  rsvp: string;
  homeRsvp: string;
  menuIntro: string;

  // Menu Section
  appetizers: string;
  entrees: string;

  // Appetizers
  app1: string;
  app1Desc: string[];
  app2: string;
  app2Desc: string[];
  app3: string;
  app3Desc: string[];
  app4: string;
  app4Desc: string[];

  // Entrees
  ent1: string;
  ent1Desc: string[];
  ent2: string;
  ent2Desc: string[];
  ent3: string;
  ent3Desc: string[];
  ent4: string;
  ent4Desc: string[];

  // Hotels
  hotelsIntro: string;
  hotel1: string;
  hotel1Desc: string[];
  hotel2: string;
  hotel2Desc: string[];
  hotel3: string;
  hotel3Desc: string[];
  hotel4: string;
  hotel4Desc: string[];

  // Attractions
  attractionsIntro: string;
  attr1: string;
  attr1Desc: string[];
  attr2: string;
  attr2Desc: string[];
  attr3: string;
  attr3Desc: string[];
  attr4: string;
  attr4Desc: string[];

  // Dress Code
  dressCodeText: string;
  men: string;
  women: string;
  menItems: string[];
  womenItems: string[];

  // RSVP
  rsvpTitle: string;
  rsvpText: string;
  name: string;
  email: string;
  appetizer: string;
  entree: string;
  submit: string;

  // Dropdown Options
  appetizerOptions: string[];
  entreeOptions: string[];
}

type Lang = 'en' | 'es';

// === Translations ===
const translations: Record<Lang, Translation> = {
  en: {
    menu: 'Menu',
    dressCode: 'Dress Code',
    hotels: 'Hotels',
    attractions: 'Attractions',
    rsvp: 'RSVP',
    homeRsvp: 'RSVP',
    menuIntro: 'Delicious dining options for every taste.',
    appetizers: 'Appetizers',
    entrees: 'Entrees',

    app1: 'Caesar Salad',
    app1Desc: ['Crisp romaine', 'Parmesan', 'Croutons', 'House Caesar dressing'],
    app2: 'Bruschetta',
    app2Desc: ['Grilled bread', 'Fresh tomatoes', 'Basil', 'Garlic & olive oil'],
    app3: 'Shrimp Cocktail',
    app3Desc: ['Chilled shrimp', 'Spicy cocktail sauce', 'Lemon wedge', 'Fresh herbs'],
    app4: 'Caprese Skewers',
    app4Desc: ['Mozzarella', 'Cherry tomatoes', 'Basil', 'Balsamic glaze'],

    ent1: 'Grilled Salmon',
    ent1Desc: ['Atlantic salmon', 'Lemon herb butter', 'Asparagus', 'Wild rice'],
    ent2: 'Filet Mignon',
    ent2Desc: ['8oz beef tenderloin', 'Red wine reduction', 'Mashed potatoes', 'Seasonal veg'],
    ent3: 'Vegetable Risotto',
    ent3Desc: ['Arborio rice', 'Mushrooms', 'Peas', 'Parmesan', 'Truffle oil'],
    ent4: 'Herb Roasted Chicken',
    ent4Desc: ['Free-range chicken', 'Garlic & rosemary', 'Roasted potatoes', 'Green beans'],

    hotelsIntro: 'Recommended hotels near the venue in Atlanta, GA.',
    hotel1: 'The Ritz-Carlton, Atlanta',
    hotel1Desc: ['Luxury downtown hotel', 'Walking distance to venues', 'Spa & fine dining', '5-star service'],
    hotel2: 'InterContinental Buckhead Atlanta',
    hotel2Desc: ['Upscale Buckhead location', 'Rooftop pool', 'Award-winning restaurant', 'Complimentary shuttle'],
    hotel3: 'The Whitley, a Luxury Collection Hotel',
    hotel3Desc: ['Historic luxury in Buckhead', 'Elegant rooms', 'Southern cuisine', 'Event spaces'],
    hotel4: 'W Atlanta - Midtown',
    hotel4Desc: ['Modern boutique hotel', 'Rooftop bar with views', 'Pet-friendly', 'Central location'],

    attractionsIntro: 'Top attractions to explore in Atlanta, GA.',
    attr1: 'Georgia Aquarium',
    attr1Desc: ['World\'s largest aquarium', 'Whale sharks & dolphins', 'Ocean Voyager exhibit', 'Family-friendly'],
    attr2: 'World of Coca-Cola',
    attr2Desc: ['Interactive museum', 'Taste 100+ sodas', 'Vault of the Secret Formula', 'Downtown Atlanta'],
    attr3: 'Piedmont Park',
    attr3Desc: ['Atlanta\'s Central Park', 'Walking trails', 'Dog park & lake', 'Free concerts'],
    attr4: 'Atlanta Botanical Garden',
    attr4Desc: ['30 acres of gardens', 'Orchid center', 'Canopy walk', 'Seasonal exhibits'],

    dressCodeText: 'Cocktail attire encouraged.',
    men: 'Men',
    women: 'Women',
    menItems: ['Dark suit or tuxedo', 'Dress shirt', 'Tie or bow tie', 'Dress shoes'],
    womenItems: ['Cocktail dress', 'Elegant gown', 'Dressy separates', 'Heels or dress sandals'],

    rsvpTitle: 'RSVP',
    rsvpText: 'Let us know you\'re coming!',
    name: 'Your Name',
    email: 'Email',
    appetizer: 'Appetizer',
    entree: 'Entree',
    submit: 'Send RSVP',

    appetizerOptions: ['Select Appetizer', 'Caesar Salad', 'Bruschetta', 'Shrimp Cocktail', 'Caprese Skewers'],
    entreeOptions: ['Select Entree', 'Grilled Salmon', 'Filet Mignon', 'Vegetable Risotto', 'Herb Roasted Chicken'],
  },
  es: {
    menu: 'Menú',
    dressCode: 'Código de Vestimenta',
    hotels: 'Hoteles',
    attractions: 'Atracciones',
    rsvp: 'RSVP',
    homeRsvp: 'RSVP',
    menuIntro: 'Deliciosas opciones gastronómicas para todos los gustos.',
    appetizers: 'Aperitivos',
    entrees: 'Platos Principales',

    app1: 'Ensalada César',
    app1Desc: ['Lechuga romana crujiente', 'Parmesano', 'Crutones', 'Aderezo César casero'],
    app2: 'Bruschetta',
    app2Desc: ['Pan tostado', 'Tomates frescos', 'Albahaca', 'Ajo y aceite de oliva'],
    app3: 'Cóctel de Camarones',
    app3Desc: ['Camarones fríos', 'Salsa picante', 'Limón', 'Hierbas frescas'],
    app4: 'Brochetas Caprese',
    app4Desc: ['Mozzarella', 'Tomates cherry', 'Albahaca', 'Glaseado balsámico'],

    ent1: 'Salmón a la Parrilla',
    ent1Desc: ['Salmón atlántico', 'Mantequilla de limón', 'Espárragos', 'Arroz salvaje'],
    ent2: 'Filete Mignon',
    ent2Desc: ['8oz de lomo', 'Reducción de vino tinto', 'Puré de papas', 'Verduras de temporada'],
    ent3: 'Rissoto de Verduras',
    ent3Desc: ['Arroz arborio', 'Champiñones', 'Guisantes', 'Parmesano', 'Aceite de trufa'],
    ent4: 'Pollo Asado con Hierbas',
    ent4Desc: ['Pollo de corral', 'Ajo y romero', 'Papas asadas', 'Judías verdes'],

    hotelsIntro: 'Hoteles recomendados cerca del lugar en Atlanta, GA.',
    hotel1: 'The Ritz-Carlton, Atlanta',
    hotel1Desc: ['Hotel de lujo en el centro', 'A poca distancia caminando', 'Spa y restaurante gourmet', 'Servicio 5 estrellas'],
    hotel2: 'InterContinental Buckhead Atlanta',
    hotel2Desc: ['Ubicación exclusiva en Buckhead', 'Piscina en la azotea', 'Restaurante premiado', 'Servicio de traslado gratuito'],
    hotel3: 'The Whitley, un Hotel de Lujo',
    hotel3Desc: ['Lujo histórico en Buckhead', 'Habitaciones elegantes', 'Cocina sureña', 'Espacios para eventos'],
    hotel4: 'W Atlanta - Midtown',
    hotel4Desc: ['Hotel boutique moderno', 'Bar en la azotea con vistas', 'Admite mascotas', 'Ubicación central'],

    attractionsIntro: 'Principales atracciones para explorar en Atlanta, GA.',
    attr1: 'Acuario de Georgia',
    attr1Desc: ['El acuario más grande del mundo', 'Tiburones ballena y delfines', 'Exhibición Ocean Voyager', 'Ideal para familias'],
    attr2: 'Mundo de Coca-Cola',
    attr2Desc: ['Museo interactivo', 'Prueba más de 100 refrescos', 'Bóveda de la Fórmula Secreta', 'Centro de Atlanta'],
    attr3: 'Parque Piedmont',
    attr3Desc: ['El Central Park de Atlanta', 'Senderos para caminar', 'Parque para perros y lago', 'Conciertos gratuitos'],
    attr4: 'Jardín Botánico de Atlanta',
    attr4Desc: ['30 acres de jardines', 'Centro de orquídeas', 'Paseo por el dosel', 'Exhibiciones estacionales'],

    dressCodeText: 'Se recomienda vestimenta de cóctel.',
    men: 'Caballeros',
    women: 'Damas',
    menItems: ['Traje oscuro o esmoquin', 'Camisa de vestir', 'Corbata o pajarita', 'Zapatos elegantes'],
    womenItems: ['Vestido de cóctel', 'Vestido elegante', 'Conjunto sofisticado', 'Tacones o sandalias elegantes'],

    rsvpTitle: 'RSVP',
    rsvpText: '¡Confírmanos tu asistencia!',
    name: 'Tu Nombre',
    email: 'Correo',
    appetizer: 'Aperitivo',
    entree: 'Plato Principal',
    submit: 'Enviar RSVP',

    appetizerOptions: ['Selecciona Aperitivo', 'Ensalada César', 'Bruschetta', 'Cóctel de Camarones', 'Brochetas Caprese'],
    entreeOptions: ['Selecciona Plato', 'Salmón a la Parrilla', 'Filete Mignon', 'Rissoto de Verduras', 'Pollo Asado con Hierbas'],
  },
};

// === Type-Safe Helper ===
const getDesc = (
  t: Translation,
  prefix: 'app' | 'ent' | 'hotel' | 'attr',
  index: 1 | 2 | 3 | 4
): string[] => {
  const key = `${prefix}${index}Desc` as keyof Translation;
  return t[key] as string[];
};

// === App Component ===
function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = translations[lang];

  const menuRef = useRef<HTMLDivElement | null>(null);
  const dressCodeRef = useRef<HTMLDivElement | null>(null);
  const hotelsRef = useRef<HTMLDivElement | null>(null);
  const attractionsRef = useRef<HTMLDivElement | null>(null);
  const rsvpRef = useRef<HTMLDivElement | null>(null);

  const hotelsScrollRef = useRef<HTMLDivElement | null>(null);
  const attractionsScrollRef = useRef<HTMLDivElement | null>(null);
  const appetizersScrollRef = useRef<HTMLDivElement | null>(null);
  const entreesScrollRef = useRef<HTMLDivElement | null>(null);

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

      {/* Section 2 – Menu */}
      <section ref={menuRef} className="section section-2">
        <div className="menu-container">
          <h1 className="section-title">{t.menu}</h1>
          <p className="section-text">{t.menuIntro}</p>

          {/* Appetizers */}
          <div className="menu-subsection">
            <h2 className="subsection-title">{t.appetizers}</h2>
            <div className="scroll-controls">
              <button className="scroll-arrow left" onClick={() => scrollHorizontal(appetizersScrollRef.current, 'left')} />
              <button className="scroll-arrow right" onClick={() => scrollHorizontal(appetizersScrollRef.current, 'right')} />
            </div>
            <div className="scrollable-grid" ref={appetizersScrollRef}>
              {[t.app1, t.app2, t.app3, t.app4].map((title, i) => (
                <div key={title} className="scrollable-card">
                  <h3 className="scrollable-label">{title}</h3>
                  <ul className="scrollable-list">
                    {getDesc(t, 'app', (i + 1) as 1 | 2 | 3 | 4).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Entrees */}
          <div className="menu-subsection">
            <h2 className="subsection-title">{t.entrees}</h2>
            <div className="scroll-controls">
              <button className="scroll-arrow left" onClick={() => scrollHorizontal(entreesScrollRef.current, 'left')} />
              <button className="scroll-arrow right" onClick={() => scrollHorizontal(entreesScrollRef.current, 'right')} />
            </div>
            <div className="scrollable-grid" ref={entreesScrollRef}>
              {[t.ent1, t.ent2, t.ent3, t.ent4].map((title, i) => (
                <div key={title} className="scrollable-card">
                  <h3 className="scrollable-label">{title}</h3>
                  <ul className="scrollable-list">
                    {getDesc(t, 'ent', (i + 1) as 1 | 2 | 3 | 4).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
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
                {t.menItems.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="dress-code-card">
              <h2 className="dress-code-label">{t.women}</h2>
              <ul className="dress-code-list">
                {t.womenItems.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 – Hotels */}
      <section ref={hotelsRef} className="section section-4">
        <div className="scrollable-container">
          <h1 className="section-title">{t.hotels}</h1>
          <p className="section-text">{t.hotelsIntro}</p>
          <div className="scroll-controls">
            <button className="scroll-arrow left" onClick={() => scrollHorizontal(hotelsScrollRef.current, 'left')} />
            <button className="scroll-arrow right" onClick={() => scrollHorizontal(hotelsScrollRef.current, 'right')} />
          </div>
          <div className="scrollable-grid" ref={hotelsScrollRef}>
            {[t.hotel1, t.hotel2, t.hotel3, t.hotel4].map((title, i) => (
              <div key={title} className="scrollable-card">
                <h2 className="scrollable-label">{title}</h2>
                <ul className="scrollable-list">
                  {getDesc(t, 'hotel', (i + 1) as 1 | 2 | 3 | 4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 – Attractions */}
      <section ref={attractionsRef} className="section section-5">
        <div className="scrollable-container">
          <h1 className="section-title">{t.attractions}</h1>
          <p className="section-text">{t.attractionsIntro}</p>
          <div className="scroll-controls">
            <button className="scroll-arrow left" onClick={() => scrollHorizontal(attractionsScrollRef.current, 'left')} />
            <button className="scroll-arrow right" onClick={() => scrollHorizontal(attractionsScrollRef.current, 'right')} />
          </div>
          <div className="scrollable-grid" ref={attractionsScrollRef}>
            {[t.attr1, t.attr2, t.attr3, t.attr4].map((title, i) => (
              <div key={title} className="scrollable-card">
                <h2 className="scrollable-label">{title}</h2>
                <ul className="scrollable-list">
                  {getDesc(t, 'attr', (i + 1) as 1 | 2 | 3 | 4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
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
              {t.appetizerOptions.map((opt) => (
                <option
                  key={opt}
                  value={opt === t.appetizerOptions[0] ? '' : opt}
                  disabled={opt === t.appetizerOptions[0]}
                >
                  {opt}
                </option>
              ))}
            </select>
            <select className="rsvp-select" required>
              {t.entreeOptions.map((opt) => (
                <option
                  key={opt}
                  value={opt === t.entreeOptions[0] ? '' : opt}
                  disabled={opt === t.entreeOptions[0]}
                >
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