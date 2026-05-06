import { useState } from 'react'
import { Send, MessageCircle, Phone, CheckCircle, Mail } from 'lucide-react'

type FormData = {
  name: string
  phone: string
  business: string
  package: string
  message: string
}

const initialForm: FormData = { name: '', phone: '', business: '', package: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('https://formsubmit.co/ajax/canevren2000@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `Yeni Teklif Talebi - ${form.name || 'İsimsiz'}`,
          ad: form.name,
          telefon: form.phone,
          isletme_sektor: form.business || '-',
          ilgilenilen_paket: form.package || '-',
          mesaj: form.message || '-',
          _template: 'table',
        }),
      })

      if (!response.ok) {
        throw new Error('Talep gönderilemedi')
      }

      setSubmitted(true)
      setForm(initialForm)
    } catch {
      setError('Gönderim sırasında bir hata oluştu. Lütfen tekrar deneyin.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="iletisim" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div>
            <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">
              İletişim
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
              Hadi Başlayalım
            </h2>
            <p className="text-neutral-500 text-base leading-relaxed mb-10">
              Projenizi anlatın, size özel bir teklif hazırlayalım.
              Görüşme ücretsiz ve bağlayıcı değildir.
            </p>

            <div className="flex flex-col gap-5">
              <a
                href="https://wa.me/491634522182"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl border border-neutral-100 hover:border-green-200 hover:bg-green-50/40 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                  <MessageCircle size={18} className="text-green-700" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-900">WhatsApp</div>
                  <div className="text-xs text-neutral-500">+49 163 4522182</div>
                </div>
              </a>

              <a
                href="mailto:canevren2000@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-xl border border-neutral-100 hover:border-amber-200 hover:bg-amber-50/40 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 transition-colors">
                  <Mail size={18} className="text-amber-700" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-900">E-posta</div>
                  <div className="text-xs text-neutral-500">canevren2000@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+491634522182"
                className="group flex items-center gap-4 p-4 rounded-xl border border-neutral-100 hover:border-blue-200 hover:bg-blue-50/40 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <Phone size={18} className="text-blue-700" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-900">Telefon & WhatsApp</div>
                  <div className="text-xs text-neutral-500">+49 163 4522182</div>
                </div>
              </a>

            </div>
          </div>

          {/* Right column — form */}
          <div className="bg-neutral-50 rounded-2xl border border-neutral-100 p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-8 gap-4">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle size={28} className="text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900">Mesajınız Alındı!</h3>
                <p className="text-sm text-neutral-500 max-w-xs">
                  En kısa sürede size geri dönüş yapıyorum. Acil durumlarda WhatsApp'tan ulaşabilirsiniz.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(initialForm) }}
                  className="mt-2 text-xs text-blue-600 hover:underline"
                >
                  Yeni mesaj gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-neutral-700">Adınız *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ahmet Yılmaz"
                      className="px-3.5 py-2.5 text-sm bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors placeholder:text-neutral-400"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-neutral-700">Telefon *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="05XX XXX XX XX"
                      className="px-3.5 py-2.5 text-sm bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors placeholder:text-neutral-400"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-neutral-700">İşletme / Sektör</label>
                  <input
                    type="text"
                    name="business"
                    value={form.business}
                    onChange={handleChange}
                    placeholder="Örn: Pansiyon, Restoran, Kuaför..."
                    className="px-3.5 py-2.5 text-sm bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors placeholder:text-neutral-400"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-neutral-700">İlgilendiğiniz Paket</label>
                  <select
                    name="package"
                    value={form.package}
                    onChange={handleChange}
                    className="px-3.5 py-2.5 text-sm bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors text-neutral-700"
                  >
                    <option value="">Paket seçin (isteğe bağlı)</option>
                    <option value="baslangic">Başlangıç – Dijital Kartvizit</option>
                    <option value="kurumsal">Kurumsal Profesyonel</option>
                    <option value="premium">Premium Web Sistemi</option>
                    <option value="belirsiz">Henüz Karar Vermedim</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-neutral-700">Mesajınız</label>
                  <textarea
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Projeniz hakkında kısaca bilgi verin..."
                    className="px-3.5 py-2.5 text-sm bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors resize-none placeholder:text-neutral-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-70 text-white text-sm font-semibold rounded-xl transition-all duration-200 mt-1"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Teklif Talebi Gönder
                    </>
                  )}
                </button>
                {error && (
                  <p className="text-xs text-red-600">{error}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
