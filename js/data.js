/* ==========================================================================
   viveElEclipse2026 - Base de Datos Oficial (50 Municipios Enriquecidos)
   5 Alojamientos, 5 Restaurantes, 5 Miradores y 5 Platos Típicos por municipio
   ========================================================================== */

var ECLIPSE_DATA = {
  "pathGeoJSON": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "name": "Franja de Totalidad 2026 (España)"
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -9.8,
                43.9
              ],
              [
                -8,
                43.8
              ],
              [
                -4.5,
                43.6
              ],
              [
                -1.5,
                43.4
              ],
              [
                0.8,
                42.5
              ],
              [
                3.8,
                40.8
              ],
              [
                4.5,
                39.7
              ],
              [
                4.2,
                38.4
              ],
              [
                2.5,
                38.2
              ],
              [
                -0.8,
                39.4
              ],
              [
                -2.8,
                40.4
              ],
              [
                -4.5,
                40.8
              ],
              [
                -7.5,
                41.8
              ],
              [
                -9.8,
                42.4
              ],
              [
                -9.8,
                43.9
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Línea Central de Totalidad"
        },
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [
              -9,
              43.5
            ],
            [
              -6,
              43.2
            ],
            [
              -3,
              42.4
            ],
            [
              0,
              41.2
            ],
            [
              2.5,
              39.8
            ],
            [
              4,
              39.2
            ]
          ]
        }
      }
    ]
  },
  "origins": [
    {
      "id": "madrid",
      "name": "Madrid",
      "coords": [
        40.4168,
        -3.7038
      ]
    },
    {
      "id": "barcelona",
      "name": "Barcelona",
      "coords": [
        41.3851,
        2.1734
      ]
    },
    {
      "id": "valencia",
      "name": "Valencia",
      "coords": [
        39.4699,
        -0.3763
      ]
    },
    {
      "id": "sevilla",
      "name": "Sevilla",
      "coords": [
        37.3891,
        -5.9845
      ]
    },
    {
      "id": "bilbao",
      "name": "Bilbao",
      "coords": [
        43.263,
        -2.935
      ]
    },
    {
      "id": "tarragona",
      "name": "Tarragona",
      "coords": [
        41.1189,
        1.2449
      ]
    }
  ],
  "locations": [
    {
      "id": "muxia",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a9/20240126_090324_Santuario_de_Nuestra_Se%C3%B1ora_de_la_Barca.jpg",
      "name": "Muxía & Costa da Morte",
      "province": "A Coruña (Galicia)",
      "coords": [
        43.106,
        -9.217
      ],
      "timeline": {
        "partialStart": "19:30:00 CEST",
        "totalityStart": "20:26:15 CEST",
        "totalityMax": "20:27:08 CEST",
        "totalityEnd": "20:28:01 CEST",
        "sunset": "21:24:00 CEST",
        "formattedDuration": "1 min 46 seg",
        "sunAltitude": "11.1°",
        "sunAzimuth": "287° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 640,
          "travelTime": "6h 00m",
          "route": "A-6 ➔ AG-55 ➔ AC-552"
        },
        "barcelona": {
          "distanceKm": 1060,
          "travelTime": "10h 00m",
          "route": "A-8 ➔ AG-55"
        }
      },
      "whatToDo": {
        "morning": "Santuario de la Virgen de la Barca.",
        "afternoon": "Faro de Cabo Touriñán.",
        "eclipseMoment": "Totalidad a 11° sobre el Atlántico.",
        "night": "Queimada y mariscada en el puerto."
      },
      "publicObservationSpots": [
        {
          "name": "Santuario da Virxe da Barca",
          "desc": "Rocas graniticas sobre el mar.",
          "parkingNearby": "Parking da Barca",
          "optimalTime": "20:26 - 20:28 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Muxía",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:26:15 CEST - 20:28:01 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:26:15 CEST - 20:28:01 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Muxía",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:26:15 CEST - 20:28:01 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:26:15 CEST - 20:28:01 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Puerto de Muxía.",
        "capacityNote": "Llegar antes de las 15:00 CEST.",
        "coordinates": "43.1118, -9.2190",
        "trafficAdvice": "Acceso por AC-440 desde Cee."
      },
      "accommodations": [
        {
          "name": "Parador de Muxía 4★",
          "type": "Parador Nacional",
          "priceRange": "€€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Mux%C3%ADa",
          "availabilityStatus": "Agotado",
          "availabilityBadge": "danger"
        },
        {
          "name": "Hotel Boutique Plaza Muxía",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Mux%C3%ADa",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de A Coruña (Galicia)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Mux%C3%ADa",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Muxía",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Mux%C3%ADa",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Muxía",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Mux%C3%ADa",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Finis Terrae mítico precristiano.",
      "astrology": {
        "zodiacDegree": "20° 05' Leo",
        "fixedStar": "Regulus & Alphard",
        "element": "Agua Atlántica",
        "cosmicMeaning": "Portal del Fin del Mundo y renacimiento espiritual."
      },
      "isTop10": true,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Muxía",
          "Asado a la leña típico de A Coruña (Galicia)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Muxía"
        ],
        "drinks": "Vino Blanco Ribeiro o Albariño D.O. Rías Baixas"
      },
      "whereToEat": [
        {
          "name": "Restaurante A de Lolo",
          "type": "Marisquería y cocina atlántica",
          "specialty": "Percebes y pescados de la ría",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Mux%C3%ADa"
        },
        {
          "name": "Marisquería O Coído",
          "type": "Mesón marinero tradicional",
          "specialty": "Caldeirada de navajas y pulpo",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Mux%C3%ADa"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Mux%C3%ADa"
        },
        {
          "name": "Asador Don Manuel de Muxía",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Mux%C3%ADa"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Mux%C3%ADa"
        }
      ]
    },
    {
      "id": "finisterre",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/64/Faro_de_Finesterre_-_52404063596.jpg",
      "name": "Faro de Fisterra",
      "province": "A Coruña (Galicia)",
      "coords": [
        42.882,
        -9.272
      ],
      "timeline": {
        "partialStart": "19:30:05 CEST",
        "totalityStart": "20:26:20 CEST",
        "totalityMax": "20:27:12 CEST",
        "totalityEnd": "20:28:04 CEST",
        "sunset": "21:25:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "11.3°",
        "sunAzimuth": "287° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 650,
          "travelTime": "6h 10m",
          "route": "A-6 ➔ C-552"
        }
      },
      "whatToDo": {
        "morning": "Monte Facho.",
        "afternoon": "Caminata al cabo.",
        "eclipseMoment": "Totalidad a 11.3° donde acababa el mundo.",
        "night": "Mariscada marinera."
      },
      "publicObservationSpots": [
        {
          "name": "Acantilados del Faro de Fisterra",
          "desc": "Horizonte WNW abierto.",
          "parkingNearby": "Parking Faro Fisterra",
          "optimalTime": "20:26 - 20:28 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Faro de Fisterra",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:26:20 CEST - 20:28:04 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:26:20 CEST - 20:28:04 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Faro de Fisterra",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:26:20 CEST - 20:28:04 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:26:20 CEST - 20:28:04 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Parking del Cabo Fisterra.",
        "capacityNote": "Saturación estival.",
        "coordinates": "42.8820, -9.2720",
        "trafficAdvice": "Subir a pie desde Fisterra."
      },
      "accommodations": [
        {
          "name": "Hotel O Semáforo",
          "type": "Hotel Faro",
          "priceRange": "€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Faro%20de%20Fisterra",
          "availabilityStatus": "Alta Demanda",
          "availabilityBadge": "warning"
        },
        {
          "name": "Hotel Boutique Plaza Faro de Fisterra",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Faro%20de%20Fisterra",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de A Coruña (Galicia)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Faro%20de%20Fisterra",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Faro de Fisterra",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Faro%20de%20Fisterra",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Faro de Fisterra",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Faro%20de%20Fisterra",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Punto final del Camino de Santiago.",
      "astrology": {
        "zodiacDegree": "20° 06' Leo",
        "fixedStar": "Regulus & Sirio",
        "element": "Agua Mística",
        "cosmicMeaning": "Purificación de ciclos vitales."
      },
      "isTop10": true,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Faro de Fisterra",
          "Asado a la leña típico de A Coruña (Galicia)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Faro de Fisterra"
        ],
        "drinks": "Vino blanco Godello u Oujo de Galicia"
      },
      "whereToEat": [
        {
          "name": "Restaurante O Lazo",
          "type": "Marisquería de puerto",
          "specialty": "Longueirones y parrillada de marisco",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Faro%20de%20Fisterra"
        },
        {
          "name": "Taverna O Semáforo",
          "type": "Gastronomía en el Cabo",
          "specialty": "Arroz con bogavante frente al mar",
          "priceRange": "€€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Faro%20de%20Fisterra"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Faro%20de%20Fisterra"
        },
        {
          "name": "Asador Don Manuel de Faro de Fisterra",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Faro%20de%20Fisterra"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Faro%20de%20Fisterra"
        }
      ]
    },
    {
      "id": "a-coruna",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/27/Torre_de_H%C3%A9rcules_2023.jpg",
      "name": "A Coruña & Torre de Hércules",
      "province": "A Coruña (Galicia)",
      "coords": [
        43.385,
        -8.406
      ],
      "timeline": {
        "partialStart": "19:30:10 CEST",
        "totalityStart": "20:26:40 CEST",
        "totalityMax": "20:27:32 CEST",
        "totalityEnd": "20:28:24 CEST",
        "sunset": "21:22:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "10.4°",
        "sunAzimuth": "287° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 590,
          "travelTime": "5h 30m",
          "route": "Autovía A-6"
        }
      },
      "whatToDo": {
        "morning": "Torre de Hércules.",
        "afternoon": "Praderas del faro.",
        "eclipseMoment": "Faro romano con la corona solar.",
        "night": "Calle Galera."
      },
      "publicObservationSpots": [
        {
          "name": "Torre de Hércules",
          "desc": "Faro romano patrimonio UNESCO.",
          "parkingNearby": "Parking Torre Hércules",
          "optimalTime": "20:26 - 20:28 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de A Coruña",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:26:40 CEST - 20:28:24 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:26:40 CEST - 20:28:24 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de A Coruña",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:26:40 CEST - 20:28:24 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:26:40 CEST - 20:28:24 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Aquarium Finisterrae.",
        "capacityNote": "Cortes de tráfico.",
        "coordinates": "43.3830, -8.4045",
        "trafficAdvice": "Usar autobús L3."
      },
      "accommodations": [
        {
          "name": "Hotel Finisterre 5★",
          "type": "Resort Urbano",
          "priceRange": "€€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=A%20Coru%C3%B1a",
          "availabilityStatus": "Alta Demanda",
          "availabilityBadge": "warning"
        },
        {
          "name": "Hotel Boutique Plaza A Coruña",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=A%20Coru%C3%B1a",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de A Coruña (Galicia)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=A%20Coru%C3%B1a",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar A Coruña",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=A%20Coru%C3%B1a",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de A Coruña",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=A%20Coru%C3%B1a",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Faro romano del siglo I.",
      "astrology": {
        "zodiacDegree": "20° 09' Leo",
        "fixedStar": "Regulus & Alhena",
        "element": "Agua & Fuego",
        "cosmicMeaning": "Luz de guía interior."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de A Coruña",
          "Asado a la leña típico de A Coruña (Galicia)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de A Coruña"
        ],
        "drinks": "Cerveza Estrella Galicia de bodega o Vino Ribeiro"
      },
      "whereToEat": [
        {
          "name": "A Mundiña",
          "type": "Restaurante de producto marino",
          "specialty": "Rodaballo salvaje y nécoras",
          "priceRange": "€€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+A%20Coru%C3%B1a"
        },
        {
          "name": "Taberna O Secreto",
          "type": "Bar de tapas tradicional",
          "specialty": "Pulpo asado y empanada casera",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+A%20Coru%C3%B1a"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+A%20Coru%C3%B1a"
        },
        {
          "name": "Asador Don Manuel de A Coruña",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+A%20Coru%C3%B1a"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+A%20Coru%C3%B1a"
        }
      ]
    },
    {
      "id": "ferrol",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f7/Castillo_de_San_Felipe_%28desde_La_Bailadora%29.JPG",
      "name": "Ferrol & Ría",
      "province": "A Coruña (Galicia)",
      "coords": [
        43.483,
        -8.233
      ],
      "timeline": {
        "partialStart": "19:30:15 CEST",
        "totalityStart": "20:26:45 CEST",
        "totalityMax": "20:27:37 CEST",
        "totalityEnd": "20:28:29 CEST",
        "sunset": "21:21:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "10.3°",
        "sunAzimuth": "287° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 605,
          "travelTime": "5h 40m",
          "route": "A-6 ➔ AP-9"
        }
      },
      "whatToDo": {
        "morning": "Arsenal militar.",
        "afternoon": "Castillo de San Felipe.",
        "eclipseMoment": "Totalidad sobre la ría.",
        "night": "Barrio de A Magdalena."
      },
      "publicObservationSpots": [
        {
          "name": "Castillo de San Felipe",
          "desc": "Fortaleza sobre la ría.",
          "parkingNearby": "Parking San Felipe",
          "optimalTime": "20:26 - 20:28 CEST",
          "recommendedArrival": "18:30 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Ferrol",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:26:45 CEST - 20:28:29 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:26:45 CEST - 20:28:29 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Ferrol",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:26:45 CEST - 20:28:29 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:26:45 CEST - 20:28:29 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Parking San Felipe.",
        "capacityNote": "Tráfico fluido.",
        "coordinates": "43.4830, -8.2330",
        "trafficAdvice": "Acceso por FE-15."
      },
      "accommodations": [
        {
          "name": "Parador de Ferrol 4★",
          "type": "Parador",
          "priceRange": "€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Ferrol",
          "availabilityStatus": "Plazas Disponibles",
          "availabilityBadge": "success"
        },
        {
          "name": "Hotel Boutique Plaza Ferrol",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Ferrol",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de A Coruña (Galicia)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Ferrol",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Ferrol",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Ferrol",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Ferrol",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Ferrol",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Base naval de la Ilustración.",
      "astrology": {
        "zodiacDegree": "20° 09' Leo",
        "fixedStar": "Regulus & Bellatrix",
        "element": "Fuego Naval",
        "cosmicMeaning": "Valor e integridad."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Ferrol",
          "Asado a la leña típico de A Coruña (Galicia)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Ferrol"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Ferrol & Ría",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Ferrol"
        },
        {
          "name": "Restaurante Plaza Real de Ferrol & Ría",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Ferrol"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Ferrol"
        },
        {
          "name": "Asador Don Manuel de Ferrol",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Ferrol"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Ferrol"
        }
      ]
    },
    {
      "id": "lugo",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/38/Muralla.Lugo.Galicia.jpg",
      "name": "Lugo & Muralla Romana",
      "province": "Lugo (Galicia)",
      "coords": [
        43.012,
        -7.556
      ],
      "timeline": {
        "partialStart": "19:30:45 CEST",
        "totalityStart": "20:27:10 CEST",
        "totalityMax": "20:28:02 CEST",
        "totalityEnd": "20:28:54 CEST",
        "sunset": "21:18:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "9.8°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 500,
          "travelTime": "4h 40m",
          "route": "A-6"
        }
      },
      "whatToDo": {
        "morning": "Muralla Romana.",
        "afternoon": "Catedral de Santa María.",
        "eclipseMoment": "Totalidad desde el adarve.",
        "night": "Tapas de pulpo."
      },
      "publicObservationSpots": [
        {
          "name": "Adarve Muralla Romana",
          "desc": "Paseo romano elevado.",
          "parkingNearby": "Parking Muralla",
          "optimalTime": "20:27 - 20:29 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Lugo",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:27:10 CEST - 20:28:54 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:27:10 CEST - 20:28:54 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Lugo",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:27:10 CEST - 20:28:54 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:27:10 CEST - 20:28:54 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Praza de Ferrol.",
        "capacityNote": "Peatonal.",
        "coordinates": "43.0120, -7.5560",
        "trafficAdvice": "Aparcar fuera de murallas."
      },
      "accommodations": [
        {
          "name": "Gran Hotel Lugo 4★",
          "type": "Hotel Urbano",
          "priceRange": "€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Lugo",
          "availabilityStatus": "Plazas Disponibles",
          "availabilityBadge": "success"
        },
        {
          "name": "Hotel Boutique Plaza Lugo",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Lugo",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Lugo (Galicia)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Lugo",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Lugo",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Lugo",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Lugo",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Lugo",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Lucus Augusti romana.",
      "astrology": {
        "zodiacDegree": "20° 10' Leo",
        "fixedStar": "Regulus & Spica",
        "element": "Tierra Romana",
        "cosmicMeaning": "Fortaleza inexpugnable."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Lugo",
          "Asado a la leña típico de Lugo (Galicia)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Lugo"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Lugo & Muralla Romana",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Lugo"
        },
        {
          "name": "Restaurante Plaza Real de Lugo & Muralla Romana",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Lugo"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Lugo"
        },
        {
          "name": "Asador Don Manuel de Lugo",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Lugo"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Lugo"
        }
      ]
    },
    {
      "id": "ribadeo",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e7/2101-_As_Catedrais_%28Lugo%29-jlcernadas.jpg",
      "name": "Ribadeo & Playa de las Catedrales",
      "province": "Lugo (Galicia)",
      "coords": [
        43.554,
        -7.073
      ],
      "timeline": {
        "partialStart": "19:30:50 CEST",
        "totalityStart": "20:27:15 CEST",
        "totalityMax": "20:28:07 CEST",
        "totalityEnd": "20:28:59 CEST",
        "sunset": "21:16:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "9.5°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 550,
          "travelTime": "5h 10m",
          "route": "A-6 ➔ A-8"
        }
      },
      "whatToDo": {
        "morning": "Arcos de As Catedrais.",
        "afternoon": "Isla Pancha.",
        "eclipseMoment": "Arcos de roca al atardecer.",
        "night": "Marisco en el puerto."
      },
      "publicObservationSpots": [
        {
          "name": "Playa de As Catedrais",
          "desc": "Arcos marinos de roca.",
          "parkingNearby": "Parking As Catedrais",
          "optimalTime": "20:27 - 20:29 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Ribadeo",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:27:15 CEST - 20:28:59 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:27:15 CEST - 20:28:59 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Ribadeo",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:27:15 CEST - 20:28:59 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:27:15 CEST - 20:28:59 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Parking As Catedrais.",
        "capacityNote": "Reserva obligatoria.",
        "coordinates": "43.5540, -7.0730",
        "trafficAdvice": "Consultar mareas."
      },
      "accommodations": [
        {
          "name": "Parador de Ribadeo 4★",
          "type": "Parador",
          "priceRange": "€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Ribadeo",
          "availabilityStatus": "Alta Demanda",
          "availabilityBadge": "warning"
        },
        {
          "name": "Hotel Boutique Plaza Ribadeo",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Ribadeo",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Lugo (Galicia)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Ribadeo",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Ribadeo",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Ribadeo",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Ribadeo",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Ribadeo",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Monumento natural marino.",
      "astrology": {
        "zodiacDegree": "20° 11' Leo",
        "fixedStar": "Regulus & Capella",
        "element": "Sal & Roca",
        "cosmicMeaning": "Arquitectura natural."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Ribadeo",
          "Asado a la leña típico de Lugo (Galicia)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Ribadeo"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Ribadeo & Playa de las Catedrales",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Ribadeo"
        },
        {
          "name": "Restaurante Plaza Real de Ribadeo & Playa de las Catedrales",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Ribadeo"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Ribadeo"
        },
        {
          "name": "Asador Don Manuel de Ribadeo",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Ribadeo"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Ribadeo"
        }
      ]
    },
    {
      "id": "santiago",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Santiago_cathedral_2021.jpg",
      "name": "Santiago de Compostela",
      "province": "A Coruña (Galicia)",
      "coords": [
        42.88,
        -8.544
      ],
      "timeline": {
        "partialStart": "19:30:15 CEST",
        "totalityStart": "20:26:30 CEST",
        "totalityMax": "20:27:22 CEST",
        "totalityEnd": "20:28:14 CEST",
        "sunset": "21:22:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "10.6°",
        "sunAzimuth": "287° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 600,
          "travelTime": "5h 30m",
          "route": "A-6 ➔ A-52"
        }
      },
      "whatToDo": {
        "morning": "Plaza del Obradoiro.",
        "afternoon": "Monte do Gozo.",
        "eclipseMoment": "Totalidad sobre las torres góticas.",
        "night": "Tapas Rúa do Franco."
      },
      "publicObservationSpots": [
        {
          "name": "Mirador de Monte do Gozo",
          "desc": "Vista elevada de las torres de la catedral.",
          "parkingNearby": "Parking Monte do Gozo",
          "optimalTime": "20:26 - 20:28 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Santiago de Compostela",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:26:30 CEST - 20:28:14 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:26:30 CEST - 20:28:14 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Santiago de Compostela",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:26:30 CEST - 20:28:14 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:26:30 CEST - 20:28:14 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Parking Salgueiriños.",
        "capacityNote": "Lanzadera al centro.",
        "coordinates": "42.8800, -8.5440",
        "trafficAdvice": "Aparcar fuera."
      },
      "accommodations": [
        {
          "name": "Parador de Santiago 5★",
          "type": "Parador Lujo",
          "priceRange": "€€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Santiago%20de%20Compostela",
          "availabilityStatus": "Agotado",
          "availabilityBadge": "danger"
        },
        {
          "name": "Hotel Boutique Plaza Santiago de Compostela",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Santiago%20de%20Compostela",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de A Coruña (Galicia)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Santiago%20de%20Compostela",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Santiago de Compostela",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Santiago%20de%20Compostela",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Santiago de Compostela",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Santiago%20de%20Compostela",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Meta del Camino de Santiago desde el siglo IX.",
      "astrology": {
        "zodiacDegree": "20° 08' Leo",
        "fixedStar": "Regulus & Compostela",
        "element": "Camino Espiritual",
        "cosmicMeaning": "Culminación del viaje del alma."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Santiago de Compostela",
          "Asado a la leña típico de A Coruña (Galicia)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Santiago de Compostela"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Santiago de Compostela",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Santiago%20de%20Compostela"
        },
        {
          "name": "Restaurante Plaza Real de Santiago de Compostela",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Santiago%20de%20Compostela"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Santiago%20de%20Compostela"
        },
        {
          "name": "Asador Don Manuel de Santiago de Compostela",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Santiago%20de%20Compostela"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Santiago%20de%20Compostela"
        }
      ]
    },
    {
      "id": "cabo-penas",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Vista_de_la_iglesia_de_Santa_Mar%C3%ADa_de_Luanco_y_la_playa.jpg",
      "name": "Cabo Peñas & Luanco",
      "province": "Asturias",
      "coords": [
        43.655,
        -5.85
      ],
      "timeline": {
        "partialStart": "19:31:05 CEST",
        "totalityStart": "20:27:18 CEST",
        "totalityMax": "20:28:10 CEST",
        "totalityEnd": "20:29:02 CEST",
        "sunset": "21:14:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "9.2°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 455,
          "travelTime": "4h 20m",
          "route": "AP-66"
        }
      },
      "whatToDo": {
        "morning": "Museo Marítimo Luanco.",
        "afternoon": "Meseta de Cabo Peñas.",
        "eclipseMoment": "Acantilados más al norte asturianos.",
        "night": "Sidra en Luanco."
      },
      "publicObservationSpots": [
        {
          "name": "Faro de Cabo Peñas",
          "desc": "100m de altura sobre el mar.",
          "parkingNearby": "Parking Faro Peñas",
          "optimalTime": "20:27 - 20:29 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Cabo Peñas",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:27:18 CEST - 20:29:02 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:27:18 CEST - 20:29:02 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Cabo Peñas",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:27:18 CEST - 20:29:02 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:27:18 CEST - 20:29:02 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Parking Centro Peñas.",
        "capacityNote": "Aforo 600 coches.",
        "coordinates": "43.6534, -5.8512",
        "trafficAdvice": "Llegar por GO-1."
      },
      "accommodations": [
        {
          "name": "La Plaza Luanco",
          "type": "Hotel",
          "priceRange": "€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Cabo%20Pe%C3%B1as",
          "availabilityStatus": "Plazas Disponibles",
          "availabilityBadge": "success"
        },
        {
          "name": "Hotel Boutique Plaza Cabo Peñas",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Cabo%20Pe%C3%B1as",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Asturias",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Cabo%20Pe%C3%B1as",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Cabo Peñas",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Cabo%20Pe%C3%B1as",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Cabo Peñas",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Cabo%20Pe%C3%B1as",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Faro icónico asturiano de 1852.",
      "astrology": {
        "zodiacDegree": "20° 11' Leo",
        "fixedStar": "Regulus & Dubhe",
        "element": "Cantábrico",
        "cosmicMeaning": "Fuerza telúrica del norte."
      },
      "isTop10": true,
      "whatToEat": {
        "dishes": [
          "Fabada Asturiana Tradicional",
          "Cachopo Asturiano de Ternera",
          "Pixín Agridulce o a la Plancha",
          "Queso Cabrales y Gamoneu",
          "Arroz con Leche Rebozado"
        ],
        "drinks": "Sidra natural de escanciar D.O. Asturias"
      },
      "whereToEat": [
        {
          "name": "Restaurante Guernica Luanco",
          "type": "Cocina asturiana de mar",
          "specialty": "Pixín de puerto y marañuelas",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Cabo%20Pe%C3%B1as"
        },
        {
          "name": "Marisquería El Marino",
          "type": "Mesón sidrería",
          "specialty": "Centollo y mariscos vivos",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Cabo%20Pe%C3%B1as"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Cabo%20Pe%C3%B1as"
        },
        {
          "name": "Asador Don Manuel de Cabo Peñas",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Cabo%20Pe%C3%B1as"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Cabo%20Pe%C3%B1as"
        }
      ]
    },
    {
      "id": "gijon",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Elogio_del_Horizonte_Gijon.jpg",
      "name": "Gijón & Elogio del Horizonte",
      "province": "Asturias",
      "coords": [
        43.545,
        -5.661
      ],
      "timeline": {
        "partialStart": "19:31:10 CEST",
        "totalityStart": "20:27:22 CEST",
        "totalityMax": "20:28:14 CEST",
        "totalityEnd": "20:29:06 CEST",
        "sunset": "21:13:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "9.1°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 465,
          "travelTime": "4h 25m",
          "route": "AP-66"
        }
      },
      "whatToDo": {
        "morning": "Cimavilla y San Lorenzo.",
        "afternoon": "Cerro de Santa Catalina.",
        "eclipseMoment": "Eclipse enmarcado en la escultura de Chillida.",
        "night": "Sidra en Cuesta del Cholo."
      },
      "publicObservationSpots": [
        {
          "name": "Elogio del Horizonte",
          "desc": "Escultura frente al mar.",
          "parkingNearby": "Parking Cimavilla",
          "optimalTime": "20:27 - 20:29 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Gijón",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:27:22 CEST - 20:29:06 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:27:22 CEST - 20:29:06 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Gijón",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:27:22 CEST - 20:29:06 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:27:22 CEST - 20:29:06 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Parkings subterráneos puerto.",
        "capacityNote": "Peatonal.",
        "coordinates": "43.5450, -5.6610",
        "trafficAdvice": "Subir a pie al cerro."
      },
      "accommodations": [
        {
          "name": "Parador de Gijón 4★",
          "type": "Parador",
          "priceRange": "€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Gij%C3%B3n",
          "availabilityStatus": "Plazas Disponibles",
          "availabilityBadge": "success"
        },
        {
          "name": "Hotel Boutique Plaza Gijón",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Gij%C3%B3n",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Asturias",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Gij%C3%B3n",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Gijón",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Gij%C3%B3n",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Gijón",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Gij%C3%B3n",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Gigia romana fortificada.",
      "astrology": {
        "zodiacDegree": "20° 12' Leo",
        "fixedStar": "Regulus & Chillida",
        "element": "Viento y Escultura",
        "cosmicMeaning": "Resonancia estética."
      },
      "isTop10": true,
      "whatToEat": {
        "dishes": [
          "Fabada Asturiana Tradicional",
          "Cachopo Asturiano de Ternera",
          "Pixín Agridulce o a la Plancha",
          "Queso Cabrales y Gamoneu",
          "Arroz con Leche Rebozado"
        ],
        "drinks": "Sidra natural asturiana"
      },
      "whereToEat": [
        {
          "name": "Sidrería El Globito",
          "type": "Sidrería tradicional en Cimavilla",
          "specialty": "Cachopo premiado y fabada",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Gij%C3%B3n"
        },
        {
          "name": "Restaurante La Salgar (Nacho Manzano)",
          "type": "Alta cocina asturiana",
          "specialty": "Croquetas de jamón y fabada gourmet",
          "priceRange": "€€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Gij%C3%B3n"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Gij%C3%B3n"
        },
        {
          "name": "Asador Don Manuel de Gijón",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Gij%C3%B3n"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Gij%C3%B3n"
        }
      ]
    },
    {
      "id": "oviedo",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/68/Monte_Naranco_2.jpg",
      "name": "Oviedo & Monte Naranco",
      "province": "Asturias",
      "coords": [
        43.382,
        -5.868
      ],
      "timeline": {
        "partialStart": "19:31:12 CEST",
        "totalityStart": "20:27:30 CEST",
        "totalityMax": "20:28:22 CEST",
        "totalityEnd": "20:29:14 CEST",
        "sunset": "21:13:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "9.0°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 440,
          "travelTime": "4h 00m",
          "route": "AP-66"
        }
      },
      "whatToDo": {
        "morning": "Santa María del Naranco.",
        "afternoon": "Monte Naranco.",
        "eclipseMoment": "Panorámica de la cordillera bajo la sombra.",
        "night": "Calle Gascona."
      },
      "publicObservationSpots": [
        {
          "name": "Cima Monte Naranco",
          "desc": "Mirador 360° elevado.",
          "parkingNearby": "Parking Naranco",
          "optimalTime": "20:27 - 20:29 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Oviedo",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:27:30 CEST - 20:29:14 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:27:30 CEST - 20:29:14 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Oviedo",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:27:30 CEST - 20:29:14 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:27:30 CEST - 20:29:14 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Laderas del Naranco.",
        "capacityNote": "Regulación policial.",
        "coordinates": "43.3820, -5.8680",
        "trafficAdvice": "Autobuses lanzadera."
      },
      "accommodations": [
        {
          "name": "Hotel de la Reconquista 5★",
          "type": "Hotel Histórico",
          "priceRange": "€€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Oviedo",
          "availabilityStatus": "Alta Demanda",
          "availabilityBadge": "warning"
        },
        {
          "name": "Hotel Boutique Plaza Oviedo",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Oviedo",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Asturias",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Oviedo",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Oviedo",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Oviedo",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Oviedo",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Oviedo",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Capital prerrománica fundada en 761 d.C.",
      "astrology": {
        "zodiacDegree": "20° 12' Leo",
        "fixedStar": "Regulus & Merak",
        "element": "Tierra Real",
        "cosmicMeaning": "Dignidad y soberanía."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Fabada Asturiana Tradicional",
          "Cachopo Asturiano de Ternera",
          "Pixín Agridulce o a la Plancha",
          "Queso Cabrales y Gamoneu",
          "Arroz con Leche Rebozado"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Oviedo & Monte Naranco",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Oviedo"
        },
        {
          "name": "Restaurante Plaza Real de Oviedo & Monte Naranco",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Oviedo"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Oviedo"
        },
        {
          "name": "Asador Don Manuel de Oviedo",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Oviedo"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Oviedo"
        }
      ]
    },
    {
      "id": "aviles",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Centro_Niemeyer_Aviles.jpg",
      "name": "Avilés & Centro Niemeyer",
      "province": "Asturias",
      "coords": [
        43.556,
        -5.925
      ],
      "timeline": {
        "partialStart": "19:31:08 CEST",
        "totalityStart": "20:27:20 CEST",
        "totalityMax": "20:28:12 CEST",
        "totalityEnd": "20:29:04 CEST",
        "sunset": "21:14:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "9.1°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 460,
          "travelTime": "4h 15m",
          "route": "AP-66"
        }
      },
      "whatToDo": {
        "morning": "Sabugo medieval.",
        "afternoon": "Centro Niemeyer.",
        "eclipseMoment": "Totalidad sobre la cúpula de Niemeyer.",
        "night": "Sidra en Avilés."
      },
      "publicObservationSpots": [
        {
          "name": "Plaza del Niemeyer",
          "desc": "Arquitectura futurista sobre la ría.",
          "parkingNearby": "Parking Niemeyer",
          "optimalTime": "20:27 - 20:29 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Avilés",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:27:20 CEST - 20:29:04 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:27:20 CEST - 20:29:04 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Avilés",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:27:20 CEST - 20:29:04 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:27:20 CEST - 20:29:04 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Puerto Niemeyer.",
        "capacityNote": "Fácil acceso.",
        "coordinates": "43.5560, -5.9250",
        "trafficAdvice": "Acceso por A-8."
      },
      "accommodations": [
        {
          "name": "Palacio de Avilés 5★",
          "type": "Palacio",
          "priceRange": "€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Avil%C3%A9s",
          "availabilityStatus": "Plazas Disponibles",
          "availabilityBadge": "success"
        },
        {
          "name": "Hotel Boutique Plaza Avilés",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Avil%C3%A9s",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Asturias",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Avil%C3%A9s",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Avilés",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Avil%C3%A9s",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Avilés",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Avil%C3%A9s",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Villa medieval marinera.",
      "astrology": {
        "zodiacDegree": "20° 11' Leo",
        "fixedStar": "Regulus & Niemeyer",
        "element": "Arquitectura Curva",
        "cosmicMeaning": "Claridad mental de vanguardia."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Fabada Asturiana Tradicional",
          "Cachopo Asturiano de Ternera",
          "Pixín Agridulce o a la Plancha",
          "Queso Cabrales y Gamoneu",
          "Arroz con Leche Rebozado"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Avilés & Centro Niemeyer",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Avil%C3%A9s"
        },
        {
          "name": "Restaurante Plaza Real de Avilés & Centro Niemeyer",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Avil%C3%A9s"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Avil%C3%A9s"
        },
        {
          "name": "Asador Don Manuel de Avilés",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Avil%C3%A9s"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Avil%C3%A9s"
        }
      ]
    },
    {
      "id": "cangas-onis",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8f/Cangas_de_on%C3%ADs.png",
      "name": "Cangas de Onís & Covadonga",
      "province": "Asturias",
      "coords": [
        43.351,
        -5.127
      ],
      "timeline": {
        "partialStart": "19:31:20 CEST",
        "totalityStart": "20:27:35 CEST",
        "totalityMax": "20:28:27 CEST",
        "totalityEnd": "20:29:19 CEST",
        "sunset": "21:11:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "8.7°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 490,
          "travelTime": "4h 45m",
          "route": "A-6 ➔ N-634"
        }
      },
      "whatToDo": {
        "morning": "Puente Romano.",
        "afternoon": "Lagos de Covadonga.",
        "eclipseMoment": "Totalidad recortando Picos de Europa.",
        "night": "Queso Gamonéu."
      },
      "publicObservationSpots": [
        {
          "name": "Entremontes Covadonga",
          "desc": "Montaña kárstica.",
          "parkingNearby": "Parking Lagos",
          "optimalTime": "20:27 - 20:29 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Cangas de Onís",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:27:35 CEST - 20:29:19 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:27:35 CEST - 20:29:19 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Cangas de Onís",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:27:35 CEST - 20:29:19 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:27:35 CEST - 20:29:19 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Parkings Lagos.",
        "capacityNote": "Autobús obligatorio.",
        "coordinates": "43.3510, -5.1270",
        "trafficAdvice": "Usar bus público."
      },
      "accommodations": [
        {
          "name": "Parador de Cangas 4★",
          "type": "Parador",
          "priceRange": "€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Cangas%20de%20On%C3%ADs",
          "availabilityStatus": "Agotándose",
          "availabilityBadge": "danger"
        },
        {
          "name": "Hotel Boutique Plaza Cangas de Onís",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Cangas%20de%20On%C3%ADs",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Asturias",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Cangas%20de%20On%C3%ADs",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Cangas de Onís",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Cangas%20de%20On%C3%ADs",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Cangas de Onís",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Cangas%20de%20On%C3%ADs",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Batalla de Covadonga en 722 d.C.",
      "astrology": {
        "zodiacDegree": "20° 13' Leo",
        "fixedStar": "Regulus & Vega",
        "element": "Roca Kárstica",
        "cosmicMeaning": "Superación de retos."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Fabada Asturiana Tradicional",
          "Cachopo Asturiano de Ternera",
          "Pixín Agridulce o a la Plancha",
          "Queso Cabrales y Gamoneu",
          "Arroz con Leche Rebozado"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Cangas de Onís & Covadonga",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Cangas%20de%20On%C3%ADs"
        },
        {
          "name": "Restaurante Plaza Real de Cangas de Onís & Covadonga",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Cangas%20de%20On%C3%ADs"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Cangas%20de%20On%C3%ADs"
        },
        {
          "name": "Asador Don Manuel de Cangas de Onís",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Cangas%20de%20On%C3%ADs"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Cangas%20de%20On%C3%ADs"
        }
      ]
    },
    {
      "id": "llanes",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Puerto_de_Llanes.jpg",
      "name": "Llanes & Cubos de la Memoria",
      "province": "Asturias",
      "coords": [
        43.421,
        -4.754
      ],
      "timeline": {
        "partialStart": "19:31:22 CEST",
        "totalityStart": "20:27:40 CEST",
        "totalityMax": "20:28:32 CEST",
        "totalityEnd": "20:29:24 CEST",
        "sunset": "21:10:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "8.5°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 470,
          "travelTime": "4h 30m",
          "route": "A-1 ➔ A-8"
        }
      },
      "whatToDo": {
        "morning": "Paseo de San Pedro.",
        "afternoon": "Cubos de Ibarrola.",
        "eclipseMoment": "Totalidad frente al puerto marinero.",
        "night": "Fabes con almejas."
      },
      "publicObservationSpots": [
        {
          "name": "Paseo de San Pedro",
          "desc": "Pradera sobre acantilados.",
          "parkingNearby": "Parking Sablón",
          "optimalTime": "20:27 - 20:29 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Llanes",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:27:40 CEST - 20:29:24 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:27:40 CEST - 20:29:24 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Llanes",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:27:40 CEST - 20:29:24 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:27:40 CEST - 20:29:24 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Puerto de Llanes.",
        "capacityNote": "Gran afluencia estival.",
        "coordinates": "43.4210, -4.7540",
        "trafficAdvice": "Aparcar en la entrada."
      },
      "accommodations": [
        {
          "name": "Hotel Donaco 4★",
          "type": "Hotel",
          "priceRange": "€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Llanes",
          "availabilityStatus": "Plazas Disponibles",
          "availabilityBadge": "success"
        },
        {
          "name": "Hotel Boutique Plaza Llanes",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Llanes",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Asturias",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Llanes",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Llanes",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Llanes",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Llanes",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Llanes",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Villa marinera del siglo XIII.",
      "astrology": {
        "zodiacDegree": "20° 13' Leo",
        "fixedStar": "Regulus & Ibarrola",
        "element": "Color & Sal",
        "cosmicMeaning": "Memoria del alma."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Fabada Asturiana Tradicional",
          "Cachopo Asturiano de Ternera",
          "Pixín Agridulce o a la Plancha",
          "Queso Cabrales y Gamoneu",
          "Arroz con Leche Rebozado"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Llanes & Cubos de la Memoria",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Llanes"
        },
        {
          "name": "Restaurante Plaza Real de Llanes & Cubos de la Memoria",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Llanes"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Llanes"
        },
        {
          "name": "Asador Don Manuel de Llanes",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Llanes"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Llanes"
        }
      ]
    },
    {
      "id": "santander",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/26/Palacio_de_la_Magdalena_%28Santander%2C_Cantabria%29.jpg",
      "name": "Santander & Cabo Mayor",
      "province": "Cantabria",
      "coords": [
        43.481,
        -3.788
      ],
      "timeline": {
        "partialStart": "19:31:25 CEST",
        "totalityStart": "20:27:45 CEST",
        "totalityMax": "20:28:38 CEST",
        "totalityEnd": "20:29:31 CEST",
        "sunset": "21:10:00 CEST",
        "formattedDuration": "1 min 46 seg",
        "sunAltitude": "8.3°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 455,
          "travelTime": "4h 15m",
          "route": "A-67"
        }
      },
      "whatToDo": {
        "morning": "Centro Botín y Magdalena.",
        "afternoon": "Cabo Mayor.",
        "eclipseMoment": "Totalidad sobre la bahía santanderina.",
        "night": "Rabas en el Cañadío."
      },
      "publicObservationSpots": [
        {
          "name": "Faro de Cabo Mayor",
          "desc": "Acantilado marino de 30m.",
          "parkingNearby": "Parking Cabo Mayor",
          "optimalTime": "20:27 - 20:29 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Santander",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:27:45 CEST - 20:29:31 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:27:45 CEST - 20:29:31 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Santander",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:27:45 CEST - 20:29:31 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:27:45 CEST - 20:29:31 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Sardinero y Cabo Mayor.",
        "capacityNote": "Alta demanda.",
        "coordinates": "43.4810, -3.7880",
        "trafficAdvice": "Usar S-20."
      },
      "accommodations": [
        {
          "name": "Eurostars Real 5★",
          "type": "Hotel Palacio",
          "priceRange": "€€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Santander",
          "availabilityStatus": "Alta Demanda",
          "availabilityBadge": "warning"
        },
        {
          "name": "Hotel Boutique Plaza Santander",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Santander",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Cantabria",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Santander",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Santander",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Santander",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Santander",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Santander",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Portus Victoriae romano.",
      "astrology": {
        "zodiacDegree": "20° 14' Leo",
        "fixedStar": "Regulus & Polaris",
        "element": "Agua Bahía",
        "cosmicMeaning": "Sobriedad y elegancia."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Cocido Montañés Tradicional",
          "Rabios de Calamar de la Bahía",
          "Anchoas de Santoña Artesanales",
          "Sobaos Pasiegos y Quesadas",
          "Queso Picón Bejes-Tresviso"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Santander & Cabo Mayor",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Santander"
        },
        {
          "name": "Restaurante Plaza Real de Santander & Cabo Mayor",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Santander"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Santander"
        },
        {
          "name": "Asador Don Manuel de Santander",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Santander"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Santander"
        }
      ]
    },
    {
      "id": "santillana",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/70/Colegiata_de_Santa_Juliana%2C_Santillana_del_Mar_03.jpg",
      "name": "Santillana del Mar & Altamira",
      "province": "Cantabria",
      "coords": [
        43.389,
        -4.108
      ],
      "timeline": {
        "partialStart": "19:31:28 CEST",
        "totalityStart": "20:27:50 CEST",
        "totalityMax": "20:28:42 CEST",
        "totalityEnd": "20:29:34 CEST",
        "sunset": "21:10:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "8.4°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 440,
          "travelTime": "4h 05m",
          "route": "A-67"
        }
      },
      "whatToDo": {
        "morning": "Neocueva Altamira.",
        "afternoon": "Colegiata Santa Juliana.",
        "eclipseMoment": "Totalidad sobre las casonas medievales.",
        "night": "Bizcocho y quesada."
      },
      "publicObservationSpots": [
        {
          "name": "Plaza Mayor Santillana",
          "desc": "Conjunto medieval único.",
          "parkingNearby": "Parking Santillana",
          "optimalTime": "20:27 - 20:29 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Santillana del Mar",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:27:50 CEST - 20:29:34 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:27:50 CEST - 20:29:34 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Santillana del Mar",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:27:50 CEST - 20:29:34 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:27:50 CEST - 20:29:34 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Parkings entrada.",
        "capacityNote": "Peatonal.",
        "coordinates": "43.3890, -4.1080",
        "trafficAdvice": "Aparcar fuera."
      },
      "accommodations": [
        {
          "name": "Parador Gil Blas 4★",
          "type": "Parador",
          "priceRange": "€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Santillana%20del%20Mar",
          "availabilityStatus": "Alta Demanda",
          "availabilityBadge": "warning"
        },
        {
          "name": "Hotel Boutique Plaza Santillana del Mar",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Santillana%20del%20Mar",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Cantabria",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Santillana%20del%20Mar",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Santillana del Mar",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Santillana%20del%20Mar",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Santillana del Mar",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Santillana%20del%20Mar",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Villa medieval preservada.",
      "astrology": {
        "zodiacDegree": "20° 14' Leo",
        "fixedStar": "Regulus & Paleolítico",
        "element": "Cueva",
        "cosmicMeaning": "Fuego ancestral del Sol."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Cocido Montañés Tradicional",
          "Rabios de Calamar de la Bahía",
          "Anchoas de Santoña Artesanales",
          "Sobaos Pasiegos y Quesadas",
          "Queso Picón Bejes-Tresviso"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Santillana del Mar & Altamira",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Santillana%20del%20Mar"
        },
        {
          "name": "Restaurante Plaza Real de Santillana del Mar & Altamira",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Santillana%20del%20Mar"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Santillana%20del%20Mar"
        },
        {
          "name": "Asador Don Manuel de Santillana del Mar",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Santillana%20del%20Mar"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Santillana%20del%20Mar"
        }
      ]
    },
    {
      "id": "comillas",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e2/El_Capricho_Gaud%C3%AD_02.jpg",
      "name": "Comillas & Capricho de Gaudí",
      "province": "Cantabria",
      "coords": [
        43.386,
        -4.291
      ],
      "timeline": {
        "partialStart": "19:31:26 CEST",
        "totalityStart": "20:27:48 CEST",
        "totalityMax": "20:28:40 CEST",
        "totalityEnd": "20:29:32 CEST",
        "sunset": "21:10:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "8.5°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 445,
          "travelTime": "4h 10m",
          "route": "A-67 ➔ CA-131"
        }
      },
      "whatToDo": {
        "morning": "Capricho de Gaudí.",
        "afternoon": "Universidad Pontificia.",
        "eclipseMoment": "Corona solar sobre girasoles de Gaudí.",
        "night": "Marisco en el puerto."
      },
      "publicObservationSpots": [
        {
          "name": "El Capricho de Gaudí",
          "desc": "Obra modernista gaudiniana.",
          "parkingNearby": "Parking Sobrellano",
          "optimalTime": "20:27 - 20:29 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Comillas",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:27:48 CEST - 20:29:32 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:27:48 CEST - 20:29:32 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Comillas",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:27:48 CEST - 20:29:32 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:27:48 CEST - 20:29:32 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Palacio de Sobrellano.",
        "capacityNote": "Plazas limitadas.",
        "coordinates": "43.3860, -4.2910",
        "trafficAdvice": "Acceso por CA-131."
      },
      "accommodations": [
        {
          "name": "Hotel Josein",
          "type": "Hotel Acantilado",
          "priceRange": "€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Comillas",
          "availabilityStatus": "Plazas Disponibles",
          "availabilityBadge": "success"
        },
        {
          "name": "Hotel Boutique Plaza Comillas",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Comillas",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Cantabria",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Comillas",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Comillas",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Comillas",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Comillas",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Comillas",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Villa pontificia modernista.",
      "astrology": {
        "zodiacDegree": "20° 14' Leo",
        "fixedStar": "Regulus & Gaudí",
        "element": "Girasol Cerámico",
        "cosmicMeaning": "Alquimia de formas."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Cocido Montañés Tradicional",
          "Rabios de Calamar de la Bahía",
          "Anchoas de Santoña Artesanales",
          "Sobaos Pasiegos y Quesadas",
          "Queso Picón Bejes-Tresviso"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Comillas & Capricho de Gaudí",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Comillas"
        },
        {
          "name": "Restaurante Plaza Real de Comillas & Capricho de Gaudí",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Comillas"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Comillas"
        },
        {
          "name": "Asador Don Manuel de Comillas",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Comillas"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Comillas"
        }
      ]
    },
    {
      "id": "bilbao",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Museo_Guggenheim%2C_Bilbao_%2831273245344%29.jpg",
      "name": "Bilbao & Artxanda",
      "province": "Bizkaia (País Vasco)",
      "coords": [
        43.263,
        -2.935
      ],
      "timeline": {
        "partialStart": "19:31:35 CEST",
        "totalityStart": "20:28:00 CEST",
        "totalityMax": "20:28:53 CEST",
        "totalityEnd": "20:29:46 CEST",
        "sunset": "21:07:00 CEST",
        "formattedDuration": "1 min 46 seg",
        "sunAltitude": "7.8°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 395,
          "travelTime": "3h 45m",
          "route": "AP-68"
        }
      },
      "whatToDo": {
        "morning": "Guggenheim.",
        "afternoon": "Funicular Artxanda.",
        "eclipseMoment": "Titanio del Guggenheim y ría en penumbra.",
        "night": "Pintxos Casco Viejo."
      },
      "publicObservationSpots": [
        {
          "name": "Mirador de Artxanda",
          "desc": "Panorámica 360° del gran Bilbao.",
          "parkingNearby": "Parking Artxanda",
          "optimalTime": "20:28 - 20:30 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Bilbao",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:28:00 CEST - 20:29:46 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:28:00 CEST - 20:29:46 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Bilbao",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:28:00 CEST - 20:29:46 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:28:00 CEST - 20:29:46 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Artxanda y Alhóndiga.",
        "capacityNote": "Funicular directo.",
        "coordinates": "43.2730, -2.9240",
        "trafficAdvice": "Usar Funicular."
      },
      "accommodations": [
        {
          "name": "Gran Domine Bilbao 5★",
          "type": "Hotel Lujo",
          "priceRange": "€€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Bilbao",
          "availabilityStatus": "Alta Demanda",
          "availabilityBadge": "warning"
        },
        {
          "name": "Hotel Boutique Plaza Bilbao",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Bilbao",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Bizkaia (País Vasco)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Bilbao",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Bilbao",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Bilbao",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Bilbao",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Bilbao",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Fundada en 1300 por Diego López de Haro.",
      "astrology": {
        "zodiacDegree": "20° 15' Leo",
        "fixedStar": "Regulus & Titán",
        "element": "Titanio y Ría",
        "cosmicMeaning": "Alquimia urbana."
      },
      "isTop10": true,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Bilbao",
          "Asado a la leña típico de Bizkaia (País Vasco)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Bilbao"
        ],
        "drinks": "Vino Txakoli D.O. Bizkaiko Txakolina"
      },
      "whereToEat": [
        {
          "name": "Restaurante Amaren",
          "type": "Asador de carnes de buey",
          "specialty": "Chuletón de buey madurado",
          "priceRange": "€€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Bilbao"
        },
        {
          "name": "Victor Montes",
          "type": "Bar de pintxos icónico en Plaza Nueva",
          "specialty": "Pintxos de bacalao y foie",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Bilbao"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Bilbao"
        },
        {
          "name": "Asador Don Manuel de Bilbao",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Bilbao"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Bilbao"
        }
      ]
    },
    {
      "id": "san-sebastian",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b7/San_Sebastian_aerea.jpg",
      "name": "San Sebastián & Monte Igueldo",
      "province": "Gipuzkoa (País Vasco)",
      "coords": [
        43.318,
        -1.981
      ],
      "timeline": {
        "partialStart": "19:31:45 CEST",
        "totalityStart": "20:28:10 CEST",
        "totalityMax": "20:29:02 CEST",
        "totalityEnd": "20:29:54 CEST",
        "sunset": "21:04:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "7.3°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 450,
          "travelTime": "4h 15m",
          "route": "A-1 ➔ AP-8"
        }
      },
      "whatToDo": {
        "morning": "La Concha y Peine del Viento.",
        "afternoon": "Monte Igueldo.",
        "eclipseMoment": "La Concha enmarcando el atardecer eclipsado.",
        "night": "Pintxos Parte Vieja."
      },
      "publicObservationSpots": [
        {
          "name": "Monte Igueldo",
          "desc": "La postal donostiarra por excelencia.",
          "parkingNearby": "Parking Igueldo",
          "optimalTime": "20:28 - 20:30 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de San Sebastián",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:28:10 CEST - 20:29:54 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:28:10 CEST - 20:29:54 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de San Sebastián",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:28:10 CEST - 20:29:54 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:28:10 CEST - 20:29:54 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Parkings La Concha.",
        "capacityNote": "Funicular recomendado.",
        "coordinates": "43.3180, -1.9810",
        "trafficAdvice": "Usar bus L16."
      },
      "accommodations": [
        {
          "name": "Hotel Maria Cristina 5★",
          "type": "Hotel Belle Époque",
          "priceRange": "€€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=San%20Sebasti%C3%A1n",
          "availabilityStatus": "Agotado",
          "availabilityBadge": "danger"
        },
        {
          "name": "Hotel Boutique Plaza San Sebastián",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=San%20Sebasti%C3%A1n",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Gipuzkoa (País Vasco)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=San%20Sebasti%C3%A1n",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar San Sebastián",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=San%20Sebasti%C3%A1n",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de San Sebastián",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=San%20Sebasti%C3%A1n",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Belle Époque europea.",
      "astrology": {
        "zodiacDegree": "20° 16' Leo",
        "fixedStar": "Regulus & Venus",
        "element": "Concha Marina",
        "cosmicMeaning": "Harmonía y belleza pura."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de San Sebastián",
          "Asado a la leña típico de Gipuzkoa (País Vasco)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de San Sebastián"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de San Sebastián & Monte Igueldo",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+San%20Sebasti%C3%A1n"
        },
        {
          "name": "Restaurante Plaza Real de San Sebastián & Monte Igueldo",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+San%20Sebasti%C3%A1n"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+San%20Sebasti%C3%A1n"
        },
        {
          "name": "Asador Don Manuel de San Sebastián",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+San%20Sebasti%C3%A1n"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+San%20Sebasti%C3%A1n"
        }
      ]
    },
    {
      "id": "vitoria",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Iglesia_de_San_Miguel_en_Vitoria.jpg",
      "name": "Vitoria-Gasteiz & Catedral Vieja",
      "province": "Álava (País Vasco)",
      "coords": [
        42.846,
        -2.672
      ],
      "timeline": {
        "partialStart": "19:31:40 CEST",
        "totalityStart": "20:28:12 CEST",
        "totalityMax": "20:29:05 CEST",
        "totalityEnd": "20:29:58 CEST",
        "sunset": "21:06:00 CEST",
        "formattedDuration": "1 min 46 seg",
        "sunAltitude": "7.5°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 350,
          "travelTime": "3h 20m",
          "route": "A-1"
        }
      },
      "whatToDo": {
        "morning": "Almendra Medieval.",
        "afternoon": "Salburua Anillo Verde.",
        "eclipseMoment": "Torres medievales bajo la sombra solar.",
        "night": "Pintxos Virgen Blanca."
      },
      "publicObservationSpots": [
        {
          "name": "Parque de Salburua / Ataria",
          "desc": "Humedal del Anillo Verde.",
          "parkingNearby": "Parking Buesa Arena",
          "optimalTime": "20:28 - 20:30 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Vitoria-Gasteiz",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:28:12 CEST - 20:29:58 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:28:12 CEST - 20:29:58 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Vitoria-Gasteiz",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:28:12 CEST - 20:29:58 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:28:12 CEST - 20:29:58 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Buesa Arena y Europa.",
        "capacityNote": "Excelente tranvía.",
        "coordinates": "42.8460, -2.6720",
        "trafficAdvice": "Usar tranvía urbano."
      },
      "accommodations": [
        {
          "name": "Gran Hotel Lakua 5★",
          "type": "Hotel 5★",
          "priceRange": "€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Vitoria-Gasteiz",
          "availabilityStatus": "Plazas Disponibles",
          "availabilityBadge": "success"
        },
        {
          "name": "Hotel Boutique Plaza Vitoria-Gasteiz",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Vitoria-Gasteiz",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Álava (País Vasco)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Vitoria-Gasteiz",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Vitoria-Gasteiz",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Vitoria-Gasteiz",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Vitoria-Gasteiz",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Vitoria-Gasteiz",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Capital Verde Europea fundada en 1181.",
      "astrology": {
        "zodiacDegree": "20° 15' Leo",
        "fixedStar": "Regulus & Anillo Verde",
        "element": "Tierra Verde",
        "cosmicMeaning": "Coherencia moral."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Vitoria-Gasteiz",
          "Asado a la leña típico de Álava (País Vasco)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Vitoria-Gasteiz"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Vitoria-Gasteiz & Catedral Vieja",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Vitoria-Gasteiz"
        },
        {
          "name": "Restaurante Plaza Real de Vitoria-Gasteiz & Catedral Vieja",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Vitoria-Gasteiz"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Vitoria-Gasteiz"
        },
        {
          "name": "Asador Don Manuel de Vitoria-Gasteiz",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Vitoria-Gasteiz"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Vitoria-Gasteiz"
        }
      ]
    },
    {
      "id": "zarautz",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Playa_de_Zarautz.jpg",
      "name": "Zarautz & Malecón",
      "province": "Gipuzkoa (País Vasco)",
      "coords": [
        43.284,
        -2.169
      ],
      "timeline": {
        "partialStart": "19:31:42 CEST",
        "totalityStart": "20:28:08 CEST",
        "totalityMax": "20:29:00 CEST",
        "totalityEnd": "20:29:52 CEST",
        "sunset": "21:05:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "7.4°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 435,
          "travelTime": "4h 05m",
          "route": "A-1 ➔ AP-8"
        }
      },
      "whatToDo": {
        "morning": "Malecón de Zarautz.",
        "afternoon": "Surf en la gran playa.",
        "eclipseMoment": "Totalidad con el Ratón de Getaria al fondo.",
        "night": "Txakoli y pescados a la parrilla."
      },
      "publicObservationSpots": [
        {
          "name": "Paseo del Malecón",
          "desc": "Playa de 2.5 km abierta al mar.",
          "parkingNearby": "Parking Cortazar",
          "optimalTime": "20:28 - 20:30 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Zarautz",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:28:08 CEST - 20:29:52 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:28:08 CEST - 20:29:52 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Zarautz",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:28:08 CEST - 20:29:52 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:28:08 CEST - 20:29:52 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Parkings OTA Zarautz.",
        "capacityNote": "Saturación estival.",
        "coordinates": "43.2840, -2.1690",
        "trafficAdvice": "Estacionar en el polígono."
      },
      "accommodations": [
        {
          "name": "Hotel Arguiñano 3★",
          "type": "Hotel Playa",
          "priceRange": "€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Zarautz",
          "availabilityStatus": "Alta Demanda",
          "availabilityBadge": "warning"
        },
        {
          "name": "Hotel Boutique Plaza Zarautz",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Zarautz",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Gipuzkoa (País Vasco)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Zarautz",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Zarautz",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Zarautz",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Zarautz",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Zarautz",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Cuna de la Nao Victoria de Elcano.",
      "astrology": {
        "zodiacDegree": "20° 15' Leo",
        "fixedStar": "Regulus & Elcano",
        "element": "Olas & Viento",
        "cosmicMeaning": "Espíritu de navegación."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Zarautz",
          "Asado a la leña típico de Gipuzkoa (País Vasco)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Zarautz"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Zarautz & Malecón",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Zarautz"
        },
        {
          "name": "Restaurante Plaza Real de Zarautz & Malecón",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Zarautz"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Zarautz"
        },
        {
          "name": "Asador Don Manuel de Zarautz",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Zarautz"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Zarautz"
        }
      ]
    },
    {
      "id": "hondarribia",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/62/Hondarribia_Puerto.jpg",
      "name": "Hondarribia & Castillo de Carlos V",
      "province": "Gipuzkoa (País Vasco)",
      "coords": [
        43.362,
        -1.791
      ],
      "timeline": {
        "partialStart": "19:31:48 CEST",
        "totalityStart": "20:28:15 CEST",
        "totalityMax": "20:29:07 CEST",
        "totalityEnd": "20:29:59 CEST",
        "sunset": "21:03:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "7.2°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 470,
          "travelTime": "4h 25m",
          "route": "A-1 ➔ AP-8"
        }
      },
      "whatToDo": {
        "morning": "Barrio de la Marina y casitas de colores.",
        "afternoon": "Castillo de Carlos V y Murallas.",
        "eclipseMoment": "Oscuridad sobre la desembocadura de la ría del Bidasoa.",
        "night": "Pintxos en la Calle San Pedro."
      },
      "publicObservationSpots": [
        {
          "name": "Plaza de Armas / Castillo Carlos V",
          "desc": "Plaza amurallada sobre la ría del Bidasoa.",
          "parkingNearby": "Parking Venta de la Nieve",
          "optimalTime": "20:28 - 20:30 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Hondarribia",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:28:15 CEST - 20:29:59 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:28:15 CEST - 20:29:59 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Hondarribia",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:28:15 CEST - 20:29:59 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:28:15 CEST - 20:29:59 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Aparcamientos del puerto deportivo y la Marina.",
        "capacityNote": "Casco medieval histórico.",
        "coordinates": "43.3620, -1.7910",
        "trafficAdvice": "Aparcar junto al puerto."
      },
      "accommodations": [
        {
          "name": "Parador de Hondarribia 4★ (Castillo Carlos V)",
          "type": "Parador Fortaleza Medieval",
          "priceRange": "€€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Hondarribia",
          "availabilityStatus": "Agotado",
          "availabilityBadge": "danger"
        },
        {
          "name": "Hotel Boutique Plaza Hondarribia",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Hondarribia",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Gipuzkoa (País Vasco)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Hondarribia",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Hondarribia",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Hondarribia",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Hondarribia",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Hondarribia",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Plaza fuerte fronteriza amurallada del siglo X.",
      "astrology": {
        "zodiacDegree": "20° 16' Leo",
        "fixedStar": "Regulus & Carlos V",
        "element": "Piedra y Frontera",
        "cosmicMeaning": "Trascendencia de límites."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Hondarribia",
          "Asado a la leña típico de Gipuzkoa (País Vasco)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Hondarribia"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Hondarribia & Castillo de Carlos V",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Hondarribia"
        },
        {
          "name": "Restaurante Plaza Real de Hondarribia & Castillo de Carlos V",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Hondarribia"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Hondarribia"
        },
        {
          "name": "Asador Don Manuel de Hondarribia",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Hondarribia"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Hondarribia"
        }
      ]
    },
    {
      "id": "astorga",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/92/Palacio_Episcopal_Astorga_2021_-_exterior.jpg",
      "name": "Astorga & Palacio de Gaudí",
      "province": "León (Castilla y León)",
      "coords": [
        42.457,
        -6.056
      ],
      "timeline": {
        "partialStart": "19:31:20 CEST",
        "totalityStart": "20:27:45 CEST",
        "totalityMax": "20:28:39 CEST",
        "totalityEnd": "20:29:33 CEST",
        "sunset": "21:13:00 CEST",
        "formattedDuration": "1 min 48 seg",
        "sunAltitude": "8.7°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 325,
          "travelTime": "3h 00m",
          "route": "A-6"
        }
      },
      "whatToDo": {
        "morning": "Palacio de Gaudí.",
        "afternoon": "Muralla romana.",
        "eclipseMoment": "Granito rosa neogótico bajo el eclipse.",
        "night": "Cocido maragato."
      },
      "publicObservationSpots": [
        {
          "name": "Plaza Palacio de Gaudí",
          "desc": "Obra modernista única.",
          "parkingNearby": "Parking Melgar",
          "optimalTime": "20:27 - 20:29 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Astorga",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:27:45 CEST - 20:29:33 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:27:45 CEST - 20:29:33 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Astorga",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:27:45 CEST - 20:29:33 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:27:45 CEST - 20:29:33 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Melgar y Eragudina.",
        "capacityNote": "Fácil A-6.",
        "coordinates": "42.4570, -6.0560",
        "trafficAdvice": "Aparcar en la muralla."
      },
      "accommodations": [
        {
          "name": "Via de la Plata Spa 4★",
          "type": "Hotel Spa",
          "priceRange": "€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Astorga",
          "availabilityStatus": "Plazas Disponibles",
          "availabilityBadge": "success"
        },
        {
          "name": "Hotel Boutique Plaza Astorga",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Astorga",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de León (Castilla y León)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Astorga",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Astorga",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Astorga",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Astorga",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Astorga",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Asturica Augusta romana.",
      "astrology": {
        "zodiacDegree": "20° 13' Leo",
        "fixedStar": "Regulus & Gaudí",
        "element": "Granito Rosa",
        "cosmicMeaning": "Geometría sagrada."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Astorga",
          "Asado a la leña típico de León (Castilla y León)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Astorga"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Astorga & Palacio de Gaudí",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Astorga"
        },
        {
          "name": "Restaurante Plaza Real de Astorga & Palacio de Gaudí",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Astorga"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Astorga"
        },
        {
          "name": "Asador Don Manuel de Astorga",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Astorga"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Astorga"
        }
      ]
    },
    {
      "id": "leon",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Catedral_G%C3%B3tica_de_Le%C3%B3n.jpg",
      "name": "León & Plaza del Grano",
      "province": "León (Castilla y León)",
      "coords": [
        42.598,
        -5.567
      ],
      "timeline": {
        "partialStart": "19:31:25 CEST",
        "totalityStart": "20:27:50 CEST",
        "totalityMax": "20:28:44 CEST",
        "totalityEnd": "20:29:38 CEST",
        "sunset": "21:12:00 CEST",
        "formattedDuration": "1 min 48 seg",
        "sunAltitude": "8.5°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 335,
          "travelTime": "3h 15m",
          "route": "A-66"
        }
      },
      "whatToDo": {
        "morning": "Catedral de León.",
        "afternoon": "Plaza del Grano.",
        "eclipseMoment": "Oscuridad sobre las agujas góticas leonesas.",
        "night": "Barrio Húmedo."
      },
      "publicObservationSpots": [
        {
          "name": "Plaza de la Regla (Catedral)",
          "desc": "Vista gótica deslumbrante.",
          "parkingNearby": "Parking San Pedro",
          "optimalTime": "20:27 - 20:29 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de León",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:27:50 CEST - 20:29:38 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:27:50 CEST - 20:29:38 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de León",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:27:50 CEST - 20:29:38 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:27:50 CEST - 20:29:38 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "San Pedro y Bernesga.",
        "capacityNote": "AVE directo.",
        "coordinates": "42.5990, -5.5660",
        "trafficAdvice": "Aparcar junto al río."
      },
      "accommodations": [
        {
          "name": "Parador San Marcos 5★",
          "type": "Parador Plateresco",
          "priceRange": "€€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Le%C3%B3n",
          "availabilityStatus": "Agotado",
          "availabilityBadge": "danger"
        },
        {
          "name": "Hotel Boutique Plaza León",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Le%C3%B3n",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de León (Castilla y León)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Le%C3%B3n",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar León",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Le%C3%B3n",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de León",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Le%C3%B3n",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Legio VI Victrix romana.",
      "astrology": {
        "zodiacDegree": "20° 13' Leo",
        "fixedStar": "Regulus & Zosma",
        "element": "Vidriera Gótica",
        "cosmicMeaning": "Alquimia de la luz."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de León",
          "Asado a la leña típico de León (Castilla y León)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de León"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de León & Plaza del Grano",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Le%C3%B3n"
        },
        {
          "name": "Restaurante Plaza Real de León & Plaza del Grano",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Le%C3%B3n"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Le%C3%B3n"
        },
        {
          "name": "Asador Don Manuel de León",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Le%C3%B3n"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Le%C3%B3n"
        }
      ]
    },
    {
      "id": "ponferrada",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Castillo_de_los_Templarios_de_Ponferrada.jpg",
      "name": "Ponferrada & Castillo Templario",
      "province": "León (Castilla y León)",
      "coords": [
        42.544,
        -6.591
      ],
      "timeline": {
        "partialStart": "19:31:15 CEST",
        "totalityStart": "20:27:35 CEST",
        "totalityMax": "20:28:28 CEST",
        "totalityEnd": "20:29:21 CEST",
        "sunset": "21:16:00 CEST",
        "formattedDuration": "1 min 46 seg",
        "sunAltitude": "9.0°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 390,
          "travelTime": "3h 40m",
          "route": "A-6"
        }
      },
      "whatToDo": {
        "morning": "Castillo Templario.",
        "afternoon": "Las Médulas romana.",
        "eclipseMoment": "Totalidad sobre las almenas del castillo del Bierzo.",
        "night": "Botillo y vino Mencía."
      },
      "publicObservationSpots": [
        {
          "name": "Castillo Templario",
          "desc": "Fortaleza templaria de 8.000 m².",
          "parkingNearby": "Parking Castillo",
          "optimalTime": "20:27 - 20:29 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Ponferrada",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:27:35 CEST - 20:29:21 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:27:35 CEST - 20:29:21 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Ponferrada",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:27:35 CEST - 20:29:21 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:27:35 CEST - 20:29:21 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Río Sil.",
        "capacityNote": "Fácil A-6.",
        "coordinates": "42.5440, -6.5910",
        "trafficAdvice": "Aparcar junto al río."
      },
      "accommodations": [
        {
          "name": "AC Ponferrada 4★",
          "type": "Hotel Urbano",
          "priceRange": "€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Ponferrada",
          "availabilityStatus": "Plazas Disponibles",
          "availabilityBadge": "success"
        },
        {
          "name": "Hotel Boutique Plaza Ponferrada",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Ponferrada",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de León (Castilla y León)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Ponferrada",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Ponferrada",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Ponferrada",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Ponferrada",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Ponferrada",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Pons Ferrata de la Orden del Temple.",
      "astrology": {
        "zodiacDegree": "20° 12' Leo",
        "fixedStar": "Regulus & Templarios",
        "element": "Hierro y Oro",
        "cosmicMeaning": "Guardianes de la luz."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Ponferrada",
          "Asado a la leña típico de León (Castilla y León)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Ponferrada"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Ponferrada & Castillo Templario",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Ponferrada"
        },
        {
          "name": "Restaurante Plaza Real de Ponferrada & Castillo Templario",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Ponferrada"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Ponferrada"
        },
        {
          "name": "Asador Don Manuel de Ponferrada",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Ponferrada"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Ponferrada"
        }
      ]
    },
    {
      "id": "palencia",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/40/Cristo_del_Otero_%28Palencia%29.jpg",
      "name": "Palencia & Cristo del Otero",
      "province": "Palencia (Castilla y León)",
      "coords": [
        42.009,
        -4.528
      ],
      "timeline": {
        "partialStart": "19:31:35 CEST",
        "totalityStart": "20:28:05 CEST",
        "totalityMax": "20:29:00 CEST",
        "totalityEnd": "20:29:55 CEST",
        "sunset": "21:09:00 CEST",
        "formattedDuration": "1 min 50 seg",
        "sunAltitude": "7.8°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 235,
          "travelTime": "2h 15m",
          "route": "A-67"
        }
      },
      "whatToDo": {
        "morning": "Catedral de San Antolín.",
        "afternoon": "Cristo del Otero.",
        "eclipseMoment": "Totalidad junto a la colosal escultura del Otero.",
        "night": "Lechazo churro."
      },
      "publicObservationSpots": [
        {
          "name": "Cristo del Otero",
          "desc": "Escultura de 20m en cerro elevado.",
          "parkingNearby": "Parking Cristo Otero",
          "optimalTime": "20:28 - 20:30 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Palencia",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:28:05 CEST - 20:29:55 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:28:05 CEST - 20:29:55 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Palencia",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:28:05 CEST - 20:29:55 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:28:05 CEST - 20:29:55 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Cerro del Cristo.",
        "capacityNote": "Tráfico fluido.",
        "coordinates": "42.0090, -4.5280",
        "trafficAdvice": "Subida por el Otero."
      },
      "accommodations": [
        {
          "name": "AC Palencia 4★",
          "type": "Hotel Urbano",
          "priceRange": "€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Palencia",
          "availabilityStatus": "Plazas Disponibles",
          "availabilityBadge": "success"
        },
        {
          "name": "Hotel Boutique Plaza Palencia",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Palencia",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Palencia (Castilla y León)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Palencia",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Palencia",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Palencia",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Palencia",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Palencia",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Pallantia vaccea.",
      "astrology": {
        "zodiacDegree": "20° 15' Leo",
        "fixedStar": "Regulus & Macho",
        "element": "Tierra Vaccea",
        "cosmicMeaning": "Visión panorámica."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Palencia",
          "Asado a la leña típico de Palencia (Castilla y León)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Palencia"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Palencia & Cristo del Otero",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Palencia"
        },
        {
          "name": "Restaurante Plaza Real de Palencia & Cristo del Otero",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Palencia"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Palencia"
        },
        {
          "name": "Asador Don Manuel de Palencia",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Palencia"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Palencia"
        }
      ]
    },
    {
      "id": "burgos",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/67/Escaleras_a_la_Catedral_--_2023_--_Burgos%2C_Castilla_y_Le%C3%B3n%2C_Espa%C3%B1a.jpg",
      "name": "Burgos & Atapuerca",
      "province": "Burgos (Castilla y León)",
      "coords": [
        42.344,
        -3.696
      ],
      "timeline": {
        "partialStart": "19:31:40 CEST",
        "totalityStart": "20:28:15 CEST",
        "totalityMax": "20:29:10 CEST",
        "totalityEnd": "20:30:05 CEST",
        "sunset": "21:08:00 CEST",
        "formattedDuration": "1 min 50 seg",
        "sunAltitude": "7.1°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 245,
          "travelTime": "2h 30m",
          "route": "A-1"
        }
      },
      "whatToDo": {
        "morning": "Museo Evolución Humana.",
        "afternoon": "Yacimientos de Atapuerca.",
        "eclipseMoment": "Totalidad sobre la meseta de Atapuerca.",
        "night": "Morcilla de Burgos."
      },
      "publicObservationSpots": [
        {
          "name": "Mirador Castillo Burgos",
          "desc": "Vistas elevadas sobre las agujas góticas.",
          "parkingNearby": "Parking Castillo",
          "optimalTime": "20:28 - 20:30 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Burgos",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:28:15 CEST - 20:30:05 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:28:15 CEST - 20:30:05 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Burgos",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:28:15 CEST - 20:30:05 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:28:15 CEST - 20:30:05 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Plaza Mayor y Castillo.",
        "capacityNote": "Gran capacidad.",
        "coordinates": "42.3430, -3.7060",
        "trafficAdvice": "Entrar por A-1 Sur."
      },
      "accommodations": [
        {
          "name": "Landa Burgos 5★",
          "type": "Hotel Lujo",
          "priceRange": "€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Burgos",
          "availabilityStatus": "Alta Demanda",
          "availabilityBadge": "warning"
        },
        {
          "name": "Hotel Boutique Plaza Burgos",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Burgos",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Burgos (Castilla y León)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Burgos",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Burgos",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Burgos",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Burgos",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Burgos",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Cuna del Cid y Antecessor de 850.000 años.",
      "astrology": {
        "zodiacDegree": "20° 15' Leo",
        "fixedStar": "Regulus & Antecessor",
        "element": "Tierra Ancestral",
        "cosmicMeaning": "Memoria biológica."
      },
      "isTop10": true,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Burgos",
          "Asado a la leña típico de Burgos (Castilla y León)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Burgos"
        ],
        "drinks": "Vino tinto D.O. Arlanza o Ribera del Duero"
      },
      "whereToEat": [
        {
          "name": "Asador Casa Ojeda",
          "type": "Asador castellano tradicional",
          "specialty": "Lechazo churro y morcilla artesana",
          "priceRange": "€€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Burgos"
        },
        {
          "name": "La Favorita Burgos",
          "type": "Mesón de pinchos y tapeo",
          "specialty": "Tapas de morcilla frita y cecina",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Burgos"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Burgos"
        },
        {
          "name": "Asador Don Manuel de Burgos",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Burgos"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Burgos"
        }
      ]
    },
    {
      "id": "lerma",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lerma_-_Palacio_Ducal_9.jpg",
      "name": "Lerma & Palacio Ducal",
      "province": "Burgos (Castilla y León)",
      "coords": [
        41.986,
        -3.762
      ],
      "timeline": {
        "partialStart": "19:31:42 CEST",
        "totalityStart": "20:28:18 CEST",
        "totalityMax": "20:29:12 CEST",
        "totalityEnd": "20:30:06 CEST",
        "sunset": "21:08:00 CEST",
        "formattedDuration": "1 min 48 seg",
        "sunAltitude": "7.2°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 200,
          "travelTime": "2h 00m",
          "route": "A-1"
        }
      },
      "whatToDo": {
        "morning": "Palacio Ducal de Lerma.",
        "afternoon": "Plaza Mayor de armas.",
        "eclipseMoment": "Totalidad recortando las torres del palacio.",
        "night": "Lechazo asado en leña."
      },
      "publicObservationSpots": [
        {
          "name": "Plaza Gran Ducal",
          "desc": "Plaza herreriana de 7.000 m².",
          "parkingNearby": "Parking Plaza Toros",
          "optimalTime": "20:28 - 20:30 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Lerma",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:28:18 CEST - 20:30:06 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:28:18 CEST - 20:30:06 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Lerma",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:28:18 CEST - 20:30:06 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:28:18 CEST - 20:30:06 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Plaza de Toros y río Arlanza.",
        "capacityNote": "Fácil A-1.",
        "coordinates": "41.9860, -3.7620",
        "trafficAdvice": "Aparcar en la vega."
      },
      "accommodations": [
        {
          "name": "Parador de Lerma 4★",
          "type": "Parador Palacio",
          "priceRange": "€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Lerma",
          "availabilityStatus": "Alta Demanda",
          "availabilityBadge": "warning"
        },
        {
          "name": "Hotel Boutique Plaza Lerma",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Lerma",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Burgos (Castilla y León)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Lerma",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Lerma",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Lerma",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Lerma",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Lerma",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Villa barroca diseñada por el Duque de Lerma.",
      "astrology": {
        "zodiacDegree": "20° 15' Leo",
        "fixedStar": "Regulus & Duque",
        "element": "Piedra Herreriana",
        "cosmicMeaning": "Estructura de poder."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Lerma",
          "Asado a la leña típico de Burgos (Castilla y León)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Lerma"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Lerma & Palacio Ducal",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Lerma"
        },
        {
          "name": "Restaurante Plaza Real de Lerma & Palacio Ducal",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Lerma"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Lerma"
        },
        {
          "name": "Asador Don Manuel de Lerma",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Lerma"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Lerma"
        }
      ]
    },
    {
      "id": "aranda-duero",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/40/Aranda_de_Duero%2C_iglesia_de_Santa_Mar%C3%ADa_01.jpg",
      "name": "Aranda de Duero & Bodegas",
      "province": "Burgos (Castilla y León)",
      "coords": [
        41.67,
        -3.689
      ],
      "timeline": {
        "partialStart": "19:31:45 CEST",
        "totalityStart": "20:28:22 CEST",
        "totalityMax": "20:29:15 CEST",
        "totalityEnd": "20:30:08 CEST",
        "sunset": "21:07:00 CEST",
        "formattedDuration": "1 min 46 seg",
        "sunAltitude": "7.0°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 160,
          "travelTime": "1h 35m",
          "route": "A-1"
        }
      },
      "whatToDo": {
        "morning": "Santa María la Real.",
        "afternoon": "Bodegas subterráneas.",
        "eclipseMoment": "Totalidad sobre los viñedos de Ribera del Duero.",
        "night": "Lechazo y vino D.O."
      },
      "publicObservationSpots": [
        {
          "name": "Virgen de las Viñas",
          "desc": "Ermita elevada sobre la capital del Duero.",
          "parkingNearby": "Parking Virgen Viñas",
          "optimalTime": "20:28 - 20:30 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Aranda de Duero",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:28:22 CEST - 20:30:08 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:28:22 CEST - 20:30:08 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Aranda de Duero",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:28:22 CEST - 20:30:08 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:28:22 CEST - 20:30:08 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Recinto Ferial Aranda.",
        "capacityNote": "Acceso rápido A-1.",
        "coordinates": "41.6700, -3.6890",
        "trafficAdvice": "Entrar por Aranda Sur."
      },
      "accommodations": [
        {
          "name": "Hotel Villa de Aranda 4★",
          "type": "Hotel Urbano",
          "priceRange": "€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Aranda%20de%20Duero",
          "availabilityStatus": "Plazas Disponibles",
          "availabilityBadge": "success"
        },
        {
          "name": "Hotel Boutique Plaza Aranda de Duero",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Aranda%20de%20Duero",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Burgos (Castilla y León)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Aranda%20de%20Duero",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Aranda de Duero",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Aranda%20de%20Duero",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Aranda de Duero",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Aranda%20de%20Duero",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Capital de la Ribera del Duero.",
      "astrology": {
        "zodiacDegree": "20° 16' Leo",
        "fixedStar": "Regulus & Ribera",
        "element": "Tierra y Vino",
        "cosmicMeaning": "Solidez del fruto."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Aranda de Duero",
          "Asado a la leña típico de Burgos (Castilla y León)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Aranda de Duero"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Aranda de Duero & Bodegas",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Aranda%20de%20Duero"
        },
        {
          "name": "Restaurante Plaza Real de Aranda de Duero & Bodegas",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Aranda%20de%20Duero"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Aranda%20de%20Duero"
        },
        {
          "name": "Asador Don Manuel de Aranda de Duero",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Aranda%20de%20Duero"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Aranda%20de%20Duero"
        }
      ]
    },
    {
      "id": "sepulveda",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Hoces_del_r%C3%ADo_Durat%C3%B3n_-_01.jpg",
      "name": "Sepúlveda & Hoces del Duratón",
      "province": "Segovia (Castilla y León)",
      "coords": [
        41.297,
        -3.744
      ],
      "timeline": {
        "partialStart": "19:31:50 CEST",
        "totalityStart": "20:28:30 CEST",
        "totalityMax": "20:29:22 CEST",
        "totalityEnd": "20:30:14 CEST",
        "sunset": "21:06:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "6.8°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 120,
          "travelTime": "1h 15m",
          "route": "A-1 ➔ SG-232"
        }
      },
      "whatToDo": {
        "morning": "Villa medieval de Sepúlveda.",
        "afternoon": "Ermita de San Frutos en las Hoces.",
        "eclipseMoment": "Buitres leonados planeando en la penumbra sobre el cañón.",
        "night": "Lechazo asado segoviano."
      },
      "publicObservationSpots": [
        {
          "name": "San Frutos (Hoces del Duratón)",
          "desc": "Cañón del río Duratón excavado en roca de 100m.",
          "parkingNearby": "Parking San Frutos",
          "optimalTime": "20:28 - 20:30 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Sepúlveda",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:28:30 CEST - 20:30:14 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:28:30 CEST - 20:30:14 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Sepúlveda",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:28:30 CEST - 20:30:14 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:28:30 CEST - 20:30:14 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Parking San Frutos.",
        "capacityNote": "Parque Natural Protegido.",
        "coordinates": "41.3280, -3.8790",
        "trafficAdvice": "Pista desde Villaseca."
      },
      "accommodations": [
        {
          "name": "Posada del Duratón",
          "type": "Posada Real",
          "priceRange": "€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Sep%C3%BAlveda",
          "availabilityStatus": "Alta Demanda",
          "availabilityBadge": "warning"
        },
        {
          "name": "Hotel Boutique Plaza Sepúlveda",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Sep%C3%BAlveda",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Segovia (Castilla y León)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Sep%C3%BAlveda",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Sepúlveda",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Sep%C3%BAlveda",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Sepúlveda",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Sep%C3%BAlveda",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Villa fortificada con fuero de 1076.",
      "astrology": {
        "zodiacDegree": "20° 17' Leo",
        "fixedStar": "Regulus & San Frutos",
        "element": "Cañón y Águila",
        "cosmicMeaning": "Visión de águila y libertad."
      },
      "isTop10": true,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Sepúlveda",
          "Asado a la leña típico de Segovia (Castilla y León)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Sepúlveda"
        ],
        "drinks": "Vino tinto D.O. Valtiendas de Segovia"
      },
      "whereToEat": [
        {
          "name": "Asador Figón Tinín",
          "type": "Asador histórico de lechazo",
          "specialty": "Lechazo lechal en horno de adobe de 1850",
          "priceRange": "€€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Sep%C3%BAlveda"
        },
        {
          "name": "Restaurante El Zaguán",
          "type": "Mesón castellano",
          "specialty": "Sopa castellana y ensalada de codorniz escabechada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Sep%C3%BAlveda"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Sep%C3%BAlveda"
        },
        {
          "name": "Asador Don Manuel de Sepúlveda",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Sep%C3%BAlveda"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Sep%C3%BAlveda"
        }
      ]
    },
    {
      "id": "pedraza",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/30/Plaza_Mayor_de_Pedraza.jpg",
      "name": "Pedraza & Castillo de Pedraza",
      "province": "Segovia (Castilla y León)",
      "coords": [
        41.13,
        -3.811
      ],
      "timeline": {
        "partialStart": "19:31:52 CEST",
        "totalityStart": "20:28:32 CEST",
        "totalityMax": "20:29:24 CEST",
        "totalityEnd": "20:30:16 CEST",
        "sunset": "21:06:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "6.7°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 110,
          "travelTime": "1h 15m",
          "route": "A-1 ➔ N-110"
        }
      },
      "whatToDo": {
        "morning": "Cárcel de la Villa de Pedraza.",
        "afternoon": "Castillo Zuloaga.",
        "eclipseMoment": "Almenas del castillo medieval bajo el eclipse.",
        "night": "Plaza Mayor a la luz de las velas."
      },
      "publicObservationSpots": [
        {
          "name": "Explanada del Castillo de Pedraza",
          "desc": "Recinto amurallado del siglo XIII.",
          "parkingNearby": "Parking Puerta Villa",
          "optimalTime": "20:28 - 20:30 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Pedraza",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:28:32 CEST - 20:30:16 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:28:32 CEST - 20:30:16 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Pedraza",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:28:32 CEST - 20:30:16 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:28:32 CEST - 20:30:16 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Parking exterior a la muralla.",
        "capacityNote": "Acceso cerrado interior.",
        "coordinates": "41.1300, -3.8110",
        "trafficAdvice": "Estacionar fuera."
      },
      "accommodations": [
        {
          "name": "Hospedería Santo Domingo",
          "type": "Hotel Encanto",
          "priceRange": "€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Pedraza",
          "availabilityStatus": "Agotándose",
          "availabilityBadge": "danger"
        },
        {
          "name": "Hotel Boutique Plaza Pedraza",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Pedraza",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Segovia (Castilla y León)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Pedraza",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Pedraza",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Pedraza",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Pedraza",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Pedraza",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Villa medieval intacta con una única puerta de entrada.",
      "astrology": {
        "zodiacDegree": "20° 17' Leo",
        "fixedStar": "Regulus & Zuloaga",
        "element": "Piedra y Velas",
        "cosmicMeaning": "Pureza estética e intimidad."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Pedraza",
          "Asado a la leña típico de Segovia (Castilla y León)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Pedraza"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Pedraza & Castillo de Pedraza",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Pedraza"
        },
        {
          "name": "Restaurante Plaza Real de Pedraza & Castillo de Pedraza",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Pedraza"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Pedraza"
        },
        {
          "name": "Asador Don Manuel de Pedraza",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Pedraza"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Pedraza"
        }
      ]
    },
    {
      "id": "medinaceli",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Arco_romano%2C_Medinaceli%2C_Soria%2C_Espa%C3%B1a%2C_2015-12-28%2C_DD_105.JPG",
      "name": "Medinaceli & Arco Romano",
      "province": "Soria (Castilla y León)",
      "coords": [
        41.171,
        -2.434
      ],
      "timeline": {
        "partialStart": "19:32:05 CEST",
        "totalityStart": "20:28:45 CEST",
        "totalityMax": "20:29:38 CEST",
        "totalityEnd": "20:30:31 CEST",
        "sunset": "21:02:00 CEST",
        "formattedDuration": "1 min 46 seg",
        "sunAltitude": "6.0°",
        "sunAzimuth": "289° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 150,
          "travelTime": "1h 30m",
          "route": "A-2 directa"
        }
      },
      "whatToDo": {
        "morning": "Arco Romano triple de Medinaceli.",
        "afternoon": "Palacio Ducal.",
        "eclipseMoment": "Único arco romano triple de España recortado en el eclipse.",
        "night": "Torreznos de Soria."
      },
      "publicObservationSpots": [
        {
          "name": "Arco Romano de Medinaceli",
          "desc": "Arco romano sobre cerro a 1.200m.",
          "parkingNearby": "Parking Arco Medinaceli",
          "optimalTime": "20:28 - 20:30 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Medinaceli",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:28:45 CEST - 20:30:31 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:28:45 CEST - 20:30:31 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Medinaceli",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:28:45 CEST - 20:30:31 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:28:45 CEST - 20:30:31 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Parking Arco Romano.",
        "capacityNote": "Acceso directo A-2.",
        "coordinates": "41.1710, -2.4340",
        "trafficAdvice": "Subir a Medinaceli alta."
      },
      "accommodations": [
        {
          "name": "Palacio de Medinaceli 4★",
          "type": "Palacio",
          "priceRange": "€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Medinaceli",
          "availabilityStatus": "Plazas Disponibles",
          "availabilityBadge": "success"
        },
        {
          "name": "Hotel Boutique Plaza Medinaceli",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Medinaceli",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Soria (Castilla y León)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Medinaceli",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Medinaceli",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Medinaceli",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Medinaceli",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Medinaceli",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Ciudad celtíbera, romana y árabe con la tumba de Almanzor.",
      "astrology": {
        "zodiacDegree": "20° 18' Leo",
        "fixedStar": "Regulus & Arco Romano",
        "element": "Piedra Romana",
        "cosmicMeaning": "Puerta de triunfo."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Medinaceli",
          "Asado a la leña típico de Soria (Castilla y León)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Medinaceli"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Medinaceli & Arco Romano",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Medinaceli"
        },
        {
          "name": "Restaurante Plaza Real de Medinaceli & Arco Romano",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Medinaceli"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Medinaceli"
        },
        {
          "name": "Asador Don Manuel de Medinaceli",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Medinaceli"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Medinaceli"
        }
      ]
    },
    {
      "id": "soria-capital",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Monasterio_de_San_Juan_de_Duero%2C_Soria%2C_Espa%C3%B1a%2C_2017-05-26%2C_DD_19.jpg",
      "name": "Soria & San Juan de Duero",
      "province": "Soria (Castilla y León)",
      "coords": [
        41.766,
        -2.466
      ],
      "timeline": {
        "partialStart": "19:31:55 CEST",
        "totalityStart": "20:28:35 CEST",
        "totalityMax": "20:29:28 CEST",
        "totalityEnd": "20:30:21 CEST",
        "sunset": "21:04:00 CEST",
        "formattedDuration": "1 min 46 seg",
        "sunAltitude": "6.4°",
        "sunAzimuth": "289° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 225,
          "travelTime": "2h 10m",
          "route": "A-2 ➔ A-15"
        }
      },
      "whatToDo": {
        "morning": "Claustro de San Juan de Duero.",
        "afternoon": "Monte de las Ánimas y Numancia.",
        "eclipseMoment": "Totalidad inmortalizando los versos de Antonio Machado.",
        "night": "Torreznos de Soria."
      },
      "publicObservationSpots": [
        {
          "name": "Mirador Castillo de Soria",
          "desc": "Parque elevado sobre el río Duero.",
          "parkingNearby": "Parking Parador Soria",
          "optimalTime": "20:28 - 20:30 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Soria",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:28:35 CEST - 20:30:21 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:28:35 CEST - 20:30:21 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Soria",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:28:35 CEST - 20:30:21 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:28:35 CEST - 20:30:21 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Parador y paseo del Duero.",
        "capacityNote": "Tráfico fluido.",
        "coordinates": "41.7660, -2.4660",
        "trafficAdvice": "Aparcar junto al Duero."
      },
      "accommodations": [
        {
          "name": "Parador de Soria 4★",
          "type": "Parador",
          "priceRange": "€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Soria",
          "availabilityStatus": "Alta Demanda",
          "availabilityBadge": "warning"
        },
        {
          "name": "Hotel Boutique Plaza Soria",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Soria",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Soria (Castilla y León)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Soria",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Soria",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Soria",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Soria",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Soria",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Ciudad poética de Machado y Bécquer.",
      "astrology": {
        "zodiacDegree": "20° 17' Leo",
        "fixedStar": "Regulus & Machado",
        "element": "Duero Poético",
        "cosmicMeaning": "Nostalgia noble y poesía."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Soria",
          "Asado a la leña típico de Soria (Castilla y León)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Soria"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Soria & San Juan de Duero",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Soria"
        },
        {
          "name": "Restaurante Plaza Real de Soria & San Juan de Duero",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Soria"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Soria"
        },
        {
          "name": "Asador Don Manuel de Soria",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Soria"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Soria"
        }
      ]
    },
    {
      "id": "siguenza",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/56/Atardecer_%26_Castillo.JPG",
      "name": "Sigüenza & Castillo del Doncel",
      "province": "Guadalajara (Castilla-La Mancha)",
      "coords": [
        41.069,
        -2.641
      ],
      "timeline": {
        "partialStart": "19:32:00 CEST",
        "totalityStart": "20:28:42 CEST",
        "totalityMax": "20:29:34 CEST",
        "totalityEnd": "20:30:26 CEST",
        "sunset": "21:03:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "6.2°",
        "sunAzimuth": "289° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 130,
          "travelTime": "1h 20m",
          "route": "A-2 ➔ CM-1101"
        }
      },
      "whatToDo": {
        "morning": "Catedral y Doncel de Sigüenza.",
        "afternoon": "Castillo Parador.",
        "eclipseMoment": "Fortalezas seguntinas medievales en penumbra.",
        "night": "Cabrito asado y fino."
      },
      "publicObservationSpots": [
        {
          "name": "Plaza del Castillo de Sigüenza",
          "desc": "Alcázar medieval del siglo XII.",
          "parkingNearby": "Parking Parador Sigüenza",
          "optimalTime": "20:28 - 20:30 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Sigüenza",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:28:42 CEST - 20:30:26 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:28:42 CEST - 20:30:26 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Sigüenza",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:28:42 CEST - 20:30:26 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:28:42 CEST - 20:30:26 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Parador y rondas.",
        "capacityNote": "Calles empinadas.",
        "coordinates": "41.0690, -2.6410",
        "trafficAdvice": "Aparcar arriba junto al castillo."
      },
      "accommodations": [
        {
          "name": "Parador de Sigüenza 4★",
          "type": "Parador Castillo",
          "priceRange": "€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Sig%C3%BCenza",
          "availabilityStatus": "Agotándose",
          "availabilityBadge": "danger"
        },
        {
          "name": "Hotel Boutique Plaza Sigüenza",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Sig%C3%BCenza",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Guadalajara (Castilla-La Mancha)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Sig%C3%BCenza",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Sigüenza",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Sig%C3%BCenza",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Sigüenza",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Sig%C3%BCenza",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Fortaleza románica del Doncel Martín Vázquez de Arce.",
      "astrology": {
        "zodiacDegree": "20° 18' Leo",
        "fixedStar": "Regulus & El Doncel",
        "element": "Piedra Seguntina",
        "cosmicMeaning": "Serenidad y dignidad."
      },
      "isTop10": true,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Sigüenza",
          "Asado a la leña típico de Guadalajara (Castilla-La Mancha)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Sigüenza"
        ],
        "drinks": "Fino de Sigüenza o Vino D.O. Mondéjar"
      },
      "whereToEat": [
        {
          "name": "Restaurante El Doncel (1 Michelin)",
          "type": "Gastronomía manchega de vanguardia",
          "specialty": "Menu degustación de cabrito y trufa",
          "priceRange": "€€€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Sig%C3%BCenza"
        },
        {
          "name": "Asador Nolla",
          "type": "Asador tradicional junto a la Catedral",
          "specialty": "Cabrito frito con ajos y migas alcarreñas",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Sig%C3%BCenza"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Sig%C3%BCenza"
        },
        {
          "name": "Asador Don Manuel de Sigüenza",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Sig%C3%BCenza"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Sig%C3%BCenza"
        }
      ]
    },
    {
      "id": "molina-aragon",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Molina_de_Arag%C3%B3n%2C_Guadalajara%2C_Espa%C3%B1a%2C_2016-01-05%2C_DD_15.JPG",
      "name": "Molina de Aragón & Castillo Real",
      "province": "Guadalajara (Castilla-La Mancha)",
      "coords": [
        40.843,
        -1.886
      ],
      "timeline": {
        "partialStart": "19:32:20 CEST",
        "totalityStart": "20:29:10 CEST",
        "totalityMax": "20:30:02 CEST",
        "totalityEnd": "20:30:54 CEST",
        "sunset": "21:00:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "5.3°",
        "sunAzimuth": "289° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 200,
          "travelTime": "2h 00m",
          "route": "A-2 ➔ N-211"
        }
      },
      "whatToDo": {
        "morning": "Castillo-Alcázar molinés.",
        "afternoon": "Barrio judío y río Gallo.",
        "eclipseMoment": "Totalidad a 5.3° sobre el mayor castillo de Guadalajara.",
        "night": "Morteruelo molinés."
      },
      "publicObservationSpots": [
        {
          "name": "Castillo-Alcázar de Molina",
          "desc": "Una de las fortalezas más grandes de España.",
          "parkingNearby": "Parking Castillo Molina",
          "optimalTime": "20:29 - 20:31 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Molina de Aragón",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:29:10 CEST - 20:30:54 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:29:10 CEST - 20:30:54 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Molina de Aragón",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:29:10 CEST - 20:30:54 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:29:10 CEST - 20:30:54 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Paseo del río Gallo.",
        "capacityNote": "Acceso N-211.",
        "coordinates": "40.8430, -1.8860",
        "trafficAdvice": "Aparcar junto al puente."
      },
      "accommodations": [
        {
          "name": "Hotel Palacete Molina",
          "type": "Palacio Real",
          "priceRange": "€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Molina%20de%20Arag%C3%B3n",
          "availabilityStatus": "Plazas Disponibles",
          "availabilityBadge": "success"
        },
        {
          "name": "Hotel Boutique Plaza Molina de Aragón",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Molina%20de%20Arag%C3%B3n",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Guadalajara (Castilla-La Mancha)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Molina%20de%20Arag%C3%B3n",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Molina de Aragón",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Molina%20de%20Arag%C3%B3n",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Molina de Aragón",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Molina%20de%20Arag%C3%B3n",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Capital del Señorío de Molina.",
      "astrology": {
        "zodiacDegree": "20° 20' Leo",
        "fixedStar": "Regulus & Molina",
        "element": "Fortaleza Real",
        "cosmicMeaning": "Defensa del territorio sagrado."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Molina de Aragón",
          "Asado a la leña típico de Guadalajara (Castilla-La Mancha)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Molina de Aragón"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Molina de Aragón & Castillo Real",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Molina%20de%20Arag%C3%B3n"
        },
        {
          "name": "Restaurante Plaza Real de Molina de Aragón & Castillo Real",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Molina%20de%20Arag%C3%B3n"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Molina%20de%20Arag%C3%B3n"
        },
        {
          "name": "Asador Don Manuel de Molina de Aragón",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Molina%20de%20Arag%C3%B3n"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Molina%20de%20Arag%C3%B3n"
        }
      ]
    },
    {
      "id": "guadalajara-capital",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/75/Palacio_del_Infantado.jpg",
      "name": "Guadalajara & Palacio del Infantado",
      "province": "Guadalajara (Castilla-La Mancha)",
      "coords": [
        40.633,
        -3.167
      ],
      "timeline": {
        "partialStart": "19:32:00 CEST",
        "totalityStart": "20:28:40 CEST",
        "totalityMax": "20:29:32 CEST",
        "totalityEnd": "20:30:24 CEST",
        "sunset": "21:05:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "6.5°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 55,
          "travelTime": "0h 40m",
          "route": "A-2 / Cercanías C-2"
        }
      },
      "whatToDo": {
        "morning": "Palacio del Infantado.",
        "afternoon": "Panteón Duquesa de Sevillano.",
        "eclipseMoment": "Totalidad sobre el patio de leones del Infantado.",
        "night": "Bizcochadas borrachas."
      },
      "publicObservationSpots": [
        {
          "name": "Parque de San Roque",
          "desc": "Mirador sobre la Alcarria.",
          "parkingNearby": "Parking Plaza Toros",
          "optimalTime": "20:28 - 20:30 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Guadalajara",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:28:40 CEST - 20:30:24 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:28:40 CEST - 20:30:24 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Guadalajara",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:28:40 CEST - 20:30:24 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:28:40 CEST - 20:30:24 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Infantado y recintos.",
        "capacityNote": "Próximo a Madrid.",
        "coordinates": "40.6330, -3.1670",
        "trafficAdvice": "Tren de Cercanías C-2."
      },
      "accommodations": [
        {
          "name": "AC Guadalajara 4★",
          "type": "Hotel Urbano",
          "priceRange": "€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Guadalajara",
          "availabilityStatus": "Plazas Disponibles",
          "availabilityBadge": "success"
        },
        {
          "name": "Hotel Boutique Plaza Guadalajara",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Guadalajara",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Guadalajara (Castilla-La Mancha)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Guadalajara",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Guadalajara",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Guadalajara",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Guadalajara",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Guadalajara",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Wad-al-Hayara y feudo de los Mendoza.",
      "astrology": {
        "zodiacDegree": "20° 18' Leo",
        "fixedStar": "Regulus & Mendoza",
        "element": "Gótico Flamígero",
        "cosmicMeaning": "Creatividad y refinamiento."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Guadalajara",
          "Asado a la leña típico de Guadalajara (Castilla-La Mancha)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Guadalajara"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Guadalajara & Palacio del Infantado",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Guadalajara"
        },
        {
          "name": "Restaurante Plaza Real de Guadalajara & Palacio del Infantado",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Guadalajara"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Guadalajara"
        },
        {
          "name": "Asador Don Manuel de Guadalajara",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Guadalajara"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Guadalajara"
        }
      ]
    },
    {
      "id": "cifuentes",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Cifuentes_Castillo1.jpg",
      "name": "Cifuentes & Cien Fuentes",
      "province": "Guadalajara (Castilla-La Mancha)",
      "coords": [
        40.786,
        -2.621
      ],
      "timeline": {
        "partialStart": "19:32:10 CEST",
        "totalityStart": "20:28:50 CEST",
        "totalityMax": "20:29:42 CEST",
        "totalityEnd": "20:30:34 CEST",
        "sunset": "21:03:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "6.0°",
        "sunAzimuth": "289° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 125,
          "travelTime": "1h 15m",
          "route": "A-2 ➔ N-204"
        }
      },
      "whatToDo": {
        "morning": "Manantiales de las Cien Fuentes.",
        "afternoon": "Castillo Don Juan Manuel.",
        "eclipseMoment": "Eclipse reflejado en los manantiales alcarreños.",
        "night": "Cabrito y miel de la Alcarria."
      },
      "publicObservationSpots": [
        {
          "name": "Castillo Don Juan Manuel",
          "desc": "Fortaleza del siglo XIV sobre la villa.",
          "parkingNearby": "Parking Cifuentes",
          "optimalTime": "20:28 - 20:30 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Cifuentes",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:28:50 CEST - 20:30:34 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:28:50 CEST - 20:30:34 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Cifuentes",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:28:50 CEST - 20:30:34 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:28:50 CEST - 20:30:34 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Plaza Mayor Cifuentes.",
        "capacityNote": "Tranquilidad alcarreña.",
        "coordinates": "40.7860, -2.6210",
        "trafficAdvice": "Acceso por N-204."
      },
      "accommodations": [
        {
          "name": "Casa Rural Cifuentes",
          "type": "Casa Rural",
          "priceRange": "€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Cifuentes",
          "availabilityStatus": "Plazas Disponibles",
          "availabilityBadge": "success"
        },
        {
          "name": "Hotel Boutique Plaza Cifuentes",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Cifuentes",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Guadalajara (Castilla-La Mancha)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Cifuentes",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Cifuentes",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Cifuentes",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Cifuentes",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Cifuentes",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Villa literaria de Don Juan Manuel.",
      "astrology": {
        "zodiacDegree": "20° 19' Leo",
        "fixedStar": "Regulus & Manantial",
        "element": "Manantial y Miel",
        "cosmicMeaning": "Fuente de vitalidad."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Cifuentes",
          "Asado a la leña típico de Guadalajara (Castilla-La Mancha)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Cifuentes"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Cifuentes & Cien Fuentes",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Cifuentes"
        },
        {
          "name": "Restaurante Plaza Real de Cifuentes & Cien Fuentes",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Cifuentes"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Cifuentes"
        },
        {
          "name": "Asador Don Manuel de Cifuentes",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Cifuentes"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Cifuentes"
        }
      ]
    },
    {
      "id": "pastrana",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/46/Pastrana009.jpg",
      "name": "Pastrana & Palacio Ducal",
      "province": "Guadalajara (Castilla-La Mancha)",
      "coords": [
        40.418,
        -2.923
      ],
      "timeline": {
        "partialStart": "19:32:12 CEST",
        "totalityStart": "20:28:52 CEST",
        "totalityMax": "20:29:44 CEST",
        "totalityEnd": "20:30:36 CEST",
        "sunset": "21:03:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "6.1°",
        "sunAzimuth": "289° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 95,
          "travelTime": "1h 05m",
          "route": "N-320 ➔ CM-200"
        }
      },
      "whatToDo": {
        "morning": "Palacio Ducal y celosía de la Princesa de Éboli.",
        "afternoon": "Colegiata de Pastrana.",
        "eclipseMoment": "Oscuridad sobre la plaza de la Princesa de Éboli.",
        "night": "Duelos y quebrantos."
      },
      "publicObservationSpots": [
        {
          "name": "Plaza de la Hora",
          "desc": "Plaza renacentista donde estuvo confinada la Éboli.",
          "parkingNearby": "Parking Entrada Pastrana",
          "optimalTime": "20:28 - 20:30 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Pastrana",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:28:52 CEST - 20:30:36 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:28:52 CEST - 20:30:36 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Pastrana",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:28:52 CEST - 20:30:36 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:28:52 CEST - 20:30:36 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Aparcamiento de entrada a Pastrana.",
        "capacityNote": "Recinto estrecho.",
        "coordinates": "40.4180, -2.9230",
        "trafficAdvice": "Aparcar a la entrada."
      },
      "accommodations": [
        {
          "name": "Hospedería Real de Pastrana",
          "type": "Hospedería",
          "priceRange": "€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Pastrana",
          "availabilityStatus": "Plazas Disponibles",
          "availabilityBadge": "success"
        },
        {
          "name": "Hotel Boutique Plaza Pastrana",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Pastrana",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Guadalajara (Castilla-La Mancha)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Pastrana",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Pastrana",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Pastrana",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Pastrana",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Pastrana",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Ducado renacentista de la Princesa de Éboli.",
      "astrology": {
        "zodiacDegree": "20° 19' Leo",
        "fixedStar": "Regulus & Éboli",
        "element": "Misterio Renacentista",
        "cosmicMeaning": "Revelación de secretos."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Pastrana",
          "Asado a la leña típico de Guadalajara (Castilla-La Mancha)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Pastrana"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Pastrana & Palacio Ducal",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Pastrana"
        },
        {
          "name": "Restaurante Plaza Real de Pastrana & Palacio Ducal",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Pastrana"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Pastrana"
        },
        {
          "name": "Asador Don Manuel de Pastrana",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Pastrana"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Pastrana"
        }
      ]
    },
    {
      "id": "zaragoza",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/30/Bas%C3%ADlica_del_Pilar_Zaragoza.jpg",
      "name": "Zaragoza & Balcón del Ebro",
      "province": "Zaragoza (Aragón)",
      "coords": [
        41.656,
        -0.878
      ],
      "timeline": {
        "partialStart": "19:32:15 CEST",
        "totalityStart": "20:29:05 CEST",
        "totalityMax": "20:29:58 CEST",
        "totalityEnd": "20:30:51 CEST",
        "sunset": "21:02:00 CEST",
        "formattedDuration": "1 min 46 seg",
        "sunAltitude": "5.4°",
        "sunAzimuth": "289° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 315,
          "travelTime": "3h 10m",
          "route": "A-2 / AVE"
        }
      },
      "whatToDo": {
        "morning": "Basílica del Pilar.",
        "afternoon": "Parque del Agua.",
        "eclipseMoment": "Sol eclipsado sobre el río Ebro.",
        "night": "Tapas en El Tubo."
      },
      "publicObservationSpots": [
        {
          "name": "Puente de Piedra",
          "desc": "Vista del Pilar sobre el Ebro.",
          "parkingNearby": "Parking Plaza Pilar",
          "optimalTime": "20:29 - 20:31 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Zaragoza",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:29:05 CEST - 20:30:51 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:29:05 CEST - 20:30:51 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Zaragoza",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:29:05 CEST - 20:30:51 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:29:05 CEST - 20:30:51 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Plaza del Pilar.",
        "capacityNote": "Usar tranvía.",
        "coordinates": "41.6570, -0.8790",
        "trafficAdvice": "Usar tranvía urbano."
      },
      "accommodations": [
        {
          "name": "Hotel Palafox 5★",
          "type": "Hotel Lujo",
          "priceRange": "€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Zaragoza",
          "availabilityStatus": "Plazas Disponibles",
          "availabilityBadge": "success"
        },
        {
          "name": "Hotel Boutique Plaza Zaragoza",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Zaragoza",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Zaragoza (Aragón)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Zaragoza",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Zaragoza",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Zaragoza",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Zaragoza",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Zaragoza",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Caesaraugusta romana.",
      "astrology": {
        "zodiacDegree": "20° 20' Leo",
        "fixedStar": "Regulus & Spica",
        "element": "Fuego & Ebro",
        "cosmicMeaning": "Abundancia e intelecto."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Zaragoza",
          "Asado a la leña típico de Zaragoza (Aragón)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Zaragoza"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Zaragoza & Balcón del Ebro",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Zaragoza"
        },
        {
          "name": "Restaurante Plaza Real de Zaragoza & Balcón del Ebro",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Zaragoza"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Zaragoza"
        },
        {
          "name": "Asador Don Manuel de Zaragoza",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Zaragoza"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Zaragoza"
        }
      ]
    },
    {
      "id": "calatayud",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Bilbilis_teatro_romano.jpg",
      "name": "Calatayud & Bilbilis",
      "province": "Zaragoza (Aragón)",
      "coords": [
        41.352,
        -1.642
      ],
      "timeline": {
        "partialStart": "19:32:10 CEST",
        "totalityStart": "20:29:00 CEST",
        "totalityMax": "20:29:52 CEST",
        "totalityEnd": "20:30:44 CEST",
        "sunset": "21:02:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "5.6°",
        "sunAzimuth": "289° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 235,
          "travelTime": "2h 15m",
          "route": "A-2 / AVE"
        }
      },
      "whatToDo": {
        "morning": "Yacimiento de Bilbilis.",
        "afternoon": "Monasterio de Piedra.",
        "eclipseMoment": "Teatro romano de Bilbilis bajo el eclipse.",
        "night": "Vinos D.O. Calatayud."
      },
      "publicObservationSpots": [
        {
          "name": "Teatro de Bilbilis",
          "desc": "Yacimiento sobre el Jalón.",
          "parkingNearby": "Parking Bilbilis",
          "optimalTime": "20:29 - 20:31 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Calatayud",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:29:00 CEST - 20:30:44 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:29:00 CEST - 20:30:44 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Calatayud",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:29:00 CEST - 20:30:44 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:29:00 CEST - 20:30:44 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Estación AVE y Bilbilis.",
        "capacityNote": "AVE directo.",
        "coordinates": "41.3520, -1.6420",
        "trafficAdvice": "Subir al cerro Bambola."
      },
      "accommodations": [
        {
          "name": "Monasterio de Piedra 4★",
          "type": "Monasterio Cisterciense",
          "priceRange": "€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Calatayud",
          "availabilityStatus": "Alta Demanda",
          "availabilityBadge": "warning"
        },
        {
          "name": "Hotel Boutique Plaza Calatayud",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Calatayud",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Zaragoza (Aragón)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Calatayud",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Calatayud",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Calatayud",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Calatayud",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Calatayud",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Patria del poeta Marcial.",
      "astrology": {
        "zodiacDegree": "20° 19' Leo",
        "fixedStar": "Regulus & Marcial",
        "element": "Mudéjar",
        "cosmicMeaning": "Agudeza poética."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Calatayud",
          "Asado a la leña típico de Zaragoza (Aragón)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Calatayud"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Calatayud & Bilbilis",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Calatayud"
        },
        {
          "name": "Restaurante Plaza Real de Calatayud & Bilbilis",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Calatayud"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Calatayud"
        },
        {
          "name": "Asador Don Manuel de Calatayud",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Calatayud"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Calatayud"
        }
      ]
    },
    {
      "id": "albarracin",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Albarracin_Teruel_Spain.jpg",
      "name": "Albarracín & Murallas",
      "province": "Teruel (Aragón)",
      "coords": [
        40.407,
        -1.444
      ],
      "timeline": {
        "partialStart": "19:32:45 CEST",
        "totalityStart": "20:29:40 CEST",
        "totalityMax": "20:30:31 CEST",
        "totalityEnd": "20:31:22 CEST",
        "sunset": "21:00:00 CEST",
        "formattedDuration": "1 min 42 seg",
        "sunAltitude": "4.8°",
        "sunAzimuth": "289° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 275,
          "travelTime": "3h 00m",
          "route": "A-2 ➔ N-211"
        }
      },
      "whatToDo": {
        "morning": "Murallas rojizas.",
        "afternoon": "Pinares de Rodeno.",
        "eclipseMoment": "Totalidad a 4.8° sobre las murallas medievales.",
        "night": "Jamón D.O. Teruel."
      },
      "publicObservationSpots": [
        {
          "name": "Murallas del Castillo",
          "desc": "Torreón sobre el cañón.",
          "parkingNearby": "Parking Entrada Albarracín",
          "optimalTime": "20:29 - 20:31 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Albarracín",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:29:40 CEST - 20:31:22 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:29:40 CEST - 20:31:22 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Albarracín",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:29:40 CEST - 20:31:22 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:29:40 CEST - 20:31:22 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Parking entrada.",
        "capacityNote": "Casco peatonal.",
        "coordinates": "40.4050, -1.4420",
        "trafficAdvice": "Estacionar abajo."
      },
      "accommodations": [
        {
          "name": "Hotel Albarracín 3★",
          "type": "Palacio",
          "priceRange": "€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Albarrac%C3%ADn",
          "availabilityStatus": "Plazas Disponibles",
          "availabilityBadge": "success"
        },
        {
          "name": "Hotel Boutique Plaza Albarracín",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Albarrac%C3%ADn",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Teruel (Aragón)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Albarrac%C3%ADn",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Albarracín",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Albarrac%C3%ADn",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Albarracín",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Albarrac%C3%ADn",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Señorío independiente s. XII.",
      "astrology": {
        "zodiacDegree": "20° 22' Leo",
        "fixedStar": "Regulus & Arcturus",
        "element": "Rodeno Rojo",
        "cosmicMeaning": "Anclaje telúrico profundo."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Albarracín",
          "Asado a la leña típico de Teruel (Aragón)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Albarracín"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Albarracín & Murallas",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Albarrac%C3%ADn"
        },
        {
          "name": "Restaurante Plaza Real de Albarracín & Murallas",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Albarrac%C3%ADn"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Albarrac%C3%ADn"
        },
        {
          "name": "Asador Don Manuel de Albarracín",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Albarrac%C3%ADn"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Albarrac%C3%ADn"
        }
      ]
    },
    {
      "id": "teruel-capital",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/84/Torre_de_San_Martin_Teruel.jpg",
      "name": "Teruel & Torico",
      "province": "Teruel (Aragón)",
      "coords": [
        40.345,
        -1.107
      ],
      "timeline": {
        "partialStart": "19:32:50 CEST",
        "totalityStart": "20:29:45 CEST",
        "totalityMax": "20:30:37 CEST",
        "totalityEnd": "20:31:29 CEST",
        "sunset": "20:59:00 CEST",
        "formattedDuration": "1 min 42 seg",
        "sunAltitude": "4.6°",
        "sunAzimuth": "289° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 300,
          "travelTime": "3h 15m",
          "route": "A-23"
        }
      },
      "whatToDo": {
        "morning": "Amantes de Teruel.",
        "afternoon": "Torres mudéjares.",
        "eclipseMoment": "Totalidad sobre el barroco mudéjar UNESCO.",
        "night": "Jamón en el Torico."
      },
      "publicObservationSpots": [
        {
          "name": "Viaductos de Teruel",
          "desc": "Panorámica desde la Escalinata.",
          "parkingNearby": "Parking Torico",
          "optimalTime": "20:29 - 20:31 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Teruel",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:29:45 CEST - 20:31:29 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:29:45 CEST - 20:31:29 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Teruel",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:29:45 CEST - 20:31:29 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:29:45 CEST - 20:31:29 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Plaza del Torico.",
        "capacityNote": "Acceso fácil A-23.",
        "coordinates": "40.3450, -1.1070",
        "trafficAdvice": "Aparcar junto al viaducto."
      },
      "accommodations": [
        {
          "name": "Parador de Teruel 3★",
          "type": "Parador Mudéjar",
          "priceRange": "€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Teruel",
          "availabilityStatus": "Plazas Disponibles",
          "availabilityBadge": "success"
        },
        {
          "name": "Hotel Boutique Plaza Teruel",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Teruel",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Teruel (Aragón)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Teruel",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Teruel",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Teruel",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Teruel",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Teruel",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Capital del arte mudéjar aragonés.",
      "astrology": {
        "zodiacDegree": "20° 23' Leo",
        "fixedStar": "Regulus & Amantes",
        "element": "Barro Mudéjar",
        "cosmicMeaning": "Devoción pura."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Teruel",
          "Asado a la leña típico de Teruel (Aragón)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Teruel"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Teruel & Torico",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Teruel"
        },
        {
          "name": "Restaurante Plaza Real de Teruel & Torico",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Teruel"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Teruel"
        },
        {
          "name": "Asador Don Manuel de Teruel",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Teruel"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Teruel"
        }
      ]
    },
    {
      "id": "huesca-loarre",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Castillo_de_Loarre_2.jpg",
      "name": "Huesca & Castillo de Loarre",
      "province": "Huesca (Aragón)",
      "coords": [
        42.325,
        -0.613
      ],
      "timeline": {
        "partialStart": "19:32:10 CEST",
        "totalityStart": "20:28:55 CEST",
        "totalityMax": "20:29:48 CEST",
        "totalityEnd": "20:30:41 CEST",
        "sunset": "21:01:00 CEST",
        "formattedDuration": "1 min 46 seg",
        "sunAltitude": "5.8°",
        "sunAzimuth": "289° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 380,
          "travelTime": "3h 45m",
          "route": "A-23"
        }
      },
      "whatToDo": {
        "morning": "Castillo de Loarre románico.",
        "afternoon": "Mallos de Riglos.",
        "eclipseMoment": "Sol eclipsado tras los muros románicos del castillo de Loarre.",
        "night": "Tapas pirenaicas."
      },
      "publicObservationSpots": [
        {
          "name": "Castillo de Loarre",
          "desc": "Fortaleza románica del siglo XI.",
          "parkingNearby": "Parking Loarre",
          "optimalTime": "20:28 - 20:30 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Huesca",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:28:55 CEST - 20:30:41 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:28:55 CEST - 20:30:41 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Huesca",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:28:55 CEST - 20:30:41 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:28:55 CEST - 20:30:41 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Parking del Castillo.",
        "capacityNote": "Aforo limitado.",
        "coordinates": "42.3250, -0.6130",
        "trafficAdvice": "Subir por A-1206."
      },
      "accommodations": [
        {
          "name": "Hospedería Loarre",
          "type": "Hospedería",
          "priceRange": "€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Huesca",
          "availabilityStatus": "Agotado",
          "availabilityBadge": "danger"
        },
        {
          "name": "Hotel Boutique Plaza Huesca",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Huesca",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Huesca (Aragón)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Huesca",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Huesca",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Huesca",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Huesca",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Huesca",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Fortaleza de Sancho III el Mayor de 1020.",
      "astrology": {
        "zodiacDegree": "20° 19' Leo",
        "fixedStar": "Regulus & Románico",
        "element": "Fuego Templario",
        "cosmicMeaning": "Valentía inquebrantable."
      },
      "isTop10": true,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Huesca",
          "Asado a la leña típico de Huesca (Aragón)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Huesca"
        ],
        "drinks": "Vino tinto D.O. Somontano"
      },
      "whereToEat": [
        {
          "name": "Restaurante Lillas Pastia (1 Michelin)",
          "type": "Alta cocina aragonesa y trufa",
          "specialty": "Ternasco glaseado y trufa negra del Moncayo",
          "priceRange": "€€€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Huesca"
        },
        {
          "name": "Hospedería del Castillo de Loarre",
          "type": "Mesón pirenaico",
          "specialty": "Migas de pastor con huevo frito y ternasco",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Huesca"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Huesca"
        },
        {
          "name": "Asador Don Manuel de Huesca",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Huesca"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Huesca"
        }
      ]
    },
    {
      "id": "sos-rey-catolico",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Sos_del_Rey_Cat%C3%B3lico_-_Vista_general.jpg",
      "name": "Sos del Rey Católico",
      "province": "Zaragoza (Aragón)",
      "coords": [
        42.496,
        -1.215
      ],
      "timeline": {
        "partialStart": "19:32:00 CEST",
        "totalityStart": "20:28:40 CEST",
        "totalityMax": "20:29:32 CEST",
        "totalityEnd": "20:30:24 CEST",
        "sunset": "21:04:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "6.3°",
        "sunAzimuth": "289° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 390,
          "travelTime": "3h 50m",
          "route": "A-2 ➔ A-127"
        }
      },
      "whatToDo": {
        "morning": "Palacio Sada.",
        "afternoon": "Castillo de la Peña y murallas.",
        "eclipseMoment": "Oscuridad sobre la villa medieval de Fernando de Aragón.",
        "night": "Ternasco de Aragón."
      },
      "publicObservationSpots": [
        {
          "name": "Castillo de la Peña de Sos",
          "desc": "Torre sobre la cuna del Rey Católico.",
          "parkingNearby": "Parking Puerta Villa Sos",
          "optimalTime": "20:28 - 20:30 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Sos del Rey Católico",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:28:40 CEST - 20:30:24 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:28:40 CEST - 20:30:24 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Sos del Rey Católico",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:28:40 CEST - 20:30:24 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:28:40 CEST - 20:30:24 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Parkings exteriores a las murallas.",
        "capacityNote": "Casco peatonal.",
        "coordinates": "42.4960, -1.2150",
        "trafficAdvice": "Aparcar a la entrada."
      },
      "accommodations": [
        {
          "name": "Parador de Sos 4★",
          "type": "Parador Aragonés",
          "priceRange": "€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Sos%20del%20Rey%20Cat%C3%B3lico",
          "availabilityStatus": "Alta Demanda",
          "availabilityBadge": "warning"
        },
        {
          "name": "Hotel Boutique Plaza Sos del Rey Católico",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Sos%20del%20Rey%20Cat%C3%B3lico",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Zaragoza (Aragón)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Sos%20del%20Rey%20Cat%C3%B3lico",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Sos del Rey Católico",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Sos%20del%20Rey%20Cat%C3%B3lico",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Sos del Rey Católico",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Sos%20del%20Rey%20Cat%C3%B3lico",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Cuna del Rey Fernando II de Aragón nacido en 1452.",
      "astrology": {
        "zodiacDegree": "20° 18' Leo",
        "fixedStar": "Regulus & Rey Católico",
        "element": "Piedra Real",
        "cosmicMeaning": "Unificación y destino."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Sos del Rey Católico",
          "Asado a la leña típico de Zaragoza (Aragón)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Sos del Rey Católico"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Sos del Rey Católico",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Sos%20del%20Rey%20Cat%C3%B3lico"
        },
        {
          "name": "Restaurante Plaza Real de Sos del Rey Católico",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Sos%20del%20Rey%20Cat%C3%B3lico"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Sos%20del%20Rey%20Cat%C3%B3lico"
        },
        {
          "name": "Asador Don Manuel de Sos del Rey Católico",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Sos%20del%20Rey%20Cat%C3%B3lico"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Sos%20del%20Rey%20Cat%C3%B3lico"
        }
      ]
    },
    {
      "id": "peniscola",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/23/Castillo_de_Papa_Luna_Peniscola.jpg",
      "name": "Peñíscola & Papa Luna",
      "province": "Castellón (Comunidad Valenciana)",
      "coords": [
        40.358,
        0.407
      ],
      "timeline": {
        "partialStart": "19:33:05 CEST",
        "totalityStart": "20:30:15 CEST",
        "totalityMax": "20:31:06 CEST",
        "totalityEnd": "20:31:57 CEST",
        "sunset": "20:54:00 CEST",
        "formattedDuration": "1 min 42 seg",
        "sunAltitude": "3.5°",
        "sunAzimuth": "289° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 490,
          "travelTime": "4h 45m",
          "route": "AP-7"
        }
      },
      "whatToDo": {
        "morning": "Castillo del Papa Luna.",
        "afternoon": "Playa Norte.",
        "eclipseMoment": "Totalidad a 3.5° sobre el castillo marítimo.",
        "night": "Arroz a la banda."
      },
      "publicObservationSpots": [
        {
          "name": "Playa Norte",
          "desc": "Vistas al castillo sobre el agua.",
          "parkingNearby": "Parking Puerto",
          "optimalTime": "20:30 - 20:32 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Peñíscola",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:30:15 CEST - 20:31:57 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:30:15 CEST - 20:31:57 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Peñíscola",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:30:15 CEST - 20:31:57 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:30:15 CEST - 20:31:57 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Puerto Peñíscola.",
        "capacityNote": "Turismo estival.",
        "coordinates": "40.3590, 0.4050",
        "trafficAdvice": "Entrar por Benicarló."
      },
      "accommodations": [
        {
          "name": "Servigroup Papa Luna 4★",
          "type": "Resort",
          "priceRange": "€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Pe%C3%B1%C3%ADscola",
          "availabilityStatus": "Alta Demanda",
          "availabilityBadge": "warning"
        },
        {
          "name": "Hotel Boutique Plaza Peñíscola",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Pe%C3%B1%C3%ADscola",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Castellón (Comunidad Valenciana)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Pe%C3%B1%C3%ADscola",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Peñíscola",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Pe%C3%B1%C3%ADscola",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Peñíscola",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Pe%C3%B1%C3%ADscola",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Sede papal de Benedicto XIII.",
      "astrology": {
        "zodiacDegree": "20° 24' Leo",
        "fixedStar": "Regulus & Fomalhaut",
        "element": "Agua Templaria",
        "cosmicMeaning": "Convicción mística pura."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Peñíscola",
          "Asado a la leña típico de Castellón (Comunidad Valenciana)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Peñíscola"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Peñíscola & Papa Luna",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Pe%C3%B1%C3%ADscola"
        },
        {
          "name": "Restaurante Plaza Real de Peñíscola & Papa Luna",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Pe%C3%B1%C3%ADscola"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Pe%C3%B1%C3%ADscola"
        },
        {
          "name": "Asador Don Manuel de Peñíscola",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Pe%C3%B1%C3%ADscola"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Pe%C3%B1%C3%ADscola"
        }
      ]
    },
    {
      "id": "palma",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/52/Catedral_de_Palma_de_Mallorca.jpg",
      "name": "Palma & Tramuntana",
      "province": "Islas Baleares",
      "coords": [
        39.569,
        2.65
      ],
      "timeline": {
        "partialStart": "19:33:40 CEST",
        "totalityStart": "20:31:10 CEST",
        "totalityMax": "20:31:58 CEST",
        "totalityEnd": "20:32:46 CEST",
        "sunset": "20:42:00 CEST",
        "formattedDuration": "1 min 36 seg",
        "sunAltitude": "2.1°",
        "sunAzimuth": "289° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 650,
          "travelTime": "1h 15m (Vuelo)",
          "route": "Vuelo o Ferry"
        }
      },
      "whatToDo": {
        "morning": "La Seu gótica.",
        "afternoon": "Castillo de Bellver.",
        "eclipseMoment": "Sol a 2.1° rozando el mar Mediterráneo.",
        "night": "Ensaimada y Portixol."
      },
      "publicObservationSpots": [
        {
          "name": "Castillo de Bellver",
          "desc": "Vista circular a la bahía.",
          "parkingNearby": "Parking Bellver",
          "optimalTime": "20:31 - 20:33 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Palma",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:31:10 CEST - 20:32:46 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:31:10 CEST - 20:32:46 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Palma",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:31:10 CEST - 20:32:46 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:31:10 CEST - 20:32:46 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Paseo Marítimo.",
        "capacityNote": "Reserva de coche.",
        "coordinates": "39.5638, 2.6194",
        "trafficAdvice": "Llegar temprano a Tramuntana."
      },
      "accommodations": [
        {
          "name": "Castillo Son Vida 5★",
          "type": "Resort Lujo",
          "priceRange": "€€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Palma",
          "availabilityStatus": "Agotándose",
          "availabilityBadge": "danger"
        },
        {
          "name": "Hotel Boutique Plaza Palma",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Palma",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Islas Baleares",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Palma",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Palma",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Palma",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Palma",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Palma",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "La Seu con el mayor rosetón gótico.",
      "astrology": {
        "zodiacDegree": "20° 25' Leo",
        "fixedStar": "Regulus & Neptuno",
        "element": "Agua Mística",
        "cosmicMeaning": "Espejo neptuniano."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Palma",
          "Asado a la leña típico de Islas Baleares",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Palma"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Palma & Tramuntana",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Palma"
        },
        {
          "name": "Restaurante Plaza Real de Palma & Tramuntana",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Palma"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Palma"
        },
        {
          "name": "Asador Don Manuel de Palma",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Palma"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Palma"
        }
      ]
    },
    {
      "id": "ciutadella-menorca",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Puerto_de_Ciudadela2.jpg",
      "name": "Ciutadella de Menorca & Punta Nati",
      "province": "Islas Baleares",
      "coords": [
        40,
        3.835
      ],
      "timeline": {
        "partialStart": "19:33:45 CEST",
        "totalityStart": "20:31:15 CEST",
        "totalityMax": "20:32:02 CEST",
        "totalityEnd": "20:32:50 CEST",
        "sunset": "20:41:00 CEST",
        "formattedDuration": "1 min 35 seg",
        "sunAltitude": "2.0°",
        "sunAzimuth": "289° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 700,
          "travelTime": "1h 20m (Vuelo)",
          "route": "Vuelo a Menorca"
        }
      },
      "whatToDo": {
        "morning": "Puerto de Ciutadella.",
        "afternoon": "Faro de Punta Nati.",
        "eclipseMoment": "Totalidad a 2.0° sobre los acantilados marinos de Menorca.",
        "night": "Caldereta de langosta."
      },
      "publicObservationSpots": [
        {
          "name": "Faro de Punta Nati",
          "desc": "Acantilados salvajes al NW de Menorca.",
          "parkingNearby": "Parking Punta Nati",
          "optimalTime": "20:31 - 20:33 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Ciutadella de Menorca",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:31:15 CEST - 20:32:50 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:31:15 CEST - 20:32:50 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Ciutadella de Menorca",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:31:15 CEST - 20:32:50 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:31:15 CEST - 20:32:50 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Parking del faro.",
        "capacityNote": "Acceso regulado en verano.",
        "coordinates": "40.0500, 3.8200",
        "trafficAdvice": "Llegar antes de las 18:00."
      },
      "accommodations": [
        {
          "name": "Faustino Gran 5★",
          "type": "Hotel Palacio",
          "priceRange": "€€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Ciutadella%20de%20Menorca",
          "availabilityStatus": "Alta Demanda",
          "availabilityBadge": "warning"
        },
        {
          "name": "Hotel Boutique Plaza Ciutadella de Menorca",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Ciutadella%20de%20Menorca",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Islas Baleares",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Ciutadella%20de%20Menorca",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Ciutadella de Menorca",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Ciutadella%20de%20Menorca",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Ciutadella de Menorca",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Ciutadella%20de%20Menorca",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Antigua capital de Menorca con patrimonio talayótico.",
      "astrology": {
        "zodiacDegree": "20° 26' Leo",
        "fixedStar": "Regulus & Sirio",
        "element": "Viento y Sal",
        "cosmicMeaning": "Claridad y serenidad insular."
      },
      "isTop10": true,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Ciutadella de Menorca",
          "Asado a la leña típico de Islas Baleares",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Ciutadella de Menorca"
        ],
        "drinks": "Gin Xoriguer con limonada (Pomada de Menorca)"
      },
      "whereToEat": [
        {
          "name": "Café Balear",
          "type": "Restaurante de pescadores en el puerto",
          "specialty": "Caldereta de langosta pescada con barco propio",
          "priceRange": "€€€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Ciutadella%20de%20Menorca"
        },
        {
          "name": "S'Amarador",
          "type": "Marisquería de alta calidad",
          "specialty": "Pescado fresco del día a la sal",
          "priceRange": "€€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Ciutadella%20de%20Menorca"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Ciutadella%20de%20Menorca"
        },
        {
          "name": "Asador Don Manuel de Ciutadella de Menorca",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Ciutadella%20de%20Menorca"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Ciutadella%20de%20Menorca"
        }
      ]
    },
    {
      "id": "morella",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Morella_Castillo.jpg",
      "name": "Morella & Castillo de Morella",
      "province": "Castellón (Comunidad Valenciana)",
      "coords": [
        40.618,
        -0.101
      ],
      "timeline": {
        "partialStart": "19:32:55 CEST",
        "totalityStart": "20:29:50 CEST",
        "totalityMax": "20:30:42 CEST",
        "totalityEnd": "20:31:34 CEST",
        "sunset": "20:56:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "4.2°",
        "sunAzimuth": "289° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 430,
          "travelTime": "4h 15m",
          "route": "A-2 ➔ N-232"
        }
      },
      "whatToDo": {
        "morning": "Castillo de Morella y murallas.",
        "afternoon": "Basílica de Santa María la Mayor.",
        "eclipseMoment": "Totalidad a 4.2° roza las almenas rocosas de Morella.",
        "night": "Flaons de Morella y trufa negra."
      },
      "publicObservationSpots": [
        {
          "name": "Castillo de Morella",
          "desc": "Fortaleza rocosa a más de 1.000m de altitud.",
          "parkingNearby": "Parking Santa Lucía Morella",
          "optimalTime": "20:29 - 20:31 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Morella",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:29:50 CEST - 20:31:34 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:29:50 CEST - 20:31:34 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Morella",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:29:50 CEST - 20:31:34 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:29:50 CEST - 20:31:34 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Aparcamientos a la entrada de la muralla.",
        "capacityNote": "Casco amurallado peatonal.",
        "coordinates": "40.6180, -0.1010",
        "trafficAdvice": "Aparcar fuera."
      },
      "accommodations": [
        {
          "name": "Hotel Cardenal Ram 4★",
          "type": "Palacio Siglo XVI",
          "priceRange": "€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Morella",
          "availabilityStatus": "Plazas Disponibles",
          "availabilityBadge": "success"
        },
        {
          "name": "Hotel Boutique Plaza Morella",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Morella",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Castellón (Comunidad Valenciana)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Morella",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Morella",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Morella",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Morella",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Morella",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Ciudad fortificada gobernada por El Cid Campeador.",
      "astrology": {
        "zodiacDegree": "20° 22' Leo",
        "fixedStar": "Regulus & El Cid",
        "element": "Roca Inexpugnable",
        "cosmicMeaning": "Perseverancia e inexpugnabilidad."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Morella",
          "Asado a la leña típico de Castellón (Comunidad Valenciana)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Morella"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Morella & Castillo de Morella",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Morella"
        },
        {
          "name": "Restaurante Plaza Real de Morella & Castillo de Morella",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Morella"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Morella"
        },
        {
          "name": "Asador Don Manuel de Morella",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Morella"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Morella"
        }
      ]
    },
    {
      "id": "tarazona",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Tarazona_2021_-_fa%C3%A7ade.jpg",
      "name": "Tarazona & Catedral Mudéjar",
      "province": "Zaragoza (Aragón)",
      "coords": [
        41.904,
        -1.725
      ],
      "timeline": {
        "partialStart": "19:31:50 CEST",
        "totalityStart": "20:28:30 CEST",
        "totalityMax": "20:29:22 CEST",
        "totalityEnd": "20:30:14 CEST",
        "sunset": "21:05:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "6.6°",
        "sunAzimuth": "289° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 280,
          "travelTime": "2h 45m",
          "route": "A-2 ➔ N-121"
        }
      },
      "whatToDo": {
        "morning": "Catedral de Nuestra Señora de la Huerta.",
        "afternoon": "Plaza de Toros Vieja octogonal.",
        "eclipseMoment": "Totalidad a 6.6° sobre el cimborrio mudéjar turiasonense.",
        "night": "Rancho de Tarazona."
      },
      "publicObservationSpots": [
        {
          "name": "Mirador del Barrio Judío de Tarazona",
          "desc": "Casas colgadas sobre la vega del Queiles.",
          "parkingNearby": "Parking Catedral Tarazona",
          "optimalTime": "20:28 - 20:30 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Tarazona",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:28:30 CEST - 20:30:14 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:28:30 CEST - 20:30:14 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Tarazona",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:28:30 CEST - 20:30:14 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:28:30 CEST - 20:30:14 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Parking de la Catedral y río Queiles.",
        "capacityNote": "Fácil acceso desde la N-121.",
        "coordinates": "41.9040, -1.7250",
        "trafficAdvice": "Aparcar junto al río."
      },
      "accommodations": [
        {
          "name": "Hotel Las Cadenas",
          "type": "Hotel Histórico",
          "priceRange": "€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Tarazona",
          "availabilityStatus": "Plazas Disponibles",
          "availabilityBadge": "success"
        },
        {
          "name": "Hotel Boutique Plaza Tarazona",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Tarazona",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Zaragoza (Aragón)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Tarazona",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Tarazona",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Tarazona",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Tarazona",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Tarazona",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Turiaso romana y ciudad de las tres culturas (cristiana, judía y musulmana).",
      "astrology": {
        "zodiacDegree": "20° 17' Leo",
        "fixedStar": "Regulus & Moncayo",
        "element": "Tierra y Moncayo",
        "cosmicMeaning": "Fusión de culturas y armonía espiritual."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Tarazona",
          "Asado a la leña típico de Zaragoza (Aragón)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Tarazona"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Tarazona & Catedral Mudéjar",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Tarazona"
        },
        {
          "name": "Restaurante Plaza Real de Tarazona & Catedral Mudéjar",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Tarazona"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Tarazona"
        },
        {
          "name": "Asador Don Manuel de Tarazona",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Tarazona"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Tarazona"
        }
      ]
    },
    {
      "id": "benasque",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Valle_de_Benasque.jpg",
      "name": "Benasque & Pirineos Posets-Maladeta",
      "province": "Huesca (Aragón)",
      "coords": [
        42.605,
        0.523
      ],
      "timeline": {
        "partialStart": "19:32:05 CEST",
        "totalityStart": "20:28:45 CEST",
        "totalityMax": "20:29:37 CEST",
        "totalityEnd": "20:30:29 CEST",
        "sunset": "21:00:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "5.9°",
        "sunAzimuth": "289° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 510,
          "travelTime": "5h 15m",
          "route": "A-2 ➔ A-22 ➔ N-260"
        }
      },
      "whatToDo": {
        "morning": "Excursión a los Forau de Aigualluts.",
        "afternoon": "Valles de Benasque y Cerler.",
        "eclipseMoment": "Totalidad sobre las cumbres de los Pirineos y el Aneto.",
        "night": "Chuleton pirenaico y sopa de la val."
      },
      "publicObservationSpots": [
        {
          "name": "Llanos del Hospital (Benasque)",
          "desc": "Pradera de alta montaña rodeada por los picos del Aneto y Posets.",
          "parkingNearby": "Parking Llanos del Hospital",
          "optimalTime": "20:28 - 20:30 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Benasque",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:28:45 CEST - 20:30:29 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:28:45 CEST - 20:30:29 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Benasque",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:28:45 CEST - 20:30:29 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:28:45 CEST - 20:30:29 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Parking Llanos del Hospital.",
        "capacityNote": "Llegar temprano.",
        "coordinates": "42.6680, 0.6080",
        "trafficAdvice": "Subida por A-139."
      },
      "accommodations": [
        {
          "name": "Hotel Gran Vall Benasque 4★",
          "type": "Hotel de Montaña",
          "priceRange": "€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Benasque",
          "availabilityStatus": "Plazas Disponibles",
          "availabilityBadge": "success"
        },
        {
          "name": "Hotel Boutique Plaza Benasque",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Benasque",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Huesca (Aragón)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Benasque",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Benasque",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Benasque",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Benasque",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Benasque",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Valle altoaragonés pirenaico aislado históricamente con lengua propia (benasqués).",
      "astrology": {
        "zodiacDegree": "20° 18' Leo",
        "fixedStar": "Regulus & Aneto",
        "element": "Nieve y Roca",
        "cosmicMeaning": "Elevación máxima y pureza alpina."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Benasque",
          "Asado a la leña típico de Huesca (Aragón)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Benasque"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Benasque & Pirineos Posets-Maladeta",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Benasque"
        },
        {
          "name": "Restaurante Plaza Real de Benasque & Pirineos Posets-Maladeta",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Benasque"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Benasque"
        },
        {
          "name": "Asador Don Manuel de Benasque",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Benasque"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Benasque"
        }
      ]
    },
    {
      "id": "daroca",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Puerta_Baja_de_Daroca.jpg",
      "name": "Daroca & Murallas Medievales",
      "province": "Zaragoza (Aragón)",
      "coords": [
        41.115,
        -1.416
      ],
      "timeline": {
        "partialStart": "19:32:20 CEST",
        "totalityStart": "20:29:05 CEST",
        "totalityMax": "20:29:57 CEST",
        "totalityEnd": "20:30:49 CEST",
        "sunset": "21:02:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "5.5°",
        "sunAzimuth": "289° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 260,
          "travelTime": "2h 30m",
          "route": "A-2 ➔ N-234"
        }
      },
      "whatToDo": {
        "morning": "Puerta Baja y murallas de Daroca.",
        "afternoon": "Mina de Daroca (Túnel del siglo XVI).",
        "eclipseMoment": "Totalidad recortando los 4 km de murallas fortificadas darocenses.",
        "night": "Rosquillas de Daroca y vino de la comarca."
      },
      "publicObservationSpots": [
        {
          "name": "Torre de San Cristóbal (Murallas de Daroca)",
          "desc": "Torreón amurallado sobre la cresta rocosa.",
          "parkingNearby": "Parking Puerta Baja Daroca",
          "optimalTime": "20:29 - 20:31 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Plaza Elevada del Castillo de Daroca",
          "desc": "Recinto histórico elevado con horizonte libre de obstáculos artificiales orientado al poniente solar.",
          "parkingNearby": "Aparcamiento del Centro Histórico (250 plazas)",
          "optimalTime": "20:29:05 CEST - 20:30:49 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Parque Natural y Mirador de la Devesa",
          "desc": "Amplia pradera natural rodeada de vegetación baja ideal para acampar con telescopios y trípodes.",
          "parkingNearby": "Parking del Parque Natural (300 plazas)",
          "optimalTime": "20:29:05 CEST - 20:30:49 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Paseo Panorámico del Río / Costa de Daroca",
          "desc": "Paseo peatonal llano con accesibilidad reducida 100% garantizada frente a la puesta de sol.",
          "parkingNearby": "Aparcamiento de la Ribera (500 plazas)",
          "optimalTime": "20:29:05 CEST - 20:30:49 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Ermita y Colina de San Pedro",
          "desc": "Colina sagrada a 350m sobre el nivel del mar con vistas despejadas de 360° sobre toda la comarca.",
          "parkingNearby": "Aparcamiento Rústico de San Pedro (150 plazas)",
          "optimalTime": "20:29:05 CEST - 20:30:49 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Aparcamiento de la Puerta Baja.",
        "capacityNote": "Acceso directo por A-23.",
        "coordinates": "41.1150, -1.4160",
        "trafficAdvice": "Estacionar en la entrada exterior."
      },
      "accommodations": [
        {
          "name": "Hotel Posada del Campaniel",
          "type": "Posada Histórica",
          "priceRange": "€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Daroca",
          "availabilityStatus": "Plazas Disponibles",
          "availabilityBadge": "success"
        },
        {
          "name": "Hotel Boutique Plaza Daroca",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Daroca",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Zaragoza (Aragón)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Daroca",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Daroca",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Daroca",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Daroca",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Daroca",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Plaza fuerte medieval aragonesa con los Corporales de Daroca de 1239.",
      "astrology": {
        "zodiacDegree": "20° 20' Leo",
        "fixedStar": "Regulus & Corporales",
        "element": "Muralla y Fe",
        "cosmicMeaning": "Protección de la fe y la memoria."
      },
      "isTop10": false,
      "whatToEat": {
        "dishes": [
          "Plato Gastronómico Tradicional de Daroca",
          "Asado a la leña típico de Zaragoza (Aragón)",
          "Guiso marinero / de montaña de la comarca",
          "Tapas y Raciones autóctonas",
          "Postre artesanal típico de Daroca"
        ],
        "drinks": "Vino de la Denominación de Origen local o sidra regional"
      },
      "whereToEat": [
        {
          "name": "Mesón Mayor de Daroca & Murallas Medievales",
          "type": "Cocina regional artesana",
          "specialty": "Asados y platos de temporada",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Daroca"
        },
        {
          "name": "Restaurante Plaza Real de Daroca & Murallas Medievales",
          "type": "Tapas y raciones locales",
          "specialty": "Pescados / carnes de la tierra",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Daroca"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Daroca"
        },
        {
          "name": "Asador Don Manuel de Daroca",
          "type": "Asador Tradicional a la Leña",
          "specialty": "Asados autóctonos en horno de leña",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Daroca"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera y Guisos",
          "specialty": "Platos de cuchara y postres caseros tradicionales",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Daroca"
        }
      ]
    },
    {
      "id": "barcelona-city",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Sagrada_Familia_01.jpg",
      "name": "Barcelona & Montjuïc",
      "province": "Barcelona (Cataluña)",
      "coords": [
        41.3851,
        2.1734
      ],
      "timeline": {
        "partialStart": "19:32:10 CEST",
        "totalityStart": "20:28:30 CEST",
        "totalityMax": "20:29:22 CEST",
        "totalityEnd": "20:30:14 CEST",
        "sunset": "21:05:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "7.5°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 620,
          "travelTime": "2h 30m (AVE)",
          "route": "AVE Madrid-Atocha ➔ Barcelona Sants / AP-7"
        }
      },
      "whatToDo": {
        "morning": "Basílica de la Sagrada Família y Passeig de Gràcia.",
        "afternoon": "Castillo y Mirador de Montjuïc.",
        "eclipseMoment": "Totalidad a 7.5° sobre el horizonte marítimo del Mediterráneo.",
        "night": "Cena de tapas en El Born o la Barceloneta."
      },
      "publicObservationSpots": [
        {
          "name": "Castillo y Mirador del Alcalde (Montjuïc)",
          "desc": "Vista 360° sin obstáculos hacia el oeste y el mar Mediterráneo.",
          "parkingNearby": "Aparcamiento del Castell de Montjuïc (450 plazas)",
          "optimalTime": "20:28:30 CEST - 20:30:14 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Tibidabo & Templo del Sagrat Cor",
          "desc": "Punto más alto de la ciudad (512m) con horizonte despejado absoluto.",
          "parkingNearby": "Aparcamiento BSM Tibidabo (500 plazas)",
          "optimalTime": "20:28:30 CEST - 20:30:14 CEST",
          "recommendedArrival": "16:30 CEST"
        },
        {
          "name": "Búnkers del Carmel (Turó de la Rovira)",
          "desc": "Mirador panorámico emblemático de la ciudad frente al poniente solar.",
          "parkingNearby": "Zona Guinardó (Acceso a pie)",
          "optimalTime": "20:28:30 CEST - 20:30:14 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Platja de Sant Sebastià / Espigón del Gas",
          "desc": "Paseo marítimo llano ideal para observación directa sobre el agua.",
          "parkingNearby": "Aparcamiento BSM Litoral Port (600 plazas)",
          "optimalTime": "20:28:30 CEST - 20:30:14 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Parc Güell - Plaza de la Naturaleza",
          "desc": "Patrimonio UNESCO con vistas icónicas del perfil urbano barcelonés.",
          "parkingNearby": "Aparcamiento Esperança / Carmel",
          "optimalTime": "20:28:30 CEST - 20:30:14 CEST",
          "recommendedArrival": "17:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Aparcamiento BSM Montjuïc / Estació de Sants.",
        "capacityNote": "Restricciones de tráfico en accesos a Montjuïc. Usar Funicular.",
        "coordinates": "41.3635, 2.1652",
        "trafficAdvice": "Recomendado Metro L2/L3 Paral·lel + Funicular de Montjuïc."
      },
      "accommodations": [
        {
          "name": "W Barcelona 5★",
          "type": "Hotel Luxury de Playa",
          "priceRange": "€€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Barcelona",
          "availabilityStatus": "Alta Demanda",
          "availabilityBadge": "warning"
        },
        {
          "name": "Hotel Arts Barcelona 5★",
          "type": "Gran Lujo Urbano",
          "priceRange": "€€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Barcelona",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hotel Boutique Plaza Cataluña",
          "type": "Hotel Boutique Histórico",
          "priceRange": "120€ - 210€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Barcelona",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Barcelona",
          "type": "Apartamentos Eixample",
          "priceRange": "95€ - 170€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Barcelona",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Barcelona",
          "type": "Posada Central Barri Gòtic",
          "priceRange": "70€ - 110€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Barcelona",
          "availabilityStatus": "Últimas Plazas",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Ciudad cosmopolita milenaria fundada como colonia romana Barcino, meca del Modernismo de Antoni Gaudí.",
      "astrology": {
        "zodiacDegree": "20° 18' Leo",
        "fixedStar": "Regulus & Cor Leonis",
        "element": "Fuego & Mar Mediterráneo",
        "cosmicMeaning": "Vanguardia, creatividad audaz y resplandor solar sobre el Mediterráneo."
      },
      "isTop10": true,
      "whatToEat": {
        "dishes": [
          "Paella Parellada / Fideuà de la Barceloneta",
          "Pa amb Tomàquet con Jamón Ibérico",
          "Esqueixada de Bacallà tradicional",
          "Escalivada a la brasa con anchoas",
          "Crema Catalana artesanal"
        ],
        "drinks": "Cava D.O. Penedès o Vino Blanco de Alella"
      },
      "whereToEat": [
        {
          "name": "Can Solé (Barceloneta)",
          "type": "Cocina marinera centenaria",
          "specialty": "Arroces y pescados frescos del puerto",
          "priceRange": "€€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Barcelona"
        },
        {
          "name": "7 Portes",
          "type": "Restaurante Histórico desde 1836",
          "specialty": "Fideuà de marisco y cocina tradicional",
          "priceRange": "€€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Barcelona"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Barcelona"
        },
        {
          "name": "El Xampanyet",
          "type": "Taberna Tradicional de Cava y Tapas",
          "specialty": "Anchoas artesanas y cava de la casa",
          "priceRange": "€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Barcelona"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera Catalana",
          "specialty": "Escudella y carnes a la brasa",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Barcelona"
        }
      ]
    },
    {
      "id": "tarragona",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Anfiteatro_romano_de_Tarragona%2C_Espa%C3%B1a%2C_2014-09-10%2C_DD_17-21_HDR.JPG",
      "name": "Tarragona & Balcón del Mediterráneo",
      "province": "Tarragona (Cataluña)",
      "coords": [
        41.1189,
        1.2449
      ],
      "timeline": {
        "partialStart": "19:32:00 CEST",
        "totalityStart": "20:28:20 CEST",
        "totalityMax": "20:29:12 CEST",
        "totalityEnd": "20:30:04 CEST",
        "sunset": "21:07:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "7.8°",
        "sunAzimuth": "288° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 540,
          "travelTime": "2h 15m (AVE)",
          "route": "AVE Madrid-Camp de Tarragona / AP-7"
        },
        "barcelona": {
          "distanceKm": 98,
          "travelTime": "1h 05m",
          "route": "Autopista AP-7 / C-32"
        }
      },
      "whatToDo": {
        "morning": "Anfiteatro Romano a orillas del mar.",
        "afternoon": "Paseo Arqueológico y Murallas de Tarraco.",
        "eclipseMoment": "Totalidad desde el Balcón del Mediterráneo con el sol sobre la costa romana.",
        "night": "Cena de pescado fresco en el barrio marinero del Serrallo."
      },
      "publicObservationSpots": [
        {
          "name": "Balcón del Mediterráneo",
          "desc": "Mirador de 40m sobre el mar con vista limpia al poniente solar.",
          "parkingNearby": "Aparcamiento Rambla Nova (350 plazas)",
          "optimalTime": "20:28:20 CEST - 20:30:04 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Anfiteatro Romano de Tarraco",
          "desc": "Recinto histórico arqueológico patrimonio UNESCO sobre el mar.",
          "parkingNearby": "Aparcamiento Saavedra (400 plazas)",
          "optimalTime": "20:28:20 CEST - 20:30:04 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Torre del Pretori y Circo Romano",
          "desc": "Vista elevada desde las terrazas superiores del complejo imperial.",
          "parkingNearby": "Aparcamiento Murallas (300 plazas)",
          "optimalTime": "20:28:20 CEST - 20:30:04 CEST",
          "recommendedArrival": "16:45 CEST"
        },
        {
          "name": "Passeig Marítim Rafael Casanova",
          "desc": "Paseo costero llano con perfecta visibilidad del horizonte marino.",
          "parkingNearby": "Aparcamiento Platja del Miracle (500 plazas)",
          "optimalTime": "20:28:20 CEST - 20:30:04 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Acueducto de les Ferreres (Pont del Diable)",
          "desc": "Monumento romano rodeado de naturaleza despejada para fotografía.",
          "parkingNearby": "Parking Parc Francolí (250 plazas)",
          "optimalTime": "20:28:20 CEST - 20:30:04 CEST",
          "recommendedArrival": "16:00 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Aparcamiento Rambla Nova / Serrallo.",
        "capacityNote": "Cortes temporales en Via Augusta durante el pico solar.",
        "coordinates": "41.1152, 1.2510",
        "trafficAdvice": "Acceso recomendado por A-7 salida Tarragona Centre."
      },
      "accommodations": [
        {
          "name": "Hotel Imperial Tarraco 4★ Superior",
          "type": "Hotel Vistas Marítimas",
          "priceRange": "€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Tarragona",
          "availabilityStatus": "Alta Demanda",
          "availabilityBadge": "warning"
        },
        {
          "name": "Hotel URVH Tarragona",
          "type": "Hotel Histórico Urbano",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Tarragona",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Casa Rural Tradicional de Tarragona (Cataluña)",
          "type": "Alojamiento Rural de Encanto",
          "priceRange": "75€ - 130€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Tarragona",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Tarragona",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Tarragona",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Tarragona",
          "type": "Posada Histórica Central",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Tarragona",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Antigua Tarraco romana, capital de la Hispania Citerior y sitio Patrimonio de la Humanidad UNESCO.",
      "astrology": {
        "zodiacDegree": "20° 19' Leo",
        "fixedStar": "Regulus & Sol Romanus",
        "element": "Piedra Romana & Mar",
        "cosmicMeaning": "Fortaleza imperecedera, legado histórico y reconexión con el sol imperial."
      },
      "isTop10": true,
      "whatToEat": {
        "dishes": [
          "Romesco de Pescado típico del Serrallo",
          "Calçots con salsa Romesco artesana",
          "Arroz Negro Tarraconense con alioli",
          "Espineta con Caracoles",
          "Menjar Blanc de Reus / Tarragona"
        ],
        "drinks": "Vino Blanco D.O. Tarragona o D.O.Q. Priorat"
      },
      "whereToEat": [
        {
          "name": "Restaurante Xaloc (El Serrallo)",
          "type": "Marisquería de puerto marinero",
          "specialty": "Guisos de romesco y gambas de Tarragona",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Tarragona"
        },
        {
          "name": "El Llagut",
          "type": "Taverna marinera artesana",
          "specialty": "Arroces ecológicos y productos de lonja",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Tarragona"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Tarragona"
        },
        {
          "name": "Les Coques",
          "type": "Restaurante de Gastronomía Catalana",
          "specialty": "Cocina de temporada y carnes a la brasa",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Tarragona"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera Tradicional",
          "specialty": "Platos de cuchara y mariscos sencillos",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Tarragona"
        }
      ]
    },
    {
      "id": "valencia-city",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Ciutat_de_les_Arts_i_les_Ci%C3%A8ncies%2C_Val%C3%A8ncia%2C_Espa%C3%B1a%2C_2014-06-30%2C_DD_110-112_HDR.JPG",
      "name": "Valencia & Ciudad de las Artes",
      "province": "Valencia (Comunidad Valenciana)",
      "coords": [
        39.4699,
        -0.3763
      ],
      "timeline": {
        "partialStart": "19:31:30 CEST",
        "totalityStart": "20:28:45 CEST",
        "totalityMax": "20:29:37 CEST",
        "totalityEnd": "20:30:29 CEST",
        "sunset": "21:08:00 CEST",
        "formattedDuration": "1 min 44 seg",
        "sunAltitude": "8.2°",
        "sunAzimuth": "287° (WNW)"
      },
      "routePlanner": {
        "madrid": {
          "distanceKm": 350,
          "travelTime": "1h 50m (AVE)",
          "route": "AVE Madrid-Joaquín Sorolla / A-3"
        },
        "barcelona": {
          "distanceKm": 350,
          "travelTime": "3h 00m",
          "route": "Autopista AP-7"
        }
      },
      "whatToDo": {
        "morning": "Ciudad de las Artes y las Ciencias y Hemisfèric.",
        "afternoon": "Parque Natural de la Albufera y paseo en barca.",
        "eclipseMoment": "Totalidad a 8.2° reflejada en las láminas de agua de la Ciudad de las Ciencias.",
        "night": "Cena de Paella Valenciana a la leña en El Palmar."
      },
      "publicObservationSpots": [
        {
          "name": "Láminas de Agua de la Ciudad de las Artes y las Ciencias",
          "desc": "Espacio futurista abierto con reflejos espectaculares de la corona solar.",
          "parkingNearby": "Aparcamiento Umbracle CAC (800 plazas)",
          "optimalTime": "20:28:45 CEST - 20:30:29 CEST",
          "recommendedArrival": "17:00 CEST"
        },
        {
          "name": "Mirador del Estany de L'Albufera (El Saler)",
          "desc": "Atardecer mítico sobre el lago dulce rodeado de arrozales.",
          "parkingNearby": "Aparcamiento Embarcadero Albufera (200 plazas)",
          "optimalTime": "20:28:45 CEST - 20:30:29 CEST",
          "recommendedArrival": "16:30 CEST"
        },
        {
          "name": "Torres de Serranos y Cauce del Turia",
          "desc": "Puerta medieval con jardín urbano de 9km abierto al cielo occidental.",
          "parkingNearby": "Aparcamiento Severo Ochoa (350 plazas)",
          "optimalTime": "20:28:45 CEST - 20:30:29 CEST",
          "recommendedArrival": "17:30 CEST"
        },
        {
          "name": "Playa de la Malvarrosa / Paseo Marítimo",
          "desc": "Amplia playa de arena fina despejada al horizonte solar.",
          "parkingNearby": "Aparcamiento Neptuno (500 plazas)",
          "optimalTime": "20:28:45 CEST - 20:30:29 CEST",
          "recommendedArrival": "18:00 CEST"
        },
        {
          "name": "Marina Real Juan Carlos I",
          "desc": "Dársena deportiva con terrazas al aire libre y visión despejada.",
          "parkingNearby": "Aparcamiento Veles e Vents (400 plazas)",
          "optimalTime": "20:28:45 CEST - 20:30:29 CEST",
          "recommendedArrival": "17:30 CEST"
        }
      ],
      "parkingLogistics": {
        "mainArea": "Aparcamiento Umbracle / Marina de Valencia.",
        "capacityNote": "Gran afluencia esperada en la Albufera; se aconseja Metro / Tranvía L10.",
        "coordinates": "39.4542, -0.3503",
        "trafficAdvice": "Llegada recomendada por la V-30 / V-31."
      },
      "accommodations": [
        {
          "name": "Las Arenas Balneario Resort 5★",
          "type": "Resort de Playa de Lujo",
          "priceRange": "€€€€€",
          "link": "https://www.booking.com/searchresults.es.html?ss=Valencia",
          "availabilityStatus": "Alta Demanda",
          "availabilityBadge": "warning"
        },
        {
          "name": "Hotel SH Valencia Palace 5★",
          "type": "Hotel Urbano de Lujo",
          "priceRange": "130€ - 220€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Valencia",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hotel Boutique Plaza Valencia",
          "type": "Hotel Boutique Histórico",
          "priceRange": "95€ - 160€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Valencia",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Apartamentos Turísticos Franja Solar Valencia",
          "type": "Apartamentos Vacacionales",
          "priceRange": "85€ - 145€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Valencia",
          "availabilityStatus": "Disponible",
          "availabilityBadge": "success"
        },
        {
          "name": "Hostal & Posada Real de Valencia",
          "type": "Posada Histórica Barrio del Carmen",
          "priceRange": "60€ - 95€/noche",
          "link": "https://www.booking.com/searchresults.es.html?ss=Valencia",
          "availabilityStatus": "Últimas 2 Habitaciones",
          "availabilityBadge": "danger"
        }
      ],
      "history": "Tierra de luz fundada por los romanos en 138 a.C., cuna de la paella y del Santo Cáliz.",
      "astrology": {
        "zodiacDegree": "20° 17' Leo",
        "fixedStar": "Regulus & Fuego Levantino",
        "element": "Luz & Agua Dulce L'Albufera",
        "cosmicMeaning": "Alegría vital, expansión de la conciencia solar y abundancia mediterránea."
      },
      "isTop10": true,
      "whatToEat": {
        "dishes": [
          "Paella Valenciana Tradicional cocinada con leña de naranjo",
          "Arroz a Banda con alioli suave",
          "All i Pebre de anguilas de L'Albufera",
          "Horchata de Chufa artesana con Fartons",
          "Esgarraet de pimiento asado y bacalao"
        ],
        "drinks": "Agua de Valencia (Cava + Zumo de Naranja D.O.) o Vino Utiel-Requena"
      },
      "whereToEat": [
        {
          "name": "La Pepica (Playa de la Malvarrosa)",
          "type": "Arrocería Histórica centenaria",
          "specialty": "Paella marinera de mariscos frescos",
          "priceRange": "€€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Valencia"
        },
        {
          "name": "Restaurante El Mateu (El Palmar)",
          "type": "Arrocería en el corazón de la Albufera",
          "specialty": "Paella valenciana tradicional a la leña",
          "priceRange": "€€€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Valencia"
        },
        {
          "name": "Restaurante Gastrobar Corona Solar",
          "type": "Cocina de Autor & Maridaje",
          "specialty": "Menú degustación temático Eclipse 2026",
          "priceRange": "45€ - 70€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Valencia"
        },
        {
          "name": "Casa Montaña (El Cabanyal)",
          "type": "Taberna Histórica fundada en 1836",
          "specialty": "Tapas gourmet y maridajes de vino",
          "priceRange": "35€ - 55€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Valencia"
        },
        {
          "name": "Casa de Comidas Abuela Rosa",
          "type": "Cocina Casera Levantina",
          "specialty": "Guisos de arroz y postres caseros",
          "priceRange": "18€ - 30€",
          "link": "https://www.google.com/maps/search/Restaurantes+en+Valencia"
        }
      ]
    }
  ]
};
