// src/App.tsx
import React, { useRef, useState } from 'react';
import './App.css';

// === Translation Types ===
interface Translation {
  home: string;
  venue: string;
  itinerary: string;
  meals: string;
  dressCode: string;
  rsvp: string;
  gifts: string;
  hotels: string;
  attractions: string;
  instagram: string;
  thankYou: string;

  homeIntro: string;

  // Venue
  venueName: string;
  venueAddress: string;
  viewOnMaps: string;

  // Itinerary
  itineraryItems: string[];

  // Meals
  mealsText: string;

  // Dress Code
  dressCodeHeader: string;
  dressCodeGalleryText: string;

  // RSVP
  rsvpText: string;
  contactText: string;
  ednaPhone: string;
  tylerPhone: string;

  // Gifts
  registryText: string;
  zelleCashAppText: string;
  zelleEmail: string;
  cashAppTag: string;

  // Hotels
  hotelsIntro: string;
  hotel1: string; hotel1Desc: string[];
  hotel2: string; hotel2Desc: string[];
  hotel3: string; hotel3Desc: string[];
  hotel4: string; hotel4Desc: string[];
  hotel5: string; hotel5Desc: string[];  // ← NEW

  // Attractions
  attractionsIntro: string;
  attr1: string; attr1Desc: string[];
  attr2: string; attr2Desc: string[];
  attr3: string; attr3Desc: string[];
  attr4: string; attr4Desc: string[];
}

type Lang = 'en' | 'es';

