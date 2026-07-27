/**
 * liveTheEclipse2026 - Main UI Controller with i18n Support
 * English default, Spanish secondary. 50 municipalities, VIP Top 10, Canvas 60FPS Simulator.
 */
document.addEventListener("DOMContentLoaded", () => {
  // 0. Apply i18n to static HTML elements
  applyStaticTranslations();

  // 1. Initialize Map
  mapManager.initMap("map-container");

  // 2. Populate selectors
  populateOriginSelector();
  populateLocationSearch();

  // 3. Initialize Simulator
  initLiveVideoWidget();

  // 4. Initialize Mobile Nav
  initMobileViewSwitch();

  // 5. Location selected callback
  window.onLocationSelected = (location, index) => {
    updateDetailPanels(location);
    updateTourControls(index);
    if (window.innerWidth <= 768) {
      switchMobileView("info");
    }
  };

  // 6. General view callback
  window.onGeneralViewSelected = () => {
    showGeneralViewPanel();
  };

  // 7. Show general view by default
  mapManager.resetToGeneralView();

  // 8. Geolocation
  geoManager.getUserLocation((err, coords, info) => {
    const geoStatusElem = document.getElementById("geo-status-banner");
    if (geoStatusElem) {
      geoStatusElem.innerHTML = `
        <div class="banner-badge ${info.inTotality ? 'bg-totality' : 'bg-partial'}">
          ${info.inTotality
            ? i18n.t("geoInTotality", { location: info.closestLocation.name })
            : i18n.t("geoOutside", { distance: info.distanceKm, location: info.closestLocation.name })
          }
        </div>
      `;
    }
  });

  // 9. Event listeners
  setupEventListeners();

  // 10. Global delegated event listeners for popups, brand home link, and safety modal
  document.addEventListener("click", (e) => {
    // Popup button
    const popupBtn = e.target.closest(".popup-btn");
    if (popupBtn) {
      const idx = parseInt(popupBtn.getAttribute("data-index"), 10);
      if (!isNaN(idx) && ECLIPSE_DATA.locations[idx]) {
        const loc = ECLIPSE_DATA.locations[idx];
        mapManager.selectLocationByIndex(idx);
        openLocationModal(loc);
      }
      return;
    }

    // Brand Title / Logo Home Link
    if (e.target.closest("#brand-container") || e.target.closest("#brand-title") || e.target.closest(".clickable-home")) {
      e.preventDefault();
      mapManager.resetToGeneralView();
      closeLocationModal();
      closeSafetyModal();
      if (window.innerWidth <= 768) {
        switchMobileView("map");
      }
      return;
    }

    // Eye Safety Toggle Button
    if (e.target.closest("#btn-safety-toggle") || e.target.closest(".btn-safety")) {
      e.preventDefault();
      openSafetyModal();
      return;
    }

    // Safety Close Button
    if (e.target.closest("#safety-close-btn")) {
      closeSafetyModal();
      return;
    }
  });

  // 11. Language toggle
  document.getElementById("btn-lang-toggle")?.addEventListener("click", () => {
    i18n.toggleLang();
  });
});

const GLOBAL_FALLBACK_IMAGE = "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=800&q=80";

