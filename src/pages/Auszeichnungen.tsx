import { Link } from 'react-router-dom';
import { Award, Phone, Star, Building2, CheckCircle } from 'lucide-react';

const awards = [
    {
        icon: CheckCircle,
        year: '2008',
        title: 'Qualitäts-Zertifikat IVD',
        desc: 'Verliehen vom Immobilienverband Deutschland (IVD) für nachgewiesene Qualitätsstandards in Beratung und Vermittlung.',
        badge: 'IVD',
    },
    {
        icon: Award,
        year: 'laufend',
        title: 'Mitglieds-Urkunde IVD Bundesverband',
        desc: 'Aktives Vollmitglied des IVD Bundesverbands Deutschland – dem führenden Verband der Immobilienwirtschaft.',
        badge: 'IVD',
    },
    {
        icon: Building2,
        year: 'laufend',
        title: 'Handwerksrolle Frankfurt',
        desc: 'Eingetragen in die Handwerksrolle der Handwerkskammer Frankfurt am Main.',
        badge: 'HWK',
    },
    {
        icon: Star,
        year: '2010',
        title: 'IHK Ehrenurkunde',
        desc: 'IHK Ehrenurkunde für herausragendes Engagement in der Berufsausbildung – als anerkannter IHK-Ausbildungsbetrieb.',
        badge: 'IHK',
    },
    {
        icon: Star,
        year: '2013',
        title: 'ImmoScout24 Auszeichnung 2013',
        desc: 'Auszeichnung für langjährige Erfahrung, besonderes Engagement und überdurchschnittliche Kundenbewertungen.',
        badge: 'IS24',
    },
    {
        icon: Star,
        year: '2014',
        title: 'ImmoScout24 Auszeichnung 2014',
        desc: 'Auszeichnung für langjährige Erfahrung, besonderes Engagement und überdurchschnittliche Kundenbewertungen.',
        badge: 'IS24',
    },
    {
        icon: Star,
        year: '2015',
        title: 'ImmoScout24 Auszeichnung 2015',
        desc: 'Auszeichnung für langjährige Erfahrung, besonderes Engagement und überdurchschnittliche Kundenbewertungen.',
        badge: 'IS24',
    },
    {
        icon: Award,
        year: '2013',
        title: 'FOCUS Top 1000 Immobilienmakler',
        desc: 'Wirtschaftsmagazin FOCUS: „Manuela Weber Rödermark zählt für die Redaktion von FOCUS zu Deutschlands besten Immobilien-Maklern."',
        badge: 'FOCUS',
    },
    {
        icon: Award,
        year: 'Jubiläum',
        title: 'IVD 20-jährige Mitgliedschaft',
        desc: '„IVD Vorstand ehrt Manuela Weber für 20-jährige Mitgliedschaft" – besondere Auszeichnung für langjährige Treue und Engagement.',
        badge: 'IVD',
    },
];

export default function Auszeichnungen() {
    return (
        <div className="pt-20">
            {/* Header */}
            <section className="bg-primary-900 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gold-400 text-sm font-semibold uppercase tracking-wider mb-3">Bestätigt & Ausgezeichnet</p>
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Auszeichnungen & Zertifikate</h1>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">
                        Externe Bestätigung unserer Kompetenz, Qualität und Zuverlässigkeit – durch renommierte Verbände und Medien.
                    </p>
                </div>
            </section>

            {/* Awards grid */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {awards.map(({ icon: Icon, year, title, desc, badge }) => (
                            <div
                                key={title}
                                className="group bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                        <Icon size={20} className="text-slate-900" />
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-xs font-bold text-gold-600 uppercase tracking-wider">{badge}</span>
                                        <span className="block text-xs text-slate-400 mt-0.5">{year}</span>
                                    </div>
                                </div>
                                <h3 className="font-bold text-slate-900 text-sm mb-2">{title}</h3>
                                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-14 bg-primary-900 text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-white mb-2">Vertrauen Sie Deutschlands Besten</h2>
                    <p className="text-slate-400 mb-6">Mehrfach ausgezeichnet – und trotzdem persönlich für Sie da.</p>
                    <Link to="/kontakt" className="inline-flex items-center gap-2 px-8 py-3 bg-gold-gradient text-slate-900 font-bold rounded-xl shadow-lg hover:scale-105 transition-all duration-200">
                        <Phone size={16} />
                        Beratung anfragen
                    </Link>
                </div>
            </section>
        </div>
    );
}
