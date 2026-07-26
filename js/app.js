/**
 * viveElEclipse2026 - Aplicación Principal UI & Controller
 * Soporte para 50 municipios, Simulador Explicativo 2D Canvas a 60FPS Nativo en Vivo en la Esquina del Mapa,
 * imágenes panorámicas únicas 100% garantizadas, Carta Astral interactiva SVG y Modal Ficha Completa.
 */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Inicializar Mapa con Vista General de España
  mapManager.initMap("map-container");

  // 2. Poblar selectores de origen y buscador de 50 municipios
  populateOriginSelector();
  populateLocationSearch();

  // 3. Inicializar Visualizador con Simulador Animado Canvas Nativo 60 FPS
  initLiveVideoWidget();

  // 4. Callback al seleccionar una localidad en el mapa o buscador
  window.onLocationSelected = (location, index) => {
    updateDetailPanels(location);
    updateTourControls(index);
  };

  // 5. Callback para la Vista General de España
  window.onGeneralViewSelected = () => {
    showGeneralViewPanel();
  };

  // 6. Mostrar por defecto la Vista General de España
  mapManager.resetToGeneralView();

  // 7. Geolocalización del usuario
  geoManager.getUserLocation((err, coords, info) => {
    const geoStatusElem = document.getElementById("geo-status-banner");
    if (geoStatusElem) {
      geoStatusElem.innerHTML = `
        <div class="banner-badge ${info.inTotality ? 'bg-totality' : 'bg-partial'}">
          ${info.message}
        </div>
      `;
    }
  });

  // 8. Configurar eventos de navegación en cuadrícula, tour y modal
  setupEventListeners();

  // 9. Delegación global de clics para el botón "Ver Ficha Completa" en popups del mapa
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".popup-btn");
    if (btn) {
      const idx = parseInt(btn.getAttribute("data-index"), 10);
      if (!isNaN(idx) && ECLIPSE_DATA.locations[idx]) {
        const loc = ECLIPSE_DATA.locations[idx];
        mapManager.selectLocationByIndex(idx);
        openLocationModal(loc);
      }
    }
  });
});

const GLOBAL_FALLBACK_IMAGE = "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=800&q=80";

