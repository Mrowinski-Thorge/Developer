# Thorge Mrowinski - Developer Portfolio

Eine moderne, responsive und professionelle Developer-Website, gebaut mit HTML5, CSS3 und Vanilla JavaScript.

## 🚀 Live Demo

Die Website ist live verfügbar unter: [https://mrowinski-thorge.github.io/Developer/](https://mrowinski-thorge.github.io/Developer/)

## ✨ Features

- **Responsive Design**: Optimiert für alle Geräte (Mobile, Tablet, Desktop)
- **Moderne UI/UX**: Dunkles Theme mit professionellen Animationen
- **SEO-optimiert**: Vollständige Meta-Tags und semantisches HTML
- **Accessibility**: ARIA-Labels und barrierefreie Navigation
- **Performance**: Optimierte Ladezeiten und effiziente Ressourcenverwendung
- **Interactive Features**:
  - Smooth Scrolling Navigation
  - Typing Animation im Hero-Bereich
  - Mobile Menu Toggle
  - Portfolio Filter
  - Kontaktformular mit Validierung
  - Scroll-Animationen

## 🛠 Technologien

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, Custom Properties
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Poppins, Inter)
- **Deployment**: GitHub Pages mit automatischen Workflows

## 📁 Projektstruktur

```
Developer/
├── css/
│   └── styles.css          # Hauptstyles mit responsivem Design
├── js/
│   └── script.js           # JavaScript Funktionalität
├── .github/
│   └── workflows/
│       └── pages.yml       # GitHub Pages Deployment
├── index.html              # Haupt-HTML-Datei
└── README.md              # Projektdokumentation
```

## 🎨 Design-Spezifikationen

### Farbschema
- **Primärer Hintergrund**: `#1a1a1a`
- **Sekundärer Hintergrund**: `#202020`
- **Akzentfarbe**: `#00d4aa`
- **Text**: `#ffffff` (primär), `#b0b0b0` (sekundär)

### Typografie
- **Headlines**: Poppins (300, 400, 500, 600, 700, 800)
- **Body Text**: Inter (300, 400, 500, 600, 700)

### Responsive Breakpoints
- **Mobile**: 320px+
- **Tablet**: 768px+
- **Desktop**: 1024px+

## 🚀 Setup & Installation

### 1. Repository klonen
```bash
git clone https://github.com/Mrowinski-Thorge/Developer.git
cd Developer
```

### 2. Lokale Entwicklung
Da dies eine statische Website ist, können Sie sie direkt in einem Browser öffnen oder einen lokalen Server verwenden:

#### Option A: Direkt im Browser
```bash
# Öffnen Sie einfach die index.html in Ihrem Browser
open index.html
```

#### Option B: Mit Live Server (empfohlen)
```bash
# Falls Sie VS Code verwenden, installieren Sie die Live Server Extension
# Oder nutzen Sie Python für einen einfachen Server:
python -m http.server 8000
# Dann öffnen Sie http://localhost:8000
```

#### Option C: Mit Node.js
```bash
# Installieren Sie einen globalen HTTP-Server
npm install -g http-server

# Starten Sie den Server
http-server
```

### 3. GitHub Pages Deployment

#### Automatisches Deployment
Die Website wird automatisch deployed, wenn Sie Änderungen in den `main` oder `master` Branch pushen. Das GitHub Actions Workflow (`.github/workflows/pages.yml`) übernimmt dies automatisch.

#### Manuelles Setup für GitHub Pages
1. Gehen Sie zu Ihren Repository Settings
2. Scrollen Sie zu "Pages" im linken Menü
3. Wählen Sie "Deploy from a branch" als Source
4. Wählen Sie den `main` Branch
5. Klicken Sie "Save"

## 🎯 Anpassung

### Inhalte ändern
1. **Persönliche Informationen**: Bearbeiten Sie die entsprechenden Abschnitte in `index.html`
2. **Skills**: Aktualisieren Sie die Skill-Kategorien im Skills-Bereich
3. **Portfolio**: Fügen Sie Ihre eigenen Projekte im Portfolio-Bereich hinzu
4. **Kontaktdaten**: Ändern Sie E-Mail und Social Media Links

### Styling anpassen
1. **Farben**: Bearbeiten Sie die CSS-Variablen in `css/styles.css`
2. **Schriftarten**: Ändern Sie die Google Fonts Imports im `<head>` von `index.html`
3. **Layout**: Modifizieren Sie die CSS Grid und Flexbox Layouts

### JavaScript Funktionalität
1. **Typing Animation**: Ändern Sie die Texte im `texts` Array in `js/script.js`
2. **Portfolio Filter**: Passen Sie die Kategorien an Ihre Projekte an
3. **Kontaktformular**: Verbinden Sie es mit einem Backend-Service oder E-Mail-Service

## 📱 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 🔧 Entwicklung

### Verfügbare Scripts
```bash
# Linting (falls ESLint konfiguriert ist)
npm run lint

# Code Formatierung (falls Prettier konfiguriert ist)
npm run format
```

### Best Practices
- Verwenden Sie semantisches HTML
- Folgen Sie BEM CSS-Methodologie für Klassennamen
- Optimieren Sie Bilder vor dem Upload
- Testen Sie auf verschiedenen Geräten und Browsern

## 🐛 Bekannte Issues

- Portfolio-Bilder sind derzeit Platzhalter
- E-Mail-Formular funktioniert nur frontend-seitig (Backend-Integration erforderlich)

## 🤝 Contributing

1. Forken Sie das Repository
2. Erstellen Sie einen Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Committen Sie Ihre Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Pushen Sie den Branch (`git push origin feature/AmazingFeature`)
5. Öffnen Sie einen Pull Request

## 📄 Lizenz

Dieses Projekt steht unter der MIT Lizenz. Siehe `LICENSE` Datei für Details.

## 📞 Kontakt

**Thorge Mrowinski**
- GitHub: [@Mrowinski-Thorge](https://github.com/Mrowinski-Thorge)
- LinkedIn: [thorge-mrowinski](https://linkedin.com/in/thorge-mrowinski)
- E-Mail: thorge@example.com

## 🙏 Danksagungen

- [Font Awesome](https://fontawesome.com/) für die Icons
- [Google Fonts](https://fonts.google.com/) für die Schriftarten
- [GitHub Pages](https://pages.github.com/) für das kostenlose Hosting

---

⭐ Vergessen Sie nicht, dem Repository einen Stern zu geben, wenn es Ihnen gefällt!