// Apply translations to all static HTML elements
function applyStaticTranslations() {
  const T = (k, p) => i18n.t(k, p);

  document.getElementById("brand-title").innerText = T("brandTitle");
  document.getElementById("brand-subtitle").innerText = T("brandSubtitle");
  document.getElementById("countdown-label").innerText = T("countdown");
  document.getElementById("btn-header-toggle-video").innerText = T("simulatorBtn");
  document.getElementById("location-search").placeholder = T("searchPlaceholder");
  document.getElementById("tour-title").innerText = T("tourTitle");
  document.getElementById("btn-tour-prev").innerText = T("tourPrev");
  document.getElementById("btn-tour-next").innerText = T("tourNext");
  document.getElementById("btn-reset-view").innerText = T("tourGeneral");
  document.getElementById("origin-label").innerText = T("originLabel");
  document.getElementById("exact-time-label").innerText = T("exactTimeTitle");
  document.getElementById("sim-header-title").innerText = T("simTitle");
  document.getElementById("video-status-text").innerText = T("simStatus");

  // Mobile bottom bar
  document.getElementById("btn-mobile-show-map").innerHTML = `<span>${T("mobileMap")}</span>`;
  document.getElementById("btn-mobile-show-info").innerHTML = `<span>${T("mobileInfo")}</span>`;

  // Language button
  const langBtn = document.getElementById("btn-lang-toggle");
  if (langBtn) {
    langBtn.innerText = T("langSwitch");
    langBtn.title = T("langSwitchTitle");
  }

  // Nav grid labels
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.innerText = T(key);
  });

  // Simulator channel options
  const channelSelect = document.getElementById("video-channel-select");
  if (channelSelect) {
    channelSelect.options[0].text = T("simCanvas");
    channelSelect.options[1].text = T("simYoutube");
  }

  // Safety button
  const safetyBtnLabel = document.getElementById("safety-btn-label");
  if (safetyBtnLabel) safetyBtnLabel.innerText = T("safetyBtn");

  const safetyTitle = document.getElementById("safety-modal-title");
  if (safetyTitle) safetyTitle.innerText = T("safetyTitle");

  const safetySub = document.getElementById("safety-modal-sub");
  if (safetySub) safetySub.innerText = T("safetySub");

  const safetyBody = document.getElementById("safety-modal-body");
  if (safetyBody) safetyBody.innerHTML = T("safetyBody");

  // Dynamic SEO & Open Graph Meta Tags Update
  document.title = T("seoTitle");

  const metaDesc = document.getElementById("meta-description");
  if (metaDesc) metaDesc.setAttribute("content", T("seoDescription"));

  const ogTitle = document.getElementById("og-title");
  if (ogTitle) ogTitle.setAttribute("content", T("seoOgTitle"));

  const ogDesc = document.getElementById("og-description");
  if (ogDesc) ogDesc.setAttribute("content", T("seoOgDesc"));

  const twTitle = document.getElementById("twitter-title");
  if (twTitle) twTitle.setAttribute("content", T("seoOgTitle"));

  const twDesc = document.getElementById("twitter-description");
  if (twDesc) twDesc.setAttribute("content", T("seoOgDesc"));
}

// Mobile view switch
function initMobileViewSwitch() {
  document.getElementById("btn-mobile-show-map")?.addEventListener("click", () => switchMobileView("map"));
  document.getElementById("btn-mobile-show-info")?.addEventListener("click", () => switchMobileView("info"));
}

function switchMobileView(viewType) {
  const sidebar = document.getElementById("sidebar-panel");
  const mapView = document.getElementById("map-view");
  const btnMap = document.getElementById("btn-mobile-show-map");
  const btnInfo = document.getElementById("btn-mobile-show-info");
  if (!sidebar || !mapView) return;

  if (viewType === "map") {
    sidebar.classList.remove("mobile-active");
    mapView.classList.add("mobile-active");
    btnMap?.classList.add("active");
    btnInfo?.classList.remove("active");
    setTimeout(() => { if (mapManager.map) mapManager.map.invalidateSize(); }, 100);
  } else {
    mapView.classList.remove("mobile-active");
    sidebar.classList.add("mobile-active");
    btnInfo?.classList.add("active");
    btnMap?.classList.remove("active");
  }
}

// Eclipse Simulator Widget
function initLiveVideoWidget() {
  const widget = document.getElementById("map-video-widget");
  const widgetBody = document.getElementById("video-widget-body");
  const btnMin = document.getElementById("btn-toggle-video-min");
  const btnClose = document.getElementById("btn-close-video-widget");
  const btnHeaderToggle = document.getElementById("btn-header-toggle-video");
  const channelSelect = document.getElementById("video-channel-select");
  const canvas = document.getElementById("eclipse-canvas-player");
  const iframe = document.getElementById("live-video-iframe");
  const subtitleOverlay = document.getElementById("canvas-subtitle-overlay");
  const subtitleText = document.getElementById("canvas-subtitle-text");
  const statusText = document.getElementById("video-status-text");
  if (!widget || !canvas) return;

  widget.classList.remove("hidden", "minimized");

  if (btnHeaderToggle) {
    btnHeaderToggle.addEventListener("click", () => {
      if (widget.classList.contains("hidden")) {
        widget.classList.remove("hidden", "minimized");
      } else {
        widget.classList.toggle("minimized");
      }
    });
  }

  let animId = null;
  let progress = 0;

  const subtitlesEN = [
    { p: 0.05, text: "🌅 Phase C1: Partial Eclipse begins. The Moon touches the solar disk." },
    { p: 0.35, text: "🌘 Partial Eclipse advances. The Sun becomes a dazzling crescent." },
    { p: 0.70, text: "💍 Diamond Ring (Baily's Beads): Last flashes of sunlight." },
    { p: 0.85, text: "🌑 100% TOTALITY: The Solar Corona emerges brilliantly around the dark disk." },
    { p: 0.95, text: "☀️ Phase C3: Sun reappears and the shadow band ends." }
  ];
  const subtitlesES = [
    { p: 0.05, text: "🌅 Fase C1: Inicio del Eclipse Parcial. La Luna toca el disco solar." },
    { p: 0.35, text: "🌘 Avance del Eclipse Parcial. El Sol se convierte en una deslumbrante luna creciente." },
    { p: 0.70, text: "💍 Anillo de Diamante (Efecto Baily): Últimos destellos de luz solar." },
    { p: 0.85, text: "🌑 TOTALIDAD 100%: La Corona Solar emerge brillante alrededor del disco negro." },
    { p: 0.95, text: "☀️ Fase C3: Reaparición del Sol y fin de la franja de oscuridad total." }
  ];

  function drawSimulatedEclipse() {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const w = canvas.width, h = canvas.height, cx = w / 2, cy = h / 2, r = 45;
    ctx.clearRect(0, 0, w, h);

    const bgGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, w / 1.2);
    bgGrad.addColorStop(0, "#080c1a");
    bgGrad.addColorStop(1, "#030408");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = "rgba(255,255,255,0.7)";
    for (let i = 0; i < 25; i++) {
      ctx.fillRect((Math.sin(i*99+progress*2)*0.5+0.5)*w, (Math.cos(i*33+progress*2)*0.5+0.5)*h, 1.5, 1.5);
    }

    const moonX = cx + (progress - 0.5) * (r * 3.6), moonY = cy;
    const dist = Math.hypot(cx - moonX, cy - moonY);

    if (dist < r * 1.5) {
      const cg = ctx.createRadialGradient(cx, cy, r*0.8, cx, cy, r*2.4);
      cg.addColorStop(0, "rgba(255,255,255,0.95)");
      cg.addColorStop(0.3, "rgba(251,191,36,0.7)");
      cg.addColorStop(0.7, "rgba(56,189,248,0.3)");
      cg.addColorStop(1, "transparent");
      ctx.fillStyle = cg;
      ctx.beginPath(); ctx.arc(cx, cy, r*2.4, 0, Math.PI*2); ctx.fill();

      ctx.strokeStyle = "rgba(251,191,36,0.3)"; ctx.lineWidth = 1.5;
      for (let a = 0; a < Math.PI*2; a += Math.PI/12) {
        const len = r*(1.6+Math.sin(a*5+progress*10)*0.4);
        ctx.beginPath(); ctx.moveTo(cx+Math.cos(a)*r, cy+Math.sin(a)*r);
        ctx.lineTo(cx+Math.cos(a)*len, cy+Math.sin(a)*len); ctx.stroke();
      }
    }

    const sg = ctx.createRadialGradient(cx, cy, 5, cx, cy, r);
    sg.addColorStop(0, "#ffffff"); sg.addColorStop(0.6, "#fbbf24"); sg.addColorStop(1, "#f97316");
    ctx.fillStyle = sg; ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2); ctx.fill();

    ctx.fillStyle = "#06070d"; ctx.beginPath(); ctx.arc(moonX, moonY, r-0.5, 0, Math.PI*2); ctx.fill();
    ctx.strokeStyle = "rgba(15,23,42,0.8)"; ctx.lineWidth = 1.5; ctx.stroke();

    if (dist >= 3 && dist < 12) {
      const dx = cx+((moonX-cx)/dist)*r, dy = cy+((moonY-cy)/dist)*r;
      const dg = ctx.createRadialGradient(dx, dy, 1, dx, dy, 18);
      dg.addColorStop(0, "#ffffff"); dg.addColorStop(0.5, "#fbbf24"); dg.addColorStop(1, "transparent");
      ctx.fillStyle = dg; ctx.beginPath(); ctx.arc(dx, dy, 18, 0, Math.PI*2); ctx.fill();
    }

    if (subtitleText) {
      const subs = i18n.currentLang === "es" ? subtitlesES : subtitlesEN;
      let activeSub = subs[0].text;
      for (let s of subs) { if (progress >= s.p) activeSub = s.text; }
      subtitleText.innerText = activeSub;
    }

    progress += 0.0018;
    if (progress > 1) progress = 0;
    animId = requestAnimationFrame(drawSimulatedEclipse);
  }

  drawSimulatedEclipse();

  if (channelSelect && iframe && subtitleOverlay) {
    channelSelect.addEventListener("change", (e) => {
      if (e.target.value === "canvas") {
        iframe.classList.add("hidden"); canvas.classList.remove("hidden"); subtitleOverlay.classList.remove("hidden");
        if (statusText) statusText.innerText = i18n.t("simStatus");
      } else {
        canvas.classList.add("hidden"); subtitleOverlay.classList.add("hidden");
        iframe.src = "https://www.youtube-nocookie.com/embed/9Auq9mYxFEE?autoplay=1&mute=1";
        iframe.classList.remove("hidden");
        if (statusText) statusText.innerText = "🔴 YouTube Live";
      }
    });
  }

  if (btnMin) btnMin.addEventListener("click", () => widget.classList.toggle("minimized"));
  if (btnClose) btnClose.addEventListener("click", () => widget.classList.add("hidden"));
}

