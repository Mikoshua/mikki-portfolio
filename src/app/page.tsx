import Image from "next/image";
import {
  profile,
  akit,
  groundup,
  kollabayan,
  robotics,
} from "@/data/content";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      {/* ============ NAV ============ */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-cream/70 border-b border-ink/5">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <a href="#top" className="font-serif text-lg tracking-tight">
            mikki<span className="text-rose">.</span>
          </a>
          <div className="hidden md:flex gap-8 text-sm text-ash">
            <a href="#akit" className="link-underline">AKIT</a>
            <a href="#groundup" className="link-underline">GroundUP</a>
            <a href="#kollabayan" className="link-underline">Kollabayan</a>
            <a href="#robotics" className="link-underline">Robotics</a>
            <a href="#contact" className="link-underline">Contact</a>
          </div>
        </div>
      </nav>

      {/* ============ HERO ============ */}
      <section id="top" className="pt-40 pb-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-ash mb-8 animate-fade-up">
            <span className="inline-block w-2 h-2 rounded-full bg-sage mr-3 align-middle animate-pulse" />
            Building three startups + leading a championship robotics team
          </div>

          <h1
            className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight animate-fade-up"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            Mikhaela
            <br />
            <span className="italic text-rose">Bigueras</span>
            <span className="text-rose">.</span>
          </h1>

          <p
            className="mt-10 max-w-2xl text-xl md:text-2xl text-ash leading-relaxed font-light animate-fade-up"
            style={{ animationDelay: "0.25s", animationFillMode: "both" }}
          >
            {profile.oneLiner}
          </p>

          <p
            className="mt-6 max-w-2xl text-base md:text-lg text-ash/80 leading-relaxed font-light animate-fade-up"
            style={{ animationDelay: "0.35s", animationFillMode: "both" }}
          >
            {profile.bio}
          </p>

          <div
            className="mt-12 flex flex-wrap gap-6 text-sm text-ash animate-fade-up"
            style={{ animationDelay: "0.5s", animationFillMode: "both" }}
          >
            <a href="#akit" className="link-underline">View work ↓</a>
            <span className="text-smoke">·</span>
            <a href={`mailto:${profile.email}`} className="link-underline">
              {profile.email}
            </a>
            <span className="text-smoke">·</span>
            <span>{profile.location}</span>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <section className="py-8 border-y border-ink/10 overflow-hidden bg-cream">
        <div className="flex marquee-track whitespace-nowrap font-serif text-3xl md:text-5xl italic text-ink/30">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-12 pr-12">
              <span>Beauty Tech</span>
              <span className="text-rose not-italic">✦</span>
              <span>Agri-Tech</span>
              <span className="text-sage not-italic">✦</span>
              <span>Collaboration</span>
              <span className="text-rose not-italic">✦</span>
              <span>Robotics</span>
              <span className="text-sage not-italic">✦</span>
              <span>Made in Manila</span>
              <span className="text-rose not-italic">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ AKIT ============ */}
      <section id="akit" className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-ash mb-4">
            Project · 01 · {akit.industry}
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight mb-3">
                {akit.name}
                <span className="text-rose">.</span>
              </h2>
              <p className="font-serif italic text-2xl md:text-3xl text-rose">
                {akit.tagline}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs uppercase tracking-wider px-3 py-1.5 bg-rosedust/40 text-rose rounded-full">
                {akit.stage}
              </span>
              <span className="text-xs uppercase tracking-wider px-3 py-1.5 bg-ink/5 text-ash rounded-full">
                {akit.industry}
              </span>
            </div>
          </div>

          {/* Mockup hero */}
          <div className="relative mb-16 -mx-6 md:-mx-10 px-6 md:px-10 py-12 bg-gradient-to-br from-rosedust/30 via-cream to-sageleaf/20 rounded-none md:rounded-3xl overflow-hidden">
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-rose blur-3xl" />
              <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-sage blur-3xl" />
            </div>
            <Image
              src="/akit/mockups.png"
              alt="AKIT Beauty app screens"
              width={1772}
              height={894}
              className="relative z-10 w-full h-auto"
              priority
            />
          </div>

          <div className="grid md:grid-cols-[2fr_1fr] gap-12 md:gap-16 mb-12">
            <div>
              <p className="text-ink/80 leading-relaxed mb-10 text-base md:text-lg font-light">
                {akit.description}
              </p>

              <div>
                <div className="text-xs uppercase tracking-[0.15em] text-smoke mb-4">
                  What makes AKIT different
                </div>
                <ul className="space-y-4">
                  {akit.highlights?.map((h, i) => (
                    <li key={i} className="flex gap-4 text-base text-ink/80 leading-relaxed">
                      <span className="font-serif text-rose text-lg shrink-0 leading-none mt-1">
                        0{i + 1}
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="md:border-l md:border-ink/10 md:pl-12 space-y-6 text-sm">
              <div>
                <div className="text-xs uppercase tracking-wider text-smoke mb-1.5">
                  My Role
                </div>
                <div className="text-ink">{akit.role}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-smoke mb-1.5">
                  Co-founder
                </div>
                <div className="text-ink">{akit.cofounders?.[0].name}</div>
                <div className="text-xs text-ash mt-0.5">{akit.cofounders?.[0].role}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-smoke mb-1.5">
                  Stack
                </div>
                <div className="text-ink leading-relaxed">
                  {akit.tech?.join(" · ")}
                </div>
              </div>
              <div className="pt-6 border-t border-ink/10">
                <Image
                  src="/akit/logo.png"
                  alt="AKIT Beauty logo"
                  width={120}
                  height={120}
                  className="w-20 h-20 bg-ink rounded-2xl p-3 mb-3"
                />
                <div className="text-xs text-ash italic">
                  Redefining Filipino beauty
                </div>
              </div>
            </aside>
          </div>

          {akit.links?.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm bg-ink text-cream px-6 py-3.5 rounded-full hover:bg-rose transition-colors duration-300"
            >
              {link.label}
              <span>→</span>
            </a>
          ))}
        </div>
      </section>

      {/* ============ GROUNDUP ============ */}
      <section id="groundup" className="py-24 md:py-32 px-6 md:px-10 bg-ink/[0.02] border-y border-ink/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-ash mb-4">
            Project · 02 · {groundup.industry}
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight mb-3">
                {groundup.name}
                <span style={{ color: groundup.accentColor }}>.</span>
              </h2>
              <p className="font-serif italic text-xl md:text-2xl" style={{ color: groundup.accentColor }}>
                {groundup.tagline}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span
                className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full"
                style={{ backgroundColor: `${groundup.accentColor}25`, color: groundup.accentColor }}
              >
                {groundup.stage}
              </span>
              <span className="text-xs uppercase tracking-wider px-3 py-1.5 bg-ink/5 text-ash rounded-full">
                {groundup.industry}
              </span>
            </div>
          </div>

          {/* Brand banner hero */}
          <div className="relative mb-12 -mx-6 md:-mx-10 md:rounded-3xl overflow-hidden aspect-[16/7] md:aspect-[21/9]">
            <Image
              src="/groundup/brand.png"
              alt="GroundUP — Grow Smarter, Live Cleaner, Sustainable Harvests"
              fill
              className="object-cover"
            />
          </div>

          {/* Drone 3-image gallery */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-16">
            {groundup.images?.map((img, i) => (
              <div
                key={img.src}
                className="relative aspect-square bg-gradient-to-br from-white to-ink/[0.04] rounded-2xl overflow-hidden border border-ink/10 group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-wider text-ash/70 bg-cream/80 backdrop-blur-sm px-2 py-1 rounded-full">
                  View {i + 1}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-[2fr_1fr] gap-12 md:gap-16">
            <div>
              <p className="text-ink/80 leading-relaxed mb-10 text-base md:text-lg font-light">
                {groundup.description}
              </p>

              <div>
                <div className="text-xs uppercase tracking-[0.15em] text-smoke mb-4">
                  What makes GroundUP different
                </div>
                <ul className="space-y-4">
                  {groundup.highlights?.map((h, i) => (
                    <li key={i} className="flex gap-4 text-base text-ink/80 leading-relaxed">
                      <span
                        className="font-serif text-lg shrink-0 leading-none mt-1"
                        style={{ color: groundup.accentColor }}
                      >
                        0{i + 1}
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="md:border-l md:border-ink/10 md:pl-12 space-y-6 text-sm">
              <div>
                <div className="text-xs uppercase tracking-wider text-smoke mb-1.5">
                  My Role
                </div>
                <div className="text-ink">{groundup.role}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-smoke mb-1.5">
                  Co-founder
                </div>
                <div className="text-ink">{groundup.cofounders?.[0].name}</div>
                <div className="text-xs text-ash mt-0.5">{groundup.cofounders?.[0].role}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-smoke mb-1.5">
                  Stack
                </div>
                <div className="text-ink leading-relaxed">
                  {groundup.tech?.join(" · ")}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ============ KOLLABAYAN ============ */}
      <section id="kollabayan" className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-ash mb-4">
            Project · 03 · {kollabayan.industry}
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight mb-3">
                {kollabayan.name}
                <span style={{ color: kollabayan.accentColor }}>.</span>
              </h2>
              <p className="font-serif italic text-2xl md:text-3xl" style={{ color: kollabayan.accentColor }}>
                {kollabayan.tagline}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span
                className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full"
                style={{ backgroundColor: `${kollabayan.accentColor}25`, color: kollabayan.accentColor }}
              >
                {kollabayan.stage}
              </span>
              <span className="text-xs uppercase tracking-wider px-3 py-1.5 bg-ink/5 text-ash rounded-full">
                {kollabayan.industry}
              </span>
            </div>
          </div>

          {/* Two screenshots */}
          <div className="space-y-6 mb-16">
            {kollabayan.images?.map((img, i) => (
              <div
                key={img.src}
                className="relative w-full rounded-2xl overflow-hidden border border-ink/10 shadow-sm"
                style={{ aspectRatio: "1920/950" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-[2fr_1fr] gap-12 md:gap-16">
            <div>
              <p className="text-ink/80 leading-relaxed mb-10 text-base md:text-lg font-light">
                {kollabayan.description}
              </p>

              <div>
                <div className="text-xs uppercase tracking-[0.15em] text-smoke mb-4">
                  What makes Kollabayan different
                </div>
                <ul className="space-y-4">
                  {kollabayan.highlights?.map((h, i) => (
                    <li key={i} className="flex gap-4 text-base text-ink/80 leading-relaxed">
                      <span
                        className="font-serif text-lg shrink-0 leading-none mt-1"
                        style={{ color: kollabayan.accentColor }}
                      >
                        0{i + 1}
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="md:border-l md:border-ink/10 md:pl-12 space-y-6 text-sm">
              <div>
                <div className="text-xs uppercase tracking-wider text-smoke mb-1.5">
                  My Role
                </div>
                <div className="text-ink">{kollabayan.role}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-smoke mb-1.5">
                  Co-founders
                </div>
                {kollabayan.cofounders?.map((cf) => (
                  <div key={cf.name} className="mb-2">
                    <div className="text-ink">{cf.name}</div>
                    <div className="text-xs text-ash mt-0.5">{cf.role}</div>
                  </div>
                ))}
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-smoke mb-1.5">
                  Stack
                </div>
                <div className="text-ink leading-relaxed">
                  {kollabayan.tech?.join(" · ")}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ============ ROBOTICS ============ */}
      <section id="robotics" className="py-24 md:py-32 px-6 md:px-10 bg-ink text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-rose blur-3xl" />
          <div className="absolute bottom-1/3 -right-32 w-96 h-96 rounded-full bg-sage blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-xs uppercase tracking-[0.2em] text-cream/50 mb-4">
            Beyond Startups · Hardware Leadership
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight mb-3">
                Mapua <span className="italic text-rosedust">Machina</span>
                <span className="text-rose">.</span>
              </h2>
              <p className="font-serif italic text-xl md:text-2xl text-cream/70">
                Technical Lead · National Champions
              </p>
            </div>
          </div>

          <p className="text-cream/80 leading-relaxed text-base md:text-lg font-light max-w-3xl mb-12">
            {robotics.description}
          </p>

          {/* Awards */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {robotics.awards.map((award, i) => (
              <div
                key={i}
                className="bg-cream/5 border border-cream/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-cream/10 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🥇</span>
                  <span
                    className="text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-rose/20 text-rosedust border border-rose/30"
                  >
                    {award.tier}
                  </span>
                </div>
                <div className="font-serif text-2xl mb-2">{award.placement}</div>
                <div className="text-rosedust text-sm mb-3">{award.category}</div>
                <div className="text-cream/70 text-sm leading-relaxed mb-3">
                  {award.competition}
                </div>
                <div className="text-xs text-cream/50 uppercase tracking-wider">
                  {award.date} · {award.venue}
                </div>
              </div>
            ))}
          </div>

          {/* Photo gallery — horizontal scroll */}
          <div className="text-xs uppercase tracking-[0.15em] text-cream/40 mb-4">
            From the workshop & the podium
          </div>
          <div className="-mx-6 md:-mx-10 px-6 md:px-10 overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-4 md:gap-6">
              {robotics.gallery.map((photo, i) => (
                <div
                  key={photo.src}
                  className="relative shrink-0 w-64 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden border border-cream/10 group"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs text-cream/80">
                    {i + 1} / {robotics.gallery.length}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="py-32 px-6 md:px-10 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-rose blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-sage blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-xs uppercase tracking-[0.2em] text-ash mb-6">
            Get in touch
          </div>
          <h2 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight mb-12">
            Building something <span className="italic text-rose">together?</span>
          </h2>
          <p className="text-ash text-lg max-w-2xl leading-relaxed mb-12 font-light">
            Open to conversations with investors, fellow founders, and anyone working on AI, hardware, or Filipino-first products.
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-4 mb-16">
            <a
              href={`mailto:${profile.email}`}
              className="font-serif text-2xl md:text-4xl link-underline italic text-ink"
            >
              {profile.email}
            </a>
          </div>

          <div className="pt-8 border-t border-ink/10 flex flex-wrap gap-6 text-sm text-ash">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="py-8 px-6 md:px-10 bg-ink text-cream/40 text-xs">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} {profile.name}</div>
          <div>Made in Manila · Built with care</div>
        </div>
      </footer>
    </main>
  );
}
