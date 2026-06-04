import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)

    const delayTimer = setTimeout(() => {
      let index = 0
      const interval = setInterval(() => {
        index++
        setDisplayed(text.slice(0, index))
        if (index >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
      return () => clearInterval(interval)
    }, startDelay)

    return () => clearTimeout(delayTimer)
  }, [text, speed, startDelay])

  return { displayed, done }
}

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4'

const SERVICE_OPTIONS = ['Brand', 'Digital', 'Campaign', 'Other']

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [services, setServices] = useState<string[]>([])
  const { displayed, done } = useTypewriter("we'd love to\nhear from you!", 38, 600)

  const toggleService = useCallback((service: string) => {
    setServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    )
  }, [])

  // Desktop mouse scrubbing with RAF interpolation
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let prevX = -1
    let targetTime = 0
    let currentTime = 0
    let rafId = 0
    let isSeeking = false

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const tick = () => {
      if (!video.duration) {
        rafId = requestAnimationFrame(tick)
        return
      }

      const diff = Math.abs(targetTime - currentTime)
      if (diff > 0.001) {
        currentTime = lerp(currentTime, targetTime, 0.08)
        if (!isSeeking) {
          isSeeking = true
          video.currentTime = currentTime
        }
      }

      rafId = requestAnimationFrame(tick)
    }

    const handleSeeked = () => {
      isSeeking = false
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return
      if (!video.duration) return

      const currentX = e.clientX
      if (prevX < 0) {
        prevX = currentX
        return
      }

      const delta = currentX - prevX
      prevX = currentX

      targetTime += (delta / window.innerWidth) * 0.8 * video.duration
      targetTime = Math.max(0, Math.min(targetTime, video.duration))
    }

    video.addEventListener('seeked', handleSeeked)
    window.addEventListener('mousemove', handleMouseMove)
    rafId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', handleMouseMove)
      video.removeEventListener('seeked', handleSeeked)
    }
  }, [])

  // Mobile autoplay
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const enableAutoplay = () => {
      if (window.innerWidth < 1024) {
        video.autoplay = true
        video.play().catch(() => {})
      }
    }

    enableAutoplay()
    window.addEventListener('resize', enableAutoplay)
    return () => window.removeEventListener('resize', enableAutoplay)
  }, [])

  return (
    <>
      {/* Background Video */}
      <div className="order-last lg:order-none relative lg:absolute lg:inset-0 lg:z-0 overflow-hidden pointer-events-none w-full aspect-square md:aspect-video lg:aspect-auto lg:h-full bg-neutral-50 lg:bg-transparent">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-right lg:object-right-bottom"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col order-first lg:order-none w-full bg-white lg:bg-transparent pb-8 lg:pb-0 lg:min-h-screen">
        <main
          id="spade-hero"
          className="w-full max-w-7xl mx-auto px-6 py-12 flex-1 flex flex-col justify-center"
        >
          {/* Typewriter Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-[76px] font-normal tracking-tight text-black leading-[1.08] mb-8 select-none w-full whitespace-pre-wrap">
              {displayed}
              {!done && (
                <span className="inline-block w-[2px] h-[1.1em] bg-black align-middle ml-[2px] animate-blink" />
              )}
            </h1>
          </motion.div>

          {/* Secondary Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg md:text-xl text-[#5A635A] leading-relaxed font-normal mb-14 max-w-2xl">
              Whether you have questions, feedback, <br />
              drop us a message and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          {/* Service Pills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-medium tracking-tight mb-2">
              What sort of service?
            </h2>
            <p className="opacity-85 text-[#738273] mb-8">Select all that apply</p>

            <div className="flex flex-wrap gap-3 mb-6">
              {SERVICE_OPTIONS.map((service) => {
                const isActive = services.includes(service)
                return (
                  <motion.button
                    key={service}
                    onClick={() => toggleService(service)}
                    whileTap={{ scale: 0.97 }}
                    className={`px-6 py-3 rounded-full text-base font-medium transition-colors cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? 'bg-[#1C2E1E] text-white shadow-md shadow-emerald-950/5'
                        : 'bg-white text-[#1C2E1E] border border-[#F1F3F1] hover:bg-[#F1F3F1]/55'
                    }`}
                  >
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          initial={{ scale: 0, width: 0 }}
                          animate={{ scale: 1, width: 'auto' }}
                          exit={{ scale: 0, width: 0 }}
                          transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 20,
                          }}
                          className="overflow-hidden flex items-center"
                        >
                          <Check size={16} strokeWidth={2.5} />
                        </motion.span>
                      )}
                    </AnimatePresence>
                    {service}
                  </motion.button>
                )
              })}
            </div>

            {/* Feedback Status Banner */}
            <AnimatePresence mode="wait">
              {services.length === 0 ? (
                <motion.p
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  className="italic text-xs text-[#738273]"
                >
                  Please click to select services above.
                </motion.p>
              ) : (
                <motion.div
                  key="active"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="overflow-hidden"
                >
                  <div className="bg-[#FAFBF9] border border-[#F1F3F1] rounded-2xl px-5 py-4 flex items-center justify-between gap-4">
                    <p className="text-sm text-[#5A635A]">
                      Ready to inquire about:{' '}
                      <span className="font-medium text-[#1C2E1E]">
                        {services.join(', ')}
                      </span>
                    </p>
                    <button className="flex items-center gap-1.5 text-[#4D6D47] uppercase text-xs font-semibold tracking-wide hover:opacity-70 transition-opacity cursor-pointer shrink-0">
                      Let's Go
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </main>
      </div>
    </>
  )
}
