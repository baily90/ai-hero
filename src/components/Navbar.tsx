import { useState } from 'react'

const NAV_LINKS = ['Labs', 'Studio', 'Openings', 'Shop']

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-10 px-5 sm:px-8 py-4 sm:py-5 flex flex-row justify-between items-center bg-transparent">
        {/* Logo */}
        <a href="#" className="flex flex-row items-center gap-3">
          <span className="text-[21px] sm:text-[26px] tracking-tight text-black font-medium select-none">
            Mainframe&reg;
          </span>
          <span className="text-[25px] sm:text-[30px] text-black select-none tracking-[-0.02em] font-medium leading-none mb-1">
            &#10033;
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center text-[23px] text-black">
          {NAV_LINKS.map((link, i) => (
            <span key={link} className="flex items-center">
              <a href="#" className="hover:opacity-60 transition-opacity">
                {link}
              </a>
              {i < NAV_LINKS.length - 1 && (
                <span className="opacity-40">,&nbsp;</span>
              )}
            </span>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#"
          className="hidden md:inline text-[23px] text-black underline underline-offset-2 hover:opacity-60 transition-opacity"
        >
          Get in touch
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 relative z-[11]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-[9] bg-white/95 backdrop-blur-sm md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="text-3xl text-black hover:opacity-60 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link}
          </a>
        ))}
        <a
          href="#"
          className="text-2xl text-black underline underline-offset-4 hover:opacity-60 transition-opacity mt-4"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Get in touch
        </a>
      </div>
    </>
  )
}
