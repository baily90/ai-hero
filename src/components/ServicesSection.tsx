import { Shield, Eye, Fingerprint, Cpu, Radio, Lock } from 'lucide-react'
import FadeIn from './FadeIn'

const SERVICES = [
  {
    icon: Eye,
    title: 'AI Surveillance',
    desc: 'Intelligent video analytics with real-time threat detection. Our AI models identify anomalies, track movement patterns, and alert your team before incidents escalate.',
  },
  {
    icon: Shield,
    title: 'Zero-Trust Architecture',
    desc: 'Every access request verified, every identity authenticated. We build security perimeters that assume nothing and verify everything.',
  },
  {
    icon: Fingerprint,
    title: 'Access Control',
    desc: 'Biometric, card-based, and multi-factor systems deployed across your entire facility. Centralized management with granular permissions.',
  },
  {
    icon: Cpu,
    title: 'Threat Intelligence',
    desc: 'AI-powered threat analysis that learns your environment. Predictive models that anticipate vulnerabilities before they become breaches.',
  },
  {
    icon: Radio,
    title: 'Network Security',
    desc: 'End-to-end encrypted communication, intrusion detection, and automated response systems. Your digital infrastructure, fortified.',
  },
  {
    icon: Lock,
    title: 'Compliance & Audit',
    desc: 'SOC 2, ISO 27001, GDPR — we build systems that meet regulatory requirements from day one. Continuous monitoring and automated reporting.',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-background py-24 md:py-32 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="mb-16 md:mb-24">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">What We Do</p>
          <h2 className="text-foreground text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight max-w-2xl">
            Security solutions engineered for the <span className="text-primary">modern threat landscape</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.08}>
              <div className="group relative bg-secondary/50 border border-border/50 rounded-xl p-8 hover:border-primary/30 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground text-lg font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