// Inicializar y controlar el Visualizador con Simulador Animado Canvas Nativo
function initLiveVideoWidget() {
  const widget = document.getElementById("map-video-widget");
  const widgetBody = document.getElementById("video-widget-body");
  const btnMin = document.getElementById("btn-toggle-video-min");
  const btnClose = document.getElementById("btn-close-video-widget");
  const channelSelect = document.getElementById("video-channel-select");
  const canvas = document.getElementById("eclipse-canvas-player");
  const iframe = document.getElementById("live-video-iframe");
  const subtitleOverlay = document.getElementById("canvas-subtitle-overlay");
  const subtitleText = document.getElementById("canvas-subtitle-text");
  const statusText = document.getElementById("video-status-text");

  if (!widget || !canvas) return;

  // Iniciar animación en Canvas 2D a 60 FPS
  let animId = null;
  let progress = 0; // 0 a 1 (paso de la luna)

  const subtitles = [
    { p: 0.05, text: "🌅 Fase C1: Inicio del Eclipse Parcial. La Luna toca el disco solar." },
    { p: 0.35, text: "🌘 Avance del Eclipse Parcial. El Sol se convierte en una deslumbrante luna creciente." },
    { p: 0.70, text: "💍 Anillo de Diamante (Efecto Baily): Últimos destellos de luz solar entre las montañas lunares." },
    { p: 0.85, text: "🌑 TOTALIDAD 100%: La Corona Solar emerge brillante alrededor del disco negro." },
    { p: 0.95, text: "☀️ Fase C3: Reaparición del Sol y fin de la franja de oscuridad total." }
  ];

  function drawSimulatedEclipse() {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const r = 45;

    ctx.clearRect(0, 0, w, h);

    // Fondo del espacio profundo
    const bgGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, w / 1.2);
    bgGrad.addColorStop(0, "#080c1a");
    bgGrad.addColorStop(1, "#030408");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Estrellas titilantes
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
    for (let i = 0; i < 25; i++) {
      const sx = (Math.sin(i * 99 + progress * 2) * 0.5 + 0.5) * w;
      const sy = (Math.cos(i * 33 + progress * 2) * 0.5 + 0.5) * h;
      ctx.fillRect(sx, sy, 1.5, 1.5);
    }

    // Posición de la Luna pasando de izquierda (-r * 2.2) a derecha (+r * 2.2)
    const moonX = cx + (progress - 0.5) * (r * 3.6);
    const moonY = cy;

    // Calcular superposición y fase de totalidad
    const dist = Math.hypot(cx - moonX, cy - moonY);
    const isTotality = dist < 4;

    // Dibujar Corona Solar Resplandeciente
    if (dist < r * 1.5) {
      const coronaGrad = ctx.createRadialGradient(cx, cy, r * 0.8, cx, cy, r * 2.4);
      coronaGrad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
      coronaGrad.addColorStop(0.3, "rgba(251, 191, 36, 0.7)");
      coronaGrad.addColorStop(0.7, "rgba(56, 189, 248, 0.3)");
      coronaGrad.addColorStop(1, "transparent");

      ctx.fillStyle = coronaGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 2.4, 0, Math.PI * 2);
      ctx.fill();

      // Destellos ráfaga de la corona
      ctx.strokeStyle = "rgba(251, 191, 36, 0.3)";
      ctx.lineWidth = 1.5;
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 12) {
        const len = r * (1.6 + Math.sin(a * 5 + progress * 10) * 0.4);
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
        ctx.lineTo(cx + Math.cos(a) * len, cy + Math.sin(a) * len);
        ctx.stroke();
      }
    }

    // Dibujar Sol Radiante
    const sunGrad = ctx.createRadialGradient(cx, cy, 5, cx, cy, r);
    sunGrad.addColorStop(0, "#ffffff");
    sunGrad.addColorStop(0.6, "#fbbf24");
    sunGrad.addColorStop(1, "#f97316");

    ctx.fillStyle = sunGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();

    // Dibujar Disco Negro de la Luna
    ctx.fillStyle = "#06070d";
    ctx.beginPath();
    ctx.arc(moonX, moonY, r - 0.5, 0, Math.PI * 2);
    ctx.fill();

    // Dibujar Borde Sombrío Lunar
    ctx.strokeStyle = "rgba(15, 23, 42, 0.8)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Destello "Anillo de Diamante" al rozar la totalidad
    if (dist >= 3 && dist < 12) {
      const diamondX = cx + ((moonX - cx) / dist) * r;
      const diamondY = cy + ((moonY - cy) / dist) * r;

      const dGrad = ctx.createRadialGradient(diamondX, diamondY, 1, diamondX, diamondY, 18);
      dGrad.addColorStop(0, "#ffffff");
      dGrad.addColorStop(0.5, "#fbbf24");
      dGrad.addColorStop(1, "transparent");

      ctx.fillStyle = dGrad;
      ctx.beginPath();
      ctx.arc(diamondX, diamondY, 18, 0, Math.PI * 2);
      ctx.fill();
    }

    // Actualizar Subtítulos explicativos según el progreso
    if (subtitleText) {
      let activeSub = subtitles[0].text;
      for (let s of subtitles) {
        if (progress >= s.p) activeSub = s.text;
      }
      subtitleText.innerText = activeSub;
    }

    // Avanzar animación en bucle infinito
    progress += 0.0018;
    if (progress > 1) progress = 0;

    animId = requestAnimationFrame(drawSimulatedEclipse);
  }

  // Iniciar bucle de dibujo
  drawSimulatedEclipse();

  // Selector de canal (Simulador Canvas o YouTube Embed)
  if (channelSelect && iframe && subtitleOverlay) {
    channelSelect.addEventListener("change", (e) => {
      const val = e.target.value;
      if (val === "canvas") {
        iframe.classList.add("hidden");
        canvas.classList.remove("hidden");
        subtitleOverlay.classList.remove("hidden");
        if (statusText) statusText.innerText = "📚 Simulador Animado Activo (Transmisión en vivo el 12-Ago-2026)";
      } else if (val === "youtube") {
        canvas.classList.add("hidden");
        subtitleOverlay.classList.add("hidden");
        iframe.src = "https://www.youtube-nocookie.com/embed/9Auq9mYxFEE?autoplay=1&mute=1";
        iframe.classList.remove("hidden");
        if (statusText) statusText.innerText = "🔴 Transmitiendo YouTube Live en Directo";
      }
    });
  }

  // Botón Minimizar / Maximizar
  if (btnMin && widgetBody) {
    btnMin.addEventListener("click", () => {
      widget.classList.toggle("minimized");
    });
  }

  // Botón Cerrar
  if (btnClose) {
    btnClose.addEventListener("click", () => {
      widget.classList.add("hidden");
      if (animId) cancelAnimationFrame(animId);
    });
  }
}

