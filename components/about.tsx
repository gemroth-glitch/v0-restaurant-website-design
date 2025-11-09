import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-full rounded-sm overflow-hidden hover-effect order-2 md:order-1">
            <Image
              src="/italian-chef-preparing-fresh-pasta-in-restaurant-k.jpg"
              alt="Italský šéfkuchař připravující čerstvou těstovinu"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-4 md:space-y-6 order-1 md:order-2">
            <p className="section-subtitle text-primary text-xs md:text-sm">NAŠE PŘÍBĚH</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Tradice italské kuchyně s moderní vášní
            </h2>
            <p className="text-foreground/70 text-sm md:text-base lg:text-lg leading-relaxed">
              La Bella Cucina byla založena v roce 2008 s jedinou vášní - přinést autentickou italskou kuchyni do srdce
              našeho města. Naši šéfkuchaři cestovali po Itálii, aby se naučili tajemství tradičních receptů přímo od
              místních mistrů.
            </p>
            <p className="text-foreground/70 text-sm md:text-base lg:text-lg leading-relaxed">
              Používáme pouze nejlepší suroviny dovážené přímo z Itálie - od těstovin z Basilicaty až po olivový olej z
              Toskánska. Každé jídlo je připraveno s láskou, zájmem o detail a respektem k tradici.
            </p>
            <div className="pt-2 md:pt-4">
              <button className="bg-primary text-primary-foreground px-6 py-2.5 md:py-3 rounded-sm hover:opacity-90 transition-opacity font-medium text-sm md:text-base w-full sm:w-auto">
                Naše speciality
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
