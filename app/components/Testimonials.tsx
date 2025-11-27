import React from 'react';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  company: string;
  text: string;
  rating: number;
  logo?: string;
  category?: string[];
}

// ALLE TESTIMONIALS CENTRAAL
const ALL_TESTIMONIALS: Testimonial[] = [
  { 
    name: 'Tom Veeze', 
    company: 'Eigenaar Vebriwork', 
    text: 'Wij hebben de afgelopen jaren een enorme ontwikkeling doorgemaakt als bedrijf zijnde. Al deze tijd heeft Riekhoff naast ons gestaan. Proactief geadviseerd en concreet meegedacht met de koers die onze onderneming moest varen. En dit was een succes, nog steeds. Zeer tevreden met hetgeen Riekhoff ons heeft gebracht, meer dan een accountantskantoor maar een echte partner in business.', 
    rating: 5,
    logo: '/logos/vebriwork.webp',
    category: ['algemeen', 'accountancy', 'fiscaal']
  },
  { 
    name: 'Camping Bek\'n Schop', 
    company: 'Recreatiebedrijf', 
    text: 'Riekhoff heeft ons zowel zakelijk als privé ontzettend geholpen. Goed bereikbaar, persoonlijk contact en een transparante vaste prijs.', 
    rating: 5,
    logo: '/logos/camping-bekn-schop.webp',
    category: ['algemeen', 'accountancy', 'fiscaal', 'salaris']
  },
  { 
    name: 'Henk Greftenhuis', 
    company: 'Eigenaar Araco International', 
    text: 'Als middelgrote onderneming ondersteunt Riekhoff ons al jaren bij de pre-audit dienstverlening. De controle kan hierdoor vlot worden afgewikkeld. Ook zijn wij ondersteund door een collega van Riekhoff die regelmatig bij ons op locatie kwam om te helpen met de financiële administratie. Laagdrempelig en zeer effectief!', 
    rating: 5,
    logo: '/logos/araco-international.webp',
    category: ['algemeen', 'accountancy']
  },
  { 
    name: 'Fred Gerritsen', 
    company: 'Algemeen directeur Safety Service®', 
    text: 'Als landelijke opererende organisatie zoekt Safety Service® een accountant die van alle markten thuis is, die hebben wij gevonden bij Riekhoff.', 
    rating: 5,
    logo: '/logos/safety-service.webp',
    category: ['algemeen', 'accountancy', 'fiscaal', 'salaris']
  },
];

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  bgColor?: 'white' | 'gray';
  showLabel?: boolean;
  label?: string;
  filter?: string;
}

export default function Testimonials({ 
  title = "Wat klanten vertellen",
  subtitle,
  bgColor = 'white',
  showLabel = false,
  label = 'Reviews',
  filter
}: TestimonialsProps) {
  const bgClass = bgColor === 'white' ? 'bg-white' : 'bg-gray-50';

  // FILTER LOGICA: Als filter actief is, probeer te filteren
  // Als er geen resultaten zijn, toon dan ALLE testimonials
  let displayTestimonials = ALL_TESTIMONIALS;
  
  if (filter) {
    const filtered = ALL_TESTIMONIALS.filter(t => t.category?.includes(filter));
    // Als er gefilterde resultaten zijn, gebruik die. Anders gebruik alle testimonials.
    displayTestimonials = filtered.length > 0 ? filtered : ALL_TESTIMONIALS;
  }

  // Triple voor infinite scroll
  const tripleTestimonials = [...displayTestimonials, ...displayTestimonials, ...displayTestimonials];

  return (
    <section className={`py-20 md:py-24 ${bgClass}`}>
      {/* Header */}
      <div className="container mx-auto px-6 mb-16">
        <div className="max-w-6xl mx-auto text-center">
          {showLabel && (
            <div className="inline-block bg-gray-100 px-4 py-2 rounded-lg mb-6">
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">{label}</span>
            </div>
          )}
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            {title.split(' ').slice(0, -1).join(' ')} <span className="text-accent-yellow">{title.split(' ').slice(-1)}</span>
          </h2>

          {subtitle && (
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Infinite scrolling testimonials */}
      <div className="relative overflow-hidden">
        {/* Desktop: Auto-scroll */}
        <div className="hidden md:block">
          <div className="flex animate-scroll-slow gap-6 pl-6">
            {tripleTestimonials.map((t, i) => (
              <div 
                key={`desktop-${i}`} 
                className="flex-shrink-0 w-[450px] h-[320px] bg-white p-6 lg:p-8 rounded-lg border border-gray-200 hover:border-accent-yellow transition-all flex flex-col"
              >
                <Quote className="w-8 h-8 text-accent-yellow mb-3" />
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent-yellow text-accent-yellow" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 italic flex-grow overflow-hidden line-clamp-4">
                  "{t.text}"
                </p>
                <div className="pt-4 border-t border-gray-200 mt-auto flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold truncate">{t.name}</div>
                    <div className="text-xs text-gray-500 truncate">{t.company}</div>
                  </div>
                  {t.logo && (
                    <div className="flex-shrink-0">
                      <img 
                        src={t.logo} 
                        alt={`${t.company} logo`}
                        className="h-10 w-auto object-contain grayscale opacity-60"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Swipable */}
        <div className="md:hidden">
          <div className="flex gap-6 px-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {tripleTestimonials.map((t, i) => (
              <div 
                key={`mobile-${i}`} 
                className="flex-shrink-0 w-[calc(100vw-3rem)] h-[320px] snap-center bg-white p-6 rounded-lg border border-gray-200 flex flex-col"
              >
                <Quote className="w-8 h-8 text-accent-yellow mb-3" />
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent-yellow text-accent-yellow" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 italic flex-grow overflow-hidden line-clamp-4">
                  "{t.text}"
                </p>
                <div className="pt-4 border-t border-gray-200 mt-auto flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold truncate">{t.name}</div>
                    <div className="text-xs text-gray-500 truncate">{t.company}</div>
                  </div>
                  {t.logo && (
                    <div className="flex-shrink-0">
                      <img 
                        src={t.logo} 
                        alt={`${t.company} logo`}
                        className="h-10 w-auto object-contain grayscale opacity-60"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}