// Abrir Modal Interactivo Ficha Completa con Imagen Característica Garantizada y Carta Astral
function openLocationModal(loc) {
  const modal = document.getElementById("location-modal");
  const modalTitle = document.getElementById("modal-location-title");
  const modalSub = document.getElementById("modal-location-province");
  const modalVipBadge = document.getElementById("modal-vip-badge");
  const modalBody = document.getElementById("modal-body-content");
  const modalHeroWrapper = document.getElementById("modal-hero-wrapper");
  const modalHeroImg = document.getElementById("modal-hero-img");

  if (!modal || !modalTitle || !modalBody) return;

  modalTitle.innerText = loc.name;
  modalSub.innerText = `Provincia: ${loc.province} | Duración Totalidad: ${loc.timeline.formattedDuration}`;

  // Cargar imagen de cabecera con fallback garantizado
  if (modalHeroWrapper && modalHeroImg) {
    const imgSrc = loc.imageUrl || GLOBAL_FALLBACK_IMAGE;
    modalHeroImg.onerror = () => { modalHeroImg.src = GLOBAL_FALLBACK_IMAGE; };
    modalHeroImg.src = imgSrc;
    modalHeroWrapper.classList.remove("hidden");
  }

  if (loc.isTop10 && modalVipBadge) {
    modalVipBadge.classList.remove("hidden");
  } else if (modalVipBadge) {
    modalVipBadge.classList.add("hidden");
  }

  // Generar efemérides y carta astral completas
  const liveUrls = realAPIs.generateLiveBookingSearchUrl(loc.name, loc.coords[0], loc.coords[1]);
  const astroData = realAPIs.calculateRealAstrologyEphemeris(loc.coords[0], loc.coords[1], loc.name);

  let dishesHTML = "";
  if (loc.whatToEat?.dishes) {
    loc.whatToEat.dishes.forEach((d) => dishesHTML += `<li>🍴 <b>${d}</b></li>`);
  }

  let restHTML = "";
  if (loc.whereToEat) {
    loc.whereToEat.forEach((r) => {
      restHTML += `
        <div class="restaurant-card">
          <div class="restaurant-header">
            <span class="restaurant-name">${r.name}</span>
            <span class="restaurant-price">${r.priceRange}</span>
          </div>
          <div class="restaurant-sub">👨‍🍳 <b>Tipo:</b> ${r.type} | ⭐ <b>Especialidad:</b> ${r.specialty}</div>
          <a href="${r.link}" target="_blank" rel="noopener" class="btn-book">Reservar Mesa ↗</a>
        </div>
      `;
    });
  }

  let spotsHTML = "";
  if (loc.publicObservationSpots) {
    loc.publicObservationSpots.forEach((spot) => {
      const optTime = spot.optimalTime || `${loc.timeline.totalityStart} - ${loc.timeline.totalityEnd}`;
      spotsHTML += `
        <div class="spot-card">
          <div class="spot-name">${spot.name}</div>
          <div class="spot-desc">${spot.desc}</div>
          <div class="spot-optimal-badge" style="background: rgba(251, 191, 36, 0.15); border: 1px solid #fbbf24; color: #fbbf24; padding: 4px 8px; border-radius: 4px; margin: 4px 0; font-size: 0.8rem;">
            ⏰ <b>Hora óptima:</b> ${optTime} | 🚗 <b>Llegada recomendada:</b> ${spot.recommendedArrival || "17:30 CEST"}
          </div>
        </div>
      `;
    });
  }

  modalBody.innerHTML = `
    <!-- INSIGNIA DESTACADA MÁXIMO -->
    <div class="exact-time-banner">
      <span class="exact-time-icon">🌟</span>
      <div>
        <div class="exact-time-title">HORA EXACTA DE MÁXIMA VISIBILIDAD:</div>
        <div class="exact-time-clock">${loc.timeline.totalityMax} (Fase C2-C3)</div>
      </div>
    </div>

    <!-- 1. CARTA ASTRAL DEL ECLIPSE (RUEDA INTERACTIVA SVG & CASAS) -->
    <div>
      <div class="modal-section-title">🔮 Carta Astral del Eclipse en ${loc.name}</div>
      <div class="astrology-modal-grid">
        <div class="astro-chart-box">
          ${astroData.chartSVG}
        </div>
        <div class="astro-details-box">
          <div class="astro-card-title">📜 Posiciones Celestiales Exactas:</div>
          <p>☀️ <b>Sol & 🌑 Luna:</b> Conjunción en <span class="gold-text">${astroData.zodiacDegree}</span></p>
          <p>📐 <b>Ascendente (ASC):</b> ${astroData.ascendant}</p>
          <p>🏛️ <b>Medio Cielo (MC):</b> ${astroData.midheaven}</p>
          <p>⭐ <b>Estrella Fija:</b> ${astroData.regulusDistance}</p>
          <p>🌅 <b>Horizonte WNW:</b> ${astroData.horizonElevation} a ${astroData.azimuth}</p>
          <div class="mantra-box">
            <span class="mantra-title">✨ Afirmación Cósmica:</span>
            <p class="mantra-text">${astroData.mantra}</p>
          </div>
        </div>
      </div>
      <div style="margin-top:10px; font-size:0.85rem; color:#94a3b8; line-height:1.4;">
        ${astroData.astrologicalInsight}
      </div>
    </div>

    <!-- 2. ASTRONOMÍA -->
    <div>
      <div class="modal-section-title">⏱️ Cronograma Astronómico al Segundo</div>
      <div class="info-grid">
        <div class="info-card"><span class="info-label">Inicio Parcial (C1)</span><span class="info-value">${loc.timeline.partialStart}</span></div>
        <div class="info-card highlight-card"><span class="info-label">Inicio Totalidad (C2)</span><span class="info-value gold-text">${loc.timeline.totalityStart}</span></div>
        <div class="info-card highlight-card"><span class="info-label">🌟 MÁXIMO</span><span class="info-value gold-text">${loc.timeline.totalityMax}</span></div>
        <div class="info-card"><span class="info-label">Fin Totalidad (C3)</span><span class="info-value">${loc.timeline.totalityEnd}</span></div>
        <div class="info-card"><span class="info-label">Puesta de Sol (C4)</span><span class="info-value">${loc.timeline.sunset}</span></div>
        <div class="info-card"><span class="info-label">Altura / Azimut Sol</span><span class="info-value">${loc.timeline.sunAltitude} / ${loc.timeline.sunAzimuth}</span></div>
      </div>
    </div>

    <!-- 3. GASTRONOMÍA Y RESTAURANTES -->
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px;">
      <div class="food-card">
        <div class="food-title">🍲 Qué Comer en ${loc.name}</div>
        <ul class="food-list">${dishesHTML}</ul>
        <div style="margin-top:8px; font-size:0.8rem; color:#fbbf24;">🍷 <b>Bebida:</b> ${loc.whatToEat?.drinks || "Vino local"}</div>
      </div>
      <div>
        <div class="food-title">🍽️ Dónde Comer</div>
        ${restHTML}
      </div>
    </div>

    <!-- 4. MIRADORES Y LOGÍSTICA -->
    <div>
      <div class="modal-section-title">📍 Miradores Públicos y Hora Óptima de Llegada</div>
      ${spotsHTML}
      <div class="parking-box" style="margin-top:8px;">
        <div class="parking-title">🅿️ Aparcamiento & Tráfico</div>
        <p style="font-size:0.8rem; color:#94a3b8; margin-top:4px;"><b>Acceso principal:</b> ${loc.parkingLogistics.mainArea} | <b>Aviso:</b> ${loc.parkingLogistics.capacityNote}</p>
      </div>
    </div>

    <!-- 5. ALOJAMIENTOS & MOTORES DE RESERVA -->
    <div>
      <div class="modal-section-title">🏨 Motores Directos de Reserva de Hospedaje</div>
      <div class="live-hotel-links">
        <a href="${liveUrls.bookingUrl}" target="_blank" rel="noopener" class="btn-live-api">Buscar en Booking.com ↗</a>
        <a href="${liveUrls.googleHotelsUrl}" target="_blank" rel="noopener" class="btn-live-api">Google Hotels GPS ↗</a>
        <a href="${liveUrls.kayakUrl}" target="_blank" rel="noopener" class="btn-live-api">Kayak ↗</a>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
}

// Cerrar Modal
function closeLocationModal() {
  document.getElementById("location-modal")?.classList.add("hidden");
}

// Poblar selector de origen para el planificador de rutas
function populateOriginSelector() {
  const select = document.getElementById("route-origin-select");
  if (!select) return;

  select.innerHTML = "";
  ECLIPSE_DATA.origins.forEach((orig) => {
    const opt = document.createElement("option");
    opt.value = orig.id;
    opt.textContent = orig.name;
    select.appendChild(opt);
  });
}

// Poblar lista de lugares para búsqueda rápida (50 municipios + 10 VIP)
function populateLocationSearch() {
  const searchInput = document.getElementById("location-search");
  const listContainer = document.getElementById("search-results-list");
  if (!searchInput || !listContainer) return;

  const renderList = (filterText = "") => {
    listContainer.innerHTML = "";
    const filtered = ECLIPSE_DATA.locations.filter(
      (l) => l.name.toLowerCase().includes(filterText.toLowerCase()) || l.province.toLowerCase().includes(filterText.toLowerCase())
    );

    filtered.forEach((loc) => {
      const idx = ECLIPSE_DATA.locations.findIndex((item) => item.id === loc.id);
      const itemElem = document.createElement("div");
      itemElem.className = `search-item-card ${loc.isTop10 ? 'search-item-vip' : ''}`;
      itemElem.innerHTML = `
        <div class="search-item-title">
          ${loc.isTop10 ? '⭐ [VIP TOP 10] ' : ''}${loc.name}
        </div>
        <div class="search-item-sub">🌟 Máximo: <b style="color:#fbbf24">${loc.timeline.totalityMax}</b> | Duración: ${loc.timeline.formattedDuration}</div>
      `;
      itemElem.onclick = () => {
        mapManager.selectLocationByIndex(idx);
        openLocationModal(loc);
        document.getElementById("search-dropdown")?.classList.add("hidden");
      };
      listContainer.appendChild(itemElem);
    });
  };

  renderList();

  searchInput.addEventListener("input", (e) => {
    document.getElementById("search-dropdown")?.classList.remove("hidden");
    renderList(e.target.value);
  });

  searchInput.addEventListener("focus", () => {
    document.getElementById("search-dropdown")?.classList.remove("hidden");
  });
}

// Mostrar panel de la Vista General de España
function showGeneralViewPanel() {
  const count = ECLIPSE_DATA.locations.length;
  document.getElementById("detail-title").innerText = "España en la Franja de Totalidad";
  document.getElementById("detail-province").innerText = `${count} Municipios dentro de la Franja | 10 Puntos VIP Top Destacados`;
  document.getElementById("detail-duration-badge").innerText = "12 de Agosto de 2026";
  document.getElementById("tour-counter").innerText = "Vista General";
  document.getElementById("exact-time-banner")?.classList.add("hidden");
  document.getElementById("detail-vip-badge")?.classList.add("hidden");
  document.getElementById("detail-hero-wrapper")?.classList.add("hidden");

  const generalHTML = `
    <div class="general-view-card">
      <h3 class="general-view-title">☀️ viveElEclipse2026</h3>
      <p class="general-view-desc">
        Explora los <b>${count} municipios ubicados dentro de la Franja de Totalidad</b>.
        Revisa la <b>Carta Astral del Eclipse en cada punto</b> y los <b>10 Puntos VIP Top destacados en dorado ⭐</b>.
      </p>
    </div>
  `;

  document.getElementById("tab-astro-content").innerHTML = generalHTML;
  document.getElementById("tab-route-content").innerHTML = generalHTML;
  document.getElementById("tab-hotels-content").innerHTML = generalHTML;
  document.getElementById("tab-todo-content").innerHTML = generalHTML;
  document.getElementById("tab-what-to-eat-content").innerHTML = generalHTML;
  document.getElementById("tab-where-to-eat-content").innerHTML = generalHTML;
  document.getElementById("tab-logistics-content").innerHTML = generalHTML;
  document.getElementById("tab-astrology-content").innerHTML = generalHTML;
}

// Actualizar TODOS los paneles de la izquierda
async function updateDetailPanels(loc) {
  // 1. Título y Encabezado
  document.getElementById("detail-title").innerText = loc.name;
  document.getElementById("detail-province").innerText = `Provincia: ${loc.province}`;
  document.getElementById("detail-duration-badge").innerText = `⏱️ ${loc.timeline.formattedDuration} de totalidad`;

  // Banner con Imagen Característica en etiqueta img con onerror
  const heroWrapper = document.getElementById("detail-hero-wrapper");
  const heroImg = document.getElementById("detail-hero-img");
  if (heroWrapper && heroImg) {
    const imgSrc = loc.imageUrl || GLOBAL_FALLBACK_IMAGE;
    heroImg.onerror = () => { heroImg.src = GLOBAL_FALLBACK_IMAGE; };
    heroImg.src = imgSrc;
    heroWrapper.classList.remove("hidden");
  }

  // Insignia VIP Top 10
  const vipBadge = document.getElementById("detail-vip-badge");
  if (vipBadge) {
    if (loc.isTop10) {
      vipBadge.classList.remove("hidden");
    } else {
      vipBadge.classList.add("hidden");
    }
  }

  // 2. INSIGNIA DESTACADA: HORA EXACTA DEL MÁXIMO
  const exactBanner = document.getElementById("exact-time-banner");
  const exactClock = document.getElementById("exact-time-value");
  if (exactBanner && exactClock) {
    exactClock.innerText = `${loc.timeline.totalityMax} (Fase C2-C3)`;
    exactBanner.classList.remove("hidden");
  }

  // 3. Pestaña 1: Astronomía
  document.getElementById("tab-astro-content").innerHTML = `
    <div class="info-grid">
      <div class="info-card"><span class="info-label">Inicio Parcial (C1)</span><span class="info-value">${loc.timeline.partialStart}</span></div>
      <div class="info-card highlight-card"><span class="info-label">Inicio Totalidad (C2)</span><span class="info-value gold-text">${loc.timeline.totalityStart}</span></div>
      <div class="info-card highlight-card"><span class="info-label">🌟 MÁXIMO DEL ECLIPSE</span><span class="info-value gold-text" style="font-size: 1.1rem;">${loc.timeline.totalityMax}</span></div>
      <div class="info-card"><span class="info-label">Fin Totalidad (C3)</span><span class="info-value">${loc.timeline.totalityEnd}</span></div>
      <div class="info-card"><span class="info-label">Puesta de Sol (C4)</span><span class="info-value">${loc.timeline.sunset}</span></div>
      <div class="info-card"><span class="info-label">Altura & Azimut Sol</span><span class="info-value">${loc.timeline.sunAltitude} / ${loc.timeline.sunAzimuth}</span></div>
    </div>
  `;

  // 4. Pestaña 2: Planificador de Ruta
  updateRoutePlannerView(loc);

  // 5. Pestaña 3: Alojamientos
  const liveUrls = realAPIs.generateLiveBookingSearchUrl(loc.name, loc.coords[0], loc.coords[1]);
  let hotelHTML = `
    <div class="hotel-live-api-box">
      <div class="hotel-api-title">🌐 Motores Directos de Reserva de Hospedaje (12-13 Agosto 2026)</div>
      <p style="font-size:0.8rem;">Buscar plazas de alojamiento en tiempo real para las coordenadas de ${loc.name}:</p>
      <div class="live-hotel-links">
        <a href="${liveUrls.bookingUrl}" target="_blank" rel="noopener" class="btn-live-api">Booking.com ↗</a>
        <a href="${liveUrls.googleHotelsUrl}" target="_blank" rel="noopener" class="btn-live-api">Google Hotels GPS ↗</a>
        <a href="${liveUrls.kayakUrl}" target="_blank" rel="noopener" class="btn-live-api">Kayak ↗</a>
      </div>
    </div>
    <div id="osm-hotels-container" class="hotels-grid">
      <div class="section-subtitle">📡 Consultando OpenStreetMap API para encontrar establecimientos turísticos reales cerca de ${loc.name}...</div>
    </div>
  `;
  document.getElementById("tab-hotels-content").innerHTML = hotelHTML;

  realAPIs.fetchRealOSMAccommodations(loc.coords[0], loc.coords[1]).then((osmHotels) => {
    const container = document.getElementById("osm-hotels-container");
    if (!container) return;

    if (osmHotels && osmHotels.length > 0) {
      let osmHTML = `<div class="section-subtitle">🏨 Estabilidad de Hospedaje en Tiempo Real (OpenStreetMap Live):</div>`;
      osmHotels.forEach((h) => {
        osmHTML += `
          <div class="hotel-card">
            <div class="hotel-header"><span class="hotel-name">${h.name}</span><span class="hotel-type">${h.type}</span></div>
            <div class="hotel-body"><span class="hotel-price">📏 A ${h.distanceKm} km del centro</span><span class="badge badge-success">Localizado OSM</span></div>
            ${h.website ? `<a href="${h.website}" target="_blank" rel="noopener" class="btn-book">Sitio Web Oficial ↗</a>` : `<a href="${h.osmUrl}" target="_blank" rel="noopener" class="btn-book">Ver en OpenStreetMap ↗</a>`}
          </div>
        `;
      });
      container.innerHTML = osmHTML;
    } else {
      let fallbackHTML = `<div class="section-subtitle">🏨 Alojamientos recomendados en ${loc.name}:</div>`;
      loc.accommodations.forEach((h) => {
        fallbackHTML += `
          <div class="hotel-card">
            <div class="hotel-header"><span class="hotel-name">${h.name}</span><span class="hotel-type">${h.type}</span></div>
            <div class="hotel-body"><span class="hotel-price">${h.priceRange}</span><span class="badge badge-${h.availabilityBadge}">${h.availabilityStatus}</span></div>
            <a href="${h.link}" target="_blank" rel="noopener" class="btn-book">Consultar disponibilidad ↗</a>
          </div>
        `;
      });
      container.innerHTML = fallbackHTML;
    }
  });

  // 6. Pestaña 4: Qué Hacer
  document.getElementById("tab-todo-content").innerHTML = `
    <div class="activity-timeline">
      <div class="activity-card"><div class="activity-time">🌅 Mañana en ${loc.name}</div><div class="activity-desc">${loc.whatToDo.morning}</div></div>
      <div class="activity-card"><div class="activity-time">☀️ Tarde (Pre-Eclipse)</div><div class="activity-desc">${loc.whatToDo.afternoon}</div></div>
      <div class="activity-card highlight-activity"><div class="activity-time">🌑 🌟 Momento del Máximo (${loc.timeline.totalityMax})</div><div class="activity-desc">${loc.whatToDo.eclipseMoment}</div></div>
      <div class="activity-card"><div class="activity-time">🌌 Noche Post-Eclipse</div><div class="activity-desc">${loc.whatToDo.night}</div></div>
    </div>
  `;

  // 7. Pestaña 5: QUÉ COMER
  let eatHTML = `
    <div class="food-card">
      <div class="food-title">🍲 Platos Estrella y Especialidades Tradicionales de ${loc.name}:</div>
      <ul class="food-list">
  `;
  if (loc.whatToEat?.dishes) {
    loc.whatToEat.dishes.forEach((dish) => {
      eatHTML += `<li>🍴 <b>${dish}</b></li>`;
    });
  }
  eatHTML += `
      </ul>
      <div style="margin-top: 10px; font-size: 0.85rem; color: #fbbf24;">🍷 <b>Bebida:</b> ${loc.whatToEat?.drinks || "Vino local"}</div>
    </div>
  `;
  document.getElementById("tab-what-to-eat-content").innerHTML = eatHTML;

  // 8. Pestaña 6: DÓNDE COMER
  let restHTML = `<div class="section-subtitle">🍽️ Guía de Restaurantes y Mesones en ${loc.name}:</div>`;
  if (loc.whereToEat && loc.whereToEat.length > 0) {
    loc.whereToEat.forEach((rest) => {
      restHTML += `
        <div class="restaurant-card">
          <div class="restaurant-header"><span class="restaurant-name">${rest.name}</span><span class="restaurant-price">${rest.priceRange}</span></div>
          <div class="restaurant-sub">👨‍🍳 <b>Tipo:</b> ${rest.type} | ⭐ <b>Especialidad:</b> ${rest.specialty}</div>
          <a href="${rest.link}" target="_blank" rel="noopener" class="btn-book" style="margin-top:6px; display:inline-block;">Reservar mesa ↗</a>
        </div>
      `;
    });
  }
  document.getElementById("tab-where-to-eat-content").innerHTML = restHTML;

  // 9. Pestaña 7: Miradores Públicos
  let spotsHTML = `<div class="section-subtitle">📍 Miradores públicos de ${loc.name} despejados al W-NW:</div><div class="spots-list">`;
  loc.publicObservationSpots.forEach((spot) => {
    const optTime = spot.optimalTime || `${loc.timeline.totalityStart} - ${loc.timeline.totalityEnd}`;
    spotsHTML += `
      <div class="spot-card">
        <div class="spot-name">${spot.name}</div>
        <div class="spot-desc">${spot.desc}</div>
        <div class="spot-optimal-badge" style="background: rgba(251, 191, 36, 0.15); border: 1px solid #fbbf24; color: #fbbf24; padding: 6px 10px; border-radius: 6px; margin: 6px 0; font-size: 0.8rem; font-weight: 600;">
          ⏰ <b>Hora óptima:</b> ${optTime} <br> 🚗 <b>Llegada recomendada:</b> ${spot.recommendedArrival || "17:30 CEST"}
        </div>
        <div class="spot-meta">🅿️ Parking: ${spot.parkingNearby}</div>
      </div>
    `;
  });
  spotsHTML += `</div>
    <div class="parking-box">
      <div class="parking-title">🅿️ Aparcamiento & Logística de Tráfico en ${loc.name}</div>
      <div class="parking-details">
        <p><b>Zona principal:</b> ${loc.parkingLogistics.mainArea}</p>
        <p><b>Aviso:</b> ${loc.parkingLogistics.capacityNote}</p>
        <p><b>Tráfico:</b> ${loc.parkingLogistics.trafficAdvice}</p>
      </div>
    </div>
  `;
  document.getElementById("tab-logistics-content").innerHTML = spotsHTML;

  // 10. Pestaña 8: CARTA ASTRAL COMPLETA CON SVG INTERACTIVO Y MANTRA
  const astroData = realAPIs.calculateRealAstrologyEphemeris(loc.coords[0], loc.coords[1], loc.name);
  document.getElementById("tab-astrology-content").innerHTML = `
    <div class="astrology-container">
      <div class="astro-chart-box" style="text-align:center; margin-bottom:12px;">
        ${astroData.chartSVG}
      </div>
      <div class="astrology-header">
        <div class="astrology-symbol">♌ 20°</div>
        <div class="astrology-meta">
          <div class="astro-degree">Grado Zodiacal: <b>${astroData.zodiacDegree}</b></div>
          <div class="astro-star">Alineación: <b>${astroData.regulusDistance}</b></div>
          <div class="astro-element">Ascendente: <b>${astroData.ascendant}</b></div>
        </div>
      </div>
      <div class="astrology-reading">
        <h4>🔮 Lectura Astrológica de la Carta Astral</h4>
        <p>${astroData.astrologicalInsight}</p>
        <div class="mantra-box" style="margin-top:10px;">
          <span class="mantra-title">✨ Afirmación Cósmica:</span>
          <p class="mantra-text">${astroData.mantra}</p>
        </div>
      </div>
      <div class="history-box" style="margin-top:10px;">
        <h4>🏛️ Historia y Leyenda Astronómica de ${loc.name}</h4>
        <p>${loc.history}</p>
      </div>
    </div>
  `;
}

// Actualizar vista del planificador de ruta
function updateRoutePlannerView(loc) {
  const selectElem = document.getElementById("route-origin-select");
  const originVal = selectElem ? selectElem.value : "madrid";
  const routeContentElem = document.getElementById("tab-route-content");

  let routeData = loc.routePlanner[originVal] || loc.routePlanner["madrid"];
  const originObj = ECLIPSE_DATA.origins.find((o) => o.id === originVal) || ECLIPSE_DATA.origins[0];

  routeContentElem.innerHTML = `
    <div class="route-planner-card">
      <div class="route-header">
        <span>🚩 Origen: <b>${originObj.name}</b></span><span>➔</span><span>🏁 Destino: <b>${loc.name}</b></span>
      </div>
      <div class="route-stats">
        <div class="stat-box"><span class="stat-label">Distancia Estimada</span><span class="stat-value">${routeData.distanceKm} km</span></div>
        <div class="stat-box"><span class="stat-label">Tiempo de Viaje</span><span class="stat-value gold-text">${routeData.travelTime}</span></div>
      </div>
      <div class="route-path-box">
        <span class="route-label">🛣️ Ruta recomendada por carretera/tren:</span>
        <div class="route-text">${routeData.route}</div>
      </div>
    </div>
  `;
}

// Actualizar contador del tour "Caminar por la franja"
function updateTourControls(index) {
  const currentCounter = document.getElementById("tour-counter");
  if (currentCounter) {
    currentCounter.innerText = `Punto ${index + 1} / ${ECLIPSE_DATA.locations.length}`;
  }
}

// Configurar event listeners globales
function setupEventListeners() {
  // Menú Navegación en Cuadrícula
  const navCards = document.querySelectorAll(".nav-card");
  navCards.forEach((card) => {
    card.addEventListener("click", () => {
      navCards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");

      const targetId = card.getAttribute("data-tab");
      document.querySelectorAll(".tab-pane").forEach((pane) => pane.classList.remove("active"));
      document.getElementById(targetId)?.classList.add("active");
    });
  });

  // Selector de origen del planificador
  const routeSelect = document.getElementById("route-origin-select");
  if (routeSelect) {
    routeSelect.addEventListener("change", () => {
      if (mapManager.activeLocation) {
        updateRoutePlannerView(mapManager.activeLocation);
      }
    });
  }

  // Botones del Tour "Caminar por la franja"
  document.getElementById("btn-tour-prev")?.addEventListener("click", () => mapManager.walkPrev());
  document.getElementById("btn-tour-next")?.addEventListener("click", () => mapManager.walkNext());
  document.getElementById("btn-reset-view")?.addEventListener("click", () => mapManager.resetToGeneralView());

  // Eventos de cierre del Modal
  document.getElementById("modal-close-btn")?.addEventListener("click", () => closeLocationModal());
  document.getElementById("location-modal")?.addEventListener("click", (e) => {
    if (e.target.id === "location-modal") {
      closeLocationModal();
    }
  });
}
