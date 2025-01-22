"use client";

import { CgProfile } from "react-icons/cg";
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
            <h1 className="hidden md:block text-xl font-extrabold font-body text-lightOrange">
              Rumble Recipes
            </h1>
            <h1 className="md:hidden text-xl font-extrabold font-body text-lightOrange">
              RR
            </h1>
          </div>
          <div className="flex-grow md:flex-grow-0 md:w-1/3">
            <form className="px-3">
              <div className="flex border border-black rounded relative h-9">
                <input
                  className="flex-grow pl-1 rounded"
                  placeholder="Find a recipe"
                ></input>
                <button className="absolute bg-lightOrange px-3 h-full right-0 rounded">
                  <FaMagnifyingGlass color="white" />
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-end md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <IoClose size={25} strokeWidth={15} />
              ) : (
                <GiHamburgerMenu size={25} />
              )}
            </button>
          </div>
          <div
            className={`${isOpen ? "div-menu-open" : "div-menu-closed md:block"}`}
          >
            <ul
              className={`${isOpen ? "mobile-menu  flex-col gap-10" : "mobile-menu-closed justify-between gap-8"} flex`}
            >
              <li
                className={`${isOpen ? "pt-10 menu-li-open" : "menu-li-closed"} text-xl font-heading`}
              >
                <a>
                  <div className="flex justify-center items-center">
                    <CgProfile color="#FF7F50" />
                    <div className="text-xl pl-1 hover:underline underline-offset-4">
                      <span className="hover:underline underline-offset-4">
                        Log In
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li
                className={`${isOpen ? "menu-li-open" : "menu-li-closed"} text-xl font-heading`}
              >
                <a className="hover:underline">Recipes</a>
              </li>
              <li
                className={`${isOpen ? "menu-li-open" : "menu-li-closed"} text-xl font-heading `}
              >
                Tips
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
