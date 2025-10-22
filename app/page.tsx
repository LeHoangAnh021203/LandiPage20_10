import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Technology } from '../components/Technology'
import { Benefits } from '../components/Benefits'
import { BenefitsDetail } from '../components/BenefitsDetail'
import { Booking } from '../components/Booking'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Technology />
      <Benefits />
      <BenefitsDetail />
      <Booking />
      <Footer />
    </main>
  )
}
