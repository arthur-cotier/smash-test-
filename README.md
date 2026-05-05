# SMASH — site vitrine

Site vitrine multi-pages pour **SMASH**, restaurant de smash burgers, brunch & bar à Châteauroux (36000).

Stack : HTML5 + CSS3 + JavaScript vanilla. Tailwind CSS via CDN. Aucun build, aucun backend, déployable tel quel sur Vercel.

---

## 1. Structure du projet

```
smash-chateauroux/
├── index.html              # Accueil
├── menu.html               # La carte (page prioritaire)
├── reservation.html        # Formulaire de réservation (Formspree)
├── histoire.html           # Histoire & philosophie du chef
├── contact.html            # Coordonnées + plan
├── 404.html                # Page d'erreur
├── css/
│   └── styles.css          # Styles personnalisés
├── js/
│   ├── tailwind-config.js  # Config Tailwind (couleurs, fontes)
│   └── script.js           # Menu mobile, validation formulaire, etc.
├── images/                 # Visuels (à remplir)
├── robots.txt
├── sitemap.xml
├── vercel.json             # Config Vercel (clean URLs, headers sécurité, cache)
└── .gitignore
```

---

## 2. Lancer en local

C'est du HTML statique. Ouvrir directement `index.html` dans un navigateur fonctionne, mais pour les chemins relatifs et `iframe`, mieux vaut un mini-serveur :

```bash
# Avec Python 3
cd smash-chateauroux
python3 -m http.server 8000

# Ou avec Node
npx serve .
```

Puis ouvrir <http://localhost:8000>.

---

## 3. Déploiement sur Vercel

Trois options, toutes sans modification du code :

**Option A — Drag & drop**
1. Aller sur <https://vercel.com/new>
2. Glisser le dossier `smash-chateauroux/` dans la zone de dépôt
3. Cliquer **Deploy**

**Option B — Via Git**
1. Pousser le dossier sur un repo GitHub
2. Sur Vercel : **New Project** → importer le repo
3. Pas de framework (Other / Static), pas de build command, output directory = racine
4. **Deploy**

**Option C — CLI**
```bash
npm i -g vercel
cd smash-chateauroux
vercel
```

Vercel détecte automatiquement le `vercel.json` (clean URLs, headers de sécurité, cache).

Une fois en ligne, brancher le domaine personnalisé dans **Settings → Domains**.

---

## 4. Avant la mise en ligne — points à compléter

Recherchez les chaînes ci-dessous dans tout le projet et remplacez-les.

| Marqueur                       | Où                                                  | Quoi remplir                                  |
|-------------------------------|-----------------------------------------------------|-----------------------------------------------|
| `REMPLACER`                   | `reservation.html` (action Formspree)               | Identifiant Formspree (cf. § 5)                |
| `REMPLACER-PAR-DOMAINE.fr`    | toutes les pages (canonical, OG, JSON-LD, sitemap, robots) | Votre domaine final, ex. `smash-chateauroux.fr` |
| `+33 X XX XX XX XX`           | `index.html`, `reservation.html`, `contact.html`, JSON-LD | Numéro de téléphone du restaurant            |
| `contact@…` / `events@…`      | `contact.html`                                      | Adresses email réelles                        |
| `Adresse précise…`            | `index.html`, `contact.html`, JSON-LD               | Adresse postale exacte                        |
| Liens sociaux `href="#"`      | footer + `contact.html`                             | URLs Instagram / Facebook / TikTok            |
| Carte OpenStreetMap           | `contact.html`                                      | Mettre à jour `bbox` et `marker` avec les vraies coordonnées GPS |

Astuce :
```bash
# Lister tous les "REMPLACER" du projet
grep -rn "REMPLACER" .
```

---

## 5. Configurer Formspree (formulaire de réservation)

1. Créer un compte gratuit sur <https://formspree.io>
2. **New form** → entrer l'email qui recevra les réservations
3. Copier l'identifiant (ex. `xayzqrpb`)
4. Dans `reservation.html`, remplacer :
   ```html
   action="https://formspree.io/f/REMPLACER"
   ```
   par :
   ```html
   action="https://formspree.io/f/xayzqrpb"
   ```
5. Tester : envoyer une demande, valider l'email de confirmation Formspree.

Le formulaire embarque déjà :
- Validation HTML5 native + consentement obligatoire
- Honeypot anti-spam (`_gotcha`)
- Date min = aujourd'hui (JS)

---

## 6. Personnalisation rapide

**Couleurs** — `js/tailwind-config.js`
```js
colors: {
  cream:     '#fef9ef',  // fond principal
  charcoal:  '#171413',  // texte / fond sombre
  smash:     '#dc2626',  // rouge accent (CTA)
  smashDark: '#991b1b',  // hover
  mustard:   '#f59e0b',  // jaune accent
}
```

**Polices** — chargées via Google Fonts dans chaque `<head>` :
- `Bebas Neue` — titres
- `Inter` — corps de texte
- `Permanent Marker` — accents rétro grill US

**Carte** — pour mettre à jour les sections (prix, plats, descriptions) : éditer directement `menu.html`.

---

## 7. SEO local

Déjà en place :
- `<title>` et `<meta description>` uniques par page
- Open Graph + Twitter Cards
- Balise canonical par page
- JSON-LD Schema.org `Restaurant` (accueil + contact) et `Menu` (carte)
- Lang `fr`, `og:locale fr_FR`, hiérarchie `<h1>`/`<h2>` cohérente
- `sitemap.xml` + `robots.txt`
- Headers sécurité via `vercel.json`

À faire ensuite (hors site) pour le référencement local :
- Créer une **fiche Google Business Profile** (essentiel pour le local).
- Créer une fiche TripAdvisor / TheFork si pertinent.
- Inviter les clients à laisser un avis Google après leur visite.
- Uniformiser **NAP** (Name, Address, Phone) sur toutes les plateformes.

---

## 8. Accessibilité

- Liens "Aller au contenu" (skip link) sur chaque page
- Focus visible (anneau rouge), `aria-label`/`aria-current` sur la nav
- `prefers-reduced-motion` respecté (animations désactivées)
- Couleurs et contrastes conformes WCAG AA pour les textes principaux
- Formulaire avec labels explicites et messages clairs

---

## 9. Notes

- Le site utilise **Tailwind via CDN**, parfait pour démarrer mais à terme pensez à un build Tailwind CLI pour la performance (purge CSS) si le trafic décolle.
- Les images du dossier `/images/` sont à fournir (cf. `images/README.txt`).
- Aucun cookie tiers n'est posé. Si vous ajoutez des analytics (Plausible, GA4, Matomo), pensez à un bandeau de consentement adapté.
