import {arrowRight} from "../assets/icons";
import Button from "../Components/Button";
import { bigShoe1 } from "../assets/images";
import { statistics } from "../contants";
import { shoes } from "../contants";
import ShoeCard from "../Components/ShoeCard";
import { useState } from "react";

const Hero = () => {

  const [heroImage, setheroImage] = useState(bigShoe1);

  return (
    <section className="max-container flex max-lg:flex-col">
      <div className=" pt-32 lg:w-2/5 min-h-screen flex flex-col justify-center items-start">
      <p className="font-montserrat text-xl text-coral-red">Our Summer Collections</p>
      <h1 className="font-palanquin text-8xl max-xl:text-[72px] max-xl:leading-none font-bold mt-10">
        <span className="xl:bg-white relative z-10 pr-20 xl:whitespace-nowrap">The New Arrival</span>
        <br />
        <span className="text-coral-red inline-block mt-3 mr-6">Nike </span>
        Shoes
      </h1>
      <p className="max-sm:max-w-sm max-w-lg text-lg mt-4 text-slate-gray font-montserrat leading-8 mb-16">Discover stylish nike arrivals, quality comfort, and innovation for your active life.</p>

      <Button text="Shop Now" endIcon={arrowRight}/>
      <div className="flex flex-wrap gap-10 w-full mt-20">
      {statistics.map((stat, i) => (
        <div key={i}>
          <b className="text-4xl font-palanquin">{stat.value}</b>
          <p className="text-lg font-palanquin text-slate-gray">{stat.label}</p>
        </div>
      ))}
      </div>
      
    </div>

    <div className=" flex-1 flex flex-col relative justify-center max-sm:py-10 items-center xl:max-h-screen bg-hero bg-cover bg-center">
      <img 
        src={heroImage}
        className="relative z-10"
      />
      {console.log(bigShoe1)}
      <div className="flex gap-2 xl:gap-6 absolute -bottom-16">
        {shoes.map((shoe, i) => (
          
          <ShoeCard key={i} shoe={shoe} currentImage={heroImage} heroImageChange={(shoe) => setheroImage(shoe)}/>
        ))}
      </div>
    </div>
    </section>
  )
}

export default Hero;