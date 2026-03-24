import { Link } from 'react-router-dom';
import { Phone, Info, Package, CheckCircle } from 'lucide-react';

export default function Angebote() {
    return (
        <div className="pt-20">
            {/* Header */}
            <section className="bg-primary-900 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gold-400 text-sm font-semibold uppercase tracking-wider mb-3">Exklusiv & Diskret</p>
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Aktuelle Angebote</h1>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">
                        Erfahren Sie, warum unsere Objekte meist verkauft sind, bevor sie öffentlich erscheinen.
                    </p>
                </div>
            </section>

            {/* Explanation */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-start gap-4 p-6 bg-gold-500/5 border border-gold-500/20 rounded-2xl mb-8">
                        <Info size={24} className="text-gold-600 shrink-0 mt-0.5" />
                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">Warum keine öffentlichen Angebote?</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Auf unserer Homepage veröffentlichen wir keine aktuellen Angebote, da die meisten Objekte von uns nicht öffentlich beworben werden. Der Großteil unserer Häuser oder Wohnungen findet seinen Weg zum neuen Eigentümer bereits <strong>vor dem Einstellen ins Internet!</strong>
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <CheckCircle size={18} className="text-gold-600" />
                                Unser Netzwerk für Sie
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Die ernsthaften Interessenten führen mit uns sehr intensive Gespräche, in denen wir die Rahmenbedingungen klären. Durch diese Informationen können wir später ganz gezielt die passende Immobilie anbieten und äußerst schnell verkaufen.
                            </p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <Package size={18} className="text-gold-600" />
                                Wichtige Kundeninfo
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Bei Manuela Weber sind nie mehr als <strong>10 Objekte</strong> gleichzeitig im Verkauf – für eine Vermarktungsdauer von unter 3 Monaten. Alle anderen Angebote sind in über <strong>200 Immobilienportalen</strong> präsent.
                            </p>
                        </div>
                    </div>

                    <div className="p-6 bg-primary-900 rounded-2xl text-center">
                        <h3 className="text-white font-bold text-lg mb-2">
                            Ein neu aufgenommenes Objekt findet häufig bereits nach wenigen Tagen den geeigneten Käufer – ohne je publiziert worden zu sein.
                        </h3>
                        <p className="text-slate-400 text-sm">Lassen Sie sich vormerken und profitieren Sie als Erster.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-14 bg-primary-900 text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-white mb-2">Jetzt vormerken lassen</h2>
                    <p className="text-slate-400 mb-6">Teilen Sie uns Ihre Wünsche mit – wir melden uns, sobald das passende Objekt verfügbar ist.</p>
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
                            Kontaktformular →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
