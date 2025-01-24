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
            <a className="hidden md:block text-xl font-extrabold font-body text-darkOrange cursor-pointer">
              Rumble Recipes
            </a>
            <a className="md:hidden text-xl font-extrabold font-body text-darkOrange">
              RR
            </a>
          </div>
          <div className="flex-grow md:flex-grow-0 md:w-1/3">
            <form className="px-3">
              <div className="flex border border-black rounded relative h-9">
                <input
                  className="flex-grow pl-1 rounded"
                  placeholder="Find a recipe"
                ></input>
                <button className="absolute bg-lightOrange hover:bg-darkOrange px-3 h-full right-0 rounded">
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
                <a className="cursor-pointer">
                  <div className="flex justify-center items-center">
                    <CgProfile color="#FF7F50" />
                    <div className="text-xl pl-1">
                      <span className="text-lg hover:underline underline-offset-4 decoration-lightOrange decoration-1">
                        Log In
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li
                className={`${isOpen ? "menu-li-open" : "menu-li-closed"} text-xl font-heading`}
              >
                <a className="cursor-pointer">
                    <div className="text-xl pl-1">
                      <span className="text-lg hover:underline underline-offset-4 decoration-lightOrange decoration-1">
                        My Recipes
                      </span>
                    </div>
                </a>
              </li>
              <li
                className={`${isOpen ? "menu-li-open" : "menu-li-closed"} text-xl font-heading `}
              >
                <a className="cursor-pointer">
                    <div className="text-xl pl-1">
                      <span className="text-lg hover:underline underline-offset-4 decoration-lightOrange decoration-1">
                        Tips
                      </span>
                    </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
