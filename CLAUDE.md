@AGENTS.md

---

# JAVERA Studio – Standards (kopiert aus dem javera-studio-Repo)

Diese Standards wurden 1:1 aus `01 LIVE/javera-studio/CLAUDE.md` übernommen, damit dieses Projekt (anitabrownlashes-nextjs) nach denselben Regeln geprüft und weitergepflegt wird. Abschnitte, die sich auf javera-studio-spezifische Features beziehen (Blog/Portfolio-Netzwerk, Website-Chatbot), gelten hier nicht 1:1, sind aber als Referenz stehen gelassen.

## 1. Qualität vor Quantität

- Keine Inhalte nur zur Erhöhung der Seitenanzahl erstellen.
- Jede neue Seite muss einen klaren Mehrwert bieten.
- Lieber wenige, ausführliche und hochwertige Seiten als viele oberflächliche.

## 2. Eine Seite = eine Hauptsuchintention

- Jede Seite behandelt genau ein Hauptthema.
- Keine Seite soll mehrere unterschiedliche Hauptthemen gleichzeitig behandeln.

## 3. Topic-Cluster statt isolierter Seiten

Alle Seiten sollen logisch miteinander verlinkt werden. Keine Seite soll isoliert sein.

## 4. Interne Verlinkung

- Jede neue Seite soll sinnvoll auf andere relevante Inhalte verlinken.
- Links müssen echten Mehrwert bieten, nicht wahllos gesetzt werden.

## 5. SEO + GEO

Inhalte für klassische Suchmaschinen UND KI-Suchsysteme optimieren:

- klare Überschriften
- direkte Antworten
- kurze Zusammenfassungen
- Tabellen wenn sinnvoll
- Beispiele
- verständliche Sprache
- keine unnötigen Fülltexte

## 6. Nutzer zuerst

- Texte immer zuerst für Menschen schreiben.
- Keywords natürlich einbinden.
- Keyword-Stuffing vermeiden.

## 9. Preise

- Keine Preise erfinden.
- Ausschließlich bestehende Preise und Leistungen verwenden (Quelle für dieses Projekt: `src/lib/data/priceList.ts` / `src/app/preise/page.tsx`).

## 10. Vertrauen vor Verkauf

- Texte informieren und beraten.
- Keine übertriebenen Werbeversprechen.
- Keine unbelegten Aussagen.

## 14. Immer die Suchintention erfüllen (wichtigste Regel)

Nicht versuchen, möglichst viele Keywords unterzubringen, sondern die Frage der Nutzerin vollständig beantworten.

---

# Code-Qualität & Architektur-Standards

Baue dieses Next.js-Projekt mit professionellem, wartbarem Code, aber ohne unnötige Überarchitektur. Die Website ist eine überschaubare Unternehmenswebsite für ein Beauty-Studio. Verwende deshalb einfache, klare und bewährte Lösungen.

Achte auf folgende Qualitätsstandards:

- TypeScript im Strict Mode
- saubere und nachvollziehbare Ordnerstruktur
- kleine, logisch getrennte Komponenten
- keine unnötigen Abstraktionen
- keine doppelten Komponenten oder Styles
- wiederverwendbare Komponenten nur dort, wo es sinnvoll ist
- Server Components standardmäßig verwenden
- Client Components nur bei tatsächlicher Interaktivität
- keine unnötigen useEffect- oder useState-Lösungen
- semantisches HTML
- gute Accessibility
- responsive Umsetzung
- optimierte Bilder mit next/image
- saubere Metadaten und SEO-Grundlagen
- verständliche Namen für Dateien, Komponenten und Funktionen
- keine ungenutzten Imports, Dateien oder Variablen
- keine hardcodierten Inhalte, wenn diese sinnvoll zentral gepflegt werden können
- keine großen Komponenten mit zu vielen Verantwortlichkeiten
- keine schnellen Workarounds oder KI-typischen Code-Abkürzungen

