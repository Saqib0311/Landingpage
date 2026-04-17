function App() {
  return (
    <div className="min-h-dvh bg-[#070A12] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(99,102,241,0.32)_0%,rgba(7,10,18,0)_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_45%_at_90%_20%,rgba(236,72,153,0.18)_0%,rgba(7,10,18,0)_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_45%_at_10%_35%,rgba(34,211,238,0.14)_0%,rgba(7,10,18,0)_60%)]" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  )
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      {children}
    </span>
  )
}

function Button({ as = 'a', variant = 'primary', className = '', ...props }) {
  const Comp = as
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-0'
  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-b from-indigo-400 to-indigo-600 text-white shadow-[0_12px_35px_rgba(99,102,241,0.35)] hover:brightness-110'
      : 'border border-white/10 bg-white/5 text-white/90 hover:bg-white/10'

  return <Comp className={`${base} ${styles} ${className}`} {...props} />
}

function Navbar() {
  const links = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070A12]/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="group inline-flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-indigo-400 to-fuchsia-400" />
          </span>
          <span className="text-sm font-semibold tracking-wide">
            Dex<span className="text-white/70">Vote</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="secondary" href="#contact" className="hidden sm:inline-flex">
            Book a demo
          </Button>
          <Button href="#contact">Get started</Button>
        </div>
      </Container>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative">
      <Container className="py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Pill>Agency-grade voting experiences</Pill>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Modern voting landing pages that{' '}
              <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-200 bg-clip-text text-transparent">
                convert users into voters
              </span>
              .
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/70">
              DexVote is a voting website agency that designs clean, trusted, and
              fast experiences—built for elections, polls, contests, and token
              governance.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#contact">Request proposal</Button>
              <Button variant="secondary" href="#services">
                See services
              </Button>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <Stat label="Avg. uplift" value="+32%" />
              <Stat label="Time to launch" value="7–14d" />
              <Stat label="Uptime target" value="99.9%" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-cyan-500/10 blur-2xl" />
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">DexVote Dashboard</div>
                <div className="flex items-center gap-2">
                  <Dot className="bg-rose-400/80" />
                  <Dot className="bg-amber-300/80" />
                  <Dot className="bg-emerald-400/80" />
                </div>
              </div>

              <div className="mt-5 grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-[#070A12]/60 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs text-white/60">Live poll</div>
                      <div className="mt-1 text-sm font-semibold">
                        “Which feature should we ship next?”
                      </div>
                    </div>
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-200">
                      Voting open
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    <Progress label="Mobile-first UI" value={62} />
                    <Progress label="2FA / OTP login" value={24} />
                    <Progress label="Anti-fraud checks" value={14} />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <MiniCard title="Secure by design" desc="Rate-limit, audit logs, and abuse controls." />
                  <MiniCard title="Brand-ready" desc="Your colors, type, and voice—done right." />
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs text-white/50">
              UI mock section (theme-inspired). Replace with your real product
              screenshots anytime.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
    </div>
  )
}

function Dot({ className = '' }) {
  return <span className={`h-2.5 w-2.5 rounded-full ${className}`} />
}

function Progress({ label, value }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-white/70">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="mt-2 h-2 w-full rounded-full bg-white/10">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

function MiniCard({ title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-white/70">{desc}</div>
    </div>
  )
}

function SectionHeading({ eyebrow, title, desc }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
        {eyebrow}
      </div>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-pretty text-base text-white/70">{desc}</p>
    </div>
  )
}

