import { Rocket, MapPin, Shield, Clock } from 'lucide-react'

const reasons = [
  {
    icon: <Rocket size={20} className="text-blue-600" />,
    title: 'Hızlı Teslimat',
    description: 'Çoğu projeyi 3–7 gün içinde yayına alıyorum. Zamanının değerini biliyorum.',
  },
  {
    icon: <MapPin size={20} className="text-blue-600" />,
    title: 'Stratejik SEO',
    description: 'Hedef kitlene uygun anahtar kelime stratejileriyle seni rakiplerinin önüne çıkarıyorum.',
  },
  {
    icon: <Shield size={20} className="text-blue-600" />,
    title: 'Güvenli & Modern Altyapı',
    description: 'React tabanlı, HTTPS güvenli, modern browser standartlarına uygun siteler.',
  },
  {
    icon: <Clock size={20} className="text-blue-600" />,
    title: '7/24 Destek',
    description: 'Site yayına girdikten sonra teknik destek ve güncellemeler için her zaman yanınızdayız.',
  },
]

export default function WhyUs() {
  return (
    <section id="neden-ben" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">
            Neden Ben?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            Butik ve Sonuca Odaklı Dijital Destek
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto text-base leading-relaxed">
            Her projeyi birebir takip ediyorum.
            React ve Tailwind gibi modern teknolojilerle butik, hızlı ve sürdürülebilir
            çözümler üretiyorum.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl border border-neutral-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-white transition-colors">
                {item.icon}
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
