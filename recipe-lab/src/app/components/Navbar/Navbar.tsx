'use client'

import { GiHamburgerMenu } from "react-icons/gi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import useHeaderObserver from "./hooks/useHeaderObserver";


export default function Navbar() {
  const [isOpen, setIsOpen] = useHeaderObserver();
  // Use custom hook
  //need to alternate login with my account once accounts are functional

  return (
    <>
      <header className="h-20 p-4 md:p-0 shadow-md">
        <div className="container mx-auto h-full flex justify-between items-center">
          <div>
            <h1 className="text-xl font-extrabold font-body text-lightOrange">Rumble Recipes</h1>
          </div>
          <div className="w-1/2">
            <form className="px-3">
              <div className="flex border border-black rounded relative h-9">
                <input className="flex-grow pl-1 rounded" placeholder="Find a recipe"></input>
                <button className="absolute bg-lightOrange px-3 h-full right-0 rounded">
                  <FaMagnifyingGlass color="white" />
                </button>
              </div>
            </form>
          </div>
          <div className="flex w-full justify-end md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <IoClose size={28} strokeWidth={15}/>        : <GiHamburgerMenu  size={25} />}
            </button>
          </div>
          <div className={`${isOpen ? 'div-menu-open': 'div-menu-closed md:block'}`}>
            <ul className={`${isOpen ? 'mobile-menu  flex-col gap-10' : 'mobile-menu-closed justify-between gap-8'} flex`}>
              <li className={`${isOpen ? 'pt-10 menu-li-open' : 'menu-li-closed'} text-xl font-heading `}>LOG IN</li>
              <li className={`${isOpen ? 'menu-li-open' : 'menu-li-closed'} text-xl font-heading`}>RECIPES</li>
              <li className={`${isOpen ? 'menu-li-open' : 'menu-li-closed'} text-xl font-heading `}>TIPS</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}
