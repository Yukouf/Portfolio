# 🛡️ Watchdogs - Site Web Officiel

Un site web moderne et immersif pour la franchise Watchdogs, créé avec les technologies les plus avancées.

## 🚀 Technologies Utilisées

- **React 18** - Framework JavaScript moderne
- **TypeScript** - Typage statique pour une meilleure sécurité
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides et performantes
- **React Router** - Navigation côté client
- **Zustand** - Gestion d'état légère
- **Lucide React** - Icônes modernes

## 🎨 Design & Style

Le site adopte l'esthétique cyberpunk de Watchdogs avec :
- Palette de couleurs sombre avec des accents bleus et verts
- Effets de lueur (glow) et animations fluides
- Typographie moderne et lisible
- Design responsive pour tous les appareils
- Effets visuels inspirés du hacking

## 📁 Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── Navbar.tsx      # Barre de navigation
│   └── Footer.tsx      # Pied de page
├── pages/              # Pages de l'application
│   ├── Home.tsx        # Page d'accueil
│   ├── About.tsx       # À propos
│   ├── Characters.tsx  # Personnages
│   ├── Gameplay.tsx    # Mécaniques de jeu
│   └── Contact.tsx     # Contact
├── App.tsx             # Composant principal
├── main.tsx           # Point d'entrée
└── index.css          # Styles globaux
```

## 🛠️ Installation

1. **Cloner le projet**
   ```bash
   git clone [url-du-repo]
   cd watchdogs-website
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 📦 Scripts Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie le code avec ESLint

## 🎯 Fonctionnalités

### 🏠 Page d'Accueil
- Hero section avec animations spectaculaires
- Présentation des fonctionnalités principales
- Call-to-action pour commencer l'aventure

### 📖 À Propos
- Histoire de la franchise Watchdogs
- Timeline interactive de l'évolution
- Statistiques et chiffres clés

### 👥 Personnages
- Présentation des héros de la série
- Statistiques détaillées de chaque personnage
- Compétences et spécialités

### 🎮 Gameplay
- Mécaniques de jeu révolutionnaires
- Outils de hacking disponibles
- Modes de jeu (Infiltration/Action)

### 📞 Contact
- Formulaire de contact interactif
- Informations de contact
- FAQ intégrée

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans `tailwind.config.js` :
- `watchdogs-blue` - Bleu principal (#00A8FF)
- `watchdogs-dark` - Noir profond (#1A1A1A)
- `watchdogs-gray` - Gris sombre (#2D2D2D)
- `watchdogs-accent` - Orange accent (#FF6B35)
- `watchdogs-green` - Vert hacking (#00FF41)
- `watchdogs-red` - Rouge danger (#FF0040)

### Animations
Les animations sont créées avec Framer Motion et incluent :
- Animations d'entrée fluides
- Effets de hover interactifs
- Transitions de page
- Animations de scroll

## 📱 Responsive Design

Le site est entièrement responsive avec :
- Design mobile-first
- Breakpoints optimisés
- Navigation adaptative
- Images et contenus adaptatifs

## 🔧 Configuration

### Vite
Configuration optimisée dans `vite.config.ts` :
- Hot Module Replacement
- Build optimisé
- Support TypeScript

### Tailwind CSS
Configuration personnalisée avec :
- Couleurs personnalisées
- Animations custom
- Classes utilitaires étendues

## 🚀 Déploiement

### Build de Production
```bash
npm run build
```

### Déploiement sur GitHub Pages

1. **Activer GitHub Pages** :
   - Aller dans Settings > Pages
   - Source : "Deploy from a branch"
   - Branch : `gh-pages` (sera créé automatiquement)
   - Folder : `/ (root)`

2. **Configuration automatique** :
   - Le workflow GitHub Actions se déclenche automatiquement
   - Chaque push sur `main` déclenche un nouveau déploiement
   - L'URL sera : `https://[votre-username].github.io/Watchdogsù/`

3. **Configuration manuelle** (si nécessaire) :
   ```bash
   npm run build
   # Puis uploader le contenu du dossier dist/ sur la branche gh-pages
   ```

### Déploiement sur Vercel
1. Connecter le repository GitHub
2. Configurer les variables d'environnement
3. Déployer automatiquement

### Déploiement sur Netlify
1. Drag & drop du dossier `dist`
2. Configuration des redirections
3. Déploiement instantané

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements

- Ubisoft pour la franchise Watchdogs
- La communauté React pour les outils incroyables
- Tous les contributeurs open source

---

**Hack the World** 🛡️⚡ 