Priorisiere Lesbarkeit und Wartbarkeit vor technischer Komplexität.

Bevor eine Aufgabe abgeschlossen wird, prüfen:

1. Ist die Lösung einfacher möglich?
2. Gibt es doppelten Code?
3. Ist die Komponente zu groß?
4. Wird unnötig Client-side JavaScript verwendet?
5. Sind Benennung und Struktur verständlich?
6. Bleibt die bestehende Funktionalität erhalten?
7. Würde diese Lösung eine professionelle Code-Review bestehen?

Nach Änderungen immer TypeScript-, Lint- und Build-Prüfungen ausführen und gefundene Fehler beheben.

---

# AEO (Answer Engine Optimization) Standards

Gilt zusätzlich zu den bestehenden SEO- und Security-Standards.

## 1. FAQ-Content + FAQPage-Schema (höchster Hebel, immer umsetzen)

- Echte Kundenfragen, keine generischen Fragen.
- JSON-LD `FAQPage`-Schema für jeden FAQ-Block einbauen.
- Schema mit Google Rich Results Test validieren, bevor es live geht.

## 2. „Answer-First"-Struktur in Content-Blöcken

- Jeder inhaltliche Abschnitt beginnt mit der direkten Antwort in 1–2 Sätzen, erst danach Kontext.

## 3. Überschriften-Struktur an echten Fragen ausrichten

- Überschriften-Hierarchie sauber halten (H1 → H2 → H3, keine Sprünge).

## 4. Strukturierte Formate statt Fließtext, wo möglich

- Preisübersichten → Tabelle/strukturierte Liste, nicht Fließtext.
- Behandlungsschritte/Abläufe → nummerierte Liste.

## 5. Entity-Konsistenz (NAP + Branding)

- Name, Adresse, Öffnungszeiten (NAP) müssen exakt identisch sein auf: Website, Google Business Profile, Instagram-Bio, Treatwell-Profil, Facebook.
- Firmenname immer in derselben Schreibweise verwenden.

## 7. Freshness-Signal

- Sichtbares "Zuletzt aktualisiert"-Datum bei Leistungsseiten/Preislisten dort einbauen, wo technisch sinnvoll.

## Kurz-Checkliste bei jedem neuen Projekt

- [ ] FAQ-Sektion mit echten Kundenfragen + FAQPage-Schema
- [ ] Answer-First-Struktur in allen Haupttextblöcken
- [ ] Überschriften als natürliche Fragen formuliert
- [ ] Preise/Abläufe/Vergleiche als Liste oder Tabelle statt Fließtext
- [ ] NAP-Konsistenz über alle Kanäle geprüft
- [ ] Schema mit Google Rich Results Test validiert
- [ ] Freshness-Datum bei Preis-/Leistungsseiten, wo sinnvoll

---

# Security Standards

Diese Standards gelten für **jedes** Next.js-Projekt, das für JAVERA Studio Kunden gebaut wird. Bei Projektstart und vor jedem Production-Deploy prüfen und umsetzen.

## 1. HTTP Security Header (Code-Ebene — immer umsetzen)

In `next.config.ts` per `headers()` setzen:

- **Content-Security-Policy (CSP)** — vor dem Setzen IMMER zuerst den Code nach allen extern eingebundenen Ressourcen scannen (Fonts, Analytics, Maps-Embeds, Booking-Tools) und die CSP passend dazu bauen. Danach lokal testen und Browser-Konsole (F12) auf CSP-Verstöße prüfen.
- **Strict-Transport-Security** — `max-age=63072000; includeSubDomains; preload`
- **X-Frame-Options** — `SAMEORIGIN`
- **X-Content-Type-Options** — `nosniff`
- **Referrer-Policy** — `strict-origin-when-cross-origin`
- **Permissions-Policy** — nicht genutzte Browser-Features explizit sperren

Nach jedem Deploy: Ergebnis mit securityheaders.com gegenchecken (Ziel: mind. Note A).

