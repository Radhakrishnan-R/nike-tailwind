import { footerLogo } from "../assets/images";
import FooterCard from "../Components/FooterCard";
import { socialMedia } from "../contants";
import { footerLinks } from "../contants";

const Footer = () => {
  
  return (
    <section id="contact-us" className="max-container flex flex-wrap justify-between items-start">
      <div className="max-lg:w-full mb-20">
      <p className=" font-palanquin text-4xl font-bold ">RKSport.</p>
        {/* <img 
          src={footerLogo} alt="footer-logo"
        /> */}
        <p className="mt-5 mb-5 max-w-md font-montserrat">Get shoes ready for the new term at your nearest RKSport store. Find Your perfect Size In Store. Get Rewards</p>
        <div className=" flex gap-3 ">
        {socialMedia.map((social,i) => (
            <img src={social.src} key={i} alt={social.alt} className="bg-white cursor-pointer p-3 rounded-full w-12 h-12"/>
        ))}
        </div>
      </div>
      {footerLinks.map((links, i) => (
        <FooterCard key={i} {...links} />
      ))}
    </section>
  )
}

export default Footer;