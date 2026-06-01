import { CheckCircle2 } from 'lucide-react'
import FadeIn from './FadeIn'

const STATS = [
  { value: '12+', label: 'Systems Deployed' },
  { value: '99.9%', label: 'Uptime Guarantee' },
  { value: '<4h', label: 'Response Time' },
  { value: '5yr', label: 'Avg. Partnership' },
]

const PRINCIPLES = [
  'Zero-trust by default, not as an afterthought',
  'AI-first approach to threat detection and prevention',
  'Deployed in days, not months — without cutting corners',
  'On-call security engineering, not just a helpdesk',
  '24/7 monitoring with human-in-the-loop escalation',
]

export default function AboutSection() {
  return (
    <section id="about-us" className="relative bg-hero-bg py-24 md:py-32 px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <FadeIn>
              <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">About Us</p>
              <h2 className="text-foreground text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight mb-6">
                We don't just install cameras.{' '}
                <span className="text-primary">We architect safety.</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed mb-8">
                SENTINEL AI was founded in Columbus, Ohio with a single conviction: enterprise security
                should be intelligent, not just installed. We combine military-grade infrastructure with
                cutting-edge AI to build systems that think, learn, and adapt.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-4">
                {PRINCIPLES.map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm font-light">{p}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`bg-secondary/60 border border-border/40 rounded-xl p-6 md:p-8 ${i === 0 ? 'border-primary/30' : ''}`}
                >
                  <p className="text-primary text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight leading-none mb-2">
                    {s.value}
                  </p>
                  <p className="text-muted-foreground text-xs uppercase tracking-widest font-medium">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