## 2. CORS

- `Access-Control-Allow-Origin: *` nur bei wirklich öffentlichen Assets, niemals bei API-Routen mit sensiblen Daten.

## 3. Formulare & API-Routes

- Serverseitige Validierung IMMER zusätzlich zur Client-Validierung.
- Rate-Limiting auf API-Routes gegen Spam/Missbrauch.
- Honeypot-Feld oder einfaches CAPTCHA gegen Bot-Spam.
- Keine API-Keys/Zugangsdaten im Client-Bundle.

## 4. Dependencies

- Vor Projektabschluss: `npm audit` laufen lassen, kritische/hohe Findings fixen.

## 5. robots.txt, sitemap.xml, security.txt

- `robots.txt` und `sitemap.xml` Standard bei jedem Projekt.
- `/.well-known/security.txt` ergänzen (RFC 9116).

## 6. Mixed Content

- Sicherstellen, dass ALLE eingebundenen Ressourcen über `https://` geladen werden.

---

# KI-generierte Bilder – Kennzeichnung

Wenn Jagoda sagt „als KI generiert markiert" (oder sinngemäß „markiere als KI-generiert"), gilt für JEDES betroffene Bild/Video auf der Website immer folgendes Muster:

- Kleines, halbtransparentes AI-Icon ganz unten in der Bildecke (klein, unaufdringlich).
- Bei Hover (Desktop) bzw. Tap (Mobile) erscheint daneben – ebenfalls halbtransparent – der Text „KI-generierte Bilddarstellung".
- Gilt für alle Bildtypen inkl. Hero-Video/Hero-Bilder.
- Als wiederverwendbare Komponente umsetzen, nicht pro Bild einzeln inline duplizieren.
- Barrierefreiheit beachten: Text muss auch per Tastatur/Fokus erreichbar sein, ausreichender Kontrast trotz Transparenz, `aria-label` am Icon für Screenreader.

## Aktueller Stand für dieses Projekt (AiLabel)

Das Label ist aktiv und wird über die wiederverwendbare Komponente `src/components/ui/AiLabel.tsx` eingebunden. Aktuell verwendet auf: `Hero`, `PriceHero`, `Services` (je Leistungsbild) sowie `PortraitQuote` und `PortraitQuoteReverse`.

Konkrete Optik (Stand zuletzt bestätigt):

- **Positionierung:** immer unten links auf dem Bild – `className="bottom-3 left-3"` (Default der Komponente). Bei `PortraitQuote`/`PortraitQuoteReverse` liegt das Label in der inneren Aspect-Ratio-Box des Bildes, damit es auf dem Bild und nicht im einfarbigen Rand sitzt.
- **Gesamttransparenz:** Wrapper-`<span>` hat `style={{ opacity: 0.9 }}` (gesamtes Label 10 % transparenter).
- **Icon-Badge:** `h-5 w-5`, rund, `backdrop-blur-sm`, Text „AI" in `text-[8px] font-semibold text-white`; Inline-Style `backgroundColor: rgba(255,255,255,0.12)`, `border: 1px solid rgba(255,255,255,0.2)`, `opacity: 0.6`.
- **Hover-/Fokus-Text:** „KI-generierte Bilddarstellung", fährt per `max-w`/`opacity` mit `duration-300` auf; Inline-Style `backgroundColor: rgba(255,255,255,0.13)`, `border: 1px solid rgba(255,255,255,0.2)`, `color: rgba(255,255,255,0.78)`, `rounded-md px-2 py-1 text-[10px]`.
- **Barrierefreiheit:** `tabIndex={0}`, `aria-label="KI-generierte Bilddarstellung"` am Wrapper, `focus-visible:ring-2 focus-visible:ring-white/60`; der Hover-Text erscheint auch bei Tastatur-Fokus (`group-focus/ai`).

Optik-Änderungen ausschließlich zentral in `AiLabel.tsx`, nie pro Bild inline.
