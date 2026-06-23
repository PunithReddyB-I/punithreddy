import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Code2,
  Database,
  Cpu,
  Sparkles,
  Terminal,
  Rocket,
  Globe,
  Server,
  Cloud,
  Shield,
  Wifi,
  Wrench,
  Zap,
  Download,
  Eye,
  Send,
  GraduationCap,
  Target,
  ShoppingCart,
  Activity,
  CheckSquare,
  User,
  Network,
  Car,
  Briefcase,
  Phone,
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
  { label: "Education", href: "#education" },
  { label: "Goals", href: "#goals" },
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
  { icon: "📅", label: "Graduation", value: "2026" },
  { icon: "⚡", label: "Trait", value: "Fast Learner" },
  { icon: "🤝", label: "Trait", value: "Team Player" },
  { icon: "💡", label: "Trait", value: "Creativity" },
];

const SKILLS = [
  {
    icon: Code2,
    title: "Frontend",
    color: "oklch(0.72 0.18 235 / 0.15)",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Bootstrap", "Responsive Design"],
  },
  {
    icon: Server,
    title: "Backend",
    color: "oklch(0.65 0.2 150 / 0.15)",
    items: ["Java", "Spring Boot", "Node.js", "Express.js", "Embedded C", "REST APIs"],
  },
  {
    icon: Cloud,
    title: "Cloud & IoT Platforms",
    color: "oklch(0.7 0.15 200 / 0.15)",
    items: ["AWS IoT Core", "Azure IoT", "GCP", "Firebase", "ThingSpeak", "Blynk"],
  },
  {
    icon: Cpu,
    title: "IoT & Embedded",
    color: "oklch(0.68 0.18 280 / 0.15)",
    items: ["Arduino", "ESP32", "ESP8266", "Raspberry Pi", "STM32", "FPGA", "Sensor Integration"],
  },
  {
    icon: Wifi,
    title: "IoT Protocols",
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
    items: ["Git", "GitHub", "VS Code", "PlatformIO", "Arduino IDE", "STM32CUBE IDE", "Tinkercad"],
  },
  {
    icon: Shield,
    title: "Networking & Security",
    color: "oklch(0.6 0.18 25 / 0.15)",
    items: ["Computer Networks", "Wi-Fi Config", "IoT Security", "SSL/TLS", "Cybersecurity"],
  },
  {
    icon: Zap,
    title: "Other",
    color: "oklch(0.78 0.18 90 / 0.15)",
    items: ["OOP", "Problem Solving", "BLE", "Zigbee", "LoRaWAN"],
  },
];

type Project = {
  title: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
  stack: string[];
  highlights?: string[];
  status: "shipped" | "coming";
};

const PROJECTS: Project[] = [
  {
    title: "SmartCart — Full Stack E-Commerce",
    tag: "Full Stack",
    icon: ShoppingCart,
    status: "shipped",
    desc: "Full-stack E-Commerce platform with secure auth, product management, cart, payment gateway integration and a responsive UI.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe", "Razorpay", "Bootstrap"],
    highlights: [
      "Customer: auth, browsing, cart, orders, payments",
      "Admin: products, categories, inventory, orders",
      "Secure transactions & scalable architecture",
    ],
  },
  {
    title: "Smart Energy Monitoring System",
    tag: "IoT",
    icon: Activity,
    status: "shipped",
    desc: "Monitors real-time power consumption of appliances with analytics, overload detection and a mobile dashboard.",
    stack: ["Arduino", "ESP32", "ACS712", "OLED", "Wi-Fi", "MQTT"],
    highlights: [
      "Real-time energy monitoring",
      "Power consumption analytics",
      "Overload detection alerts",
    ],
  },
  {
    title: "Task Management System",
    tag: "Full Stack",
    icon: CheckSquare,
    status: "coming",
    desc: "Productivity app for teams with boards, tasks, due dates and realtime collaboration.",
    stack: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    tag: "Frontend",
    icon: User,
    status: "coming",
    desc: "Personal portfolio website showcasing projects, skills and experience with smooth animations.",
    stack: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Network Packet Sniffer",
    tag: "Cyber Security",
    icon: Network,
    status: "coming",
    desc: "Educational packet capture & analysis tool for inspecting protocols and traffic on a local network.",
    stack: ["Python", "Scapy", "Networking"],
  },
  {
    title: "Collision-Avoidance Robotic Vehicle",
    tag: "Robotics / IoT",
    icon: Car,
    status: "coming",
    desc: "Autonomous robotic vehicle using ultrasonic sensors and motor control to navigate around obstacles in real time.",
    stack: ["Arduino", "Ultrasonic", "Embedded C"],
  },
];

