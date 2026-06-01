import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react'
import FadeIn from './FadeIn'

const CONTACT_INFO = [
  { icon: MapPin, label: 'Location', value: 'Columbus, OH 43215' },
  { icon: Mail, label: 'Email', value: 'ops@sentinel-ai.com' },
  { icon: Phone, label: 'Phone', value: '+1 (614) 555-0172' },
]

export default function ContactSection() {
  return (
    <section id="contacts" className="relative bg-background py-24 md:py-32 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <FadeIn>
              <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">Get In Touch</p>
              <h2 className="text-foreground text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight mb-6">
                Ready to secure your{' '}
                <span className="text-primary">facility?</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed mb-10">
                Tell us about your security needs. We'll schedule a site assessment and
                deliver a custom proposal within 48 hours.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-6">
                {CONTACT_INFO.map((c) => (
                  <div key={c.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <c.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-widest mb-0.5">{c.label}</p>
                      <p className="text-foreground text-sm font-medium">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <form
              className="bg-secondary/40 border border-border/40 rounded-xl p-6 md:p-8 space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-foreground text-xs uppercase tracking-widest font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-hero-bg border border-border/60 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-foreground text-xs uppercase tracking-widest font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full bg-hero-bg border border-border/60 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-foreground text-xs uppercase tracking-widest font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full bg-hero-bg border border-border/60 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-foreground text-xs uppercase tracking-widest font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your facility and security requirements..."
                  className="w-full bg-hero-bg border border-border/60 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-semibold text-sm py-3.5 rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:brightness-110 transition-all active:scale-[0.98]"
              >
                Request Assessment
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-muted-foreground/50 text-xs text-center font-light">
                We respond within 24 hours. No spam, ever.
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
