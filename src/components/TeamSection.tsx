import { Linkedin } from 'lucide-react'
import FadeIn from './FadeIn'

const TEAM = [
  {
    name: 'Jack Morrison',
    role: 'Founder & CEO',
    bio: 'Ex-DoD cybersecurity lead. 15 years building defense-grade security infrastructure for Fortune 500 companies.',
    avatar: 'JM',
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    bio: 'Former Google AI researcher. Pioneered real-time threat detection models used across critical infrastructure worldwide.',
    avatar: 'SC',
  },
  {
    name: 'Marcus Webb',
    role: 'VP Engineering',
    bio: 'Built security platforms at AWS and Cloudflare. Specializes in zero-trust architecture and edge security.',
    avatar: 'MW',
  },
  {
    name: 'Elena Kowalski',
    role: 'Head of Operations',
    bio: 'Managed security deployments across 200+ sites. SOC 2 auditor and compliance specialist.',
    avatar: 'EK',
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="relative bg-hero-bg py-24 md:py-32 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="mb-16 md:mb-24">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">Our Team</p>
          <h2 className="text-foreground text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight max-w-2xl">
            Security veterans who've{' '}
            <span className="text-primary">been in the trenches</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((m, i) => (
            <FadeIn key={m.name} delay={i * 0.1}>
              <div className="group bg-secondary/40 border border-border/40 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <span className="text-primary font-semibold text-lg">{m.avatar}</span>
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-1">{m.name}</h3>
                <p className="text-primary text-xs uppercase tracking-widest font-medium mb-4">{m.role}</p>
                <p className="text-muted-foreground text-sm font-light leading-relaxed flex-1">{m.bio}</p>
                <div className="mt-5 pt-5 border-t border-border/30">
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-xs uppercase tracking-widest cursor-pointer">
                    <Linkedin className="w-4 h-4" />
                    Connect
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
