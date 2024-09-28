import { headerLogo } from "../assets/images";
import { navLinks } from "../contants";
import { hamburger } from "../assets/icons";
import { moon, sun } from "../assets/icons";
import { useState } from "react";

const NavBar = () => {

    const [toggleDark, setToggleDark] = useState(false);

    function handleToggle() {
        setToggleDark(prev => !prev)
        document.documentElement.classList.toggle("dark");
    }

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between max-container items-center" >
            <a href="/">
                <p className="font-palanquin text-2xl font-bold text-coral-red ">RKSport.</p>
                {/* <img 
                alt="logo"
                src={headerLogo}
                width={130}
                height={29}
                /> */}
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
            <div id="toggleDark" onClick={handleToggle} className="w-11 h-11 flex justify-center items-center">
                <img 
                    src={toggleDark ? sun : moon} alt="moon" className="mr-6 max-lg:dark:invert cursor-pointer"
                />
            </div>
            <div  className="hidden bg-white p-2 rounded-md max-lg:block">
                <img 
                    alt="Hamburger"
                    src={hamburger}
                    width={20}
                    height={20}
                    
                />
            </div>
            
        </nav>
    </header>
  )
}

export default NavBar;