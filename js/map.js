/**
 * viveElEclipse2026 - Gestor del Mapa Interactivo Leaflet.js
 * Destaca los 10 Puntos VIP Top con icono dorado resplandeciente, imágenes fotográficas garantizadas e interceptor DomEvent.
 */
class EclipseMapManager {
  constructor() {
    this.map = null;
    this.markers = [];
    this.activeLocationIndex = null;
    this.activeLocation = null;
    
    // Bounds generales de España peninsular + Baleares
    this.spainBounds = [
      [35.8, -9.8], // Sudoeste
      [43.9, 4.5]   // Noreste
    ];
  }

  initMap(containerId = "map-container") {
    if (this.map) return;

    // Crear mapa Leaflet
    this.map = L.map(containerId, {
      zoomControl: true,
      scrollWheelZoom: true
    });

    // Añadir capa de azulejos oscuros (CartoDB Dark Matter)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(this.map);

    // Escuchar el evento 'popupopen' para vincular con 100% de fiabilidad el botón "Ver Ficha Completa"
    this.map.on('popupopen', (e) => {
      const popupContentWrapper = e.popup.getElement();
      if (popupContentWrapper) {
        const btn = popupContentWrapper.querySelector('.popup-btn');
        if (btn) {
          L.DomEvent.disableClickPropagation(btn);
          L.DomEvent.off(btn, 'click');
          L.DomEvent.on(btn, 'click', (ev) => {
            L.DomEvent.stop(ev);
            const index = parseInt(btn.getAttribute('data-index'), 10);
            if (!isNaN(index) && ECLIPSE_DATA.locations[index]) {
              this.selectLocationByIndex(index);
              if (window.openLocationModal) {
                window.openLocationModal(ECLIPSE_DATA.locations[index]);
              }
            }
          });
        }
      }
    });

    // Renderizar GeoJSON de la Franja de Totalidad y Línea Central
    this.renderEclipsePath();

    // Renderizar Marcadores de Municipios (10 VIP en Dorado + 40 Estándar en Cian)
    this.renderLocationMarkers();

    // Establecer vista inicial en toda la Península Ibérica + Baleares
    this.resetToGeneralView();
  }

  // Renderizar la sombra GeoJSON de la totalidad
  renderEclipsePath() {
    if (!ECLIPSE_DATA.pathGeoJSON) return;

    L.geoJSON(ECLIPSE_DATA.pathGeoJSON, {
      style: (feature) => {
        if (feature.geometry.type === 'Polygon') {
          return {
            color: '#fbbf24',
            weight: 2.5,
            opacity: 0.8,
            fillColor: '#06070d',
            fillOpacity: 0.5,
            dashArray: '6, 6'
          };
        } else if (feature.geometry.type === 'LineString') {
          return {
            color: '#38bdf8',
            weight: 3,
            opacity: 0.9,
            dashArray: '4, 4'
          };
        }
      }
    }).addTo(this.map);
  }

  // Renderizar marcadores con distinción VIP Top 10 e imágenes garantizadas
  renderLocationMarkers() {
    this.markers = [];
    const fallbackImg = "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=800&q=80";

    ECLIPSE_DATA.locations.forEach((loc, index) => {
      const isVip = loc.isTop10;

      // Icono personalizado: Dorado resplandeciente para VIP, Cian para Estándar
      const customIcon = L.divIcon({
        className: 'custom-map-icon-wrapper',
        html: isVip ? `
          <div class="marker-container marker-vip" title="${loc.name}">
            <div class="marker-pulse-vip"></div>
            <div class="marker-core-vip">⭐</div>
          </div>
        ` : `
          <div class="marker-container marker-standard" title="${loc.name}">
            <div class="marker-pulse-std"></div>
            <div class="marker-core-std">☀️</div>
          </div>
        `,
        iconSize: isVip ? [36, 36] : [26, 26],
        iconAnchor: isVip ? [18, 18] : [13, 13]
      });

      const marker = L.marker(loc.coords, { icon: customIcon }).addTo(this.map);

      const displayImg = loc.imageUrl || fallbackImg;

      // Contenido del Popup con etiqueta img e interceptor onerror
      const popupContent = `
        <div class="map-popup-card ${isVip ? 'popup-vip' : ''}">
          <div class="popup-thumb-box">
            <img src="${displayImg}" alt="${loc.name}" class="popup-thumb-img" onerror="this.onerror=null; this.src='${fallbackImg}';">
          </div>
          <div class="popup-title">
            ${isVip ? '🏆 <b>PUNTO TOP 10 VIP</b><br>' : ''}${loc.name}
          </div>
          <div class="popup-sub">${loc.province}</div>
          <div class="popup-time">🌟 Máximo: <b>${loc.timeline.totalityMax}</b></div>
          <div class="popup-duration">⏱️ ${loc.timeline.formattedDuration} de totalidad</div>
          <button data-index="${index}" class="popup-btn">
            Ver Ficha Completa ➔
          </button>
        </div>
      `;

      marker.bindPopup(popupContent, { offset: [0, -10], maxWidth: 260 });

      marker.on('click', () => {
        this.selectLocationByIndex(index);
      });

      this.markers.push(marker);
    });
  }

  // Restablecer cámara a toda la Península Ibérica + Baleares
  resetToGeneralView() {
    this.activeLocationIndex = null;
    this.activeLocation = null;
    this.map.fitBounds(this.spainBounds, { padding: [20, 20], animate: true, duration: 1.2 });
    
    if (window.onGeneralViewSelected) {
      window.onGeneralViewSelected();
    }
  }

  // Seleccionar un municipio por índice y hacer flyTo
  selectLocationByIndex(index) {
    if (index < 0 || index >= ECLIPSE_DATA.locations.length) return;

    this.activeLocationIndex = index;
    const loc = ECLIPSE_DATA.locations[index];
    this.activeLocation = loc;

    // Animación suave de cámara Leaflet (flyTo a Zoom 13)
    this.map.flyTo(loc.coords, 13, {
      animate: true,
      duration: 1.5
    });

    // Abrir el popup del marcador correspondiente
    if (this.markers[index]) {
      this.markers[index].openPopup();
    }

    // Disparar evento global para actualizar los paneles de la izquierda
    if (window.onLocationSelected) {
      window.onLocationSelected(loc, index);
    }
  }

  // Siguiente punto del tour
  walkNext() {
    let nextIdx = (this.activeLocationIndex === null) ? 0 : (this.activeLocationIndex + 1) % ECLIPSE_DATA.locations.length;
    this.selectLocationByIndex(nextIdx);
  }

  // Anterior punto del tour
  walkPrev() {
    let prevIdx = (this.activeLocationIndex === null || this.activeLocationIndex === 0) 
      ? ECLIPSE_DATA.locations.length - 1 
      : this.activeLocationIndex - 1;
    this.selectLocationByIndex(prevIdx);
  }
}

// Instancia global
const mapManager = new EclipseMapManager();
window.mapManager = mapManager;