// Open Full-Screen Modal
function openLocationModal(loc) {
  const T = (k, p) => i18n.t(k, p);
  const modal = document.getElementById("location-modal");
  const modalTitle = document.getElementById("modal-location-title");
  const modalSub = document.getElementById("modal-location-province");
  const modalVipBadge = document.getElementById("modal-vip-badge");
  const modalBody = document.getElementById("modal-body-content");
  const modalHeroWrapper = document.getElementById("modal-hero-wrapper");
  const modalHeroImg = document.getElementById("modal-hero-img");
  if (!modal || !modalTitle || !modalBody) return;

  modalTitle.innerText = loc.name;
  modalSub.innerText = `${T("province")}: ${loc.province} | ${loc.timeline.formattedDuration} ${T("durationOf")}`;

  if (modalHeroWrapper && modalHeroImg) {
    modalHeroImg.onerror = () => { modalHeroImg.src = GLOBAL_FALLBACK_IMAGE; };
    modalHeroImg.src = loc.imageUrl || GLOBAL_FALLBACK_IMAGE;
    modalHeroWrapper.classList.remove("hidden");
  }

  if (modalVipBadge) {
    modalVipBadge.innerText = T("vipBadge");
    loc.isTop10 ? modalVipBadge.classList.remove("hidden") : modalVipBadge.classList.add("hidden");
  }

  const liveUrls = realAPIs.generateLiveBookingSearchUrl(loc.name, loc.coords[0], loc.coords[1]);
  const astroData = realAPIs.calculateRealAstrologyEphemeris(loc.coords[0], loc.coords[1], loc.name);

  let dishesHTML = "";
  if (loc.whatToEat?.dishes) loc.whatToEat.dishes.forEach((d) => dishesHTML += `<li>🍴 <b>${d}</b></li>`);

  let restHTML = "";
  if (loc.whereToEat) loc.whereToEat.forEach((r) => {
    restHTML += `<div class="restaurant-card"><div class="restaurant-header"><span class="restaurant-name">${r.name}</span><span class="restaurant-price">${r.priceRange}</span></div><div class="restaurant-sub">${T("whereToEatType", {type: r.type, spec: r.specialty})}</div><a href="${r.link}" target="_blank" rel="noopener" class="btn-book">${T("bookTable")}</a></div>`;
  });

  let spotsHTML = "";
  if (loc.publicObservationSpots) loc.publicObservationSpots.forEach((spot) => {
    const optTime = spot.optimalTime || `${loc.timeline.totalityStart} - ${loc.timeline.totalityEnd}`;
    spotsHTML += `<div class="spot-card"><div class="spot-name">${spot.name}</div><div class="spot-desc">${spot.desc}</div><div class="spot-optimal-badge" style="background:rgba(251,191,36,0.15);border:1px solid #fbbf24;color:#fbbf24;padding:4px 8px;border-radius:4px;margin:4px 0;font-size:0.8rem;">${T("optimalTime", {time: optTime})} | ${T("arrivalRecommended", {arrival: spot.recommendedArrival || "17:30 CEST"})}</div></div>`;
  });

  modalBody.innerHTML = `
    <div class="exact-time-banner"><span class="exact-time-icon">🌟</span><div><div class="exact-time-title">${T("modalMaxTitle")}</div><div class="exact-time-clock">${loc.timeline.totalityMax} (C2-C3)</div></div></div>
    <div><div class="modal-section-title">${T("modalAstroTitle", {location: loc.name})}</div><div class="astrology-modal-grid"><div class="astro-chart-box">${astroData.chartSVG}</div><div class="astro-details-box"><div class="astro-card-title">${T("astroCelestial")}</div><p>${T("astroSunMoon")} <span class="gold-text">${astroData.zodiacDegree}</span></p><p>${T("astroAsc")} ${astroData.ascendant}</p><p>${T("astroMC")} ${astroData.midheaven}</p><p>${T("astroStar")} ${astroData.regulusDistance}</p><p>${T("astroHorizon")} ${astroData.horizonElevation} / ${astroData.azimuth}</p><div class="mantra-box"><span class="mantra-title">${T("astroMantra")}</span><p class="mantra-text">${astroData.mantra}</p></div></div></div><div style="margin-top:10px;font-size:0.85rem;color:#94a3b8;line-height:1.4;">${astroData.astrologicalInsight}</div></div>
    <div><div class="modal-section-title">${T("modalTimeline")}</div><div class="info-grid"><div class="info-card"><span class="info-label">${T("partialStart")}</span><span class="info-value">${loc.timeline.partialStart}</span></div><div class="info-card highlight-card"><span class="info-label">${T("totalityStart")}</span><span class="info-value gold-text">${loc.timeline.totalityStart}</span></div><div class="info-card highlight-card"><span class="info-label">${T("maximum")}</span><span class="info-value gold-text">${loc.timeline.totalityMax}</span></div><div class="info-card"><span class="info-label">${T("totalityEnd")}</span><span class="info-value">${loc.timeline.totalityEnd}</span></div><div class="info-card"><span class="info-label">${T("sunset")}</span><span class="info-value">${loc.timeline.sunset}</span></div><div class="info-card"><span class="info-label">${T("altAzimuth")}</span><span class="info-value">${loc.timeline.sunAltitude} / ${loc.timeline.sunAzimuth}</span></div></div></div>
    <div class="modal-two-col"><div class="food-card"><div class="food-title">${T("modalGastro", {location: loc.name})}</div><ul class="food-list">${dishesHTML}</ul><div style="margin-top:8px;font-size:0.8rem;color:#fbbf24;">${T("whatToEatDrink", {drink: loc.whatToEat?.drinks || "Local wine"})}</div></div><div><div class="food-title">${T("modalRestaurants")}</div>${restHTML}</div></div>
    <div><div class="modal-section-title">${T("modalSpots")}</div>${spotsHTML}<div class="parking-box" style="margin-top:8px;"><div class="parking-title">${T("modalParking")}</div><p style="font-size:0.8rem;color:#94a3b8;margin-top:4px;">${T("modalParkingAccess", {area: loc.parkingLogistics.mainArea, note: loc.parkingLogistics.capacityNote})}</p></div></div>
    <div><div class="modal-section-title">${T("modalHotels")}</div><div class="live-hotel-links"><a href="${liveUrls.bookingUrl}" target="_blank" rel="noopener" class="btn-live-api">Booking.com ↗</a><a href="${liveUrls.googleHotelsUrl}" target="_blank" rel="noopener" class="btn-live-api">Google Hotels ↗</a><a href="${liveUrls.kayakUrl}" target="_blank" rel="noopener" class="btn-live-api">Kayak ↗</a></div></div>
  `;
  modal.classList.remove("hidden");
}

