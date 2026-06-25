// ════════════════════════════════════════════════════════════
//  PRODUITS AFFILIÉS — fichier central
//  Tous vos liens d'affiliation au même endroit.
//
//  COMMENT ÇA MARCHE :
//  - Tant que "url" est vide (""), aucun lien affilié n'est actif :
//    les boutons renvoient simplement vers la recherche, ou sont masqués.
//  - Le jour où vous avez vos liens (Amazon Partenaires ou autre),
//    remplissez le champ "url" de chaque produit. Tout le site se met
//    à jour automatiquement, sans toucher aux articles.
//
//  RÈGLE IMPORTANTE : collez l'URL complète AVEC votre identifiant
//  d'affilié (ex. Amazon : .../dp/XXXX?tag=VOTRE-ID-21).
// ════════════════════════════════════════════════════════════

export const PRODUITS = {
  // ---- MACHINES ----
  'magnifica-s': {
    nom: "De'Longhi Magnifica S",
    categorie: 'Machine automatique à grain',
    prix: '~399€',
    image: '', // optionnel : "/images/magnifica-s.jpg"
    url: '', // ← collez ici votre lien affilié quand vous l'aurez
    note: 'Notre choix automatique',
  },
  'dedica-ec685': {
    nom: "De'Longhi Dedica EC685",
    categorie: 'Machine manuelle (semi-auto)',
    prix: '~179€',
    image: '',
    url: '',
    note: 'Idéale pour débuter en manuel',
  },
  'vertuo-pop': {
    nom: 'Nespresso Vertuo Pop',
    categorie: 'Machine à capsule',
    prix: '~99€',
    image: '',
    url: '',
    note: 'La simplicité absolue',
  },

  // ---- MOULINS ----
  'moulin-manuel': {
    nom: 'Moulin à café manuel à meules',
    categorie: 'Moulin',
    prix: '',
    image: '',
    url: '',
    note: 'Bon rapport qualité-prix pour débuter',
  },

  // ---- ACCESSOIRES ----
  'balance-cafe': {
    nom: 'Balance de précision pour café',
    categorie: 'Accessoire',
    prix: '',
    image: '',
    url: '',
    note: 'Pour des tasses régulières',
  },
  'bouilloire-col-cygne': {
    nom: 'Bouilloire à col de cygne',
    categorie: 'Accessoire',
    prix: '',
    image: '',
    url: '',
    note: 'Versement précis pour le filtre',
  },

  // Ajoutez d'autres produits ici sur le même modèle.
};

// Petit utilitaire : indique si l'affiliation est active pour un produit.
export function lienActif(cle) {
  const p = PRODUITS[cle];
  return Boolean(p && p.url && p.url.length > 0);
}
