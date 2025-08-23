[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

# KoordinatenWerk
KoordinatenWerk: Umrechnung von Lat/Lng, UTM, MGRS und DMS. Suchen, finden und messen von Orten .

![Alt text](images/image.png)

# KoordinatenWerk

KoordinatenWerk ist ein webbasiertes Tool zur Umrechnung und Anzeige von geografischen Koordinaten in verschiedenen Formaten: Dezimalgrad (Lat/Lng), UTM, MGRS und DMS. Es bietet Funktionen zum Suchen von Orten, zur Anzeige auf einer interaktiven Karte (Leaflet), sowie zum Messen von Strecken und Flächen.

## Features

- **Umrechnung:** Lat/Lng, UTM, MGRS, DMS
- **Geocoding:** Suche nach Adressen/Orten (OpenStreetMap Nominatim)
- **Interaktive Karte:** Auswahl zwischen OSM und Esri Satellit
- **Raster:** UTM/MGRS-Gitter mit konfigurierbaren Farben und Labels
- **Messfunktionen:** Strecken- und Flächenmessung direkt in der Karte
- **Kopierfunktion:** Koordinaten einfach kopieren
- **Responsive Design:** Optimiert für Desktop und Mobilgeräte

## Nutzung

1. Öffne die [index.html](index.html) im Browser.
2. Suche einen Ort oder gib Koordinaten ein.
3. Die Karte zeigt die Position und die Koordinaten in allen unterstützten Formaten.
4. Messe Strecken oder Flächen mit den Messwerkzeugen.
5. Kopiere Koordinaten für die Weiterverwendung.

## Technologien

- [Leaflet](https://leafletjs.com/) für die Kartenanzeige
- [proj4js](https://proj4js.org/) für UTM-Umrechnung
- [mgrs.js](https://github.com/proj4js/mgrs) für MGRS-Koordinaten
- [OpenStreetMap Nominatim](https://nominatim.openstreetmap.org/) für Geocoding

## Lizenz

MIT License – siehe [LICENSE](LICENSE).

---

© 2025 Wolfgang Saal, Böllenborn  
Entwickelt für THW OV Bad Bergzabern