function closeLocationModal() {
  document.getElementById("location-modal")?.classList.add("hidden");
}

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
        <div class="search-item-title">${loc.isTop10 ? '⭐ [VIP TOP 10] ' : ''}${loc.name}</div>
        <div class="search-item-sub">${i18n.t("popupMax")} <b style="color:#fbbf24">${loc.timeline.totalityMax}</b> | ${loc.timeline.formattedDuration}</div>
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
  searchInput.addEventListener("input", (e) => { document.getElementById("search-dropdown")?.classList.remove("hidden"); renderList(e.target.value); });
  searchInput.addEventListener("focus", () => { document.getElementById("search-dropdown")?.classList.remove("hidden"); });
}

function showGeneralViewPanel() {
  const T = (k, p) => i18n.t(k, p);
  const count = ECLIPSE_DATA.locations.length;
  document.getElementById("detail-title").innerText = T("generalTitle");
  document.getElementById("detail-province").innerText = T("generalSub", { count });
  document.getElementById("detail-duration-badge").innerText = T("generalDate");
  document.getElementById("tour-counter").innerText = T("tourGeneralView");
  document.getElementById("exact-time-banner")?.classList.add("hidden");
  document.getElementById("detail-vip-badge")?.classList.add("hidden");
  document.getElementById("detail-hero-wrapper")?.classList.add("hidden");

  const html = `<div class="general-view-card"><h3 class="general-view-title">${T("generalViewTitle")}</h3><p class="general-view-desc">${T("generalViewDesc", { count })}</p></div>`;
  ["tab-astro-content","tab-route-content","tab-hotels-content","tab-todo-content","tab-what-to-eat-content","tab-where-to-eat-content","tab-logistics-content","tab-astrology-content"].forEach(id => {
    document.getElementById(id).innerHTML = html;
  });
}

