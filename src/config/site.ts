export const SITE = {
  name: 'GrainSacre',
  tagline: "Le magazine du café d'exception",
  url: 'https://votredomaine.fr',
  description:
    "Guides, comparatifs et conseils d'experts pour sublimer votre café au quotidien. Machines, grains, méthodes douces.",
  author: 'GrainSacre',
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
  newsletterAction: '',
};

export const NAV_LINKS = [
  { label: 'Magazine', href: '/blog/' },
  { label: 'Comparateur', href: '/comparateur/' },
  { label: 'Guides', href: '/#guides' },
  { label: 'Shop', href: '/shop/', badge: SITE.ECOMMERCE_ENABLED ? null : 'Bientôt' },
  { label: 'Newsletter', href: '/#newsletter' },
];
