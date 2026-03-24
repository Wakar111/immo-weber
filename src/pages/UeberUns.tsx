import { Link } from 'react-router-dom';
import { Calendar, CheckCircle, Users, Award, Phone } from 'lucide-react';

const milestones = [
    { year: '1982', text: 'Gründung des Unternehmens – Start als persönlicher Immobilienvermittler in Rödermark.' },
    { year: '1990er', text: 'Spezialisierung auf Wohnimmobilien für private Anbieter und Erwerber in Hessen.' },
    { year: '2000er', text: 'Aufbau eines starken Netzwerks mit IVD-Mitgliedschaft und Kooperationspartnern.' },
    { year: '2008', text: 'IVD Qualitäts-Zertifikat erhalten – Bestätigung unserer hohen Beratungsstandards.' },
    { year: '2013–2015', text: 'ImmoScout24 Award & FOCUS Top 1000 Immobilienmakler – bundesweite Anerkennung.' },
    { year: 'Heute', text: 'Über 1.000 verkaufte Objekte. Persönlich, kompetent, ständig erreichbar.' },
];

export default function UeberUns() {
    return (
        <div className="pt-20">
            {/* Header */}
            <section className="bg-primary-900 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gold-400 text-sm font-semibold uppercase tracking-wider mb-3">Manuela Weber Immobilien</p>
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Über uns</h1>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        Mit über 30 Jahren Erfahrung sind wir auf dem hessischen Immobilienmarkt zu Hause.
                    </p>
                </div>
            </section>

            {/* Main content */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Persönlich. Kompetent. Engagiert.</h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    Unser Gründungsjahr war 1982. Das Angebot, besonders für private Anbieter und Erwerber tätig zu sein,
                                    entwickelte sich durch den steigenden Bedarf an professioneller Beratung bei der Vermarktung von
                                    Wohn- und Anlage-Immobilien.
                                </p>
                                <p>
                                    Wir führen <strong className="text-slate-800">keine Massenbesichtigungen</strong> durch, sondern
                                    präsentieren Ihr Objekt persönlich vor Ort. Denn jeder einzelne Kunde ist uns wichtig.
                                </p>
                                <p>
                                    Nach mittlerweile über 34 Jahren Immobilienberatung haben wir heute den guten Ruf, auch in schwierigen
                                    Situationen ein seriöser und zuverlässiger Partner zu sein. Wir verzichten auf Fachbegriffe und gehen
                                    sensibel auf Ihre Wünsche ein.
                                </p>
                                <p>
                                    Mit unserer engagierten, persönlichen und kompetenten Art, unserer ständigen Erreichbarkeit und der
                                    Erfahrung von mehr als <strong className="text-slate-800">1.000 verkauften Immobilien</strong>, werden
                                    wir Ihnen auch in Zukunft als adäquater Partner tatkräftig zur Seite stehen.
                                </p>
                            </div>

                            {/* Garantie */}
                            <div className="mt-8 p-6 bg-gradient-to-br from-gold-500/10 to-gold-500/5 border border-gold-500/20 rounded-2xl">
                                <div className="flex items-center gap-2 mb-2">
                                    <Award size={18} className="text-gold-600" />
                                    <span className="text-gold-700 font-bold text-sm uppercase tracking-wider">Unsere Garantie</span>
                                </div>
                                <p className="text-slate-800 font-semibold text-lg">
                                    Wir finden auch für SIE die bestmögliche Lösung.
                                </p>
                            </div>
                        </div>

                        {/* Key facts */}
                        <div className="space-y-4">
                            {[
                                { icon: Calendar, value: 'Seit 1982', label: 'Gründungsjahr – über 40 Jahre Marktpräsenz' },
                                { icon: CheckCircle, value: '1.000+', label: 'verkaufte Immobilien in Hessen' },
                                { icon: Users, value: 'Persönlich', label: 'Keine Massenbesichtigungen – jeder Kunde zählt' },
                                { icon: Award, value: 'IVD-Mitglied', label: 'Zertifiziertes Mitglied des Immobilienverbands' },
                                { icon: Phone, value: '10–22 Uhr', label: 'Täglich erreichbar, auch an Feiertagen' },
                            ].map(({ icon: Icon, value, label }) => (
                                <div key={value} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0">
                                        <Icon size={18} className="text-gold-600" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">{value}</p>
                                        <p className="text-sm text-slate-500">{label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">Unsere Geschichte</h2>
                    <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gold-500/20" />
                        <div className="space-y-8">
                            {milestones.map(({ year, text }) => (
                                <div key={year} className="relative pl-12">
                                    <div className="absolute left-0 w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center shadow-md">
                                        <div className="w-2 h-2 rounded-full bg-slate-900" />
                                    </div>
                                    <p className="text-gold-600 font-bold text-sm mb-1">{year}</p>
                                    <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-14 bg-primary-900 text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-white mb-3">Lernen Sie uns kennen</h2>
                    <p className="text-slate-400 mb-6">Wir freuen uns auf Ihren Anruf oder Ihre Nachricht.</p>
                    <Link
                        to="/kontakt"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-gold-gradient text-slate-900 font-bold rounded-xl shadow-lg hover:scale-105 transition-all duration-200"
                    >
                        <Phone size={16} />
                        Jetzt Kontakt aufnehmen
                    </Link>
                </div>
            </section>
        </div>
    );
}
