import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Facebook,
  Linkedin,
  Instagram,
  Award,
  Shield,
  Star,
  ChevronRight
} from 'lucide-react';

const RiekhoffFooter = () => {
  const currentYear = new Date().getFullYear();

  const diensten = [
    { label: 'Accountancy', href: '/accountancy' },
    { label: 'Fiscale dienstverlening', href: '/fiscale-dienstverlening' },
    { label: 'Financiële dienstverlening', href: '/financiele-dienstverlening' },
    { label: 'Salarisadministratie', href: '/salarisadministratie' },
    { label: 'Startersbegeleiding', href: '/startersbegeleiding' },
    { label: 'Advies op maat', href: '/advies-op-maat' }
  ];

  const quickLinks = [
    { label: 'Over ons', href: '/over-ons' },
    { label: 'Het team', href: '/over-ons#team' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
    { label: 'Werken bij', href: '/werken-bij' },
    { label: 'Privacy', href: '/privacy' }
  ];

  return (
    <footer className="bg-dark text-white">
      {/* CTA Section */}
      <section className="bg-dark-secondary border-b border-white/10">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-accent-yellow/20 via-accent-yellow/10 to-accent-yellow/20 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-yellow/10 to-transparent" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent-yellow/20 rounded-full blur-3xl" />
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                    Klaar om uw administratie te optimaliseren?
                  </h2>
                  <p className="text-gray-300">
                    Neem contact op voor een vrijblijvend gesprek in Oldenzaal
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/contact"
                    className="px-8 py-4 bg-accent-yellow text-dark rounded-lg font-semibold hover:bg-yellow-400 transition-all inline-flex items-center justify-center gap-2"
                  >
                    Start vandaag
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="tel:+31541200007"
                    className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Bel direct
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Column 1 - Company Info */}
              <div className="lg:col-span-1">
                <img
                  src="https://primary.jwwb.nl/public/g/i/p/temp-pocitqvymvpxdtkzrqla/20g4jj/image-16.png?enable-io=true&width=161"
                  alt="Riekhoff Accountants"
                  className="h-8 w-auto mb-6 brightness-0 invert"
                />
                <p className="text-gray-400 text-sm mb-6">
                  Modern accountantskantoor in Oldenzaal voor MKB-ondernemers in heel Twente. 
                  Persoonlijke aandacht, professioneel advies.
                </p>
                {/* Certificeringen */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-accent-yellow">
                    <Shield className="w-5 h-5" />
                    <span className="text-xs">NBA</span>
                  </div>
                  <div className="flex items-center gap-2 text-accent-yellow">
                    <Award className="w-5 h-5" />
                    <span className="text-xs">RB</span>
                  </div>
                  <div className="flex items-center gap-2 text-accent-yellow">
                    <Star className="w-5 h-5" />
                    <span className="text-xs">4.8★</span>
                  </div>
                </div>
              </div>

              {/* Column 2 - Diensten */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6">Diensten</h3>
                <ul className="space-y-3">
                  {diensten.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-accent-yellow transition-colors text-sm inline-flex items-center gap-1 group"
                      >
                        <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3 - Quick Links */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6">Snel naar</h3>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-accent-yellow transition-colors text-sm inline-flex items-center gap-1 group"
                      >
                        <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4 - Contact */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
                <div className="space-y-4">
                  <a 
                    href="https://maps.google.com/?q=Bentheimergraven+11+7577+DA+Oldenzaal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-gray-400 hover:text-accent-yellow transition-colors group"
                  >
                    <MapPin className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-white group-hover:text-accent-yellow transition-colors">Bezoekadres</p>
                      <p>Bentheimergraven 11</p>
                      <p>7577 DA Oldenzaal</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+31541200007"
                    className="flex items-center gap-3 text-gray-400 hover:text-accent-yellow transition-colors"
                  >
                    <Phone className="w-5 h-5 text-accent-yellow flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-medium text-white">Telefoon</p>
                      <p>0541 200 007</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:info@riekhoff.nl"
                    className="flex items-center gap-3 text-gray-400 hover:text-accent-yellow transition-colors"
                  >
                    <Mail className="w-5 h-5 text-accent-yellow flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-medium text-white">E-mail</p>
                      <p>info@riekhoff.nl</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 text-gray-400">
                    <Clock className="w-5 h-5 text-accent-yellow flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-medium text-white">Openingstijden</p>
                      <p>Ma-Vr: 08:30 - 17:30</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <a
                    href="https://facebook.com"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent-yellow hover:text-dark transition-all"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent-yellow hover:text-dark transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent-yellow hover:text-dark transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-gray-400 text-sm">
                  Werkgebied: Oldenzaal, Losser, Denekamp, Enschede, Hengelo, Almelo en heel Twente
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <section className="bg-dark-secondary border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} Riekhoff Accountants & Adviseurs. Alle rechten voorbehouden.
            </p>
            <div className="flex items-center gap-6">
              <a href="/privacy" className="hover:text-accent-yellow transition-colors">
                Privacy
              </a>
              <a href="/voorwaarden" className="hover:text-accent-yellow transition-colors">
                Voorwaarden
              </a>
              <a href="/cookies" className="hover:text-accent-yellow transition-colors">
                Cookies
              </a>
              <a href="/sitemap" className="hover:text-accent-yellow transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default RiekhoffFooter;