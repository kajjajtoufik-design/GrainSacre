# Maison Brûlot — site café (Astro + Tailwind)

Site magazine optimisé SEO, prêt pour l'affiliation et la capture d'emails,
avec une boutique e-commerce **prévue mais désactivée** (mode « Shop en construction »).

---

## 🚀 Démarrage en local

Pré-requis : **Node.js 18+** installé ([nodejs.org](https://nodejs.org)).

Dans un terminal, à la racine du projet :

```bash
npm install      # installe les dépendances (une seule fois)
npm run dev      # lance le site en local
```

Ouvrez ensuite **http://localhost:4321** dans votre navigateur.
Toute modification de fichier se recharge automatiquement.

Pour générer la version finale optimisée :

```bash
npm run build    # crée le dossier /dist prêt à mettre en ligne
```

---

## ✍️ Publier un article SANS coder

C'est l'essentiel. Chaque article est un simple fichier texte.

### 1. Créez un fichier

Allez dans le dossier `src/content/blog/` et créez un nouveau fichier
`.md`. Le nom du fichier devient l'URL de l'article.

Exemple : `meilleur-cafe-grain-2026.md` → `votredomaine.fr/blog/meilleur-cafe-grain-2026/`

> 💡 Conseil SEO : un nom de fichier court, en minuscules, avec des tirets,
> contenant votre mot-clé principal.

### 2. Collez ce modèle en haut, puis votre texte

```markdown
---
title: "Le meilleur café en grain en 2026"
description: "Notre sélection testée pour un espresso d'exception."
pubDate: 2026-06-06
image: "https://exemple.com/mon-image.jpg"
imageAlt: "Sachet de café en grain posé sur une table"
category: "Espresso"
readingTime: 7
featured: false
draft: false
---

## Mon premier titre

Ici je tape ou je colle mon texte normalement.

On peut mettre du **gras**, de l'*italique*, et des [liens](https://exemple.com).

## Une liste

- Premier point
- Deuxième point

> Une citation mise en valeur.
```

### 3. Ce que signifient les champs du haut (le « frontmatter »)

| Champ | Rôle |
|-------|------|
| `title` | Titre de l'article (balise H1 + titre SEO) |
| `description` | Résumé affiché dans Google et les aperçus de partage |
| `pubDate` | Date de publication (format AAAA-MM-JJ) |
| `image` | Image principale (URL ou fichier dans `/public/images/`) |
| `imageAlt` | Description de l'image (important pour le SEO et l'accessibilité) |
| `category` | Catégorie affichée (ex : Espresso, Torréfaction…) |
| `readingTime` | Temps de lecture en minutes |
| `featured` | `true` = article mis en avant en grand sur l'accueil |
| `draft` | `true` = brouillon invisible ; passez à `false` pour publier |

### 4. Insérer un encart d'affiliation dans un article

Renommez votre fichier en `.mdx` (au lieu de `.md`), ajoutez en haut du
contenu :

```mdx
import AffiliateBox from '../../components/AffiliateBox.astro';
```

Puis insérez où vous voulez dans le texte :

```mdx
<AffiliateBox
  name="Cafetière Barista Pro X"
  price="699€"
  url="https://lien-affilie.com/produit"
  image="https://exemple.com/photo.jpg"
  note="Notre coup de cœur"
/>
```

### 5. Mettre l'article en ligne

- **Le plus simple** : sur GitHub, cliquez sur le dossier `src/content/blog/`,
  puis « Add file » → « Create new file », collez votre contenu, validez.
  Le site se met à jour tout seul en ~30 secondes (voir déploiement ci-dessous).

---

## 🌐 Mettre le site en ligne (gratuit)

1. Créez un compte sur [github.com](https://github.com) et [vercel.com](https://vercel.com).
2. Envoyez ce dossier dans un nouveau dépôt GitHub.
3. Sur Vercel : « Add New Project » → importez votre dépôt → Deploy.
   Vercel détecte Astro automatiquement, aucune config.
4. Chaque modification poussée sur GitHub redéploie le site automatiquement.

Pensez à remplacer `https://votredomaine.fr` dans `astro.config.mjs`,
`src/config/site.ts` et `public/robots.txt` par votre vraie adresse.

---

## 📧 Connecter la newsletter

Dans `src/config/site.ts`, renseignez `newsletterAction` avec l'URL de
formulaire fournie par votre outil d'emailing (Brevo, MailerLite, ConvertKit…).
Les formulaires d'inscription (accueil + liste d'attente du Shop) l'utiliseront.

---

## 🛒 Activer la boutique plus tard

Tout est déjà prévu. Le jour du lancement :

1. Ouvrez `src/config/site.ts`.
2. Passez `ECOMMERCE_ENABLED: false` → `true`.
3. Ajoutez vos produits dans `src/content/products/` (modèle dans `signature.md`,
   pensez à mettre `draft: false`).

La page `/shop/` basculera automatiquement du mode « en construction » vers la
vraie grille de produits. Le badge « Bientôt » disparaîtra de la navigation.
(Pour le panier/paiement, on branchera ensuite un outil comme Snipcart ou Shopify.)

---

## 📁 Structure du projet

```
src/
├── components/     → blocs réutilisables (Header, Footer, cartes, encart affiliation…)
├── layouts/        → gabarits de page (SEO dans BaseLayout)
├── content/
│   ├── blog/       → VOS ARTICLES (.md) ← c'est ici que vous écrivez
│   ├── products/   → produits boutique (désactivés pour l'instant)
│   └── config.ts   → règles de validation des articles
├── pages/          → les pages du site (accueil, comparateur, blog, shop)
├── config/site.ts  → réglages globaux + interrupteur e-commerce
└── styles/         → styles globaux
public/             → images, favicon, robots.txt
```

Bon café ☕
