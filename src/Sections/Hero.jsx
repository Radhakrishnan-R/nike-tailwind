import {arrowRight} from "../assets/icons";
import Button from "../Components/Button";
import { bigShoe1 } from "../assets/images";
import { statistics } from "../contants";

const Hero = () => {
  return (
    <section className="max-container flex max-lg:flex-col">
      <div className=" pt-32 xl:w-2/5 min-h-screen flex flex-col justify-center items-start">
      <p className="font-montserrat text-xl text-coral-red">Our Summer Collections</p>
      <h1 className="font-palanquin text-8xl max-xl:text-[72px] max-xl:leading-none font-bold mt-10">
        <span className="xl:bg-white relative z-10 pr-20 xl:whitespace-nowrap">The New Arrival</span>
        <br />
        <span className="text-coral-red inline-block mt-3 mr-6">Nike </span>
        Shoes
      </h1>
      <p className="max-sm:max-w-sm text-2xl mt-4 text-slate-gray font-montserrat leading-normal mb-16">Discover stylish nike arrivals, quality comfort, and innovation for your active life.</p>

      <Button text="Shop Now" endIcon={arrowRight}/>
      <div className="flex gap-10 w-full mt-20">
      {statistics.map((stat, i) => (
        <div key={i}>
          <b className="text-4xl">{stat.value}</b>
          <p className="text-lg text-slate-gray">{stat.label}</p>
        </div>
      ))}
      </div>
      
    </div>

    <div className=" flex-1 flex flex-col justify-center items-center max-h-screen bg-hero bg-cover bg-center">
      <img 
        src={bigShoe1}
        className="relative z-10"
      />
    </div>
    </section>
  )
}

export default Hero;