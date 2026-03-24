import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, ChevronDown } from 'lucide-react';

const navLinks = [
    { to: '/ueber-uns', label: 'Über uns' },
    { to: '/ihre-vorteile', label: 'Ihre Vorteile' },
    { to: '/leistungen', label: 'Leistungen' },
    { to: '/arbeitsgebiet', label: 'Arbeitsgebiet' },
    { to: '/angebote', label: 'Aktuelle Angebote' },
    { to: '/immobilien-suche', label: 'Immobilien SUCHE' },
];

const referenzLinks = [
    { to: '/referenzen', label: 'Unsere Referenzen' },
    { to: '/auszeichnungen', label: 'Auszeichnungen' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [referenzOpen, setReferenzOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setReferenzOpen(false);
    }, [location]);

    const isActive = (path: string) => location.pathname === path;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass ${scrolled ? 'shadow-2xl shadow-black/40' : 'shadow-sm shadow-black/20'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-gold-gradient rounded-md flex items-center justify-center shadow-lg">
                            <Home size={16} className="text-slate-900" />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="text-white font-bold text-sm leading-tight">Manuela Weber</span>
                            <span className="text-gold-400 text-xs font-medium leading-tight">Immobilien · IVD</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map(link => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive(link.to)
                                    ? 'bg-gold-500/20 text-gold-400'
                                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Referenzen Dropdown */}
                        <div className="relative" onMouseLeave={() => setReferenzOpen(false)}>
                            <button
                                onMouseEnter={() => setReferenzOpen(true)}
                                onClick={() => setReferenzOpen(v => !v)}
                                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                            >
                                Referenzen
                                <ChevronDown
                                    size={14}
                                    className={`transition-transform duration-200 ${referenzOpen ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {referenzOpen && (
                                <div className="absolute top-full right-0 mt-1 w-52 glass border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                                    {referenzLinks.map(link => (
                                        <Link
                                            key={link.to}
                                            to={link.to}
                                            className={`block px-4 py-3 text-sm transition-all duration-150 ${isActive(link.to)
                                                ? 'bg-gold-500/20 text-gold-400'
                                                : 'text-slate-300 hover:bg-white/10 hover:text-white'
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            to="/kontakt"
                            className="ml-2 px-4 py-2 bg-gold-gradient text-slate-900 rounded-lg text-sm font-bold shadow-lg hover:shadow-gold-500/30 transition-all duration-200 hover:scale-105"
                        >
                            Kontakt
                        </Link>
                    </nav>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setIsOpen(v => !v)}
                        className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden glass border-t border-white/10">
                    <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
                        {navLinks.map(link => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-150 ${isActive(link.to)
                                    ? 'bg-gold-500/20 text-gold-400'
                                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="border-t border-white/10 mt-1 pt-1">
                            {referenzLinks.map(link => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="block px-4 py-3 rounded-lg text-sm text-slate-400 hover:bg-white/10 hover:text-white transition-all duration-150"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        <Link
                            to="/kontakt"
                            className="mt-2 px-4 py-3 bg-gold-gradient text-slate-900 rounded-lg text-sm font-bold text-center shadow-lg"
                        >
                            Kontakt aufnehmen
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
