import { Link } from 'react-router-dom';
import {
    Home, Search, Building2, Landmark, Store, TrendingUp, BarChart, HeartHandshake, CheckCircle, Phone
} from 'lucide-react';

const services = [
    { icon: Home, title: 'Immobilien Verkauf', desc: 'Professionelle Vermarktung Ihrer Immobilie mit über 200 Portalen und persönlicher Betreuung.' },
    { icon: Search, title: 'Immobilien Kauf & -suche', desc: 'Wir suchen für Sie die passende Immobilie nach Ihren Wünschen und Budget.' },
    { icon: Building2, title: 'Mietobjekte', desc: 'Vermietung von Wohnungen und Häusern inklusive Mietersuche und Bonitätsprüfung.' },
    { icon: Landmark, title: 'Grundstücke', desc: 'Kauf und Verkauf von Baugrundstücken in der Region Hessen.' },
    { icon: Store, title: 'Gewerbeobjekte', desc: 'Vermittlung von Gewerbeflächen und Geschäftsräumen.' },
    { icon: TrendingUp, title: 'Kapitalanlagen', desc: 'Mehrfamilienhäuser und Zinshäuser als sichere Kapitalanlage.' },
    { icon: BarChart, title: 'Marktwertüberprüfung', desc: 'Realistische Bewertung Ihrer Immobilie durch erfahrene Fachleute.' },
    { icon: HeartHandshake, title: 'After Sales Services', desc: 'Persönliche Nachbetreuung nach dem Kauf / Verkauf oder der Vermietung.' },
];

const steps = [
    'Bestandsaufnahme und Ist-Zustand des Objektes',
    'Marktwertüberprüfung (ggf. amtliches Verkehrswertgutachten)',
    'Hilfe beim Erwerb des Energieausweises gem. ENEV 2014',
    'Fehlende Unterlagen besorgen bei Bauamt, Grundbuch- oder Katasteramt',
    'Erstellung eines maßgeschneiderten Vermarktungskonzeptes',
    'Erstellung von hochwertigen Verkaufs-Exposés',
    'Crossover-Werbung in Zeitungen, im Internet, am Objekt, durch Flyer',
    'Eintragen in über 200 Immobilienportale und Werbepartnernetzwerke',
    'Weitergabe an vorgemerkte Interessenten aus unserem „Kunden-GESUCHE"-Netzwerk',
    'Vorbereitung und Durchführung von Besichtigungen',
    'Stetige Berichterstattung über Vermittlungs-Aktivitäten',
    'Bonitätsprüfung und Prüfung von Finanzierungsbestätigungen',
    'Kaufvertragsentwurf und -beratung',
    'Betreuung beider Kaufvertragsparteien beim Notar-Termin',
    'Objektübergabe und After Sales Services',
];

export default function Leistungen() {
    return (
        <div className="pt-20">
            {/* Header */}
            <section className="bg-primary-900 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gold-400 text-sm font-semibold uppercase tracking-wider mb-3">Was wir für Sie tun</p>
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Leistungsübersicht</h1>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">
                        Profitieren Sie von unserem langjährigen Leistungs-Angebot – von der ersten Kontaktaufnahme bis weit darüber hinaus.
                    </p>
                </div>
            </section>

            {/* Services grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Unsere Leistungsbereiche</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {services.map(({ icon: Icon, title, desc }) => (
                            <div
                                key={title}
                                className="group p-5 bg-slate-50 border border-slate-100 rounded-2xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center mb-3 group-hover:bg-gold-500/20 transition-colors">
                                    <Icon size={18} className="text-gold-600" />
                                </div>
                                <h3 className="font-bold text-slate-900 text-sm mb-1">{title}</h3>
                                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Full service steps */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Unser vollständiger Service</h2>
                        <p className="text-slate-500">Von der ersten Kontaktaufnahme bis zum Abschluss und darüber hinaus.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {steps.map((step, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                <div className="w-6 h-6 rounded-full bg-gold-gradient flex items-center justify-center shrink-0 mt-0.5">
                                    <CheckCircle size={12} className="text-slate-900" />
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* After Sales highlight */}
            <section className="py-12 bg-white border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="p-8 bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl text-center">
                        <HeartHandshake size={32} className="text-gold-400 mx-auto mb-4" />
                        <h3 className="text-white font-bold text-xl mb-2">Nachbetreuung (After Sales Services)</h3>
                        <p className="text-slate-400 leading-relaxed max-w-xl mx-auto">
                            Aus unserer langjährigen Erfahrung wissen wir, dass viele Fragen gerade nach dem Notar-Termin entstehen. Deshalb stehen wir Ihnen auch nach dem Kauf/Verkauf persönlich mit Rat und Tat zur Verfügung.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-14 bg-primary-900 text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-white mb-3">Interesse an unseren Leistungen?</h2>
                    <p className="text-slate-400 mb-6">Sprechen Sie uns an – wir beraten Sie kostenlos und unverbindlich.</p>
                    <Link to="/kontakt" className="inline-flex items-center gap-2 px-8 py-3 bg-gold-gradient text-slate-900 font-bold rounded-xl shadow-lg hover:scale-105 transition-all duration-200">
                        <Phone size={16} />
                        Kostenlose Beratung anfragen
                    </Link>
                </div>
            </section>
        </div>
    );
}
