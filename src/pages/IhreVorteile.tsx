import { Link } from 'react-router-dom';
import {
    Clock, Star, Heart, Home, TrendingUp, Award, Wrench, Shield, Package, Zap, BarChart, Phone
} from 'lucide-react';

const advantages = [
    { icon: Clock, title: 'Ständige Erreichbarkeit', desc: 'Auch am Wochenende, an Sonn- und Feiertagen – täglich 10–22 Uhr.' },
    { icon: Heart, title: 'Engagiert! Persönlich! Kompetent!', desc: 'Wir nehmen uns viel Zeit für Sie und gehen auf Ihre Wünsche ein.' },
    { icon: Star, title: 'Viel Zeit für Sie', desc: 'Kein Massengeschäft – jeder Kunde bekommt unsere volle Aufmerksamkeit.' },
    { icon: Home, title: 'Spezialisiert auf Wohnimmobilien', desc: 'Unser Fokus liegt ausschließlich auf Wohn- und Anlage-Immobilien.' },
    { icon: TrendingUp, title: 'Über 30 Jahre Erfahrung', desc: 'Seit 1982 auf dem hessischen Immobilienmarkt. Mit über 1.000 verkauften Objekten.' },
    { icon: Award, title: 'Hohe Reputation', desc: 'IVD-Mitglied, ImmoScout24-Auszeichnung, FOCUS Top 1000 Makler 2013.' },
    { icon: Wrench, title: 'Hilfe bei Behörden & Umbau', desc: 'Unterstützung bei Bauamt, Grundbuch, Innendesign und Umbaumaßnahmen.' },
    { icon: Shield, title: 'DG-Isolierung nach ENEV 2014', desc: 'Beratung und Hilfe bei Dachisolierungen und Energieeffizienz-Maßnahmen.' },
    { icon: Package, title: 'Max. 10 Objekte gleichzeitig', desc: 'Limitiertes Portfolio für maximale Qualität und persönliche Betreuung.' },
    { icon: Zap, title: 'Vermarktung unter 3 Monaten', desc: 'Unsere durchschnittliche Vermarktungsdauer liegt bei unter 3 Monaten.' },
    { icon: BarChart, title: 'Über 1.000 verkaufte Objekte', desc: 'Jahrzehntelange Erfolgsgeschichte mit zufriedenen Käufern und Verkäufern.' },
];

export default function IhreVorteile() {
    return (
        <div className="pt-20">
            {/* Header */}
            <section className="bg-primary-900 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gold-400 text-sm font-semibold uppercase tracking-wider mb-3">Warum Weber Immobilien?</p>
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Unsere Vorteile = Ihre Vorteile</h1>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">
                        11 Gründe, warum unsere Kunden uns immer wieder vertrauen und weiterempfehlen.
                    </p>
                </div>
            </section>

            {/* Advantages Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {advantages.map(({ icon: Icon, title, desc }, i) => (
                            <div
                                key={title}
                                className="group relative bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="absolute top-4 right-4 text-4xl font-black text-slate-100 group-hover:text-gold-100 transition-colors select-none">
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                                <div className="w-11 h-11 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                                    <Icon size={20} className="text-gold-600" />
                                </div>
                                <h3 className="text-slate-900 font-bold text-base mb-2">{title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact highlight */}
            <section className="py-16 bg-primary-900">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-white mb-2">Kontaktieren Sie uns</h2>
                    <a href="tel:+496074922615" className="block text-4xl font-black text-gradient-gold my-4 hover:opacity-80 transition-opacity">
                        Tel. 06074 / 922 615
                    </a>
                    <p className="text-slate-400 mb-8">auch am Wochenende! Täglich 10:00–22:00 Uhr</p>
                    <Link to="/kontakt" className="inline-flex items-center gap-2 px-8 py-3 bg-gold-gradient text-slate-900 font-bold rounded-xl shadow-lg hover:scale-105 transition-all duration-200">
                        <Phone size={16} />
                        Jetzt Kontakt aufnehmen
                    </Link>
                </div>
            </section>
        </div>
    );
}
