import { useState } from 'react';
import { TiltShineCard } from '../components/TiltShineCard';
import { Stat } from '../components/CountUpStats';
import { Link } from 'react-router-dom';
import {
  Award, Phone, Star, Home as HomeIcon, TrendingUp, Clock, Shield, ChevronRight,
  Percent, Building2, CheckCircle, Wrench, Flame, FileText, Landmark, MapPin, Globe
} from 'lucide-react';



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

// ---------- INFO TABS ----------
type Tab = {
  id: string;
  label: string;
  icon: React.ElementType;
  content: React.ReactNode;
};

const tabs: Tab[] = [
  {
    id: 'kostenlos',
    label: 'Für Verkäufer',
    icon: Percent,
    content: (
      <div className="space-y-5">
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-1">100 % Service – gerechte Provision</h3>
          <p className="text-gold-600 font-semibold text-sm mb-3">Neu seit 24.12.2020 (Gesetzliche Regelung)</p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Vom Gesetzgeber wurde eine Teilung der Maklercourtage für Käufer und Verkäufer von Einfamilienhäusern und Eigentumswohnungen beschlossen.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Käufer-Provision', value: '2,975 %', note: 'inkl. gesetzl. MwSt. vom Kaufpreis' },
              { label: 'Verkäufer-Provision', value: '2,975 %', note: 'inkl. gesetzl. MwSt. vom Kaufpreis' },
            ].map(({ label, value, note }) => (
              <div key={label} className="p-4 bg-gold-500/5 border border-gold-500/20 rounded-xl">
                <p className="text-xs text-gold-600 font-semibold uppercase tracking-wider mb-1">{label}</p>
                <p className="text-2xl font-black text-slate-900">{value}</p>
                <p className="text-xs text-slate-500 mt-0.5">{note}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-4 italic">
            Die Maklercourtage ist erst nach Kaufpreiszahlung fällig – kein Risiko für Sie.
          </p>
        </div>
        <Link to="/immobilien-suche" className="inline-flex items-center gap-1.5 text-gold-600 font-semibold text-sm hover:text-gold-700">
          Mehr zur Immobilien SUCHE <ChevronRight size={14} />
        </Link>
      </div>
    ),
  },
  {
    id: 'etwprofi',
    label: 'ETW-Profi',
    icon: Building2,
    content: (
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900">Sie haben die ETW – wir den Käufer.</h3>
        <p className="text-slate-600 leading-relaxed">
          Als erfahrener Eigentumswohnungs-Spezialist helfen wir Ihnen auch bei komplexen Situationen:
        </p>
        <ul className="space-y-2">
          {[
            'Stellplatz passt nicht zur Wohnung',
            'Kellerräume wurden in der Praxis vertauscht',
            'Gemeinschaftsräume werden unrechtmäßig gewerblich genutzt',
            'Zwei ETWs wurden unerlaubt zusammengelegt',
            'Eingetragene Sicherungshypothek wurde nicht gelöscht',
            'Baupläne stimmen nicht mit den tatsächlichen Gegebenheiten überein',
            'Dachausbau ohne Baugenehmigung',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
              <CheckCircle size={15} className="text-gold-500 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
        <Link to="/leistungen" className="inline-flex items-center gap-1.5 text-gold-600 font-semibold text-sm hover:text-gold-700">
          Alle Leistungen ansehen <ChevronRight size={14} />
        </Link>
      </div>
    ),
  },
  {
    id: 'profi_tipps',
    label: '30 Profi-Tipps',
    icon: Star,
    content: (
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900">So erkennen Sie seriöse Makler sofort!</h3>
        <p className="text-slate-600 text-sm">Stellen Sie sich diese Fragen – die Antworten zeigen Ihnen, ob Ihr Makler vertrauenswürdig ist:</p>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            'Wie lange ist er im Immobiliensektor tätig?',
            'Welchem Berufsverband gehört er an?',
            'Verfügt er über nachweisbare Referenzen?',
            'Ist er auf ein Gebiet spezialisiert?',
            'Nimmt er an Weiterbildungen teil?',
            'Hat er max. 10 Objekte gleichzeitig?',
            'Ist er auch abends & am Wochenende erreichbar?',
            'Wie lang ist seine durchschnittliche Vermarktungsdauer?',
            'Berät er persönlich oder über Mitarbeiter?',
            'Hat er eine Vermögensschaden-Haftpflicht?',
          ].map((tip) => (
            <div key={tip} className="flex items-start gap-2 text-xs text-slate-600 bg-slate-50 rounded-lg p-2.5">
              <CheckCircle size={13} className="text-gold-500 shrink-0 mt-0.5" />
              {tip}
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400 italic">+20 weitere Tipps – sprechen Sie uns an!</p>
      </div>
    ),
  },
  {
    id: 'umbauten',
    label: 'Umbauten & DG-Ausbau',
    icon: Wrench,
    content: (
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900">Durch Dachausbau neuen Wohnraum schaffen</h3>
        <p className="text-slate-600 leading-relaxed text-sm">
          Unsere Spezialität sind <strong>Komplettausbauten von ungenutzten Dachgeschoss-Räumen</strong>. Wir liefern die richtigen Ideen und sind federführend bei Planung, Raumaufteilung und dem Faktor Licht.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { icon: HomeIcon, title: 'Mehr Wohnraum', desc: 'Aus ungenutztem Speicher wird wertvoller Wohnraum.' },
            { icon: Flame, title: 'DG-Isolierung EnEV', desc: 'Festpreis-Isolierung gem. EnEV 2014 mit Markentypen.' },
            { icon: Award, title: 'Wertsteigerung', desc: 'Ausbau steigert den Immobilienwert nachhaltig.' },
            { icon: FileText, title: 'Steuervorteile', desc: 'Unter bestimmten Bedingungen steuerlich absetzbar.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2 mb-1">
                <Icon size={14} className="text-gold-600" />
                <span className="font-semibold text-slate-800 text-sm">{title}</span>
              </div>
              <p className="text-xs text-slate-500">{desc}</p>
            </div>
          ))}
        </div>
        <Link to="/kontakt" className="inline-flex items-center gap-1.5 text-gold-600 font-semibold text-sm hover:text-gold-700">
          Umbau anfragen <ChevronRight size={14} />
        </Link>
      </div>
    ),
  },
  {
    id: 'erbe',
    label: 'Immobilien-Erbe',
    icon: Landmark,
    content: (
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900">Im Jahrzehnt der Erben</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Sichern Sie sich ab, damit das Erbe nicht zur Last wird! Wir begleiten Sie bei allen Fragen rund um geerbte Immobilien.
        </p>
        <div className="space-y-2.5">
          <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Typische Fragen beim Immobilienerbe:</p>
          {[
            'Immobilie verkaufen oder selbst behalten?',
            'Renovierung oder Sanierung erforderlich?',
            'Was unternehme ich gegen Leerstand?',
            'Erhaltungspflichten bei denkmalgeschützten Gebäuden?',
            'Wie kümmere ich mich aus der Ferne um das Erbe in Hessen?',
          ].map((q) => (
            <div key={q} className="flex items-start gap-2 text-sm text-slate-600">
              <CheckCircle size={14} className="text-gold-500 shrink-0 mt-0.5" />
              {q}
            </div>
          ))}
        </div>
        <div className="p-4 bg-primary-900 rounded-xl">
          <p className="text-white text-xs font-semibold mb-1">Unsere Dienstleistungen:</p>
          <ul className="text-slate-400 text-xs space-y-1">
            <li>• Ist-Analyse & Prüfung der Verwertbarkeit</li>
            <li>• Investitionsplan & Soll-Rendite-Prüfung</li>
            <li>• Unterlagen besorgen & behördliche Schritte erledigen</li>
          </ul>
        </div>
        <Link to="/kontakt" className="inline-flex items-center gap-1.5 text-gold-600 font-semibold text-sm hover:text-gold-700">
          Beratung anfragen <ChevronRight size={14} />
        </Link>
      </div>
    ),
  },
  {
    id: 'anfahrt',
    label: 'Anfahrt & Kontakt',
    icon: MapPin,
    content: (
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900">Adresse & Anfahrt</h3>
        <div className="flex items-start gap-3 p-4 bg-gold-500/5 border border-gold-500/20 rounded-xl">
          <MapPin size={18} className="text-gold-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-slate-900">Manuela Weber Immobilien</p>
            <p className="text-slate-600 text-sm">Robert-Bloch-Str. 21, 63322 Rödermark</p>
            <a
              href="https://www.google.de/maps/place/Manuela+Weber+Immobilien"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gold-600 text-xs font-semibold mt-1 hover:text-gold-700"
            >
              <Globe size={11} /> In Google Maps öffnen
            </a>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Anfahrtswege:</p>
          <div className="space-y-2 text-sm text-slate-600">
            <div className="p-3 bg-slate-50 rounded-lg">
              <p className="font-medium text-slate-800 text-xs mb-0.5">Aus Frankfurt / Mainz / Bad Homburg:</p>
              <p className="text-xs">A3 Richtung Würzburg → Abfahrt Hanau → B 45 → Ausfahrt Urberach</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg">
              <p className="font-medium text-slate-800 text-xs mb-0.5">Aus Aschaffenburg / München:</p>
              <p className="text-xs">A3 Richtung Frankfurt → Abfahrt Hanau → B 45 → Ausfahrt Urberach</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg">
              <p className="font-medium text-slate-800 text-xs mb-0.5">Aus Mannheim / Heidelberg:</p>
              <p className="text-xs">A5 Richtung Frankfurt → Abfahrt Darmstadt-Weiterstadt → L 3097 Richtung Messel/Urberach</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

// ---------- COMPONENT ----------
export default function Home() {
  const [activeTab, setActiveTab] = useState('kostenlos');
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen bg-hero-gradient flex items-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, #f59e0b 0%, transparent 50%), radial-gradient(circle at 75% 75%, #f59e0b 0%, transparent 50%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Content – two column on desktop */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold-500/10 border border-gold-500/20 rounded-full text-gold-400 text-xs font-semibold uppercase tracking-wider mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                IVD Mitglied · Seit 1982 · Rödermark
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Ihr persönlicher{' '}
                <span className="text-gradient-gold">Immobilien-</span>
                <br />Partner in Hessen
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
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

            {/* Right: photo card */}
            <div>
              <TiltShineCard
                imageSrc="/manuela.png"
                imageAlt="Manuela Weber"
                height="h-[320px] sm:h-[420px] lg:h-[580px]"
              />
              <div className="mt-4 text-center">
                <p className="text-white font-bold text-lg tracking-wide">Manuela Weber</p>
                <p className="text-gold-400 text-xs font-medium uppercase tracking-widest mt-0.5">Inhaberin · IVD · Rödermark</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Stats bar */}
      <section className="bg-primary-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Count-up stats */}
            <Stat num={30} suffix="+" subheading="Jahre Erfahrung" icon={TrendingUp} />
            <Stat num={1000} suffix="+" subheading="verkaufte Objekte" icon={HomeIcon} />
            <Stat num={3} prefix="< " subheading="Monate Vermarktung" icon={Clock} />
            {/* IVD – static, no count-up */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0">
                <Shield size={18} className="text-gold-400" />
              </div>
              <div>
                <p className="text-xl font-bold text-white leading-tight">IVD</p>
                <p className="text-xs text-slate-500">Verbandsmitglied</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Tabs Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Wissenswertes für Sie</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Nützliche Informationen rund um Kauf, Verkauf, Erbschaft und mehr – kompakt aufbereitet.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Tab Nav – horizontal scroll on mobile, vertical on desktop */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible lg:w-56 shrink-0 pb-2 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-2 px-3 py-2.5 lg:px-4 lg:py-3 rounded-xl text-xs lg:text-sm font-medium whitespace-nowrap transition-all duration-200 ${activeTab === id
                    ? 'bg-primary-900 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-100'
                    }`}
                >
                  <div className={`w-6 h-6 lg:w-7 lg:h-7 rounded-lg flex items-center justify-center shrink-0 ${activeTab === id ? 'bg-gold-500/20' : 'bg-slate-50'
                    }`}>
                    <Icon size={12} className={activeTab === id ? 'text-gold-400' : 'text-gold-600'} />
                  </div>
                  {label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 bg-white border border-slate-100 rounded-2xl p-5 lg:p-8 min-h-0 lg:min-h-[400px]">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-gold-gradient flex items-center justify-center shadow">
                  <active.icon size={16} className="text-slate-900" />
                </div>
                <span className="text-xs font-bold text-gold-600 uppercase tracking-wider">{active.label}</span>
              </div>
              {active.content}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 bg-white border-t border-slate-100">
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
                className="group bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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

      {/* Partner & Auszeichnungen */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Partner & Auszeichnungen</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              Vertrauen Sie auf bewährte Partnerschaften und anerkannte Zertifizierungen
            </p>
          </div>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className="flex w-max gap-12 items-center"
              style={{ animation: 'partner-scroll 28s linear infinite' }}
            >
              {[...Array(8), ...Array(8)].map((_, index) => (
                <div key={index} className="shrink-0">
                  <img
                    src={`/partners/image${(index % 8) + 1}.png`}
                    alt={`Partner ${(index % 8) + 1}`}
                    className="h-12 md:h-24 w-auto object-contain grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
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
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
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
          {/* Map */}
          <div className="overflow-hidden rounded-2xl">
            <TiltShineCard />
          </div>
        </div>
      </section>
    </div>
  );
}
