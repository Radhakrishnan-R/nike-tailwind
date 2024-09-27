import ServiceCard from "../Components/ServiceCard";
import { services } from "../contants";

const Services = () => {
  return (
    <section className="flex justify-between max-container flex-wrap gap-8">
      {services.map((service,i) => (
      <ServiceCard key={i} {...service} />
      ))}
    </section>
    
  )
}

export default Services;