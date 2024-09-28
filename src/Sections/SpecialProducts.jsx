import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Button from "../Components/Button";

const SpecialProducts = () => {
  return (
    <section className="flex max-lg:flex-col-reverse gap-8 justify-between items-center max-container">
      <div className="flex-1">
        <img 
          src={offer}
          alt="offer-image"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-4xl font-bold font-palanquin lg:max-w-lg"><span className="text-coral-red">Special</span> offer</h2>
        <p className="text-xl xl:text-xxl text-slate-gray mt-6 leading-8 font-montserrat">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className="text-xl xl:text-xxl text-slate-gray mt-6 leading-8 font-montserrat mb-10">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className="flex gap-2 flex-wrap">
        <Button text="Shop Now" endIcon={arrowRight}/>
        <button className="border-2 py-3 px-10 font-montserrat rounded-full font-medium">Learn more</button>
        </div>
        
      </div>
    </section>
  )
}

export default SpecialProducts;