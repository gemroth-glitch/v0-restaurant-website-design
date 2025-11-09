import Image from "next/image"

export default function Menu() {
  const categories = [
    {
      name: "Předkrmy",
      items: [
        { name: "Bruschetta al pomodoro", price: 145 },
        { name: "Caprese - mozzarella, rajčata, bazalka", price: 160 },
        { name: "Calamari fritti", price: 185 },
      ],
      icon: "🍝",
    },
    {
      name: "Těstoviny",
      items: [
        { name: "Spaghetti Carbonara", price: 340 },
        { name: "Pappardelle al cinghiale", price: 365 },
        { name: "Lasagne della Nonna", price: 350 },
      ],
      icon: "🍝",
    },
    {
      name: "Hlavní chody",
      items: [
        { name: "Osso Buco - telecí holeň na vínku", price: 385 },
        { name: "Branzino al forno - pečená ryba", price: 395 },
        { name: "Saltimbocca alla romana", price: 370 },
      ],
      icon: "🍖",
    },
    {
      name: "Dezerty",
      items: [
        { name: "Tiramisu - klasika třídy", price: 195 },
        { name: "Panna cotta s lesními plody", price: 210 },
        { name: "Panettone", price: 190 },
      ],
      icon: "🍰",
    },
  ]

  return (
    <section id="menu" className="py-12 md:py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <p className="section-subtitle text-primary mb-2 md:mb-4 text-xs md:text-sm">NAŠE NABÍDKA</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
            Autentické italské pokrmy
          </h2>
          <p className="text-foreground/60 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2">
            Každý pokrm je připraven dle tradičních receptů s nejlepšími čerstvými surovinami
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12">
          {categories.map((category) => (
            <div key={category.name} className="bg-card rounded-sm p-4 md:p-6 hover-effect border border-border">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">{category.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">{category.name}</h3>
              <ul className="space-y-2 md:space-y-3">
                {category.items.map((item) => (
                  <li key={item.name} className="flex justify-between items-start gap-2 text-xs md:text-sm">
                    <span className="text-foreground/70">• {item.name}</span>
                    <span className="text-primary font-semibold whitespace-nowrap">{item.price} Kč</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-sm overflow-hidden hover-effect">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 sm:h-80 md:h-96 md:order-1">
              <Image
                src="/delicious-italian-pasta-dish-with-fresh-ingredient.jpg"
                alt="Specialita restaurace - Pappardelle al cinghiale"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
              <p className="section-subtitle text-primary mb-2 md:mb-4 text-xs md:text-sm">SPECIÁLEK TÝDNE</p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
                Pappardelle al Cinghiale
              </h3>
              <p className="text-foreground/70 text-sm md:text-base lg:text-lg mb-6 leading-relaxed">
                Širokých těstovinách v lahodné omáčce z divokého prasete, aromatických bylinek a velkých rajčat.
                Receptura rodiny Marchetti z Toskánska, která si ji hlídá přes generace.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <span className="text-xl md:text-2xl font-bold text-primary">385 Kč</span>
                <button className="bg-primary text-primary-foreground px-6 py-2 md:py-2.5 rounded-sm hover:opacity-90 transition-opacity font-medium text-sm md:text-base w-full sm:w-auto">
                  Objednat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