async function updateDetailPanels(loc) {
  const T = (k, p) => i18n.t(k, p);

  document.getElementById("detail-title").innerText = loc.name;
  document.getElementById("detail-province").innerText = `${T("province")}: ${loc.province}`;
  document.getElementById("detail-duration-badge").innerText = `⏱️ ${loc.timeline.formattedDuration} ${T("durationOf")}`;

  const heroWrapper = document.getElementById("detail-hero-wrapper");
  const heroImg = document.getElementById("detail-hero-img");
  if (heroWrapper && heroImg) {
    heroImg.onerror = () => { heroImg.src = GLOBAL_FALLBACK_IMAGE; };
    heroImg.src = loc.imageUrl || GLOBAL_FALLBACK_IMAGE;
    heroWrapper.classList.remove("hidden");
  }

  const vipBadge = document.getElementById("detail-vip-badge");
  if (vipBadge) {
    vipBadge.innerText = T("vipBadge");
    loc.isTop10 ? vipBadge.classList.remove("hidden") : vipBadge.classList.add("hidden");
  }

  const exactBanner = document.getElementById("exact-time-banner");
  const exactClock = document.getElementById("exact-time-value");
  if (exactBanner && exactClock) {
    exactClock.innerText = `${loc.timeline.totalityMax} (C2-C3)`;
    exactBanner.classList.remove("hidden");
  }

  // Tab 1: Astronomy
  document.getElementById("tab-astro-content").innerHTML = `
    <div class="info-grid">
      <div class="info-card"><span class="info-label">${T("partialStart")}</span><span class="info-value">${loc.timeline.partialStart}</span></div>
      <div class="info-card highlight-card"><span class="info-label">${T("totalityStart")}</span><span class="info-value gold-text">${loc.timeline.totalityStart}</span></div>
      <div class="info-card highlight-card"><span class="info-label">${T("maximum")}</span><span class="info-value gold-text" style="font-size:1.1rem;">${loc.timeline.totalityMax}</span></div>
      <div class="info-card"><span class="info-label">${T("totalityEnd")}</span><span class="info-value">${loc.timeline.totalityEnd}</span></div>
      <div class="info-card"><span class="info-label">${T("sunset")}</span><span class="info-value">${loc.timeline.sunset}</span></div>
      <div class="info-card"><span class="info-label">${T("altAzimuth")}</span><span class="info-value">${loc.timeline.sunAltitude} / ${loc.timeline.sunAzimuth}</span></div>
    </div>`;

  // Tab 2: Route
  updateRoutePlannerView(loc);

  // Tab 3: Hotels
  const liveUrls = realAPIs.generateLiveBookingSearchUrl(loc.name, loc.coords[0], loc.coords[1]);
  document.getElementById("tab-hotels-content").innerHTML = `
    <div class="hotel-live-api-box"><div class="hotel-api-title">${T("hotelApiTitle")}</div><p style="font-size:0.8rem;">${T("hotelApiDesc", {location: loc.name})}</p><div class="live-hotel-links"><a href="${liveUrls.bookingUrl}" target="_blank" rel="noopener" class="btn-live-api">Booking.com ↗</a><a href="${liveUrls.googleHotelsUrl}" target="_blank" rel="noopener" class="btn-live-api">Google Hotels ↗</a><a href="${liveUrls.kayakUrl}" target="_blank" rel="noopener" class="btn-live-api">Kayak ↗</a></div></div>
    <div id="osm-hotels-container"><div class="section-subtitle">${T("hotelOsmQuerying", {location: loc.name})}</div></div>`;

  realAPIs.fetchRealOSMAccommodations(loc.coords[0], loc.coords[1]).then((osmHotels) => {
    const container = document.getElementById("osm-hotels-container");
    if (!container) return;
    if (osmHotels && osmHotels.length > 0) {
      let html = `<div class="section-subtitle">${T("hotelOsmTitle")}</div>`;
      osmHotels.forEach((h) => {
        html += `<div class="hotel-card"><div class="hotel-header"><span class="hotel-name">${h.name}</span><span class="hotel-type">${h.type}</span></div><div class="hotel-body"><span class="hotel-price">📏 ${h.distanceKm} km</span><span class="badge badge-success">${T("hotelLocated")}</span></div>${h.website ? `<a href="${h.website}" target="_blank" rel="noopener" class="btn-book">${T("hotelOfficialSite")}</a>` : `<a href="${h.osmUrl}" target="_blank" rel="noopener" class="btn-book">${T("hotelViewOSM")}</a>`}</div>`;
      });
      container.innerHTML = html;
    } else {
      let html = `<div class="section-subtitle">${T("hotelRecommended", {location: loc.name})}</div>`;
      loc.accommodations.forEach((h) => {
        html += `<div class="hotel-card"><div class="hotel-header"><span class="hotel-name">${h.name}</span><span class="hotel-type">${h.type}</span></div><div class="hotel-body"><span class="hotel-price">${h.priceRange}</span><span class="badge badge-${h.availabilityBadge}">${h.availabilityStatus}</span></div><a href="${h.link}" target="_blank" rel="noopener" class="btn-book">${T("hotelCheckAvail")}</a></div>`;
      });
      container.innerHTML = html;
    }
  });

  // Tab 4: Activities
  document.getElementById("tab-todo-content").innerHTML = `
    <div class="activity-timeline">
      <div class="activity-card"><div class="activity-time">${T("actMorning", {location: loc.name})}</div><div class="activity-desc">${loc.whatToDo.morning}</div></div>
      <div class="activity-card"><div class="activity-time">${T("actAfternoon")}</div><div class="activity-desc">${loc.whatToDo.afternoon}</div></div>
      <div class="activity-card highlight-activity"><div class="activity-time">${T("actEclipse", {time: loc.timeline.totalityMax})}</div><div class="activity-desc">${loc.whatToDo.eclipseMoment}</div></div>
      <div class="activity-card"><div class="activity-time">${T("actNight")}</div><div class="activity-desc">${loc.whatToDo.night}</div></div>
    </div>`;

  // Tab 5: What to Eat
  let eatHTML = `<div class="food-card"><div class="food-title">${T("whatToEatTitle", {location: loc.name})}</div><ul class="food-list">`;
  if (loc.whatToEat?.dishes) loc.whatToEat.dishes.forEach((d) => eatHTML += `<li>🍴 <b>${d}</b></li>`);
  eatHTML += `</ul><div style="margin-top:10px;font-size:0.85rem;color:#fbbf24;">${T("whatToEatDrink", {drink: loc.whatToEat?.drinks || "Local wine"})}</div></div>`;
  document.getElementById("tab-what-to-eat-content").innerHTML = eatHTML;

  // Tab 6: Where to Eat
  let restHTML = `<div class="section-subtitle">${T("whereToEatTitle", {location: loc.name})}</div>`;
  if (loc.whereToEat) loc.whereToEat.forEach((r) => {
    restHTML += `<div class="restaurant-card"><div class="restaurant-header"><span class="restaurant-name">${r.name}</span><span class="restaurant-price">${r.priceRange}</span></div><div class="restaurant-sub">${T("whereToEatType", {type: r.type, spec: r.specialty})}</div><a href="${r.link}" target="_blank" rel="noopener" class="btn-book" style="margin-top:6px;display:inline-block;">${T("bookTable")}</a></div>`;
  });
  document.getElementById("tab-where-to-eat-content").innerHTML = restHTML;

  // Tab 7: Viewpoints/Logistics
  let spotsHTML = `<div class="section-subtitle">${T("spotsTitle", {location: loc.name})}</div><div class="spots-list">`;
  loc.publicObservationSpots.forEach((spot) => {
    const optTime = spot.optimalTime || `${loc.timeline.totalityStart} - ${loc.timeline.totalityEnd}`;
    spotsHTML += `<div class="spot-card"><div class="spot-name">${spot.name}</div><div class="spot-desc">${spot.desc}</div><div class="spot-optimal-badge" style="background:rgba(251,191,36,0.15);border:1px solid #fbbf24;color:#fbbf24;padding:6px 10px;border-radius:6px;margin:6px 0;font-size:0.8rem;font-weight:600;">${T("optimalTime", {time: optTime})}<br>${T("arrivalRecommended", {arrival: spot.recommendedArrival || "17:30 CEST"})}</div><div class="spot-meta">🅿️ Parking: ${spot.parkingNearby}</div></div>`;
  });
  spotsHTML += `</div><div class="parking-box"><div class="parking-title">${T("parkingTitle", {location: loc.name})}</div><div class="parking-details"><p>${T("parkingMainArea", {area: loc.parkingLogistics.mainArea})}</p><p>${T("parkingNote", {note: loc.parkingLogistics.capacityNote})}</p><p>${T("parkingTraffic", {advice: loc.parkingLogistics.trafficAdvice})}</p></div></div>`;
  document.getElementById("tab-logistics-content").innerHTML = spotsHTML;

  // Tab 8: Astrology
  const astroData = realAPIs.calculateRealAstrologyEphemeris(loc.coords[0], loc.coords[1], loc.name);
  document.getElementById("tab-astrology-content").innerHTML = `
    <div class="astrology-container">
      <div class="astro-chart-box" style="text-align:center;margin-bottom:12px;">${astroData.chartSVG}</div>
      <div class="astrology-header"><div class="astrology-symbol">♌ 20°</div><div class="astrology-meta"><div class="astro-degree">${T("zodiacDegree")}: <b>${astroData.zodiacDegree}</b></div><div class="astro-star">${T("alignment")}: <b>${astroData.regulusDistance}</b></div><div class="astro-element">${T("ascendant")}: <b>${astroData.ascendant}</b></div></div></div>
      <div class="astrology-reading"><h4>${T("astroReading")}</h4><p>${astroData.astrologicalInsight}</p><div class="mantra-box" style="margin-top:10px;"><span class="mantra-title">${T("astroMantra")}</span><p class="mantra-text">${astroData.mantra}</p></div></div>
      <div class="history-box" style="margin-top:10px;"><h4>${T("astroHistory", {location: loc.name})}</h4><p>${loc.history}</p></div>
    </div>`;
}