function Services() {
  const cards = [
    {
      title: 'Landing page design',
      desc: 'Agency-grade UI that builds trust fast: clear messaging, proof blocks, and strong CTAs.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M6 7h12M6 12h8M6 17h10"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: 'Voting UX strategy',
      desc: 'Flows for signup → ballot → confirmation, with friction reduced and clarity increased.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M8 12l3 3 6-7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: 'Trust & anti-fraud',
      desc: 'Design patterns that signal security: verification, audit trails, and transparent results.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M12 3l7 4v6c0 5-3 8-7 9-4-1-7-4-7-9V7l7-4Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ]

  return (
    <section id="services" className="border-t border-white/10">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need for a high-converting voting website"
          desc="Three focused services to help you launch a modern voting experience with clarity, credibility, and speed."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute -inset-10 bg-gradient-to-br from-indigo-500/15 via-fuchsia-500/10 to-cyan-500/10 blur-2xl" />
              </div>
              <div className="relative">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-white/90 ring-1 ring-white/10">
                  {c.icon}
                </div>
                <div className="mt-4 text-lg font-semibold">{c.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {c.desc}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/80">
                  Learn more
                  <span className="transition group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="border-t border-white/10">
      <Container className="py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="About DexVote"
              title="We design voting experiences people trust"
              desc="Whether it’s a public election, a product poll, or community governance—your users must feel safe, informed, and in control."
            />
            <div className="mt-8 grid gap-3">
              <CheckLine>Clear ballots with zero confusion</CheckLine>
              <CheckLine>Mobile-first layouts and fast performance</CheckLine>
              <CheckLine>Trust signals that reduce drop-off</CheckLine>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-cyan-500/10 blur-2xl" />
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold">What you get</div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <FeatureCard title="Brand system" desc="Colors, type scale, and components." />
                <FeatureCard title="Conversion copy" desc="Headlines and CTAs that fit your offer." />
                <FeatureCard title="Responsive UI" desc="Pixel-perfect from phone to desktop." />
                <FeatureCard title="Launch-ready" desc="Clean code + easy handover." />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function CheckLine({ children }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-200 ring-1 ring-emerald-400/20">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
          <path
            d="M8 12l3 3 6-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <div className="text-sm text-white/80">{children}</div>
    </div>
  )
}

function FeatureCard({ title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#070A12]/40 p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-white/70">{desc}</div>
    </div>
  )
}

function Contact() {
  return (
    <section id="contact" className="border-t border-white/10">
      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Contact"
          title="Tell us about your voting project"
          desc="Send a quick brief and we’ll reply with a plan, timeline, and a transparent quote."
        />

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 lg:grid-cols-5">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:col-span-3">
            <form
              className="grid gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" placeholder="Your name" />
                <Field label="Email" type="email" placeholder="you@company.com" />
              </div>
              <Field label="Project type" placeholder="Election / Poll / Contest / Governance" />
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-white/80">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-[#070A12]/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-indigo-400/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/20"
                  placeholder="What are you building and when do you want to launch?"
                />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-white/50">
                  By submitting, you agree we can contact you about DexVote.
                </p>
                <Button as="button" type="submit">
                  Send message
                </Button>
              </div>
            </form>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:col-span-2">
            <div className="text-sm font-semibold">Quick info</div>
            <div className="mt-4 space-y-4 text-sm text-white/70">
              <InfoRow label="Typical turnaround" value="7–14 days" />
              <InfoRow label="Deliverables" value="Design + React + Tailwind UI" />
              <InfoRow label="Best for" value="Voting sites that need trust + speed" />
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-[#070A12]/40 p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
                Suggested CTA
              </div>
              <div className="mt-2 text-sm text-white/80">
                “Start your vote with confidence.”
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Field({ label, type = 'text', placeholder }) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-semibold text-white/80">{label}</label>
      <input
        type={type}
        className="w-full rounded-2xl border border-white/10 bg-[#070A12]/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-indigo-400/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/20"
        placeholder={placeholder}
      />
    </div>
  )
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="text-white/50">{label}</div>
      <div className="text-right font-semibold text-white/80">{value}</div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <Container className="py-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <div className="text-sm font-semibold">
              Dex<span className="text-white/70">Vote</span>
            </div>
            <div className="mt-1 text-sm text-white/60">
              Agency-style landing pages for voting platforms.
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
            <a className="hover:text-white" href="#services">
              Services
            </a>
            <a className="hover:text-white" href="#about">
              About
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} DexVote. All rights reserved.</div>
          <div className="text-white/40">Built with React + Tailwind</div>
        </div>
      </Container>
    </footer>
  )
}

export default App
