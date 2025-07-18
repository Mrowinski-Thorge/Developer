# Thorge Mrowinski - Professional Developer Website

Eine moderne, responsive Website für Thorge Mrowinski, die professionelle Webentwicklungsdienste und Projekte präsentiert.

## 🚀 Features

- **Responsive Design**: Optimiert für alle Geräte (Desktop, Tablet, Mobile)
- **Moderne Technologien**: HTML5, CSS3, Vanilla JavaScript
- **Performance-optimiert**: Schnelle Ladezeiten und flüssige Animationen
- **SEO-freundlich**: Optimierte Meta-Tags und semantische HTML-Struktur
- **Zugänglich**: ARIA-Labels und keyboard-navigierbar
- **GitHub Pages ready**: Bereit für Deployment auf GitHub Pages

## 📋 Sektionen

1. **Hero Section**: Professionelle Begrüßung mit animiertem Code-Block
2. **Über mich**: Persönliche Vorstellung und Highlights
3. **Skills**: Interaktive Darstellung der Technologien und Fähigkeiten
4. **Portfolio**: Filterbares Portfolio mit Projekt-Platzhaltern
5. **Kontakt**: Funktionales Kontaktformular und Kontaktinformationen

## 🛠️ Technologien

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, CSS Custom Properties
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Inter)
- **Animationen**: CSS Transitions & Keyframes, Intersection Observer API
- **Responsive**: Mobile-First Approach

## 🚀 Installation & Setup

### Lokale Entwicklung

1. **Repository klonen:**
   ```bash
   git clone https://github.com/Mrowinski-Thorge/Developer.git
   cd Developer
   ```

2. **Lokalen Server starten:**
   ```bash
   # Mit Python 3
   python -m http.server 8000
   
   # Mit Node.js (npx)
   npx serve .
   
   # Mit PHP
   php -S localhost:8000
   ```

3. **Browser öffnen:**
   ```
   http://localhost:8000
   ```

### GitHub Pages Deployment

1. **Repository-Einstellungen öffnen**
2. **Pages-Sektion finden**
3. **Source: "Deploy from a branch" auswählen**
4. **Branch: "main" auswählen**
5. **Root-Verzeichnis "/" auswählen**
6. **Save klicken**

Die Website ist dann verfügbar unter: `https://mrowinski-thorge.github.io/Developer/`

## 📁 Projektstruktur

```
Developer/
├── index.html          # Haupt-HTML-Datei
├── styles.css          # CSS-Styling
├── script.js           # JavaScript-Funktionalität
├── README.md           # Projektdokumentation
└── .gitignore          # Git-Ignores (falls benötigt)
```

## 🎨 Design-Prinzipien

- **Minimalistisch**: Sauberes, modernes Design ohne Ablenkungen
- **Professionell**: Geeignet für Bewerbungen und Geschäftskontakte
- **Benutzerfreundlich**: Intuitive Navigation und klare Struktur
- **Performance**: Optimiert für schnelle Ladezeiten
- **Zugänglich**: Barrierefreie Gestaltung

## ⚡ Performance-Features

- **Lazy Loading**: Bilder werden bei Bedarf geladen
- **Optimierte Animationen**: CSS-basierte Animationen für bessere Performance
- **Minimaler JavaScript**: Vanilla JS ohne externe Frameworks
- **Efficient CSS**: Moderne CSS-Features für bessere Performance
- **Compressed Assets**: Optimierte Ressourcen

## 📱 Browser-Unterstützung

- ✅ Chrome (80+)
- ✅ Firefox (75+)
- ✅ Safari (13+)
- ✅ Edge (80+)
- ✅ Mobile Browsers (iOS Safari, Chrome Mobile)

## 🔧 Anpassungen

### Persönliche Informationen ändern

1. **Kontaktdaten** in `index.html` aktualisieren:
   - E-Mail-Adresse
   - Telefonnummer
   - Social Media Links

2. **Inhalte anpassen**:
   - Über mich Text
   - Skills und Technologien
   - Portfolio-Projekte

3. **Styling anpassen** in `styles.css`:
   - Farben (CSS Custom Properties in `:root`)
   - Schriftarten
   - Abstände

### Neue Projekte hinzufügen

```html
<div class="portfolio-item" data-category="web">
    <div class="portfolio-image">
        <div class="placeholder-image">
            <i class="fas fa-globe"></i>
        </div>
        <div class="portfolio-overlay">
            <div class="portfolio-info">
                <h3>Projekt Name</h3>
                <p>Projekt Beschreibung</p>
                <div class="portfolio-tech">
                    <span>Tech1</span>
                    <span>Tech2</span>
                </div>
                <div class="portfolio-links">
                    <a href="#" class="portfolio-link">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                    <a href="#" class="portfolio-link">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
```

## 📧 Kontaktformular

Das Kontaktformular ist voll funktionsfähig mit:
- ✅ Client-seitige Validierung
- ✅ Responsive Design
- ✅ Benutzerfreundliche Fehlermeldungen
- ✅ Success/Error Notifications

**Hinweis**: Für produktive Nutzung muss ein Backend-Service für die Formularverarbeitung implementiert werden.

## 🔍 SEO-Optimierungen

- Meta-Tags für Suchmaschinen
- Open Graph Tags für Social Media
- Strukturierte Daten (Schema.org)
- Semantische HTML-Tags
- Alt-Texte für Bilder
- Optimierte Ladezeiten

## 🆘 Support & Wartung

Bei Fragen oder Problemen:

1. **Issues erstellen** auf GitHub
2. **E-Mail senden** an thorge.mrowinski@example.com
3. **Dokumentation prüfen** in diesem README

## 📄 Lizenz

© 2024 Thorge Mrowinski. Alle Rechte vorbehalten.

---

**Entwickelt mit ❤️ und modernen Web-Technologien**
