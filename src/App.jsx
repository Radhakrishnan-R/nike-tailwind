import { Hero, CustomerReviews, Footer, PopularProducts, Services, SpecialProducts, Subscribe, SuperQuality,} from "./Sections/index";
import NavBar from "./Components/NavBar";


const App = () => {
  return (
    <main className="relative">
      <NavBar />
      <section className="xl:padding-l wide:padding-r padding-b padding-x">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-12">
        <Services />
      </section>
      <section className="padding">
        <SpecialProducts />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x w-full py-16 sm:py-32">
        <Subscribe />
      </section>
      <section className="padding-x padding-y paddding-t pb-8 bg-black text-white">
        <Footer />
      </section>
      
    </main>
  )
}

export default App;