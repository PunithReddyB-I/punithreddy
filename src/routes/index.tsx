import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
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
  Server,
  Cloud,
  Shield,
  Wifi,
  Wrench,
  Zap,
  Download,
  Eye,
  Send,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PUNITH REDDY B — Full Stack & IoT Developer" },
      {
        name: "description",
        content:
          "Futuristic portfolio of PUNITH REDDY B, a Full Stack & IoT Developer building premium, performant web applications and smart IoT solutions.",
      },
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

const ROLES = [
  "Full Stack Developer",
  "Embedded Systems Engineer",
  "Problem Solver",
  "IoT Developer",
];

const STATS = [
  { k: "10+", v: "Projects Built" },
  { k: "25+", v: "Technologies" },
  { k: "2y", v: "Coding Journey" },
  { k: "100%", v: "Passion Driven" },
];

const PROFILE_STATS = [
  { icon: "👤", label: "Experience", value: "Fresher" },
  { icon: "🎓", label: "Degree", value: "B.Tech CSE" },
  { icon: "🔒", label: "Specialization", value: "IoT, Cyber Sec & Blockchain" },
  { icon: "📅", label: "Graduation", value: "2027" },
  { icon: "⚡", label: "Trait", value: "Fast Learner" },
  { icon: "🤝", label: "Trait", value: "Team Player" },
  { icon: "💡", label: "Trait", value: "Creativity" },
];

