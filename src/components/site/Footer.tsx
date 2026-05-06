import { MessageCircle, Zap } from 'lucide-react'

const currentYear = new Date().getFullYear()
const whatsappHref = `https://wa.me/${['49', '163', '452', '2182'].join('')}`

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-14 border-b border-neutral-800">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Zap size={16} className="text-white" fill="white" />
              </div>
              <span className="font-semibold text-white text-sm tracking-tight">
                Can Digital Solutions
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              İşletmen için hızlı, modern ve etkili web çözümleri sunuyorum.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold text-neutral-300 tracking-widest uppercase">
              Hızlı Erişim
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: 'Hizmetler', href: '#hizmetler' },
                { label: 'Neden Ben?', href: '#neden-ben' },
                { label: 'İletişim', href: '#iletisim' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-sm hover:text-white transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <a
              href="mailto:canevren2000@gmail.com"
              className="text-sm hover:text-white transition-colors w-fit"
            >
              canevren2000@gmail.com
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-green-400 hover:text-green-300 transition-colors w-fit inline-flex items-center gap-2"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <span>© {currentYear} Can Digital Solutions. Tüm hakları saklıdır.</span>
          <span>React · TypeScript · TanStack Router</span>
        </div>
      </div>
    </footer>
  )
}
