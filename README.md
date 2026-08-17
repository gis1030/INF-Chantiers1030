# 🚧 Works & Events on the Public Highway — Schaerbeek 1030

> Cartography of public worksites and events on Schaerbeek's municipal roads, recorded in the OSIRIS Brussels database · Data as of June 2026

---

## 🔗 Quick Access

| Tool | Description | Link |
|---|---|---|
| 🗺️ **Interactive Map** | Worksites and events on the public highway | [index.html](https://gis1030.github.io/INF-Chantiers1030/) |

---

## 📋 About the Project

This project provides an interactive cartographic visualisation of **public worksites and events on the municipal roads of Schaerbeek**, drawn from the **OSIRIS Brussels** platform — the official Brussels-Capital Region IT system for coordinating construction sites and road occupations.

OSIRIS Brussels is managed by **Brussels Mobility** and centralises all data relating to projects and works on public roads. Its objective is to improve communication and coordination between contractors, public authorities, and citizens, and to facilitate the procedures for obtaining the necessary permits.

The application allows citizens and municipal services to visualise active, planned, and completed works on Schaerbeek's public highway in an accessible, browser-based format.

---

## 🧭 Contents

### 🗺️ Interactive Map

The map displays worksites and events recorded in the OSIRIS database, georeferenced on the Schaerbeek road network.

**Available information per worksite**

- Type of work or event
- Location (street, section)
- Status (planned, active, completed)
- Responsible authority or contractor
- Start and end dates

**Base maps** — Google Terrain (default) · Google Satellite · OpenStreetMap

---

## 🛠️ Technologies

- **HTML / CSS / JavaScript** — 100% client-side application, no server required
- **Leaflet.js** — interactive mapping with marker clustering
- **GitHub Pages** — static hosting

---

## 🌐 Compatibility

Compatible with recent versions of **Firefox**, **Chrome**, and **Edge**.
Optimised for desktop use; the map is responsive on mobile.

---

## 📁 Repository Structure

```
INF-Chantiers1030/
├── index.html                    # Interactive map
├── css/                          # Stylesheets and UI assets
├── Chantiers1030/                # GeoJSON data (JS wrapper format)
│   └── *.js                      # Worksite and event datasets
└── author.txt                    # Project authorship
```

---

## 📅 Changelog

| Date | Description |
|---|---|
| 2026 | Dataset updated — active worksites as of 17/08/2026 |
| 2025 | Initial publication |

---

## 📄 Data Sources

| Dataset | Source | Date |
|---|---|---|
| Public worksites and events | OSIRIS Brussels — Brussels Mobility | 2026 |
| Road network — Schaerbeek | Municipal GIS reference layer | [Datastore.brussels](https://datastore.brussels/web/) |

Data is extracted from the OSIRIS Brussels platform and packaged as static GeoJSON files for client-side rendering. No server-side queries are performed at runtime.

---

## 📄 Licence

This project is licensed under the **European Union Public Licence v. 1.2 (EUPL-1.2)**.
See the [LICENSE](LICENSE) file for the full text.

[![License: EUPL-1.2](https://img.shields.io/badge/License-EUPL%201.2-blue.svg)](https://eupl.eu/1.2/en/)

> © 2024–2026 Direction des Systèmes d'Information (DSI) · Commune de Schaerbeek · 1030 Brussels · Belgium

---

*Commune de Schaerbeek · Direction des Systèmes d'Information (DSI) · 1030 Brussels · Belgium*
