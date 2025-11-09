export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <p className="section-subtitle text-primary mb-2 md:mb-4 text-xs md:text-sm">KONTAKTUJTE NÁS</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Moc se těšíme na vaši návštěvu</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12">
          {/* Address */}
          <div className="bg-card border border-border rounded-sm p-4 md:p-6 text-center hover-effect">
            <div className="flex justify-center mb-4">
              <span className="text-3xl text-primary">📍</span>
            </div>
            <h3 className="font-bold text-foreground mb-2 text-sm md:text-base">Adresa</h3>
            <p className="text-foreground/70 text-xs md:text-sm">
              Nerudova 42
              <br />
              110 00 Praha 1<br />
              Česká republika
            </p>
          </div>

          {/* Phone */}
          <div className="bg-card border border-border rounded-sm p-4 md:p-6 text-center hover-effect">
            <div className="flex justify-center mb-4">
              <span className="text-3xl text-primary">📞</span>
            </div>
            <h3 className="font-bold text-foreground mb-2 text-sm md:text-base">Telefon</h3>
            <p className="text-foreground/70 text-xs md:text-sm">
              +420 221 123 456
              <br />
              +420 777 456 789
              <br />
              <span className="text-xs">Pondělí - neděle</span>
            </p>
          </div>

          {/* Email */}
          <div className="bg-card border border-border rounded-sm p-4 md:p-6 text-center hover-effect">
            <div className="flex justify-center mb-4">
              <span className="text-3xl text-primary">✉️</span>
            </div>
            <h3 className="font-bold text-foreground mb-2 text-sm md:text-base">Email</h3>
            <p className="text-foreground/70 text-xs md:text-sm break-all">
              info@labelacucina.cz
              <br />
              rezervace@labelacucina.cz
            </p>
          </div>

          {/* Hours */}
          <div className="bg-card border border-border rounded-sm p-4 md:p-6 text-center hover-effect">
            <div className="flex justify-center mb-4">
              <span className="text-3xl text-primary">🕐</span>
            </div>
            <h3 className="font-bold text-foreground mb-2 text-sm md:text-base">Otevírací doba</h3>
            <p className="text-foreground/70 text-xs md:text-sm">
              Út - Čt: 11:00 - 23:00
              <br />
              Pá - So: 11:00 - 00:00
              <br />
              Neděle - Pondělí: Zavřeno
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-card border border-border rounded-sm p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Rezervujte si stůl</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <input
                type="text"
                placeholder="Vaše jméno"
                className="bg-background border border-border rounded-sm px-4 py-2.5 md:py-3 text-foreground text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Váš email"
                className="bg-background border border-border rounded-sm px-4 py-2.5 md:py-3 text-foreground text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <input
                type="date"
                className="bg-background border border-border rounded-sm px-4 py-2.5 md:py-3 text-foreground text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="time"
                className="bg-background border border-border rounded-sm px-4 py-2.5 md:py-3 text-foreground text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <input
              type="number"
              placeholder="Počet osob"
              min="1"
              max="12"
              className="w-full bg-background border border-border rounded-sm px-4 py-2.5 md:py-3 text-foreground text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Speciální přání (alergeny, oslavy, apod.)"
              rows={3}
              className="w-full bg-background border border-border rounded-sm px-4 py-2.5 md:py-3 text-foreground text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-2.5 md:py-3 rounded-sm hover:opacity-90 transition-opacity font-medium text-sm md:text-base"
            >
              Odeslat rezervaci
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
