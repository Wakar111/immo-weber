import { Link } from 'react-router-dom';
import { Quote, Phone } from 'lucide-react';

const testimonials = [
    {
        year: '1995',
        title: 'Kauf Appartement Darmstadt',
        desc: 'Kauf eines Appartements in Darmstadt als Kapitalanlage mit anschließender Vermietung an den Sportverein SV Darmstadt 98.',
        quote: '„…die Tätigkeit von Frau Weber kann ich als erfahren, zuverlässig und professionell betrachten…"',
    },
    {
        year: '1996',
        title: 'Verkauf Einfamilienhaus Rödermark-Urberach',
        desc: '',
        quote: '„…noch zu erwähnen wäre auch, dass es sich um einen schnellen Verkauf gehandelt hat…"',
    },
    {
        year: '1997',
        title: 'Kauf Mehrfamilienhaus Baden-Baden',
        desc: 'Kauf eines Mehrfamilienhauses in Baden-Baden mit anschließender Neu-Vermietung.',
        quote: '„…dass ich in Frau Weber eine äußerst kompetente, geschäftstüchtige und sehr zuverlässige Geschäftspartnerin gefunden habe…"',
    },
    {
        year: '2010',
        title: 'Innenausbau Einfamilienhaus Frankfurt-Riedberg',
        desc: '',
        quote: '„…wenn es um Umbaumaßnahmen und Innendesign geht, so werden wir sie sehr gerne weiterempfehlen…"',
    },
    {
        year: '2012',
        title: 'Verkauf Bungalow Rödermark-Bienengarten',
        desc: '',
        quote: '„…beim Verkauf der Immobilie hatten wir den Preis erzielt, den wir haben wollten…"',
    },
    {
        year: '2014',
        title: 'Verkauf ETW Frankfurt-Sachsenhausen',
        desc: '',
        quote: '„…ihr Einsatz war vorbildlich… werde sie bestimmt weiterempfehlen…"',
    },
    {
        year: '2015',
        title: 'Mehrmalige Verkäufe (2002, 2009, 2015)',
        desc: 'Barbara Richter – Wiederholungskundin über viele Jahre.',
        quote: '„…arbeitet schnell, konsequent und zuverlässig…"',
    },
    {
        year: '2015',
        title: 'Verkauf Haus Rödermark, Eisenbahnstraße',
        desc: '',
        quote: '„…die Vorbereitung war professionell, das Haus in einer sehr kurzen Zeit verkauft…"',
    },
    {
        year: '2015',
        title: 'Erwerb ETW Frankfurt & Mietersuche',
        desc: '',
        quote: '„…Frau Weber hat uns alle hierfür erforderlichen Arbeiten abgenommen und zu unserer vollsten Zufriedenheit erledigt. Sie hat auch gleich den passenden Mieter gesucht…"',
    },
    {
        year: '2015–2016',
        title: 'Marktplatz Mittelstand – Diverse Referenzen',
        desc: '',
        quote: '„…schon unsere 2. Eigentumswohnung, die wir über Weber Immobilien erworben haben…"',
    },
    {
        year: '2016',
        title: 'kennst-du-einen.de – Diverse Referenzen',
        desc: '',
        quote: '„…eine empfehlenswerte Maklerin, weil sie unser Haus in weniger als drei Monaten verkauft hat…"',
    },
    {
        year: 'Laufend',
        title: 'Vermietung Rodgau & Rödermark',
        desc: 'Heike und Michael Gasche aus Rodgau – langjährige Kunden.',
        quote: '„…seit über 10 Jahren vertrauen wir ihnen nun schon die Abwicklung unserer Immobilienbelange an…"',
    },
    {
        year: 'Google+',
        title: 'Online-Bewertung',
        desc: '',
        quote: '„…hier merkt man deutlich, dass dieser Makler über 30 Jahre auf dem Markt ist…"',
    },
];

export default function Referenzen() {
    return (
        <div className="pt-20">
            {/* Header */}
            <section className="bg-primary-900 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gold-400 text-sm font-semibold uppercase tracking-wider mb-3">Was unsere Kunden sagen</p>
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Unsere Referenzen</h1>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">
                        Über 30 Jahre Kundenvertrauen – von 1995 bis heute, aus ganz Hessen.
                    </p>
                </div>
            </section>

            {/* Testimonials grid */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map(({ year, title, desc, quote }) => (
                            <div
                                key={title}
                                className="group bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-bold text-gold-600 uppercase tracking-wider bg-gold-500/10 px-2 py-1 rounded-full">
                                        {year}
                                    </span>
                                    <Quote size={20} className="text-slate-200 group-hover:text-gold-200 transition-colors" />
                                </div>
                                <h3 className="font-bold text-slate-900 text-sm mb-2">{title}</h3>
                                {desc && <p className="text-slate-500 text-xs mb-3 leading-relaxed">{desc}</p>}
                                <p className="text-slate-600 text-sm italic leading-relaxed mt-auto pt-3 border-t border-slate-100">
                                    {quote}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-14 bg-primary-900 text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-white mb-2">Werden auch Sie ein zufriedener Kunde</h2>
                    <p className="text-slate-400 mb-6">Wir freuen uns auf Ihren Anruf und die Zusammenarbeit mit Ihnen.</p>
                    <Link to="/kontakt" className="inline-flex items-center gap-2 px-8 py-3 bg-gold-gradient text-slate-900 font-bold rounded-xl shadow-lg hover:scale-105 transition-all duration-200">
                        <Phone size={16} />
                        Kontakt aufnehmen
                    </Link>
                </div>
            </section>
        </div>
    );
}
