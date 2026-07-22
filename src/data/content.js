export const site = {
  name: 'Kreativo Studio',
  email: 'kontakt@kreativostudio.pl',
  tagline: 'Tworzę nowoczesne rozwiązania internetowe, które pomagają rozwijać pomysły w świecie online.',
  description:
    'Projektuję strony internetowe, tworzę cyfrowe rozwiązania i rozwijam własne projekty. Moim celem jest łączenie estetyki, funkcjonalności oraz prostoty obsługi, aby każda strona była nie tylko ładna, ale również praktyczna.',
  moneyNotice:
    'PRODUKT WYKONUJĘ JA. WSZYSTKIMI SPRAWAMI ZWIĄZANYMI Z PIENIĘDZMI — PŁATNOŚCIAMI, FAKTURAMI I ROZLICZENIAMI — ZAJMUJE SIĘ MÓJ TATA.',
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
    id: 'bielszowice-trail',
    title: 'Bielszowice Trail',
    description:
      'Strona parku rowerowego MTB w Rudzie Śląskiej — prezentacja tras, poziomów trudności, wydarzeń i atmosfery miejsca. Live: bielszowicetrail.netlify.app',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    features: [
      'Sekcje tras i trudności',
      'Responsywny layout',
      'Animacje przy scrollu',
      'Publikacja na Netlify',
    ],
    link: 'https://bielszowicetrail.netlify.app',
    accent: 'green',
  },
  {
    id: 'kadoka',
    title: 'KADOKA',
    description:
      'Strona firmowa usług ogrodniczych z Orzesza — oferta, realizacje, opinie i kontakt. Live: kadoka.netlify.app',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    features: [
      'Pełnoekranowy hero',
      'Oferta usług',
      'Portfolio realizacji',
      'Sekcja kontaktu',
    ],
    link: 'https://kadoka.netlify.app',
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