const EDUCATION = [
  {
    year: "2022 — 2026",
    title: "B.Tech — Computer Science Engineering",
    org: "Cambridge Institute of Technology",
    detail: "Specialization: IoT, Cyber Security & Blockchain Technology",
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
        timer = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), speed);
      } else {
        timer = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => setDisplayText(displayText.slice(0, -1)), deleteSpeed);
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

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
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
  const educationView = useInView<HTMLElement>();
  const goalsView = useInView<HTMLElement>();
  const contactView = useInView<HTMLElement>();

  const active = useActiveSection(["about", "skills", "projects", "education", "goals", "contact"]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
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
            <span className="text-gradient hidden sm:inline">PUNITH REDDY B</span>
            <span className="text-gradient sm:hidden">PRB</span>
          </a>
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => {
              const id = n.href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className={`rounded-lg px-3 py-1.5 text-sm transition ${
                      isActive
                        ? "bg-primary/15 text-primary shadow-[0_0_20px_oklch(0.72_0.18_235/0.25)]"
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    }`}
                  >
                    {n.label}
                  </a>
                </li>
              );
            })}
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

            <p className="mt-3 font-display text-base uppercase tracking-[0.35em] text-muted-foreground sm:text-lg">
              Full Stack Developer &amp; IoT Developer
            </p>

            <div className="mt-4 flex items-center justify-center gap-2 font-mono text-lg text-primary sm:text-xl">
              <span className="typing-cursor">{typingText}</span>
            </div>

            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Building Future with Code and Transforming Data into Smart Decisions
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
          </div>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-2 gap-3 py-8 sm:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.v}
              className="glass rounded-2xl p-5 text-center transition hover:-translate-y-0.5"
            >
              <div className="font-display text-3xl font-bold text-gradient">{s.k}</div>
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
          className={`scroll-mt-28 py-24 transition-all duration-700 ${
            aboutView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionLabel icon={Sparkles} eyebrow="01 / About" title="Engineering with intent" />
          <div className="mt-10 grid gap-6 md:grid-cols-5">
            <div className="glass-strong rounded-3xl p-8 md:col-span-3">
              <p className="text-lg leading-relaxed text-foreground/90">
                Hi, I'm <span className="text-primary font-semibold">Punith Reddy B</span>, a passionate{" "}
                <span className="text-primary">Full Stack Developer</span> and{" "}
                <span className="text-primary">IoT engineer</span> focused on building modern,
                scalable, and user-friendly web applications, and connecting hardware with
                intelligence.
              </p>
              <p className="mt-4 text-muted-foreground">
                I enjoy turning ideas into real digital solutions through creative design.
                Currently, I am continuously learning and improving my skills in both frontend and
                backend technologies, while exploring how IoT devices can become smarter through
                data and connectivity — on a mission to become an industry-ready developer.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
                {["React", "Node.js", "IoT", "Embedded C", "Arduino", "ESP32", "Spring Boot", "MongoDB"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-primary"
                    >
                      {t}
                    </span>
                  )
                )}
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
                    <div className="mt-1 text-xs font-semibold text-foreground">{stat.value}</div>
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
          className={`scroll-mt-28 py-24 transition-all duration-700 ${
            skillsView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionLabel icon={Cpu} eyebrow="02 / Skills" title="The stack I ship with" />
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
                  <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {items.map((i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-primary" /> {i}
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
          className={`scroll-mt-28 py-24 transition-all duration-700 ${
            projectsView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionLabel icon={Rocket} eyebrow="03 / Projects" title="Selected work" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p, idx) => {
              const Icon = p.icon;
              const isComing = p.status === "coming";
              return (
                <article
                  key={p.title}
                  className="group glass-strong relative overflow-hidden rounded-3xl p-7 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_60px_-20px_oklch(0.72_0.18_235/0.4)]"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  />
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-3">
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-mono text-[11px] uppercase tracking-widest text-primary">
                            {String(idx + 1).padStart(2, "0")} · {p.tag}
                          </div>
                          {isComing && (
                            <div className="mt-0.5 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                              Coming soon
                            </div>
                          )}
                        </div>
                      </div>
                      <h3 className="mt-4 font-display text-2xl font-bold">{p.title}</h3>
                    </div>
                    <a
                      href="#"
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground transition group-hover:border-primary/50 group-hover:text-primary"
                      aria-label={`Open ${p.title}`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="relative mt-4 text-sm text-muted-foreground">{p.desc}</p>
                  {p.highlights && (
                    <ul className="relative mt-4 space-y-1.5 text-sm text-foreground/80">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="relative mt-5 flex flex-wrap gap-2 font-mono text-[11px]">
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
              );
            })}
          </div>
        </section>

        {/* EDUCATION */}
        <section
          id="education"
          ref={educationView.ref}
          className={`scroll-mt-28 py-24 transition-all duration-700 ${
            educationView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionLabel icon={GraduationCap} eyebrow="04 / Education" title="Academic journey" />
          <div className="relative mt-10 ml-3 border-l border-primary/30 pl-8">
            {EDUCATION.map((e) => (
              <div key={e.title} className="relative pb-8 last:pb-0">
                <span className="absolute -left-[42px] top-1 grid h-6 w-6 place-items-center rounded-full border border-primary/40 bg-background">
                  <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_oklch(0.72_0.18_235/0.9)]" />
                </span>
                <div className="glass-strong rounded-2xl p-6">
                  <div className="font-mono text-xs uppercase tracking-widest text-primary">
                    {e.year}
                  </div>
                  <h3 className="mt-1 font-display text-xl font-bold">{e.title}</h3>
                  <div className="mt-1 text-sm text-foreground/80">{e.org}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GOALS / EXPERIENCE */}
        <section
          id="goals"
          ref={goalsView.ref}
          className={`scroll-mt-28 py-24 transition-all duration-700 ${
            goalsView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionLabel icon={Target} eyebrow="05 / Experience & Goals" title="What I'm chasing" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="glass-strong rounded-3xl p-8">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-bold">Experience</h3>
              </div>
              <p className="mt-4 text-foreground/90">
                Fresher · Open to internships and entry-level full-time roles.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Strong fundamentals in full stack development and IoT, sharpened through hands-on
                projects, hackathons and continuous self-learning.
              </p>
            </div>
            <div className="glass-strong rounded-3xl p-8">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-bold">Career Goal</h3>
              </div>
              <p className="mt-4 text-foreground/90">
                Seeking opportunities as a{" "}
                <span className="text-primary">Full Stack Developer</span> and{" "}
                <span className="text-primary">IoT Developer</span> where I can contribute, learn
                and grow by building impactful software and hardware solutions.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          ref={contactView.ref}
          className={`scroll-mt-28 py-24 transition-all duration-700 ${
            contactView.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionLabel icon={Globe} eyebrow="06 / Contact" title="Let's build together" />
          <div className="mt-10 grid gap-6 md:grid-cols-5">
            <div className="glass-strong rounded-3xl p-8 md:col-span-2">
              <h3 className="font-display text-2xl font-bold">Get in touch</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Have an idea, role, or collaboration in mind? Drop a message — I usually reply
                within a day.
              </p>
              <div className="mt-6 space-y-3 text-sm">
                <a
                  href="mailto:punithnik8088@gmail.com"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-primary/40 hover:bg-primary/5"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="truncate">punithnik8088@gmail.com</span>
                </a>
                <a
                  href="https://github.com"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-primary/40 hover:bg-primary/5"
                >
                  <Github className="h-4 w-4 text-primary" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-primary/40 hover:bg-primary/5"
                >
                  <Linkedin className="h-4 w-4 text-primary" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        <footer className="border-t border-white/5 py-8 text-center">
          <div className="font-mono text-xs text-muted-foreground">
            &copy; 2026 <span className="text-foreground">Punith Reddy B</span>. Built with{" "}
            <span className="text-primary">passion</span> and code.
          </div>
        </footer>
      </main>
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`);
    window.location.href = `mailto:punithnik8088@gmail.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  const inputCls =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-primary/60 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_oklch(0.72_0.18_235/0.18)]";

  return (
    <form onSubmit={onSubmit} className="glass-strong rounded-3xl p-8 md:col-span-3 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Name
          </label>
          <input
            required
            maxLength={100}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={`${inputCls} mt-2`}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Email
          </label>
          <input
            required
            type="email"
            maxLength={255}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`${inputCls} mt-2`}
            placeholder="you@email.com"
          />
        </div>
      </div>
      <div>
        <label className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          Message
        </label>
        <textarea
          required
          maxLength={1000}
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputCls} mt-2 resize-none`}
          placeholder="Tell me about your project or role..."
        />
      </div>
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="submit"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_oklch(0.72_0.18_235/0.5)] transition hover:scale-[1.02]"
        >
          <Send className="h-4 w-4" />
          Send Message
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition group-hover:translate-x-full" />
        </button>
        <a
          href="mailto:punithnik8088@gmail.com"
          className="inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-primary/20"
        >
          <Phone className="h-4 w-4" /> Hire Me
        </a>
        {status === "sent" && (
          <span className="font-mono text-xs text-primary">
            ✓ Opening your mail client…
          </span>
        )}
      </div>
    </form>
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
