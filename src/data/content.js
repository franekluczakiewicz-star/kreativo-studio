export const site = {
  name: 'Kreativo Studio',
  email: 'kontakt@kreativostudio.pl',
  tagline: 'Tworzę nowoczesne rozwiązania internetowe, które pomagają rozwijać pomysły w świecie online.',
  description:
    'Projektuję strony internetowe, tworzę cyfrowe rozwiązania i rozwijam własne projekty. Moim celem jest łączenie estetyki, funkcjonalności oraz prostoty obsługi, aby każda strona była nie tylko ładna, ale również praktyczna.',
  social: {
    github: 'https://github.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
  },
}

export const about = {
  title: 'O mnie',
  paragraphs: [
    'Cześć! Jestem młodym twórcą zainteresowanym technologią, programowaniem i projektowaniem stron internetowych. Od początku interesowało mnie tworzenie własnych projektów i rozwijanie umiejętności związanych z nowoczesnymi technologiami.',
    'Każdy projekt traktuję jako możliwość nauki oraz stworzenia czegoś wyjątkowego. Skupiam się na tym, aby moje realizacje były przejrzyste, szybkie i dopasowane do potrzeb użytkowników.',
    'Tworzę projekty od podstaw — od pierwszego pomysłu, przez wygląd strony, aż po gotowe rozwiązanie działające w internecie.',
  ],
}

/** Łatwe dodawanie projektów — wystarczy dopisać obiekt do tablicy. */
export const projects = [
  {
    id: 'corporate-site',
    title: 'Nowoczesna strona firmowa',
    description:
      'Projekt profesjonalnej strony internetowej stworzonej dla firmy. Celem było przygotowanie przejrzystej prezentacji usług oraz stworzenie wygodnej nawigacji dla klientów.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: ['Responsywny wygląd', 'Animacje', 'Formularz kontaktowy', 'Szybkie ładowanie'],
    link: '#',
    accent: 'blue',
  },
  {
    id: 'ecommerce',
    title: 'Sklep internetowy',
    description:
      'Projekt sklepu internetowego umożliwiającego prezentację produktów oraz wygodne zarządzanie ofertą.',
    technologies: ['React', 'CSS', 'JavaScript'],
    features: ['Lista produktów', 'Koszyk', 'Kategorie', 'Wyszukiwarka', 'Panel produktów'],
    link: '#',
    accent: 'green',
  },
  {
    id: 'experimental',
    title: 'Własny projekt eksperymentalny',
    description:
      'Projekt stworzony w celu testowania nowych technologii i rozwijania umiejętności programistycznych.',
    technologies: ['React', 'Vite', 'Tailwind'],
    features: ['Eksperymenty UI', 'Nowe API', 'Szybkie prototypowanie'],
    link: '#',
    accent: 'blue',
  },
]

/** Produkty sklepu — kategorie + oferty. Ceny w PLN. */
export const shopCategories = [
  {
    id: 'websites',
    name: 'Strony internetowe',
    products: [
      {
        id: 'starter',
        name: 'Pakiet Starter',
        price: 1499,
        description:
          'Podstawowa strona internetowa dla osób, które chcą rozpocząć swoją obecność w internecie.',
        includes: [
          'Projekt strony głównej',
          'Podstawowe podstrony',
          'Dostosowanie do telefonu',
          'Konfiguracja publikacji',
        ],
      },
      {
        id: 'professional',
        name: 'Pakiet Professional',
        price: 3499,
        description:
          'Rozbudowana strona internetowa dla firm i marek, które potrzebują profesjonalnej prezentacji.',
        includes: [
          'Indywidualny projekt',
          'Dodatkowe funkcje',
          'Animacje',
          'Optymalizacja',
        ],
        featured: true,
      },
    ],
  },
  {
    id: 'templates',
    name: 'Szablony stron',
    products: [
      {
        id: 'template-portfolio',
        name: 'Szablon Portfolio',
        price: 249,
        description:
          'Gotowy projekt strony portfolio dla twórców, freelancerów i osób chcących pokazać swoje projekty.',
        includes: ['Responsywny layout', 'Sekcje portfolio', 'Formularz kontaktowy'],
      },
      {
        id: 'template-business',
        name: 'Szablon Firmowy',
        price: 299,
        description: 'Nowoczesny wygląd strony dla małych firm i usługodawców.',
        includes: ['Strona usług', 'O firmie', 'CTA i kontakt'],
      },
    ],
  },
]

export const testimonials = [
  {
    id: 1,
    rating: 5,
    text: 'Bardzo dobra komunikacja i profesjonalne podejście. Strona wygląda nowocześnie i działa bardzo szybko.',
    author: 'Klient',
  },
  {
    id: 2,
    rating: 5,
    text: 'Projekt został wykonany zgodnie z oczekiwaniami. Wszystko działa poprawnie.',
    author: 'Klient',
  },
]
