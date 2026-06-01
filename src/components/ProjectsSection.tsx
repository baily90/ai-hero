import { ArrowUpRight } from 'lucide-react'
import FadeIn from './FadeIn'

const PROJECTS = [
  {
    num: '01',
    title: 'Apex Financial HQ',
    category: 'Enterprise',
    tags: ['AI Surveillance', 'Access Control', 'Zero-Trust'],
    desc: 'Complete security overhaul for a 40-floor financial headquarters. 200+ AI cameras, biometric access across 12 secure zones, and real-time threat analytics dashboard.',
    metrics: '200+ cameras · 12 zones · 3 week deploy',
  },
  {
    num: '02',
    title: 'MedCore Hospital Network',
    category: 'Healthcare',
    tags: ['HIPAA Compliance', 'Access Control', 'Monitoring'],
    desc: 'HIPAA-compliant security infrastructure across 4 hospital campuses. Integrated patient privacy zones with adaptive monitoring that respects clinical workflows.',
    metrics: '4 campuses · 850 access points · 99.99% uptime',
  },
  {
    num: '03',
    title: 'Forge Industrial Complex',
    category: 'Manufacturing',
    tags: ['Perimeter Defense', 'Network Security', 'IoT'],
    desc: 'AI-powered perimeter defense for a 200-acre manufacturing complex. Thermal imaging, drone detection, and integrated IoT sensor mesh for 24/7 coverage.',
    metrics: '200 acres · 24/7 coverage · <2s alert time',
  },
  {
    num: '04',
    title: 'Citadel Data Centers',
    category: 'Infrastructure',
    tags: ['Zero-Trust', 'Biometric', 'SOC 2'],
    desc: 'Tier-4 data center security with multi-layer biometric authentication, man-trap entries, and SOC 2 Type II certified monitoring infrastructure.',
    metrics: '3 facilities · Tier 4 · SOC 2 certified',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-background py-24 md:py-32 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="mb-16 md:mb-24">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">Our Work</p>
          <h2 className="text-foreground text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight max-w-2xl">
            Deployed. Operational. <span className="text-primary">Trusted.</span>
          </h2>
        </FadeIn>

        <div className="space-y-6">
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.num} delay={i * 0.08}>
              <div className="group bg-secondary/30 border border-border/40 rounded-xl p-6 md:p-10 hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
                  <div className="flex items-center gap-4 lg:gap-6 flex-shrink-0">
                    <span className="text-primary/20 text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-none tracking-tight">
                      {p.num}
                    </span>
                    <div className="lg:hidden">
                      <p className="text-muted-foreground text-xs uppercase tracking-widest mb-1">{p.category}</p>
                      <h3 className="text-foreground text-xl font-semibold">{p.title}</h3>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="hidden lg:block mb-3">
                      <p className="text-muted-foreground text-xs uppercase tracking-widest mb-1">{p.category}</p>
                      <h3 className="text-foreground text-2xl font-semibold">{p.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed mb-4 max-w-2xl">
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs text-primary/80 bg-primary/8 border border-primary/15 rounded-full px-3 py-1 uppercase tracking-wider"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="text-muted-foreground/60 text-xs font-light tracking-wide">{p.metrics}</p>
                  </div>

                  <div className="flex-shrink-0 self-center">
                    <div className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
