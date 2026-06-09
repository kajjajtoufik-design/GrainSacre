export const SITE = {
  name: 'Grain Sacré',
  tagline: "Le magazine du café d'exception",
  url: 'https://www.grain-sacre.fr',
  description:
    "Guides, comparatifs et conseils d'experts pour sublimer votre café au quotidien. Machines, grains, méthodes douces.",
  author: 'Grain Sacré',
  // ────────────────────────────────────────────
  //  E-COMMERCE : passez à true le jour du lancement
  //  false = section "Shop en construction" + liste d'attente
  //  true  = vraies fiches produits + panier (à brancher)
  ECOMMERCE_ENABLED: false,
  // ────────────────────────────────────────────
  social: {
    instagram: 'https://instagram.com/votrecompte',
  },
  // Inscriptions newsletter : collez ici l'URL de votre formulaire
  // (Brevo, MailerLite, ConvertKit...). Laissez vide pour un envoi factice.
  newsletterAction:
    'https://aa30afc8.sibforms.com/serve/MUIFAB0RRDr_DYIWgtmLkHoB2P9H74rME5teMOfnElzX8nQ_hgX9W9CSvT6iije06mqcfkqXV12qiU8YaijVDuG7xQ3SKddXwDorYeJxqs9_2m8B2Vy-HUE8k-KOe33GuMdOaANFWII8Hk4586FoQgtHxlICYqmw-mBCwDgkxjTJgXP3ZLN-BZc3JaN4Ku82tc55OoWRopLeKWkj7g==',
  newsletterField: 'EMAIL',
};

export const NAV_LINKS = [
  { label: 'Magazine', href: '/blog/' },
  { label: 'Comparateur', href: '/comparateur/' },
  { label: 'Guides', href: '/#guides' },
  { label: 'Shop', href: '/shop/', badge: SITE.ECOMMERCE_ENABLED ? null : 'Bientôt' },
  { label: 'Newsletter', href: '/#newsletter' },
];