const SKILLS = [
  {
    icon: Code2,
    title: "Frontend",
    color: "oklch(0.72 0.18 235 / 0.15)",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "UI/UX Fundamentals",
      "Dashboard Development",
      "Responsive Web Design",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    color: "oklch(0.65 0.2 150 / 0.15)",
    items: [
      "Java",
      "Node.js",
      "Express.js",
      "Embedded C",
      "RESTful APIs",
      "Authentication & Authorization",
      "Server-Side Development",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & IoT Platforms",
    color: "oklch(0.7 0.15 200 / 0.15)",
    items: [
      "AWS IoT Core",
      "Microsoft Azure IoT",
      "Google Cloud Platform (GCP)",
      "Firebase",
      "ThingSpeak",
      "Blynk",
    ],
  },
  {
    icon: Cpu,
    title: "IoT & Embedded Systems",
    color: "oklch(0.68 0.18 280 / 0.15)",
    items: [
      "Arduino",
      "ESP32",
      "ESP8266",
      "Raspberry Pi",
      "STM32",
      "FPGA",
      "Sensor Integration",
      "Embedded Systems Design",
    ],
  },
  {
    icon: Wifi,
    title: "IoT Communication Protocols",
    color: "oklch(0.75 0.16 160 / 0.15)",
    items: ["MQTT", "HTTP/HTTPS", "TCP/IP", "UDP", "WebSockets", "I2C"],
  },
  {
    icon: Database,
    title: "Database",
    color: "oklch(0.65 0.2 30 / 0.15)",
    items: ["MySQL", "MongoDB", "Database Design", "Data Modeling"],
  },
  {
    icon: Wrench,
    title: "Tools",
    color: "oklch(0.7 0.15 80 / 0.15)",
    items: [
      "Git",
      "GitHub",
      "REST APIs",
      "VS Code",
      "PlatformIO",
      "Arduino IDE",
      "STM32CUBE IDE",
      "AMD/Xilinx",
      "Tinkercad",
    ],
  },
  {
    icon: Shield,
    title: "Networking & Security",
    color: "oklch(0.6 0.18 25 / 0.15)",
    items: [
      "Computer Networks",
      "Wi-Fi Configuration",
      "Network Troubleshooting",
      "IoT Security",
      "SSL/TLS",
      "Cybersecurity Fundamentals",
    ],
  },
  {
    icon: Zap,
    title: "Other",
    color: "oklch(0.78 0.18 90 / 0.15)",
    items: [
      "OOP",
      "Problem Solving",
      "Responsive Design",
      "Wi-Fi",
      "BLE",
      "Zigbee",
      "LoRaWAN",
    ],
  },
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

function useTypingEffect(texts: string[], speed = 80, deleteSpeed = 50, pause = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < current.length) {
        timer = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1));
        }, speed);
      } else {
        timer = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, texts, speed, deleteSpeed, pause]);

  return displayText;
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    resize();

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 1.5 + 0.5,
    }));

    let raf: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "oklch(0.72 0.18 235 / 0.5)";
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `oklch(0.72 0.18 235 / ${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

function Portfolio() {
  const [mx, setMx] = useState({ x: 50, y: 50 });
  const typingText = useTypingEffect(ROLES);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMx({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const aboutView = useInView<HTMLElement>();
  const skillsView = useInView<HTMLElement>();
  const projectsView = useInView<HTMLElement>();
  const contactView = useInView<HTMLElement>();

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
          <a
            href="#top"
            className="flex items-center gap-2 font-display text-sm font-bold tracking-widest"
          >
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary/20 text-primary">
              <Terminal className="h-4 w-4" />
            </span>
            <span className="text-gradient">PUNITH REDDY B</span>
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
          <ParticleCanvas />
          <div className="animate-fade-up relative z-10 text-center">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for opportunities
            </div>

            <h1 className="font-display text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
              <span className="block text-foreground">PUNITH</span>
              <span className="block text-gradient">REDDY B</span>
            </h1>

            <div className="mt-4 flex items-center justify-center gap-2 font-mono text-lg text-primary sm:text-xl">
              <span className="typing-cursor">{typingText}</span>
            </div>

            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Building Future with Code and Transforming Data into Smart
              Decisions
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground/80">
              Hi, I'm{" "}
              <span className="font-semibold text-foreground">
                PUNITH REDDY B
              </span>{" "}
              — a passionate{" "}
              <span className="text-primary">Full Stack & IoT Developer</span>{" "}
              focused on building modern, scalable web applications and
              connecting hardware to intelligence.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_oklch(0.72_0.18_235/0.5)] transition hover:scale-[1.02]"
              >
                <Eye className="h-4 w-4" />
                View Projects
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition group-hover:translate-x-full" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/10"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/10"
              >
                <Send className="h-4 w-4" />
                Contact Me
              </a>
            </div>

            {/* floating code card */}
            <div className="animate-float glass mx-auto mt-16 w-full max-w-xl rounded-2xl p-5 text-left font-mono text-xs sm:text-sm">
              <div className="mb-3 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                <span className="ml-3 text-muted-foreground">
                  ~/dev/portfolio
                </span>
              </div>
              <pre className="leading-relaxed text-muted-foreground">
                <span className="text-primary">const</span> dev = {"{"}
                {"\n"} name:{" "}
                <span className="text-accent">&apos;PUNITH REDDY B&apos;</span>
                ,{"\n"} role:{" "}
                <span className="text-accent">
                  &apos;Full Stack & IoT Developer&apos;
                </span>
                ,{"\n"} stack: [
                <span className="text-accent">&apos;React&apos;</span>,{" "}
                <span className="text-accent">&apos;Node&apos;</span>,{" "}
                <span className="text-accent">&apos;IoT&apos;</span>,{" "}
                <span className="text-accent">&apos;Embedded C&apos;</span>
                ],{"\n"} status:{" "}
                <span className="text-accent">&apos;shipping ✨&apos;</span>,
                {"\n"}
                {"}"};
              </pre>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-2 gap-3 py-8 sm:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.v}
              className="glass rounded-2xl p-5 text-center transition hover:-translate-y-0.5"
            >
              <div className="font-display text-3xl font-bold text-gradient">
                {s.k}
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </section>

        {/* ABOUT */}
        <section
          id="about"
          ref={aboutView.ref}
          className={`py-24 transition-all duration-700 ${
            aboutView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionLabel
            icon={Sparkles}
            eyebrow="01 / About"
            title="Engineering with intent"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-5">
            <div className="glass-strong rounded-3xl p-8 md:col-span-3">
              <p className="text-lg leading-relaxed text-foreground/90">
                Hi, I'm <span className="text-primary font-semibold">Punith Reddy B</span>, a passionate{" "}
                <span className="text-primary">Full Stack Developer</span> and{" "}
                <span className="text-primary">IoT engineer</span> focused on
                building modern, scalable, and user-friendly web applications
                and also connecting hardware to meet intelligence.
              </p>
              <p className="mt-4 text-muted-foreground">
                I enjoy turning ideas into real digital solutions through
                creative design. Currently, I am continuously learning and
                improving my skills in both frontend and backend technologies to
                become an industry-ready developer and also showing interest on
                interconnecting IoT devices with intelligence.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
                {[
                  "React",
                  "Node.js",
                  "IoT",
                  "Embedded C",
                  "Arduino",
                  "ESP32",
                  "Spring Boot",
                  "MongoDB",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="glass rounded-3xl p-8 md:col-span-2">
              <div className="font-display text-xs uppercase tracking-widest text-muted-foreground">
                Profile
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {PROFILE_STATS.map((stat) => (
                  <div
                    key={stat.label + stat.value}
                    className="rounded-xl border border-white/5 bg-white/[0.03] p-3 text-center"
                  >
                    <div className="text-lg">{stat.icon}</div>
                    <div className="mt-1 text-xs font-semibold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          ref={skillsView.ref}
          className={`py-24 transition-all duration-700 ${
            skillsView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionLabel
            icon={Cpu}
            eyebrow="02 / Skills"
            title="The stack I ship with"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map(({ icon: Icon, title, items, color }) => (
              <div
                key={title}
                className="group glass relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:border-primary/40"
              >
                <div
                  className="absolute -right-8 -top-8 h-28 w-28 rounded-full blur-2xl transition group-hover:opacity-100"
                  style={{ background: color, opacity: 0.6 }}
                />
                <div className="relative">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold">
                    {title}
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {items.map((i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-primary" />{" "}
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          ref={projectsView.ref}
          className={`py-24 transition-all duration-700 ${
            projectsView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionLabel
            icon={Rocket}
            eyebrow="03 / Projects"
            title="Selected work"
          />
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
                    <h3 className="mt-2 font-display text-2xl font-bold">
                      {p.title}
                    </h3>
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
                    <span
                      key={s}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-muted-foreground"
                    >
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
        <section
          id="contact"
          ref={contactView.ref}
          className={`py-24 transition-all duration-700 ${
            contactView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="glass-strong relative overflow-hidden rounded-3xl p-10 text-center sm:p-16">
            <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
            <div className="relative">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-primary">
                <Globe className="h-3 w-3" /> Let's build something
              </div>
              <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-black sm:text-6xl">
                Have an idea?{" "}
                <span className="text-gradient">Let's ship it.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                I'm open to internships, full-time roles and freelance
                collaborations. The fastest way to reach me is email.
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
            &copy; {new Date().getFullYear()} PUNITH REDDY B · Crafted with{" "}
            <span className="text-primary">care</span> & caffeine
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
