import { useState } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function Kontakt() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="pt-20">
            {/* Header */}
            <section className="bg-primary-900 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gold-400 text-sm font-semibold uppercase tracking-wider mb-3">Wir sind für Sie da</p>
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Kontakt aufnehmen</h1>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">
                        Rufen Sie uns an oder schreiben Sie uns – wir antworten so schnell wie möglich.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-10">
                        {/* Info */}
                        <div className="lg:col-span-2 space-y-6">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900 mb-5">Direkter Kontakt</h2>
                                <div className="space-y-4">
                                    <a
                                        href="tel:+496074922615"
                                        className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-gold-400/40 hover:bg-gold-500/5 transition-all group"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-gold-gradient flex items-center justify-center shrink-0">
                                            <Phone size={18} className="text-slate-900" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 mb-0.5">Telefon</p>
                                            <p className="font-bold text-slate-900 group-hover:text-gold-700 transition-colors">06074 – 922 615</p>
                                        </div>
                                    </a>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <div className="w-10 h-10 rounded-lg bg-gold-gradient flex items-center justify-center shrink-0 mt-0.5">
                                            <Clock size={18} className="text-slate-900" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 mb-0.5">Erreichbarkeit</p>
                                            <p className="font-bold text-slate-900">Täglich 10:00–22:00 Uhr</p>
                                            <p className="text-sm text-slate-500">Auch an Sonn- und Feiertagen</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <div className="w-10 h-10 rounded-lg bg-gold-gradient flex items-center justify-center shrink-0 mt-0.5">
                                            <MapPin size={18} className="text-slate-900" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 mb-0.5">Adresse</p>
                                            <p className="font-bold text-slate-900">Robert-Bloch-Str. 21</p>
                                            <p className="text-sm text-slate-500">63322 Rödermark</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 bg-gradient-to-br from-primary-900 to-primary-800 rounded-xl text-white">
                                <p className="text-gold-400 font-semibold text-sm mb-1">Manuela Weber Immobilien</p>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Vermögensanlagen Rödermark · IVD<br />
                                    63322 Rödermark, Robert-Bloch-Str. 21
                                </p>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-3">
                            {submitted ? (
                                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                                    <div className="w-16 h-16 rounded-full bg-gold-gradient flex items-center justify-center mx-auto mb-4 shadow-xl">
                                        <CheckCircle size={28} className="text-slate-900" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Nachricht gesendet!</h3>
                                    <p className="text-slate-500 max-w-sm">
                                        Vielen Dank für Ihre Anfrage. Wir werden uns schnellstmöglich bei Ihnen melden.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Ihr Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={form.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent bg-slate-50 text-slate-900 text-sm transition-all"
                                                placeholder="Max Mustermann"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1.5">E-Mail-Adresse *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={form.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent bg-slate-50 text-slate-900 text-sm transition-all"
                                                placeholder="max@beispiel.de"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Telefonnummer</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent bg-slate-50 text-slate-900 text-sm transition-all"
                                                placeholder="0123 456789"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Betreff</label>
                                            <select
                                                name="subject"
                                                value={form.subject}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent bg-slate-50 text-slate-900 text-sm transition-all"
                                            >
                                                <option value="">Bitte wählen…</option>
                                                <option>Immobilie verkaufen</option>
                                                <option>Immobilie kaufen</option>
                                                <option>Marktwertüberprüfung</option>
                                                <option>Mietobjekt</option>
                                                <option>Sonstiges</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Ihre Nachricht *</label>
                                        <textarea
                                            name="message"
                                            required
                                            rows={5}
                                            value={form.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent bg-slate-50 text-slate-900 text-sm transition-all resize-none"
                                            placeholder="Beschreiben Sie kurz Ihr Anliegen…"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-gold-gradient text-slate-900 font-bold rounded-xl shadow-lg hover:shadow-gold-500/30 hover:scale-[1.01] transition-all duration-200"
                                    >
                                        <Send size={16} />
                                        Nachricht absenden
                                    </button>
                                    <p className="text-xs text-slate-400 text-center">
                                        Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer{' '}
                                        <span className="text-gold-600 cursor-pointer">Datenschutzerklärung</span> zu.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
