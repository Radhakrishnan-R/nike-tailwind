import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section className="max-container flex max-lg:flex-col flex-row gap-6 justify-between">
      <div className="flex-1">
        <h2 className="text-4xl font-bold font-palanquin lg:max-w-lg">We Provide You <span className="text-coral-red">Super Quality</span> Shoes</h2>
        <p className="text-xl xl:text-xxl text-slate-gray lg:max-w-lg mt-6 leading-8 font-montserrat">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className="text-xl xl:text-xxl text-slate-gray lg:max-w-lg mt-6 leading-8 font-montserrat">Our dedication to detail and excellence ensures your satisfaction</p>
        <button className="bg-coral-red py-3 px-6 rounded-full mt-10 text-white text-lg">View details</button>
      </div>
      <div className="flex-1 flex justify-center">
        <img 
          src={shoe8}
          alt="super-quality-shoes"
        />
      </div>
    </section>
  )
}

export default SuperQuality;