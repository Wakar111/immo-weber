import { Link } from 'react-router-dom';
import { Award, Phone, Star, Home as HomeIcon, TrendingUp, Clock, Shield, ChevronRight } from 'lucide-react';

const stats = [
  { value: '30+', label: 'Jahre Erfahrung', icon: TrendingUp },
  { value: '1.000+', label: 'verkaufte Objekte', icon: HomeIcon },
  { value: '<3', label: 'Monate Vermarktung', icon: Clock },
  { value: 'IVD', label: 'Verbandsmitglied', icon: Shield },
];

const features = [
  {
    icon: Star,
    title: 'Gut beraten!',
    desc: 'Profitieren Sie von über 30 Jahren Erfahrung auf dem hessischen Immobilienmarkt.',
    link: '/ihre-vorteile',
    linkLabel: 'Ihre Vorteile →',
  },
  {
    icon: Phone,
    title: 'Ständig erreichbar',
    desc: 'Täglich von 10:00–22:00 Uhr erreichbar – auch an Sonn- und Feiertagen.',
    link: '/kontakt',
    linkLabel: 'Tel. 06074 - 922 615',
  },
  {
    icon: Award,
    title: 'GRATIS! 30 Profi-Tipps',
    desc: 'Lernen Sie, seriöse Makler zu erkennen und schützen Sie sich vor Fehlentscheidungen.',
    link: '/ihre-vorteile',
    linkLabel: 'Jetzt lesen →',
  },
  {
    icon: HomeIcon,
    title: 'Eigentumswohnung – ETW-Profi',
    desc: 'Spezialist für Eigentumswohnungen: Kauf, Verkauf und Vermietung aus einer Hand.',
    link: '/leistungen',
    linkLabel: 'Leistungen ansehen →',
  },
  {
    icon: Shield,
    title: 'Für Verkäufer – KOSTENLOS',
    desc: 'Unser Service für Verkäufer. Nur 2,975 % inkl. MwSt. – attraktiv und fair.',
    link: '/immobilien-suche',
    linkLabel: 'Details erfahren →',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen bg-hero-gradient flex items-center overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, #f59e0b 0%, transparent 50%), radial-gradient(circle at 75% 75%, #f59e0b 0%, transparent 50%)',
          }}
        />
        <div className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold-500/10 border border-gold-500/20 rounded-full text-gold-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              IVD Mitglied · Seit 1982 · Rödermark
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Ihr persönlicher{' '}
              <span className="text-gradient-gold">Immobilien-</span>
              <br />Partner in Hessen
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
              Mit über 30 Jahren Erfahrung und mehr als 1.000 verkauften Objekten stehen wir Ihnen beim Kauf und Verkauf Ihrer Immobilie persönlich zur Seite.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold-gradient text-slate-900 font-bold rounded-xl shadow-xl hover:shadow-gold-500/30 hover:scale-105 transition-all duration-200"
              >
                <Phone size={16} />
                Kostenlos anfragen
              </Link>
              <Link
                to="/ueber-uns"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 glass-light border border-white/20 text-white font-medium rounded-xl hover:border-gold-400/40 hover:text-gold-400 transition-all duration-200"
              >
                Über uns
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-primary-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-gold-400" />
                </div>
                <div>
                  <p className="text-xl font-bold text-white leading-tight">{value}</p>
                  <p className="text-xs text-slate-500">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Das könnte Sie interessieren</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Alles, was Sie für eine erfolgreiche Immobilientransaktion in Hessen benötigen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc, link, linkLabel }) => (
              <div
                key={title}
                className="group bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                  <Icon size={20} className="text-gold-600" />
                </div>
                <h3 className="text-slate-900 font-bold text-base mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{desc}</p>
                <Link to={link} className="text-gold-600 text-sm font-semibold hover:text-gold-700 transition-colors">
                  {linkLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Wir freuen uns auf Sie.{' '}
            <span className="text-gradient-gold">Vielen Dank für Ihr Vertrauen.</span>
          </h2>
          <p className="text-slate-400 mb-8">Erreichbar täglich von 10:00 bis 22:00 Uhr – auch an Feiertagen.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+496074922615"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gold-gradient text-slate-900 font-bold rounded-xl shadow-lg hover:scale-105 transition-all duration-200"
            >
              <Phone size={18} />
              06074 – 922 615 anrufen
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
