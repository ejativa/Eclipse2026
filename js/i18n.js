/**
 * viveElEclipse2026 - Internationalization (i18n) Module
 * Default: English | Secondary: Spanish (Español)
 */
const i18n = {
  currentLang: localStorage.getItem("eclipse-lang") || "en",

  translations: {
    en: {
      // Header
      brandTitle: "liveTheEclipse2026",
      brandSubtitle: "August 12, 2026 • Spain",
      countdown: "Countdown",
      simulatorBtn: "📹 Eclipse Simulator",

      // Search & Geo
      searchPlaceholder: "🔍 Search municipality or filter VIP Top 10 (e.g. Muxía, Sigüenza, Burgos)...",
      geoDefault: "📍 General View of Spain. Select a point or use the tour.",
      geoInTotality: "🟢 You're inside the Totality Path! (Near {location})",
      geoOutside: "🟡 You're approx. {distance} km from the path. We recommend heading to {location}.",

      // Tour
      tourTitle: '🚶 Tour "Walk the Path"',
      tourPrev: "◀ Previous",
      tourNext: "Next ▶",
      tourGeneral: "🇪🇸 Overview",
      tourCounter: "Point {current} / {total}",
      tourGeneralView: "Overview",

      // Location Header
      vipBadge: "🏆 TOP 10 RECOMMENDED POINT",
      generalTitle: "Totality Path across Spain",
      generalSub: "{count} Municipalities in the Path | 10 Top VIP Highlighted Points",
      generalDate: "August 12, 2026",
      selectPrompt: "Select a location on the map",
      totalityBadge: "100% Totality Path",
      durationOf: "of totality",
      province: "Province",

      // Exact Time Banner
      exactTimeTitle: "EXACT TIME OF MAXIMUM VISIBILITY:",

      // Origin Selector
      originLabel: "🚘 Route Planner: Select your point of origin",

      // Nav Tabs
      tabAstronomy: "Astronomy",
      tabRoute: "Route",
      tabHotels: "Hotels",
      tabToDo: "Activities",
      tabWhatToEat: "What to Eat",
      tabWhereToEat: "Where to Eat",
      tabLogistics: "Viewpoints",
      tabAstrology: "Astrology",

      // Mobile Bar
      mobileMap: "🗺️ Interactive Map",
      mobileInfo: "📋 Info & Towns",

      // General View Panel
      generalViewTitle: "☀️ liveTheEclipse2026",
      generalViewDesc: "Explore the <b>{count} municipalities inside the Totality Path</b>. Check the <b>Eclipse Astral Chart at each point</b> and the <b>10 Top VIP Points highlighted in gold ⭐</b>.",

      // Astronomy Tab
      partialStart: "Partial Start (C1)",
      totalityStart: "Totality Start (C2)",
      maximum: "🌟 MAXIMUM",
      totalityEnd: "Totality End (C3)",
      sunset: "Sunset (C4)",
      altAzimuth: "Sun Alt. & Azimuth",

      // Route Planner
      routeOrigin: "🚩 Origin: <b>{origin}</b>",
      routeDestination: "🏁 Destination: <b>{dest}</b>",
      distanceEstimated: "Estimated Distance",
      travelTime: "Travel Time",
      routeRecommended: "🛣️ Recommended route by road/train:",

      // Hotels Tab
      hotelApiTitle: "🌐 Direct Booking Engines (Aug 12-13, 2026)",
      hotelApiDesc: "Search real-time accommodation for {location} coordinates:",
      hotelOsmTitle: "🏨 Real-Time Accommodation (OpenStreetMap Live):",
      hotelOsmQuerying: "📡 Querying OpenStreetMap API for real tourist accommodations near {location}...",
      hotelRecommended: "🏨 Recommended accommodation in {location}:",
      hotelLocated: "Located OSM",
      hotelOfficialSite: "Official Website ↗",
      hotelViewOSM: "View on OpenStreetMap ↗",
      hotelCheckAvail: "Check availability ↗",

      // Activities Tab
      actMorning: "🌅 Morning in {location}",
      actAfternoon: "☀️ Afternoon (Pre-Eclipse)",
      actEclipse: "🌑 🌟 Maximum Moment ({time})",
      actNight: "🌌 Post-Eclipse Night",

      // What to Eat Tab
      whatToEatTitle: "🍲 Star Dishes & Traditional Specialties of {location}:",
      whatToEatDrink: "🍷 <b>Drink:</b> {drink}",

      // Where to Eat Tab
      whereToEatTitle: "🍽️ Restaurant & Tavern Guide in {location}:",
      whereToEatType: "👨‍🍳 <b>Type:</b> {type} | ⭐ <b>Specialty:</b> {spec}",
      bookTable: "Book a table ↗",

      // Viewpoints/Logistics Tab
      spotsTitle: "📍 Public viewpoints of {location} with clear W-NW view:",
      optimalTime: "⏰ <b>Optimal time:</b> {time}",
      arrivalRecommended: "🚗 <b>Recommended arrival:</b> {arrival}",
      parkingTitle: "🅿️ Parking & Traffic Logistics in {location}",
      parkingMainArea: "<b>Main area:</b> {area}",
      parkingNote: "<b>Notice:</b> {note}",
      parkingTraffic: "<b>Traffic:</b> {advice}",

      // Astrology Tab
      astroChartTitle: "🔮 Eclipse Astral Chart at {location}",
      astroCelestial: "📜 Exact Celestial Positions:",
      astroSunMoon: "☀️ <b>Sun & 🌑 Moon:</b> Conjunction in",
      astroAsc: "📐 <b>Ascendant (ASC):</b>",
      astroMC: "🏛️ <b>Midheaven (MC):</b>",
      astroStar: "⭐ <b>Fixed Star:</b>",
      astroHorizon: "🌅 <b>Horizon WNW:</b>",
      astroMantra: "✨ Cosmic Affirmation:",
      astroReading: "🔮 Astrological Chart Reading",
      astroHistory: "🏛️ Astronomical History & Legend of {location}",
      zodiacDegree: "Zodiac Degree",
      alignment: "Alignment",
      ascendant: "Ascendant",

      // Modal
      modalMaxTitle: "EXACT TIME OF MAXIMUM VISIBILITY:",
      modalAstroTitle: "🔮 Eclipse Astral Chart in {location}",
      modalTimeline: "⏱️ Second-by-Second Astronomical Timeline",
      modalGastro: "🍲 What to Eat in {location}",
      modalRestaurants: "🍽️ Where to Eat",
      modalSpots: "📍 Public Viewpoints & Optimal Arrival Time",
      modalParking: "🅿️ Parking & Traffic",
      modalParkingAccess: "<b>Main access:</b> {area} | <b>Notice:</b> {note}",
      modalHotels: "🏨 Direct Accommodation Booking Engines",

      // Popup
      popupVip: "🏆 <b>TOP 10 VIP POINT</b>",
      popupMax: "🌟 Maximum:",
      popupDuration: "⏱️ {dur} of totality",
      popupBtn: "View Full Card ➔",

      // Simulator
      simTitle: "🎓 SOLAR ECLIPSE SIMULATOR",
      simCanvas: "🎓 Astronomical Lunar Transit Simulator (60FPS)",
      simYoutube: "📺 YouTube Live Stream",
      simStatus: "📚 60FPS Simulator",

      // Language
      langSwitch: "🇪🇸 ES",
      langSwitchTitle: "Cambiar a Español"
    },

    es: {
      brandTitle: "viveElEclipse2026",
      brandSubtitle: "12 de Agosto de 2026 • España",
      countdown: "Cuenta Atrás",
      simulatorBtn: "📹 Simulador Eclipse",

      searchPlaceholder: "🔍 Buscar municipio o filtra los 10 Puntos VIP Top (ej. Muxía, Sigüenza, Burgos)...",
      geoDefault: "📍 Vista General de España. Selecciona un punto o usa el tour.",
      geoInTotality: "🟢 ¡Estás dentro de la Franja de Totalidad! (Cerca de {location})",
      geoOutside: "🟡 Estás a aprox. {distance} km de la franja. Te recomendamos desplazarte hacia {location}.",

      tourTitle: '🚶 Tour "Caminar por la Franja"',
      tourPrev: "◀ Anterior",
      tourNext: "Siguiente ▶",
      tourGeneral: "🇪🇸 General",
      tourCounter: "Punto {current} / {total}",
      tourGeneralView: "Vista General",

      vipBadge: "🏆 PUNTO TOP 10 RECOMENDADO",
      generalTitle: "España en la Franja de Totalidad",
      generalSub: "{count} Municipios dentro de la Franja | 10 Puntos VIP Top Destacados",
      generalDate: "12 de Agosto de 2026",
      selectPrompt: "Selecciona una localidad en el mapa",
      totalityBadge: "Franja 100% Totalidad",
      durationOf: "de totalidad",
      province: "Provincia",

      exactTimeTitle: "HORA EXACTA DE MÁXIMA VISIBILIDAD:",

      originLabel: "🚘 Planificador de Ruta: Selecciona tu punto de origen",

      tabAstronomy: "Astronomía",
      tabRoute: "Ruta Origen",
      tabHotels: "Alojamientos",
      tabToDo: "Qué Hacer",
      tabWhatToEat: "Qué Comer",
      tabWhereToEat: "Dónde Comer",
      tabLogistics: "Miradores",
      tabAstrology: "Astrología",

      mobileMap: "🗺️ Mapa Interactivo",
      mobileInfo: "📋 Ficha y Municipios",

      generalViewTitle: "☀️ viveElEclipse2026",
      generalViewDesc: "Explora los <b>{count} municipios ubicados dentro de la Franja de Totalidad</b>. Revisa la <b>Carta Astral del Eclipse en cada punto</b> y los <b>10 Puntos VIP Top destacados en dorado ⭐</b>.",

      partialStart: "Inicio Parcial (C1)",
      totalityStart: "Inicio Totalidad (C2)",
      maximum: "🌟 MÁXIMO DEL ECLIPSE",
      totalityEnd: "Fin Totalidad (C3)",
      sunset: "Puesta de Sol (C4)",
      altAzimuth: "Altura & Azimut Sol",

      routeOrigin: "🚩 Origen: <b>{origin}</b>",
      routeDestination: "🏁 Destino: <b>{dest}</b>",
      distanceEstimated: "Distancia Estimada",
      travelTime: "Tiempo de Viaje",
      routeRecommended: "🛣️ Ruta recomendada por carretera/tren:",

      hotelApiTitle: "🌐 Motores Directos de Reserva de Hospedaje (12-13 Agosto 2026)",
      hotelApiDesc: "Buscar plazas de alojamiento en tiempo real para las coordenadas de {location}:",
      hotelOsmTitle: "🏨 Hospedaje en Tiempo Real (OpenStreetMap Live):",
      hotelOsmQuerying: "📡 Consultando OpenStreetMap API para encontrar establecimientos turísticos reales cerca de {location}...",
      hotelRecommended: "🏨 Alojamientos recomendados en {location}:",
      hotelLocated: "Localizado OSM",
      hotelOfficialSite: "Sitio Web Oficial ↗",
      hotelViewOSM: "Ver en OpenStreetMap ↗",
      hotelCheckAvail: "Consultar disponibilidad ↗",

      actMorning: "🌅 Mañana en {location}",
      actAfternoon: "☀️ Tarde (Pre-Eclipse)",
      actEclipse: "🌑 🌟 Momento del Máximo ({time})",
      actNight: "🌌 Noche Post-Eclipse",

      whatToEatTitle: "🍲 Platos Estrella y Especialidades Tradicionales de {location}:",
      whatToEatDrink: "🍷 <b>Bebida:</b> {drink}",

      whereToEatTitle: "🍽️ Guía de Restaurantes y Mesones en {location}:",
      whereToEatType: "👨‍🍳 <b>Tipo:</b> {type} | ⭐ <b>Especialidad:</b> {spec}",
      bookTable: "Reservar mesa ↗",

      spotsTitle: "📍 Miradores públicos de {location} despejados al W-NW:",
      optimalTime: "⏰ <b>Hora óptima:</b> {time}",
      arrivalRecommended: "🚗 <b>Llegada recomendada:</b> {arrival}",
      parkingTitle: "🅿️ Aparcamiento & Logística de Tráfico en {location}",
      parkingMainArea: "<b>Zona principal:</b> {area}",
      parkingNote: "<b>Aviso:</b> {note}",
      parkingTraffic: "<b>Tráfico:</b> {advice}",

      astroChartTitle: "🔮 Carta Astral del Eclipse en {location}",
      astroCelestial: "📜 Posiciones Celestiales Exactas:",
      astroSunMoon: "☀️ <b>Sol & 🌑 Luna:</b> Conjunción en",
      astroAsc: "📐 <b>Ascendente (ASC):</b>",
      astroMC: "🏛️ <b>Medio Cielo (MC):</b>",
      astroStar: "⭐ <b>Estrella Fija:</b>",
      astroHorizon: "🌅 <b>Horizonte WNW:</b>",
      astroMantra: "✨ Afirmación Cósmica:",
      astroReading: "🔮 Lectura Astrológica de la Carta Astral",
      astroHistory: "🏛️ Historia y Leyenda Astronómica de {location}",
      zodiacDegree: "Grado Zodiacal",
      alignment: "Alineación",
      ascendant: "Ascendente",

      modalMaxTitle: "HORA EXACTA DE MÁXIMA VISIBILIDAD:",
      modalAstroTitle: "🔮 Carta Astral del Eclipse en {location}",
      modalTimeline: "⏱️ Cronograma Astronómico al Segundo",
      modalGastro: "🍲 Qué Comer en {location}",
      modalRestaurants: "🍽️ Dónde Comer",
      modalSpots: "📍 Miradores Públicos y Hora Óptima de Llegada",
      modalParking: "🅿️ Aparcamiento & Tráfico",
      modalParkingAccess: "<b>Acceso principal:</b> {area} | <b>Aviso:</b> {note}",
      modalHotels: "🏨 Motores Directos de Reserva de Hospedaje",

      popupVip: "🏆 <b>PUNTO TOP 10 VIP</b>",
      popupMax: "🌟 Máximo:",
      popupDuration: "⏱️ {dur} de totalidad",
      popupBtn: "Ver Ficha Completa ➔",

      simTitle: "🎓 SIMULADOR ECLIPSE SOLAR",
      simCanvas: "🎓 Simulador Astronómico Paso Lunar (60FPS)",
      simYoutube: "📺 Transmisión YouTube Live Directo",
      simStatus: "📚 Simulador 60FPS",

      langSwitch: "🇬🇧 EN",
      langSwitchTitle: "Switch to English"
    }
  },

  t(key, params = {}) {
    let text = this.translations[this.currentLang]?.[key] || this.translations["en"]?.[key] || key;
    Object.keys(params).forEach((k) => {
      text = text.replace(new RegExp(`\\{${k}\\}`, "g"), params[k]);
    });
    return text;
  },

  setLang(lang) {
    this.currentLang = lang;
    localStorage.setItem("eclipse-lang", lang);
    document.documentElement.lang = lang;
  },

  toggleLang() {
    const newLang = this.currentLang === "en" ? "es" : "en";
    this.setLang(newLang);
    // Full page refresh to apply all translations
    location.reload();
  }
};

// Set HTML lang attribute on load
document.documentElement.lang = i18n.currentLang;
