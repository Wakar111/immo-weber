import { Phone, Search, Percent, Clock } from 'lucide-react';

export default function ImmoSuche() {
    return (
        <div className="pt-20">
            {/* Header */}
            <section className="bg-primary-900 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gold-400 text-sm font-semibold uppercase tracking-wider mb-3">Kaufgesuche & Provision</p>
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Immobilien SUCHE</h1>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">
                        Aktuelle Suchaufträge unserer Kunden – vielleicht ist Ihre Immobilie genau das Richtige.
                    </p>
                </div>
            </section>

            {/* Current search request */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 mb-10 text-white">
                        <div className="flex items-center gap-2 text-gold-400 text-sm font-semibold mb-4">
                            <Search size={16} />
                            Aktueller Suchauftrag
                        </div>
                        <h2 className="text-xl font-bold mb-3">
                            Für einen Kapitalanleger suchen wir in Darmstadt und Umgebung ein Mehrfamilien- oder Zinshaus bis 1.800.000,– EUR
                        </h2>
                        <p className="text-slate-400 leading-relaxed mb-4">
                            Bitte um kurzen Anruf unter Tel. 06074 – 922 615. Wir sind täglich von 10:00–22:00 Uhr erreichbar, auch am Wochenende und an Feiertagen.
                        </p>
                        <p className="text-slate-300 text-sm italic">
                            Sie relaxen – während wir Ihre Immobilie verkaufen! Dafür sind wir an Ihrer Seite.
                        </p>
                    </div>

                    {/* Provision highlight */}
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center mb-3">
                                <Percent size={20} className="text-slate-900" />
                            </div>
                            <p className="text-2xl font-black text-slate-900">2,975 %</p>
                            <p className="text-slate-500 text-sm mt-1">inkl. gesetzl. MwSt.</p>
                            <p className="text-xs text-slate-400 mt-1">Provision für Verkäufer</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center mb-3">
                                <Clock size={20} className="text-slate-900" />
                            </div>
                            <p className="text-2xl font-black text-slate-900">&lt; 3</p>
                            <p className="text-slate-500 text-sm mt-1">Monate Vermarktung</p>
                            <p className="text-xs text-slate-400 mt-1">Durchschnittliche Dauer</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center mb-3">
                                <Phone size={20} className="text-slate-900" />
                            </div>
                            <p className="text-2xl font-black text-slate-900">täglich</p>
                            <p className="text-slate-500 text-sm mt-1">10:00–22:00 Uhr</p>
                            <p className="text-xs text-slate-400 mt-1">Auch an Feiertagen</p>
                        </div>
                    </div>

                    {/* Provision detail */}
                    <div className="p-6 bg-gold-500/5 border border-gold-500/20 rounded-2xl">
                        <h3 className="font-bold text-slate-900 mb-2">Attraktive Konditionen für Verkäufer</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Der Verkauf Ihrer Eigentumswohnung oder Ihres Hauses ist für SIE:{' '}
                            <strong className="text-slate-900">Nur 2,975 % inkl. gesetzl. MwSt.</strong>{' '}
                            vom notariell beurkundeten Kaufpreis! – Wir bedanken uns im Voraus für Ihr Vertrauen.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-14 bg-primary-900 text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-white mb-2">Ihre Immobilie passt zu unserem Suchauftrag?</h2>
                    <p className="text-slate-400 mb-6">Melden Sie sich – wir sind täglich für Sie erreichbar.</p>
                    <a
                        href="tel:+496074922615"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gold-gradient text-slate-900 font-bold rounded-xl shadow-lg hover:scale-105 transition-all duration-200"
                    >
                        <Phone size={16} />
                        06074 – 922 615 anrufen
                    </a>
                </div>
            </section>
        </div>
    );
}
