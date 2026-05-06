import aksoyInsaatImage from '../../assets/aksoyinsaat.png'

const projects = [
  {
    name: 'Aksoy Insaat',
    link: 'https://www.insaataksoy.com/',
    imageSrc: aksoyInsaatImage,
    description:
      'Aksoy İnşaat\'ın kurumsal kimliğini dijitale taşıyan; bölgesel SEO uyumlu, hızlı ve güven veren modern web platformu.',
    tech: ['React', 'Tailwind CSS', 'SEO', 'Schema Markup','Typescript'],
    gradient: 'from-slate-100 via-white to-slate-200',
  },
  {
    name: 'Gym Port',
    description:
      'Online randevu süreçlerini sadeleştiren, mobil uyumlu ve güven veren modern klinik web deneyimi.',
    tech: ['React', 'TypeScript', 'TanStack Router'],
    gradient: 'from-blue-50 via-white to-slate-100',
  },
]

export default function Portfolio() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Seçilmiş Çalışmalar
          </h2>
          <p className="text-slate-500 text-base leading-relaxed max-w-xl mx-auto">
            Müşterilerimiz için geliştirdiğimiz modern web projeleri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {project.link && project.imageSrc ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-video rounded-xl border border-slate-200 mb-5 overflow-hidden"
                >
                  <img
                    src={project.imageSrc}
                    alt={project.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </a>
              ) : (
                <div
                  className={`aspect-video rounded-xl border border-slate-200 bg-gradient-to-br ${project.gradient} mb-5 flex items-end p-4`}
                >
                  <span className="text-xs font-medium text-slate-500">Proje Önizleme</span>
                </div>
              )}

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mb-2"
                >
                  <h3 className="text-xl font-semibold text-slate-900">{project.name}</h3>
                </a>
              ) : (
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.name}</h3>
              )}
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border border-slate-200 bg-slate-50 text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
          >
            Tüm Projeleri Gör
          </button>
        </div>
      </div>
    </section>
  )
}
