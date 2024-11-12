import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ShopByColor from "@/components/ShopByColor"
import TopRated from "@/components/TopRated"
import Personalize from "@/components/Personalize"
import WhyChoose from "@/components/WhyChoose"
import CustomerReviews from "@/components/CustomerReviews"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <ShopByColor />
        <TopRated />
        <Personalize />
        <WhyChoose />
        <CustomerReviews />
      </main>
      <Footer />
    </div>
  )
}
