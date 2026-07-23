export const site = {
  name: 'Kreativo Studio',
  email: 'franek.luczakiewicz@gmail.com',
  tagline: 'Tworzę nowoczesne rozwiązania internetowe, które pomagają rozwijać pomysły w świecie online.',
  description:
    'Projektuję strony internetowe, tworzę cyfrowe rozwiązania i rozwijam własne projekty. Moim celem jest łączenie estetyki, funkcjonalności oraz prostoty obsługi, aby każda strona była nie tylko ładna, ale również praktyczna.',
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
