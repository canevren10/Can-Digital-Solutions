import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToServices = () => {
    document.getElementById('hizmetler')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-50 blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-50 blur-3xl opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-8">
          <Sparkles size={12} />
          Markanız İçin Uçtan Uca Dijital Çözümler
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 leading-tight tracking-tight mb-6">
          İşletmeni{' '}
          <span className="relative">
            <span className="text-blue-600">Dijitalde</span>
          </span>
          <br />
          Güçlü Bir Konuma Taşıyorum
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed mb-10">
          İşletmeni dijital dünyaya taşıyorum. Hızlı, modern ve Google'da fark edilen
          web siteleriyle yanındayım.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={scrollToContact}
            className="group flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Ücretsiz Teklif Al
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={scrollToServices}
            className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-neutral-50 text-neutral-700 text-sm font-semibold rounded-xl border border-neutral-200 hover:border-neutral-300 transition-all duration-200 shadow-sm"
          >
            Paketleri İncele
          </button>
        </div>

        {/* Social proof strip */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-neutral-400">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-neutral-800">10+</span>
            <span className="text-xs mt-0.5">Tamamlanan Proje</span>
          </div>
          <div className="w-px h-8 bg-neutral-200 hidden sm:block" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-neutral-800">%100</span>
            <span className="text-xs mt-0.5">Müşteri Memnuniyeti</span>
          </div>
          <div className="w-px h-8 bg-neutral-200 hidden sm:block" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-neutral-800">3 Gün</span>
            <span className="text-xs mt-0.5">Ortalama Teslimat</span>
          </div>
        </div>
      </div>
    </section>
  )
}