function updateRoutePlannerView(loc) {
  const T = (k, p) => i18n.t(k, p);
  const selectElem = document.getElementById("route-origin-select");
  const originVal = selectElem ? selectElem.value : "madrid";
  let routeData = loc.routePlanner[originVal] || loc.routePlanner["madrid"];
  const originObj = ECLIPSE_DATA.origins.find((o) => o.id === originVal) || ECLIPSE_DATA.origins[0];

  document.getElementById("tab-route-content").innerHTML = `
    <div class="route-planner-card"><div class="route-header"><span>${T("routeOrigin", {origin: originObj.name})}</span><span>➔</span><span>${T("routeDestination", {dest: loc.name})}</span></div><div class="route-stats"><div class="stat-box"><span class="stat-label">${T("distanceEstimated")}</span><span class="stat-value">${routeData.distanceKm} km</span></div><div class="stat-box"><span class="stat-label">${T("travelTime")}</span><span class="stat-value gold-text">${routeData.travelTime}</span></div></div><div class="route-path-box"><span class="route-label">${T("routeRecommended")}</span><div class="route-text">${routeData.route}</div></div></div>`;
}

function updateTourControls(index) {
  const el = document.getElementById("tour-counter");
  if (el) el.innerText = i18n.t("tourCounter", { current: index + 1, total: ECLIPSE_DATA.locations.length });
}

