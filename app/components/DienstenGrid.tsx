'use client';

import React, { useState } from 'react';
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  Users, 
  Scale, 
  Target,
  ArrowRight,
  CheckCircle2,
  Clipboard
} from 'lucide-react';

const DienstenGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [touchedIndex, setTouchedIndex] = useState<number | null>(null);

  const diensten = [
    {
      icon: Calculator,
      badge: 'Jaarrekeningen',
      title: 'Accountancy',
      shortTitle: 'ACCOUNTANCY',
      description: 'Voor een goede en efficiënte bedrijfsvoering zijn actuele cijfers van groot belang. Bij Riekhoff zorgen wij voor actueel inzicht in de cijfers en resultaten van jouw onderneming. Niet de focus op historische jaarcijfers, maar praten over het hier en nu.',
      features: ['Jaarrekeningen en samenstelopdrachten', 'Tussentijdse rapportages', 'Financiële analyse', 'Pre-audit dienstverlening'],
      image: '/kantoor_open_3.jpg',
      link: '/accountancy',
      size: 'large'
    },
    {
      icon: Clipboard,
      badge: 'Administratie',
      title: 'Financiële administratie',
      shortTitle: 'FINANCIËLE\nADMINISTRATIE',
      description: 'Om tot betrouwbare en actuele cijfers te komen is een goede financiële administratie van groot belang. Bij Riekhoff kunnen wij hierin ondersteunen óf compleet ontzorgen. Wij maken gebruik van vergaande automatisering waardoor de administratieve last vaak sterk kan worden teruggedrongen.',
      features: ['Voeren van de financiële administratie', 'Ondersteunen bij de financiële administratie', 'Inrichten en automatiseren', 'Detacheren van professionals'],
      image: '/riekhoff-vrouw-bureau.jpg',
      link: '/financiele-administratie',
      size: 'medium'
    },
    {
      icon: TrendingUp,
      badge: 'Financiering',
      title: 'Financiële dienstverlening',
      shortTitle: 'FINANCIËLE\nDIENSTVERLENING',
      description: 'Wij helpen ondernemers met financieringsadvies, kredietaanvragen, herstructureringen en bedrijfswaarderingen. Riekhoff beschikt over de juiste kennis én ervaring en staat in deze processen pal naast u.',
      features: ['Financieringsadvies en kredietaanvragen', 'Begrotingen en (liquiditeit-)prognoses', 'Herstructureringen en overgang naar een BV', 'Bedrijfswaarderingen en due diligence'],
      image: '/riekhoff-mannelijke-medewerker-portret.jpg',
      link: '/financiele-dienstverlening',
      size: 'medium'
    },
    {
      icon: Scale,
      badge: 'Belastingadvies',
      title: 'Fiscale dienstverlening',
      shortTitle: 'FISCALE\nDIENSTVERLENING',
      description: 'Riekhoff heeft ervaren belastingadviseurs in dienst en beschikt over een breed netwerk aan gespecialiseerde fiscalisten om u van de beste dienstverlening te voorzien. Wij zijn proactief in het signaleren en toepassen van belastingbesparende maatregelen.',
      features: ['Belastingaangiften', 'Bezwaar en beroep', 'Fiscale planning en advisering', 'Btw-advies'],
      image: '/riekhoff-samenwerken.jpg',
      link: '/fiscale-dienstverlening',
      size: 'medium'
    },
    {
      icon: Users,
      badge: 'Personeelszaken',
      title: 'Salarisadministratie',
      shortTitle: 'SALARIS\nADMINISTRATIE',
      description: 'Complete loonverwerking voor jouw personeel. Wij verzorgen de aangifte loonheffing, jaaropgaven en loonstroken, pensioenadministratie en meer. Onze loonadministratie is zeer flexibel en precies in te richten zoals u dat wilt.',
      features: ['Loonverwerking', 'Pensioenadministratie', 'HR-advies', 'Arbeidscontracten en overeenkomsten'],
      image: '/riekhoff-gesprek-senior.jpg',
      link: '/salarisadministratie',
      size: 'medium'
    },
    {
      icon: Target,
      badge: 'Maatwerk',
      title: 'Advies op maat',
      shortTitle: 'ADVIES\nOP MAAT',
      description: 'Elk bedrijf is uniek en kent zijn eigen processen en werkwijzen. Wij kijken graag naar jouw specifieke situatie en bieden op maat gemaakte oplossingen.',
      features: ['Vrijblijvende kennismaking', 'Persoonlijke analyse', 'Maatwerkpakket voor dienstverlening die bij ú past', 'Transparante tarieven en vaste prijsafspraken'],
      image: '/kantoor_open_1.jpg',
      link: '/advies-op-maat',
      size: 'medium'
    },
  ];

  return (
    <section className="relative w-full bg-gray-50 py-12 lg:py-24 overflow-hidden">
      {/* Subtle Yellow Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-yellow/8 via-transparent to-accent-yellow/8" />
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-accent-yellow/12 blur-3xl" />
      
      <div className="max-w-[1440px] mx-auto px-5 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="mb-8 lg:mb-16">
          <div className="bg-accent-yellow/10 px-4 py-2 rounded-lg mb-4 inline-block">
            <span className="text-xs font-semibold text-accent-yellow uppercase tracking-wider">
              Onze Diensten
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-dark mb-4">
            Volledig pakket voor <span className="text-accent-yellow">MKB ondernemers</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl">
            Bij Riekhoff bieden we een volledig pakket aan diensten op het gebied van accountancy, administratie en fiscaliteit.
          </p>
        </div>

        {/* Mobile Layout - Single Column */}
        <div className="block lg:hidden space-y-6 mb-8">
          {diensten.map((dienst, index) => (
            <DienstCard 
              key={index}
              dienst={dienst} 
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              touchedIndex={touchedIndex}
              setTouchedIndex={setTouchedIndex}
            />
          ))}
        </div>

        {/* Desktop Layout - Asymmetric Grid */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 mb-12">
          
          {/* Row 1 - 2 Cards (7/5 split) */}
          <div className="lg:col-span-7">
            <DienstCard 
              dienst={diensten[0]} 
              index={0}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              touchedIndex={touchedIndex}
              setTouchedIndex={setTouchedIndex}
            />
          </div>
          <div className="lg:col-span-5">
            <DienstCard 
              dienst={diensten[1]} 
              index={1}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              touchedIndex={touchedIndex}
              setTouchedIndex={setTouchedIndex}
            />
          </div>

          {/* Row 2 - 2 Cards (5/7 split - reversed) */}
          <div className="lg:col-span-5">
            <DienstCard 
              dienst={diensten[2]} 
              index={2}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              touchedIndex={touchedIndex}
              setTouchedIndex={setTouchedIndex}
            />
          </div>
          <div className="lg:col-span-7">
            <DienstCard 
              dienst={diensten[3]} 
              index={3}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              touchedIndex={touchedIndex}
              setTouchedIndex={setTouchedIndex}
            />
          </div>

          {/* Row 3 - 2 Cards (6/6 split) */}
          <div className="lg:col-span-6">
            <DienstCard 
              dienst={diensten[4]} 
              index={4}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              touchedIndex={touchedIndex}
              setTouchedIndex={setTouchedIndex}
            />
          </div>
          <div className="lg:col-span-6">
            <DienstCard 
              dienst={diensten[5]} 
              index={5}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              touchedIndex={touchedIndex}
              setTouchedIndex={setTouchedIndex}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

// Individual Dienst Card Component
interface DienstCardProps {
  dienst: any;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  touchedIndex: number | null;
  setTouchedIndex: (index: number | null) => void;
}

const DienstCard: React.FC<DienstCardProps> = ({ 
  dienst, 
  index, 
  hoveredIndex, 
  setHoveredIndex,
  touchedIndex,
  setTouchedIndex
}) => {
  const isHovered = hoveredIndex === index;
  const isTouched = touchedIndex === index;
  const isActive = isHovered || isTouched;

  const Icon = dienst.icon;

  const handleTouch = (e: React.TouchEvent) => {
    e.preventDefault();
    setTouchedIndex(isTouched ? null : index);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      if (!isTouched) {
        e.preventDefault();
        setTouchedIndex(index);
      }
    }
  };

  return (
    <a 
      href={dienst.link}
      className="relative block overflow-hidden rounded-2xl group cursor-pointer h-[500px] lg:h-[550px] border-2 border-gray-100 hover:border-accent-yellow transition-all duration-500"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onTouchStart={handleTouch}
      onClick={handleClick}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={dienst.image}
          alt={dienst.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Gradient Overlay - Always dark at bottom for readability */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(0deg, rgba(15, 15, 15, 0.95) 0%, rgba(15, 15, 15, 0.3) 70%)'
        }}
      />

      {/* Icon - Top Left */}
      <div className={`absolute top-6 left-6 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
        isActive ? 'bg-accent-yellow scale-110' : 'bg-white/10 backdrop-blur-sm'
      }`}>
        <Icon className={`w-7 h-7 transition-colors duration-500 ${
          isActive ? 'text-dark' : 'text-accent-yellow'
        }`} />
      </div>

      {/* Arrow Icon - Top Right - ONLY VISIBLE ON HOVER */}
      <div className={`absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center bg-accent-yellow transition-all duration-500 ${
        isActive ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'
      }`}>
        <ArrowRight className="w-5 h-5 text-dark" />
      </div>

      {/* Content - ALWAYS VISIBLE */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 lg:p-8">
        
        {/* Badge */}
        <div className={`inline-block self-start px-3 py-1 rounded-lg mb-3 text-xs font-semibold uppercase tracking-wider transition-all duration-500 ${
          isActive ? 'bg-accent-yellow text-dark' : 'bg-white/10 backdrop-blur-sm text-accent-yellow'
        }`}>
          {dienst.badge}
        </div>

        {/* Title */}
        <h3 className="text-white font-bold text-2xl leading-tight whitespace-pre-line mb-4">
          {dienst.shortTitle}
        </h3>

        {/* Description - ALWAYS VISIBLE */}
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
          {dienst.description}
        </p>

        {/* Features List - ALWAYS VISIBLE */}
        <ul className="space-y-2 mb-4">
          {dienst.features.map((feature: string, idx: number) => (
            <li 
              key={idx}
              className="flex items-center gap-2 text-sm"
            >
              <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-accent-yellow" />
              <span className="text-gray-200">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Text - ALWAYS VISIBLE */}
        <div className="flex items-center gap-2 text-accent-yellow font-bold text-sm uppercase tracking-wider">
          Meer informatie
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>

      </div>
    </a>
  );
};

export default DienstenGrid;