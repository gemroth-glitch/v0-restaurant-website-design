import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen md:h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/elegant-italian-restaurant-interior-with-warm-ligh.jpg"
          alt="Elegantní italský interiér"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 py-8">
        <p className="section-subtitle text-white/80 mb-2 md:mb-4 tracking-widest text-xs md:text-sm">Vítejte v</p>
        <h1 className="elegant-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6">
          La Bella Cucina
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed px-2">
          Autentická italská kuchyně v srdci města. Tradice, vášeň a nejlepší suroviny od roku 2008.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-2">
          <button className="bg-primary text-primary-foreground px-6 md:px-8 py-2.5 md:py-3 rounded-sm hover:opacity-90 transition-opacity font-medium text-sm md:text-base w-full sm:w-auto">
            Rezervace stolu
          </button>
          <button className="border-2 border-white text-white px-6 md:px-8 py-2.5 md:py-3 rounded-sm hover:bg-white/10 transition-all font-medium text-sm md:text-base w-full sm:w-auto">
            Prohlédnout menu
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
