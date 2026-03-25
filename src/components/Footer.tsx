import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Home } from 'lucide-react';

const legalLinks = [
    { to: '/impressum', label: 'Impressum' },
    { to: '/datenschutz', label: 'Datenschutz' },
    { to: '/agb', label: 'AGB' },
    { to: '/nutzungsbedingungen', label: 'Nutzungsbedingungen' },
];

export default function Footer() {
    return (
        <footer className="bg-primary-950 text-slate-400 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-gold-gradient rounded-md flex items-center justify-center">
                                <Home size={16} className="text-slate-900" />
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm leading-tight">Manuela Weber</p>
                                <p className="text-gold-400 text-xs">Immobilien · IVD · Rödermark</p>
                            </div>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Ihr persönlicher Immobilien-Partner in Hessen – seit 1982. Engagiert, kompetent und immer erreichbar.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Kontakt</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <Phone size={14} className="text-gold-400 shrink-0" />
                                <a href="tel:+496074922615" className="hover:text-gold-400 transition-colors">
                                    06074 – 922 615
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin size={14} className="text-gold-400 shrink-0 mt-0.5" />
                                <span>Robert-Bloch-Str. 21<br />63322 Rödermark</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Clock size={14} className="text-gold-400 shrink-0 mt-0.5" />
                                <span>Täglich 10:00–22:00 Uhr<br />auch an Sonn- und Feiertagen</span>
                            </li>
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h3>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                            <li><Link to="/ueber-uns" className="hover:text-gold-400 transition-colors">Über uns</Link></li>
                            <li><Link to="/ihre-vorteile" className="hover:text-gold-400 transition-colors">Ihre Vorteile</Link></li>
                            <li><Link to="/leistungen" className="hover:text-gold-400 transition-colors">Leistungen</Link></li>
                            <li><Link to="/arbeitsgebiet" className="hover:text-gold-400 transition-colors">Arbeitsgebiet</Link></li>
                            <li><Link to="/angebote" className="hover:text-gold-400 transition-colors">Angebote</Link></li>
                            <li><Link to="/immobilien-suche" className="hover:text-gold-400 transition-colors">Immo SUCHE</Link></li>
                            <li><Link to="/referenzen" className="hover:text-gold-400 transition-colors">Referenzen</Link></li>
                            <li><Link to="/auszeichnungen" className="hover:text-gold-400 transition-colors">Auszeichnungen</Link></li>
                            <li><Link to="/kontakt" className="hover:text-gold-400 transition-colors">Kontakt</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
                    <p>© 2024 Manuela Weber Immobilien – Vermögensanlagen Rödermark. Alle Rechte vorbehalten.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {legalLinks.map(l => (
                            <Link key={l.to} to={l.to} className="hover:text-slate-400 transition-colors">
                                {l.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
