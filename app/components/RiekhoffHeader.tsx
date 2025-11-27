'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown,
  Calculator,
  FileText,
  TrendingUp,
  Users,
  Rocket,
  Lightbulb,
  Phone,
  Mail,
  Star,
  HelpCircle
} from 'lucide-react';

interface DropdownLink {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  description?: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownLink[];
}

const RiekhoffHeader = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  const navItems: NavItem[] = [
    {
      label: 'Diensten',
      dropdown: [
        {
          label: 'Accountancy',
          href: '/accountancy',
          icon: Calculator,
          description: 'Jaarrekeningen en administratie voor MKB'
        },
        {
          label: 'Fiscale dienstverlening',
          href: '/fiscale-dienstverlening',
          icon: FileText,
          description: 'Belastingaangifte en fiscaal advies'
        },
        {
          label: 'Financiële administratie',
          href: '/financiele-administratie',
          icon: TrendingUp,
          description: 'Businessplannen en financiering'
        },
        {
          label: 'Salarisadministratie',
          href: '/salaris-administratie',
          icon: Users,
          description: 'Complete loonverwerking'
        },
        {
          label: 'Startersbegeleiding',
          href: '/starters-begeleiding',
          icon: Rocket,
          description: 'Begeleiding voor startende ondernemers'
        },
        {
          label: 'Advies op maat',
          href: '/advies-op-maat',
          icon: Lightbulb,
          description: 'Persoonlijk maatwerk advies'
        }
      ]
    },
    {
      label: 'Over Ons',
      href: '/over-ons'
    },
    {
      label: 'FAQ',
      href: '/faq'
    },
    {
      label: 'Contact',
      href: '/contact'
    }
  ];

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
        setActiveDropdown(null);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Top Bar */}
      <div className="relative bg-dark text-white border-b border-white/10 overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-yellow/15 to-transparent" />
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-accent-yellow/20 blur-2xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-between h-10 text-sm">
            {/* Left side */}
            <div className="flex items-center gap-6">
              <a 
                href="#certificering" 
                className="flex items-center gap-1.5 hover:text-accent-yellow transition-colors"
              >
                <Star className="w-4 h-4 fill-accent-yellow text-accent-yellow" />
                <span className="hidden sm:inline">NBA & RB Gecertificeerd</span>
                <span className="sm:hidden">Gecertificeerd</span>
              </a>
              <a 
                href="tel:+31541200007" 
                className="flex items-center gap-1.5 hover:text-accent-yellow transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>0541 200 007</span>
              </a>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-6">
              <a 
                href="/faq" 
                className="flex items-center gap-1.5 hover:text-accent-yellow transition-colors"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Veelgestelde vragen</span>
                <span className="sm:hidden">FAQ</span>
              </a>
              <a 
                href="mailto:info@riekhoff.nl" 
                className="flex items-center gap-1.5 hover:text-accent-yellow transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="hidden md:inline">info@riekhoff.nl</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Groter gemaakt */}
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img 
                src="https://primary.jwwb.nl/public/g/i/p/temp-pocitqvymvpxdtkzrqla/20g4jj/image-16.png?enable-io=true&width=161"
                alt="Riekhoff Accountants"
                className="h-10 sm:h-12 w-auto"
              />
            </a>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className={`flex items-center gap-1 px-5 py-2 text-sm font-medium transition-colors ${
                          activeDropdown === item.label
                            ? 'text-accent-yellow'
                            : 'text-dark hover:text-accent-yellow'
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {activeDropdown === item.label && (
                        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                          <div className="p-2">
                            {item.dropdown.map((link) => {
                              const Icon = link.icon;
                              return (
                                <a
                                  key={link.label}
                                  href={link.href}
                                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {Icon && (
                                    <div className="mt-0.5 w-10 h-10 rounded-lg bg-accent-yellow/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-yellow/20 transition-colors">
                                      <Icon className="w-5 h-5 text-accent-yellow" />
                                    </div>
                                  )}
                                  <div className="flex-1 min-w-0">
                                    <div className="font-semibold text-dark text-sm mb-0.5">
                                      {link.label}
                                    </div>
                                    {link.description && (
                                      <div className="text-xs text-gray-500">
                                        {link.description}
                                      </div>
                                    )}
                                  </div>
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="px-5 py-2 text-sm font-medium text-dark hover:text-accent-yellow transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons - Desktop only */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="/vacatures"
                className="px-6 py-3 border-2 border-accent-yellow text-dark rounded-lg text-sm font-semibold hover:bg-accent-yellow/10 transition-colors"
              >
                Werken Bij
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border-2 border-accent-yellow bg-accent-yellow text-dark rounded-lg text-sm font-semibold hover:bg-yellow-400 hover:border-yellow-400 transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10"
              onClick={() => setActiveDropdown(activeDropdown ? null : 'mobile')}
            >
              <span className="block w-6 h-0.5 bg-dark transition-all" />
              <span className="block w-6 h-0.5 bg-dark transition-all" />
              <span className="block w-6 h-0.5 bg-dark transition-all" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {activeDropdown === 'mobile' && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="container mx-auto px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <>
                    <div className="font-semibold text-dark text-sm mb-2">{item.label}</div>
                    <div className="space-y-1 mb-4">
                      {item.dropdown.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-accent-yellow hover:bg-gray-50 rounded-lg transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-sm font-semibold text-dark hover:text-accent-yellow hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            
            {/* Werken Bij button alleen in mobile menu */}
            <a
              href="/vacatures"
              className="block w-full mt-4 px-6 py-3 border-2 border-accent-yellow text-dark rounded-lg text-sm font-semibold hover:bg-accent-yellow/10 transition-colors text-center"
              onClick={() => setActiveDropdown(null)}
            >
              Werken Bij
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default RiekhoffHeader;