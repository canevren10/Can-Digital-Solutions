const steps = [
  {
    number: '01',
    title: 'Ücretsiz Görüşme',
    description: 'İhtiyaçlarını ve hedeflerini dinliyorum. WhatsApp veya telefonla 15 dakikalık bir görüşme yeterli.',
  },
  {
    number: '02',
    title: 'Teklif & Onay',
    description: 'Sana özel paket ve fiyat teklifini hazırlıyorum. Onayından sonra hemen başlıyorum.',
  },
  {
    number: '03',
    title: 'Tasarım & Geliştirme',
    description: 'Modern React altyapısıyla siteni geliştiriyorum. Süreç boyunca doğrudan iletişimde kalıyorum.',
  },
  {
    number: '04',
    title: 'Yayın & Takip',
    description: 'Siteni yayına alıp SEO ayarlarını tamamlıyorum. Sonuçları birlikte takip ediyorum.',
  },
]

export default function Process() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">
            Çalışma Sürecimiz
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            4 Adımda Dijitale Geçin
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto text-base leading-relaxed">
            Basit, şeffaf ve hızlı bir süreç. İlk görüşmeden yayına kadar her adımı birlikte yürütüyorum.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(100%-0px)] w-full h-px bg-neutral-200 z-0" style={{ left: '52px', width: 'calc(100% - 52px + 24px)' }} />
              )}

              <div className="relative z-10 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-sm font-bold text-blue-600">{step.number}</span>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2 text-sm">{step.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