// === Translations ===
const translations: Record<Lang, Translation> = {
  en: {
    home: 'Home',
    venue: 'Venue',
    itinerary: 'Itinerary',
    meals: 'Meals',
    dressCode: 'Dress Code',
    rsvp: 'RSVP',
    gifts: 'Gifts',
    hotels: 'Hotels',
    attractions: 'Attractions',
    instagram: 'Instagram',
    thankYou: 'Thank You',

    homeIntro: 'It is with great joy and affection that we invite you to be a part of this significant day of our lives.',

    venueName: 'Swan Coach House',
    venueAddress: '3130 Slaton Drive NW, Atlanta, GA 30305',
    viewOnMaps: 'View on Google Maps',

    itineraryItems: [
      '12:00 PM – Guest Arrival',
      '12:30 PM – Ceremony Begins',
      '1:00 PM – Reception',
      '4:00 PM – Celebration Ends',
    ],

    mealsText: "We're happy to share that the venue will be offering a la carte meals for all our wonderful guests. During the first two weeks of March 2026, we'll reach out to share the seasonal menu and kindly ask for your meal choices.",

    dressCodeHeader: 'Dress Code',
    dressCodeGalleryText: 'Please check the gallery for ideas.',

    rsvpText: 'Please contact for confirmation and menu',
    contactText: 'Please contact for confirmation and menu',
    ednaPhone: '+1 (478) 258-2636',
    tylerPhone: '+1 (404) 227-3148',

    registryText: 'Wedding Registry',
    zelleCashAppText: 'Your presence is the greatest gift. If you wish to contribute, a honeymoon fund would be appreciated.',
    zelleEmail: 'ednagarcia.mx@gmail.com',
    cashAppTag: '$todom741',

    hotelsIntro: 'HOTELS',
    hotel1: 'Hotel Colee, Atlanta Buckhead',
    hotel1Desc: ['✨ Newly renovated luxury', 'Rooftop pool & bar', 'Central Buckhead location', 'Valet parking'],
    hotel2: 'Residence Inn Atlanta Buckhead',
    hotel2Desc: ['🛏️ Free breakfast included', 'Full kitchens in rooms', 'Extended stay friendly', 'Fitness center'],
    hotel3: 'Hampton Inn & Suites Atlanta Buckhead Palace',
    hotel3Desc: ['🏨 Free hot breakfast', 'Indoor pool', 'Close to restaurants', 'Free WiFi'],
    hotel4: 'Courtyard Atlanta Buckhead',
    hotel4Desc: ['📍 Walking distance to venues', 'Modern rooms', 'Bistro restaurant', 'Fitness center'],
    hotel5: 'Hyatt Place Atlanta/Buckhead',
    hotel5Desc: ['🌟 Free breakfast', 'Outdoor pool', 'Pet-friendly', '24-hour fitness'],

    attractionsIntro: 'ATTRACTIONS IN ATL',
    attr1: 'Georgia Aquarium',
    attr1Desc: ["World's largest aquarium", 'Whale sharks & dolphins', 'Ocean Voyager exhibit', 'Family-friendly'],
    attr2: 'World of Coca-Cola',
    attr2Desc: ['Interactive museum', 'Taste 100+ sodas', 'Vault of the Secret Formula', 'Downtown Atlanta'],
    attr3: 'Piedmont Park',
    attr3Desc: ["Atlanta's Central Park", 'Walking trails', 'Dog park & lake', 'Free concerts'],
    attr4: 'Atlanta Botanical Garden',
    attr4Desc: ['30 acres of gardens', 'Orchid center', 'Canopy walk', 'Seasonal exhibits'],
  },
  es: {
    home: 'Inicio',
    venue: 'Lugar',
    itinerary: 'Itinerario',
    meals: 'Comidas',
    dressCode: 'Código de Vestimenta',
    rsvp: 'RSVP',
    gifts: 'Regalos',
    hotels: 'Hoteles',
    attractions: 'Atracciones',
    instagram: 'Instagram',
    thankYou: 'Gracias',

    homeIntro: 'Es con gran alegría y cariño que los invitamos a ser parte de este día tan significativo en nuestras vidas.',

    venueName: 'Swan Coach House',
    venueAddress: '3130 Slaton Drive NW, Atlanta, GA 30305',
    viewOnMaps: 'Ver en Google Maps',

    itineraryItems: [
      '12:00 PM – Llegada de los invitados',
      '12:30 PM – Comienza la ceremonia',
      '1:00 PM – Recepción',
      '4:00 PM – Finaliza la celebración',
    ],

    mealsText: 'Nos complace compartir que el lugar ofrecerá comidas a la carta para todos nuestros maravillosos invitados. Durante las primeras dos semanas de marzo de 2026, nos pondremos en contacto para compartir el menú de temporada y pedir amablemente sus elecciones de comida.',

    dressCodeHeader: 'Código de Vestimenta',
    dressCodeGalleryText: 'Por favor revisa la galería para ideas.',

    rsvpText: 'Por favor contacta para confirmación y menú',
    contactText: 'Por favor contacta para confirmación y menú',
    ednaPhone: '+1 (478) 258-2636',
    tylerPhone: '+1 (404) 227-3148',

    registryText: 'Registro de Bodas',
    zelleCashAppText: 'Tu presencia es el mejor regalo. Si deseas contribuir, un fondo para la luna de miel sería muy apreciado.',
    zelleEmail: 'ednagarcia.mx@gmail.com',
    cashAppTag: '$todom741',

    hotelsIntro: 'HOTELES',
    hotel1: 'Hotel Colee, Atlanta Buckhead',
    hotel1Desc: ['✨ Lujo recién renovado', 'Piscina y bar en azotea', 'Ubicación céntrica en Buckhead', 'Estacionamiento con valet'],
    hotel2: 'Residence Inn Atlanta Buckhead',
    hotel2Desc: ['🛏️ Desayuno gratis incluido', 'Cocinas completas en habitaciones', 'Ideal para estancias largas', 'Centro de fitness'],
    hotel3: 'Hampton Inn & Suites Atlanta Buckhead Palace',
    hotel3Desc: ['🏨 Desayuno caliente gratis', 'Piscina interior', 'Cerca de restaurantes', 'WiFi gratis'],
    hotel4: 'Courtyard Atlanta Buckhead',
    hotel4Desc: ['📍 A poca distancia caminando', 'Habitaciones modernas', 'Restaurante bistro', 'Centro de fitness'],
    hotel5: 'Hyatt Place Atlanta/Buckhead',
    hotel5Desc: ['🌟 Desayuno gratis', 'Piscina al aire libre', 'Admite mascotas', 'Fitness 24 horas'],

    attractionsIntro: 'ATRACIONES EN ATL',
    attr1: 'Acuario de Georgia',
    attr1Desc: ['El acuario más grande del mundo', 'Tiburones ballena y delfines', 'Exhibición Ocean Voyager', 'Ideal para familias'],
    attr2: 'Mundo de Coca-Cola',
    attr2Desc: ['Museo interactivo', 'Prueba más de 100 refrescos', 'Bóveda de la Fórmula Secreta', 'Centro de Atlanta'],
    attr3: 'Parque Piedmont',
    attr3Desc: ['El Central Park de Atlanta', 'Senderos para caminar', 'Parque para perros y lago', 'Conciertos gratuitos'],
    attr4: 'Jardín Botánico de Atlanta',
    attr4Desc: ['30 acres de jardines', 'Centro de orquídeas', 'Paseo por el dosel', 'Exhibiciones estacionales'],
  },
};

