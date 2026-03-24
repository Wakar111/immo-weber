import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';

const regions = [
    { name: 'Rödermark · Rodgau · Dietzenbach', highlight: true },
    { name: 'Heusenstamm · Dreieich · Gravenbruch', highlight: false },
    { name: 'Neu-Isenburg · Langen', highlight: false },
    { name: 'Frankfurt – City, Sachsenhausen & Umland', highlight: true },
    { name: 'Darmstadt & Dieburg', highlight: false },
    { name: 'Region Odenwald', highlight: false },
    { name: 'Seligenstadt · Hanau · Aschaffenburg (Bayern)', highlight: false },
];

export default function Arbeitsgebiet() {
    return (
        <div className="pt-20">
            {/* Header */}
            <section className="bg-primary-900 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gold-400 text-sm font-semibold uppercase tracking-wider mb-3">Wo wir tätig sind</p>
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Arbeits- und Tätigkeitsgebiet</h1>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">
                        Von Rödermark bis Frankfurt – wir kennen den hessischen Immobilienmarkt wie unsere Westentasche.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Ihre Wunschimmobilie finden</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Eine Immobilie, die Ihren persönlichen Vorstellungen entspricht und in Ihr finanzielles Budget passt. Mit dem Erwerb einer Immobilie verbinden Sie lang Ersehntes und schauen gleichzeitig, vielleicht für Jahrzehnte, in die Zukunft. Gerne helfen wir Ihnen dabei.
                            </p>
                            <div className="p-5 bg-gold-500/10 border border-gold-500/20 rounded-xl">
                                <p className="text-gold-700 font-bold text-lg italic">
                                    „Sie relaxen – während wir Ihre Immobilie verkaufen!"
                                </p>
                                <p className="text-slate-600 text-sm mt-1">Unser Versprechen an Sie als Verkäufer.</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Unsere Regionen</h2>
                            <div className="space-y-3">
                                {regions.map(({ name, highlight }) => (
                                    <div
                                        key={name}
                                        className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${highlight
                                                ? 'bg-gold-500/10 border-gold-500/30'
                                                : 'bg-slate-50 border-slate-100'
                                            }`}
                                    >
                                        <MapPin
                                            size={16}
                                            className={highlight ? 'text-gold-600 shrink-0' : 'text-slate-400 shrink-0'}
                                        />
                                        <span className={`font-medium text-sm ${highlight ? 'text-slate-900' : 'text-slate-600'}`}>
                                            {name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Promise banner */}
            <section className="py-12 bg-primary-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-white mb-3">
                        Durch Engagement, Persönlichkeit und Kompetenz unterstützen wir Sie in allen Belangen.
                    </h2>
                    <p className="text-slate-400 mb-6">Beim Immobilienerwerb oder beim Immobilienverkauf – wir sind an Ihrer Seite.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="tel:+496074922615"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gold-gradient text-slate-900 font-bold rounded-xl shadow-lg hover:scale-105 transition-all duration-200"
                        >
                            <Phone size={16} />
                            06074 – 922 615
                        </a>
                        <Link
                            to="/kontakt"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-white/20 text-white font-medium rounded-xl hover:border-gold-400/50 hover:text-gold-400 transition-all duration-200"
                        >
                            Schreiben Sie uns →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
