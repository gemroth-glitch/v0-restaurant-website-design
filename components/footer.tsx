export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3 md:space-y-4">
            <div className="text-primary font-serif text-xl md:text-2xl font-bold">𝑳𝒂 𝑩𝒆𝒍𝒍𝒂 𝑪𝒖𝒄𝒊𝒏𝒂</div>
            <p className="text-secondary-foreground/80 text-xs md:text-sm leading-relaxed">
              Autentická italská kuchyně v srdci Prahy od roku 2008. Tradice, vášeň a nejlepší suroviny.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Odkazy</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-secondary-foreground/80">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  O nás
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-primary transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#atmosphere" className="hover:text-primary transition-colors">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Informace</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-secondary-foreground/80">
              <li>Nerudova 42, Praha 1</li>
              <li>+420 221 123 456</li>
              <li>info@labelacucina.cz</li>
              <li className="pt-2">
                <a href="#" className="text-primary hover:underline">
                  Osobní údaje
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Sociální sítě</h4>
            <div className="flex gap-4 text-xl">
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                f
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                📷
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                🌴
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-xs md:text-sm text-secondary-foreground/70">
              © 2025 La Bella Cucina. Všechna práva vyhrazena.
            </p>
            <p className="text-xs text-secondary-foreground/60 text-left md:text-right leading-relaxed">
              <strong>Credits:</strong> Vytvořeno v0.app • Designem inspirováno luxusními restauračními weby • AI
              generované obrázky
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
