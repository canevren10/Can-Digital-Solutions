import { Check, Zap, Star, Crown } from 'lucide-react'

interface ServicePackage {
  icon: React.ReactNode
  badge?: string
  name: string
  subtitle: string
  description: string
  features: string[]
  cta: string
  highlighted: boolean
}

const packages: ServicePackage[] = [
  {
    icon: <Zap size={20} className="text-blue-600" />,
    name: 'Başlangıç',
    subtitle: 'Dijital Kartvizit',
    description: 'Küçük işletmeler ve hızlı online varlık isteyenler için ideal başlangıç paketi.',
    features: [
      'Tek sayfa modern tasarım (Landing Page)',
      'Tüm cihazlarda mobil uyumlu',
      'Temel SEO kurulumu',
      'Hızlı yükleme optimizasyonu',
    ],
    cta: 'Bu Paketi Seç',
    highlighted: false,
  },
  {
    icon: <Star size={20} className="text-white" />,
    badge: 'En Çok Tercih Edilen',
    name: 'Kurumsal Profesyonel',
    subtitle: 'Müşteri Odaklı Site',
    description: 'Daha fazla müşteri kazanmak ve Google\'da görünür olmak isteyenler için.',
    features: [
      '5–8 sayfa profesyonel web sitesi',
      'Hedef kitle odaklı SEO stratejisi',
      'WhatsApp, arama ve form entegrasyonu',
      'Hızlı modern React altyapısı',
      'Google Search Console kurulumu',
    ],
    cta: 'Bu Paketi Seç',
    highlighted: true,
  },
  {
    icon: <Crown size={20} className="text-amber-600" />,
    name: 'Premium Web Sistemi',
    subtitle: 'Dinamik Web App',
    description: 'Dijitalde güçlü bir sistem kurmak isteyen markalar için kapsamlı çözüm.',
    features: [
      'Özel yönetim paneli (Admin Panel)',
      'Kullanıcı sistemi & yetkilendirme',
      'Sınırsız içerik yönetimi',
      'Gelişmiş SEO + ölçeklenebilir mimari',
    ],
    cta: 'Bu Paketi Seç',
    highlighted: false,
  },
]

export default function Services() {
  const scrollToContact = () => {
    document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hizmetler" className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">
            Hizmet Paketleri
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            İhtiyacınıza Uygun Paketi Seçin
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto text-base leading-relaxed">
            Her işletmenin ihtiyacı farklıdır. Büyüklüğünüze ve hedeflerinize göre
            en uygun paketi seçin.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 ${
                pkg.highlighted
                  ? 'bg-blue-600 text-white shadow-2xl shadow-blue-200 scale-[1.02] md:scale-105'
                  : 'bg-white text-neutral-900 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg shadow-sm'
              }`}
            >
              {/* Popular badge */}
              {pkg.badge && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-[11px] font-semibold tracking-wide border border-white/30">
                    <Star size={10} fill="currentColor" />
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${
                    pkg.highlighted ? 'bg-white/15' : 'bg-neutral-50 border border-neutral-100'
                  }`}
                >
                  {pkg.icon}
                </div>

                {/* Title */}
                <h3
                  className={`text-lg font-bold mb-0.5 ${
                    pkg.highlighted ? 'text-white' : 'text-neutral-900'
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`text-sm font-medium mb-3 ${
                    pkg.highlighted ? 'text-blue-100' : 'text-blue-600'
                  }`}
                >
                  {pkg.subtitle}
                </p>
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    pkg.highlighted ? 'text-blue-100' : 'text-neutral-500'
                  }`}
                >
                  {pkg.description}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-2.5 flex-1 mb-7">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <span
                        className={`mt-0.5 flex-shrink-0 w-4.5 h-4.5 rounded-full flex items-center justify-center ${
                          pkg.highlighted
                            ? 'bg-white/20 text-white'
                            : 'bg-blue-50 text-blue-600'
                        }`}
                      >
                        <Check size={10} strokeWidth={3} />
                      </span>
                      <span
                        className={
                          pkg.highlighted ? 'text-blue-50' : 'text-neutral-600'
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={scrollToContact}
                  className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    pkg.highlighted
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {pkg.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-neutral-400 mt-8">
          Tüm paketler özel ihtiyaçlarınıza göre özelleştirilebilir. Detaylar için iletişime geçin.
        </p>
      </div>
    </section>
  )
}
