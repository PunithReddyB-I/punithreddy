import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Code2,
  Database,
  Cpu,
  Layers,
  Sparkles,
  Terminal,
  Rocket,
  Globe,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "XXXXXX — Full Stack Developer" },
      { name: "description", content: "Futuristic portfolio of XXXXXX, a Full Stack Developer building premium, performant web applications." },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  { icon: Code2, title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { icon: Database, title: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
  { icon: Cpu, title: "DevOps", items: ["Docker", "AWS", "CI/CD", "Vercel"] },
  { icon: Layers, title: "Tooling", items: ["Git", "Figma", "Vite", "Prisma"] },
];

const PROJECTS = [
  {
    title: "Neon Commerce",
    desc: "Full-stack storefront with real-time inventory, Stripe checkout and an admin dashboard.",
    stack: ["Next.js", "Postgres", "Stripe"],
    tag: "E-commerce",
  },
  {
    title: "Pulse Analytics",
    desc: "Realtime analytics dashboard streaming millions of events with sub-second queries.",
    stack: ["React", "Node", "ClickHouse"],
    tag: "SaaS",
  },
  {
    title: "Orbit Chat",
    desc: "End-to-end encrypted chat with presence, threads and file sharing.",
    stack: ["TypeScript", "WebSockets", "Redis"],
    tag: "Social",
  },
  {
    title: "DevForge CLI",
    desc: "Zero-config scaffolder for full-stack TypeScript apps with batteries included.",
    stack: ["Node", "OClif", "ESBuild"],
    tag: "Open Source",
  },
];

const STATS = [
  { k: "15+", v: "Projects Shipped" },
  { k: "20+", v: "Technologies" },
  { k: "1.5y", v: "Coding Journey" },
  { k: "100%", v: "Caffeinated" },
];

function Portfolio() {
  const [mx, setMx] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMx({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* ambient cursor glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 transition-opacity"
        style={{
          background: `radial-gradient(600px circle at ${mx.x}% ${mx.y}%, oklch(0.72 0.18 235 / 0.12), transparent 40%)`,
        }}
      />
      <div aria-hidden className="grid-bg pointer-events-none fixed inset-0 z-0" />

      {/* NAV */}
      <header className="sticky top-0 z-50 mx-auto mt-4 w-[min(1200px,94%)]">
        <nav className="glass-strong flex items-center justify-between rounded-2xl px-5 py-3">
          <a href="#top" className="flex items-center gap-2 font-display text-sm font-bold tracking-widest">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary/20 text-primary">
              <Terminal className="h-4 w-4" />
            </span>
            <span className="text-gradient">XXXXXX</span>
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-xl border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-primary/20 hover:shadow-[0_0_20px_oklch(0.72_0.18_235/0.5)]"
          >
            Hire me
            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </nav>
      </header>

      <main id="top" className="relative z-10 mx-auto w-[min(1200px,94%)]">
        {/* HERO */}
        <section className="relative grid min-h-[88vh] place-items-center py-20">
          <div className="animate-fade-up text-center">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for opportunities
            </div>

            <h1 className="font-display text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
              <span className="block text-foreground">Full Stack</span>
              <span className="block text-gradient">Developer</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Hi, I'm <span className="text-foreground font-semibold">XXXXXX</span> — a fresher engineer
              crafting <span className="text-primary">fast, futuristic</span> web experiences from pixel to
              production.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_oklch(0.72_0.18_235/0.5)] transition hover:scale-[1.02]"
              >
                <Rocket className="h-4 w-4" />
                Explore Projects
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition group-hover:translate-x-full" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </a>
            </div>

            {/* floating code card */}
            <div className="animate-float glass mx-auto mt-16 w-full max-w-xl rounded-2xl p-5 text-left font-mono text-xs sm:text-sm">
              <div className="mb-3 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                <span className="ml-3 text-muted-foreground">~/dev/portfolio</span>
              </div>
              <pre className="leading-relaxed text-muted-foreground">
<span className="text-primary">const</span> dev = {"{"}
{"\n  "}name: <span className="text-accent">'XXXXXX'</span>,
{"\n  "}role: <span className="text-accent">'Full Stack Developer'</span>,
{"\n  "}stack: [<span className="text-accent">'React'</span>, <span className="text-accent">'Node'</span>, <span className="text-accent">'TS'</span>],
{"\n  "}status: <span className="text-accent">'shipping ✨'</span>,
{"\n"}{"}"};
              </pre>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-2 gap-3 py-8 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.v} className="glass rounded-2xl p-5 text-center">
              <div className="font-display text-3xl font-bold text-gradient">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </section>

        {/* ABOUT */}
        <section id="about" className="py-24">
          <SectionLabel icon={Sparkles} eyebrow="01 / About" title="Engineering with intent" />
          <div className="mt-10 grid gap-6 md:grid-cols-5">
            <div className="glass-strong rounded-3xl p-8 md:col-span-3">
              <p className="text-lg leading-relaxed text-foreground/90">
                I'm a recent graduate obsessed with building software that's both{" "}
                <span className="text-primary">beautiful</span> and{" "}
                <span className="text-primary">blazing fast</span>. I love bridging design and
                engineering — turning ambiguous problems into shipped products.
              </p>
              <p className="mt-4 text-muted-foreground">
                My toolkit spans modern React, type-safe Node backends, and cloud-native deployments.
                I read source code for fun and contribute to open source on weekends.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
                {["TypeScript", "React", "Node.js", "PostgreSQL", "Docker", "AWS"].map((t) => (
                  <span key={t} className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-primary">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="glass rounded-3xl p-8 md:col-span-2">
              <div className="font-display text-xs uppercase tracking-widest text-muted-foreground">Currently</div>
              <ul className="mt-4 space-y-4">
                {[
                  { t: "Open to junior FS roles", s: "Remote / Hybrid" },
                  { t: "Learning system design", s: "Designing Data-Intensive Apps" },
                  { t: "Building side projects", s: "Always something cooking" },
                ].map((i) => (
                  <li key={i.t} className="flex items-start gap-3">
                    <ChevronRight className="mt-0.5 h-4 w-4 text-primary" />
                    <div>
                      <div className="text-sm font-semibold">{i.t}</div>
                      <div className="text-xs text-muted-foreground">{i.s}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-24">
          <SectionLabel icon={Cpu} eyebrow="02 / Skills" title="The stack I ship with" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SKILLS.map(({ icon: Icon, title, items }) => (
              <div
                key={title}
                className="group glass relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/20" />
                <div className="relative">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {items.map((i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-primary" /> {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-24">
          <SectionLabel icon={Rocket} eyebrow="03 / Projects" title="Selected work" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p, idx) => (
              <article
                key={p.title}
                className="group glass-strong relative overflow-hidden rounded-3xl p-7 transition hover:border-primary/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="font-mono text-xs uppercase tracking-widest text-primary">
                      {String(idx + 1).padStart(2, "0")} · {p.tag}
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-bold">{p.title}</h3>
                  </div>
                  <a
                    href="#"
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground transition group-hover:border-primary/50 group-hover:text-primary"
                    aria-label={`Open ${p.title}`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2 font-mono text-[11px]">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24">
          <div className="glass-strong relative overflow-hidden rounded-3xl p-10 text-center sm:p-16">
            <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
            <div className="relative">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-primary">
                <Globe className="h-3 w-3" /> Let's build something
              </div>
              <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-black sm:text-6xl">
                Have an idea? <span className="text-gradient">Let's ship it.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                I'm open to internships, full-time roles and freelance collaborations. The fastest
                way to reach me is email.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="mailto:hello@example.com"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_oklch(0.72_0.18_235/0.5)] transition hover:scale-[1.02]"
                >
                  <Mail className="h-4 w-4" /> hello@example.com
                </a>
                <a
                  href="https://github.com"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/5 py-8 text-center text-xs text-muted-foreground">
          <div className="font-mono">
            © {new Date().getFullYear()} XXXXXX · Crafted with <span className="text-primary">care</span> & caffeine
          </div>
        </footer>
      </main>
    </div>
  );
}

function SectionLabel({
  icon: Icon,
  eyebrow,
  title,
}: {
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex flex-col items-start gap-3">
      <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-primary">
        <Icon className="h-3.5 w-3.5" /> {eyebrow}
      </div>
      <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
    </div>
  );
}