function setupEventListeners() {
  const navCards = document.querySelectorAll(".nav-card");
  navCards.forEach((card) => {
    const handleTabClick = (e) => {
      e.preventDefault();
      const targetCard = e.currentTarget;
      const targetId = targetCard.getAttribute("data-tab");
      navCards.forEach((c) => c.classList.remove("active"));
      targetCard.classList.add("active");
      document.querySelectorAll(".tab-pane").forEach((pane) => pane.classList.remove("active"));
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add("active");
        targetPane.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    };
    card.addEventListener("click", handleTabClick);
    card.addEventListener("touchend", handleTabClick);
  });

  document.getElementById("route-origin-select")?.addEventListener("change", () => {
    if (mapManager.activeLocation) updateRoutePlannerView(mapManager.activeLocation);
  });

  document.getElementById("btn-tour-prev")?.addEventListener("click", () => mapManager.walkPrev());
  document.getElementById("btn-tour-next")?.addEventListener("click", () => mapManager.walkNext());
  document.getElementById("btn-reset-view")?.addEventListener("click", () => mapManager.resetToGeneralView());

  // BRAND TITLE & LOGO CLICK: RETURN TO INITIAL MAP VIEW (HOME LINK)
  const returnToHome = (e) => {
    e.preventDefault();
    mapManager.resetToGeneralView();
    closeLocationModal();
    closeSafetyModal();
    if (window.innerWidth <= 768) {
      switchMobileView("map");
    }
  };

  const brandContainer = document.getElementById("brand-container");
  if (brandContainer) {
    brandContainer.addEventListener("click", returnToHome);
    brandContainer.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") returnToHome(e);
    });
  }

  // Safety Modal Listeners
  document.getElementById("btn-safety-toggle")?.addEventListener("click", () => openSafetyModal());
  document.getElementById("safety-close-btn")?.addEventListener("click", () => closeSafetyModal());
  document.getElementById("safety-modal")?.addEventListener("click", (e) => {
    if (e.target.id === "safety-modal") closeSafetyModal();
  });

  document.getElementById("modal-close-btn")?.addEventListener("click", () => closeLocationModal());
  document.getElementById("location-modal")?.addEventListener("click", (e) => {
    if (e.target.id === "location-modal") closeLocationModal();
  });
}

function openSafetyModal() {
  document.getElementById("safety-modal")?.classList.remove("hidden");
}

function closeSafetyModal() {
  document.getElementById("safety-modal")?.classList.add("hidden");
}