// === App Component ===
function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const t = translations[lang];

  const homeRef = useRef<HTMLDivElement | null>(null);
  const venueRef = useRef<HTMLDivElement | null>(null);
  const itineraryRef = useRef<HTMLDivElement | null>(null);
  const mealsRef = useRef<HTMLDivElement | null>(null);
  const dressCodeRef = useRef<HTMLDivElement | null>(null);
  const rsvpRef = useRef<HTMLDivElement | null>(null);
  const giftsRef = useRef<HTMLDivElement | null>(null);
  const hotelsRef = useRef<HTMLDivElement | null>(null);
  const attractionsRef = useRef<HTMLDivElement | null>(null);
  const instagramRef = useRef<HTMLDivElement | null>(null);

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

  // === Dress Code Gallery Images ===
  const galleryImages = [
    './assets/dress1.jpg',
    './assets/dress2.jpg',
    './assets/dress3.jpg',
    './assets/dress4.jpg',
    './assets/dress5.jpg',
    './assets/dress6.jpg',
    './assets/dress7.jpg',
    './assets/dress8.jpg',
  ];

  const nextImage = () => {
    setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const navItems = [
    { label: t.home, ref: homeRef },
    { label: t.venue, ref: venueRef },
    { label: t.itinerary, ref: itineraryRef },
    { label: t.meals, ref: mealsRef },
    { label: t.dressCode, ref: dressCodeRef },
    { label: t.rsvp, ref: rsvpRef },
    { label: t.gifts, ref: giftsRef },
    { label: t.hotels, ref: hotelsRef },
    { label: t.attractions, ref: attractionsRef },
    { label: t.instagram, ref: instagramRef },
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
          {/* Scrollable Navigation Items */}
          <div className="mobile-nav-scrollable">
            {navItems.map((item) => (
              <button key={item.label} className="mobile-nav-item" onClick={() => scrollTo(item.ref)}>
                {item.label}
              </button>
            ))}
          </div>
          {/* Fixed Language Buttons at Bottom */}
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
      <section ref={homeRef} className="section section-1">
        <div className="section-content">
          <p className="section-subtitle">
            {lang === 'en' ? 'Our Wedding' : 'Nuestra Boda'}
          </p>
          <h1 className="section-title">Edna and Tyler</h1>
          <p className="section-date">04/04/26</p>
          <p className="home-intro">{t.homeIntro}</p>
        </div>
      </section>

      {/* Section 2 – Venue */}
      <section ref={venueRef} className="section section-venue">
        <div className="venue-backdrop">
          <div className="section-content">
            <h2 className="venue-title">
              {lang === 'en' ? 'The Venue' : 'El Lugar'}
            </h2>
            <p className="venue-name">{t.venueName}</p>
            <p className="venue-address">{t.venueAddress}</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Swan+Coach+House+Atlanta"
              target="_blank"
              rel="noopener noreferrer"
              className="venue-link"
            >
              {t.viewOnMaps}
            </a>
          </div>
        </div>
      </section>

      {/* Section 3 – Itinerary */}
      <section ref={itineraryRef} className="section section-itinerary">
        <div className="itinerary-backdrop">
          <div className="section-content">
            <h2 className="itinerary-title">
              {lang === 'en' ? 'Itinerary' : 'Itinerario'}
            </h2>
            <ul className="itinerary-list">
              {t.itineraryItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Meals Section - TITLE INSIDE WHITE BOX */}
      <section ref={mealsRef} className="section section-meals">
        <div className="meals-container">
          <div className="meals-content">
            <h1 className="meals-title">{t.meals}</h1>
            <p className="meals-text">{t.mealsText}</p>
          </div>
        </div>
      </section>

      {/* Dress Code Section - NO HEADER, ONLY GALLERY */}
      <section ref={dressCodeRef} className="section section-3">
        <div className="dress-code-container">
          <div className="gallery-carousel">
            <button className="gallery-arrow left" onClick={prevImage} />
            <img
              src={galleryImages[galleryIndex]}
              alt={`Dress code inspiration ${galleryIndex + 1}`}
              className="gallery-image"
            />
            <button className="gallery-arrow right" onClick={nextImage} />
          </div>
        </div>
      </section>

      {/* Section 5 – RSVP */}
      <section ref={rsvpRef} className="section section-6">
        <div className="rsvp-backdrop">
          <div className="section-content">
            <h1 className="rsvp-title">{t.rsvp}</h1>
            <p className="rsvp-text">{t.contactText}</p>
            <div className="whatsapp-links">
              <a href={`https://wa.me/${t.ednaPhone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                Edna
              </a>
              <a href={`https://wa.me/${t.tylerPhone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                Tyler
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 – Gifts - TITLE INSIDE WHITE BOX */}
      <section ref={giftsRef} className="section section-gifts">
        <div className="gifts-container">
          <div className="gifts-combined">
            <h1 className="gifts-title">{t.gifts}</h1>
            <div className="registry-buttons-centered">
              <a href="https://amazon.com/registry" target="_blank" rel="noopener noreferrer" className="registry-btn amazon">
                Amazon
              </a>
              <a href="https://macys.com/registry" target="_blank" rel="noopener noreferrer" className="registry-btn macys">
                Macy's
              </a>
            </div>
            <p className="gifts-text">{t.zelleCashAppText}</p>
            <div className="payment-links">
              <a href={`mailto:${t.zelleEmail}`} className="payment-btn zelle">Zelle</a>
              <a href={`https://cash.app/${t.cashAppTag}`} target="_blank" rel="noopener noreferrer" className="payment-btn cashapp">CashApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 – Hotels - 5 NEW HOTELS */}
      <section ref={hotelsRef} className="section section-4">
        <div className="scrollable-container">
          <p className="section-intro">{t.hotelsIntro}</p>
          <div className="scroll-controls">
            <button className="scroll-arrow left" onClick={() => scrollHorizontal(hotelsScrollRef.current, 'left')} />
            <button className="scroll-arrow right" onClick={() => scrollHorizontal(hotelsScrollRef.current, 'right')} />
          </div>
          <div className="scrollable-grid" ref={hotelsScrollRef}>
            {/* Hotel 1 */}
            <div className="scrollable-card">
              <h2 className="scrollable-label">{t.hotel1}</h2>
              <ul className="scrollable-list">
                {t.hotel1Desc.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            
            {/* Hotel 2 */}
            <div className="scrollable-card">
              <h2 className="scrollable-label">{t.hotel2}</h2>
              <ul className="scrollable-list">
                {t.hotel2Desc.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            
            {/* Hotel 3 */}
            <div className="scrollable-card">
              <h2 className="scrollable-label">{t.hotel3}</h2>
              <ul className="scrollable-list">
                {t.hotel3Desc.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            
            {/* Hotel 4 */}
            <div className="scrollable-card">
              <h2 className="scrollable-label">{t.hotel4}</h2>
              <ul className="scrollable-list">
                {t.hotel4Desc.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            
            {/* Hotel 5 - NEW */}
            <div className="scrollable-card">
              <h2 className="scrollable-label">{t.hotel5}</h2>
              <ul className="scrollable-list">
                {t.hotel5Desc.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 – Attractions */}
      <section ref={attractionsRef} className="section section-5">
        <div className="scrollable-container">
          <p className="section-intro">{t.attractionsIntro}</p>
          <div className="scroll-controls">
            <button className="scroll-arrow left" onClick={() => scrollHorizontal(attractionsScrollRef.current, 'left')} />
            <button className="scroll-arrow right" onClick={() => scrollHorizontal(attractionsScrollRef.current, 'right')} />
          </div>
          <div className="scrollable-grid" ref={attractionsScrollRef}>
            {[t.attr1, t.attr2, t.attr3, t.attr4].map((title, i) => (
              <div key={title} className="scrollable-card">
                <h2 className="scrollable-label">{title}</h2>
                <ul className="scrollable-list">
                  {(t[`attr${i + 1}Desc` as keyof Translation] as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9 – Instagram + Thank You */}
      <section ref={instagramRef} className="section section-instagram">
        <div className="instagram-grid">
          <div className="instagram-left">
            <h2 className="instagram-title">{t.instagram}</h2>
            <p className="instagram-hashtag">#EdnaAndTyler2026</p>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram-link">
              Tag us on Instagram
            </a>
          </div>
          <div className="instagram-right">
            <h2 className="thankyou-title">{t.thankYou}</h2>
            <p className="thankyou-text">
              We are so grateful for your love and support. Thank you for being part of our journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;