/**
 * Módulo de Geolocalización y Cuenta Atrás para el Eclipse Solar 2026
 */
class GeolocationManager {
  constructor() {
    this.targetDate = new Date("2026-08-12T20:26:00+02:00").getTime();
    this.userCoords = null;
    this.initCountdown();
  }

  // Iniciar la cuenta atrás en vivo
  initCountdown() {
    const update = () => {
      const now = new Date().getTime();
      const distance = this.targetDate - now;

      if (distance < 0) {
        document.getElementById("countdown-days").innerText = "00";
        document.getElementById("countdown-hours").innerText = "00";
        document.getElementById("countdown-mins").innerText = "00";
        document.getElementById("countdown-secs").innerText = "00";
        document.getElementById("countdown-status").innerText = "¡EL ECLIPSE ESTÁ OCURRIENDO EN DIRECTO!";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const daysElem = document.getElementById("countdown-days");
      const hoursElem = document.getElementById("countdown-hours");
      const minsElem = document.getElementById("countdown-mins");
      const secsElem = document.getElementById("countdown-secs");

      if (daysElem) daysElem.innerText = String(days).padStart(2, "0");
      if (hoursElem) hoursElem.innerText = String(hours).padStart(2, "0");
      if (minsElem) minsElem.innerText = String(minutes).padStart(2, "0");
      if (secsElem) secsElem.innerText = String(seconds).padStart(2, "0");
    };

    update();
    setInterval(update, 1000);
  }

  // Solicitar ubicación del usuario
  getUserLocation(callback) {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.userCoords = [position.coords.latitude, position.coords.longitude];
          const info = this.evaluateLocation(this.userCoords[0], this.userCoords[1]);
          if (callback) callback(null, this.userCoords, info);
        },
        (error) => {
          console.warn("Geolocalización rechazada o fallida:", error);
          // Fallback por defecto: Madrid
          const fallbackCoords = [40.4168, -3.7038];
          const info = this.evaluateLocation(fallbackCoords[0], fallbackCoords[1]);
          if (callback) callback(error, fallbackCoords, info);
        },
        { enableHighAccuracy: true, timeout: 8000 }
      );
    } else {
      const fallbackCoords = [40.4168, -3.7038];
      const info = this.evaluateLocation(fallbackCoords[0], fallbackCoords[1]);
      if (callback) callback("No soportado", fallbackCoords, info);
    }
  }

  // Evaluar si una coordenada está cerca o dentro de la franja
  evaluateLocation(lat, lng) {
    // Estimación rápida de la franja peninsular (Lat entre 38.5 y 43.8, Lng entre -9.5 y 4.5)
    // Para la demo calculamos la distancia a la ciudad más cercana de la franja
    let minDistance = Infinity;
    let closestLocation = null;

    ECLIPSE_DATA.locations.forEach((loc) => {
      const dist = this.calculateHaversineDistance(lat, lng, loc.coords[0], loc.coords[1]);
      if (dist < minDistance) {
        minDistance = dist;
        closestLocation = loc;
      }
    });

    const inTotality = minDistance <= 140; // 140 km radio de sombra
    return {
      inTotality: inTotality,
      distanceKm: Math.round(minDistance),
      closestLocation: closestLocation,
      message: inTotality
        ? `🟢 ¡Estás dentro de la Franja de Totalidad! (Cerca de ${closestLocation.name})`
        : `🟡 Estás a aprox. ${Math.round(minDistance)} km de la franja. Te recomendamos desplazarte hacia ${closestLocation.name}.`
    };
  }

  // Fórmula Haversine para distancia terrestre
  calculateHaversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radio de la Tierra en km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }
}

const geoManager = new GeolocationManager();
