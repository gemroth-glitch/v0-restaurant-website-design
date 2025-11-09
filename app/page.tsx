import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Menu from "@/components/menu"
import Atmosphere from "@/components/atmosphere"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Atmosphere />
      <Contact />
      <Footer />
    </main>
  )
}
