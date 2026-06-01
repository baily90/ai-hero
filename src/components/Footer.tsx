export default function Footer() {
  return (
    <footer className="bg-hero-bg border-t border-border/30 py-12 md:py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          <div className="md:col-span-1">
            <p className="text-foreground text-xl font-semibold tracking-tight mb-4">SENTINEL</p>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              Enterprise security systems powered by artificial intelligence. Columbus, OH.
            </p>
          </div>

          <div>
            <p className="text-foreground text-xs uppercase tracking-widest font-semibold mb-4">Services</p>
            <div className="space-y-2.5">
              {['AI Surveillance', 'Access Control', 'Zero-Trust', 'Threat Intel', 'Compliance'].map((s) => (
                <p key={s} className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors cursor-pointer">{s}</p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-foreground text-xs uppercase tracking-widest font-semibold mb-4">Company</p>
            <div className="space-y-2.5">
              {['About Us', 'Projects', 'Team', 'Careers', 'Blog'].map((s) => (
                <p key={s} className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors cursor-pointer">{s}</p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-foreground text-xs uppercase tracking-widest font-semibold mb-4">Legal</p>
            <div className="space-y-2.5">
              {['Privacy Policy', 'Terms of Service', 'Security', 'Compliance'].map((s) => (
                <p key={s} className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors cursor-pointer">{s}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground/50 text-xs font-light">
            &copy; 2026 SENTINEL AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Twitter', 'LinkedIn', 'GitHub'].map((s) => (
              <span key={s} className="text-muted-foreground/50 text-xs font-light hover:text-foreground transition-colors cursor-pointer">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
