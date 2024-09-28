import { products } from "../contants";
import PopularProductsCard from "../Components/PopularProductsCard";

const PopularProducts = () => {
  return (
    <section className="max-container">
      <div>
        <h2 id="products" className="text-4xl font-bold dark:text-white  font-palanquin ">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="text-xl xl:text-xxl text-slate-gray max-w-lg mt-6 leading-8 font-montserrat">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
      </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 place-items-center gap-6 mt-16">
        {products.map((shoes, i) => (
          <PopularProductsCard key={i} {...shoes} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts;