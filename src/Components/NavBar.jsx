import { headerLogo } from "../assets/images";
import { navLinks } from "../contants";
import { hamburger } from "../assets/icons";

const NavBar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between max-container items-center" >
            <a href="/">
                <img 
                alt="logo"
                src={headerLogo}
                width={130}
                height={29}
                />
            </a>
            <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((item, i) => (
                    <li key={i}>
                        <a href={item.href}
                        className="font-montserrat leading-normal text-lg text-slate-gray" 
                        >{item.label}</a>
                    </li>
                ))}
            </ul>
            <div className="hidden max-lg:block">
                <img 
                    alt="Hamburger"
                    src={hamburger}
                    width={25}
                    height={25}
                />
            </div>
            
        </nav>
    </header>
  )
}

export default NavBar;