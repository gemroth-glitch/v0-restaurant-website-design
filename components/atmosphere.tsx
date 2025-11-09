import Image from "next/image"

export default function Atmosphere() {
  const images = [
    {
      src: "/cozy-italian-restaurant-interior-with-warm-lightin.jpg",
      alt: "Útulný prostor restaurace",
    },
    {
      src: "/wine-bottles-italian-wines-collection-restaurant.jpg",
      alt: "Sbírka italských vín",
    },
    {
      src: "/elegant-dining-table-with-candles-italian-restaura.jpg",
      alt: "Elegantní nastavený stůl",
    },
  ]

  return (
    <section id="atmosphere" className="py-12 md:py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <p className="section-subtitle text-primary mb-2 md:mb-4 text-xs md:text-sm">PROSTŘEDÍ</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Atmosféra plná italské vřelosti
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-64 sm:h-72 md:h-80 rounded-sm overflow-hidden hover-effect cursor-pointer group"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6">
          <p className="text-foreground/70 text-sm md:text-base lg:text-lg leading-relaxed">
            Naša restaurace je vybavena v tradičním italském stylu s pozorností na každý detail. Teplé osvětlení, měkké barvy a příjemná hudba vytvářejí ideální prostředí pro nezapomenutelné chvíle s přáteli a rodinou.
          </p>
          <p className="text-foreground/70 text-sm md:text-base lg:text-lg leading-relaxed">
            Máme kapacitu až 120 hostů a nabízíme soukromé prostory pro společenské akce a firemní večeře. Každý moment
            strávený v La Bella Cucina je chvílí posvátné magie.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-6 md:pt-8">
            <button className="bg-primary text-primary-foreground px-6 py-2.5 md:py-3 rounded-sm hover:opacity-90 transition-opacity font-medium text-sm md:text-base w-full sm:w-auto">
              Rezervace event
            </button>
            <button className="border-2 border-primary text-primary px-6 py-2.5 md:py-3 rounded-sm hover:bg-primary/10 transition-all font-medium text-sm md:text-base w-full sm:w-auto">
              Galerie fotosestav
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
