"use client"

import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-primary font-serif text-2xl font-bold">𝑳𝒂 𝑩𝒆𝒍𝒍𝒂</div>
            <span className="text-foreground/60 text-sm">Italská Kuchyně</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              O nás
            </a>
            <a href="#menu" className="text-foreground hover:text-primary transition-colors">
              Menu
            </a>
            <a href="#atmosphere" className="text-foreground hover:text-primary transition-colors">
              Prostředí
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Kontakt
            </a>
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-sm hover:opacity-90 transition-opacity font-medium">
              Rezervace
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              O nás
            </a>
            <a href="#menu" className="text-foreground hover:text-primary transition-colors">
              Menu
            </a>
            <a href="#atmosphere" className="text-foreground hover:text-primary transition-colors">
              Prostředí
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Kontakt
            </a>
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-sm hover:opacity-90 transition-opacity w-full font-medium">
              Rezervace
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
