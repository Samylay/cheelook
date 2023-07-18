import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdCart, IoMdSearch, IoMdHeartEmpty, IoMdClose } from "react-icons/io";

export default function NavigationBar({ fixed }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <div className="flex flex-wrap py-2">
        <div className="w-full px-2">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-4  rounded">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <a
                  className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
                  href="#pablo"
                >
                  <strong>CHEE</strong>LOOK
                </a>
                <div className="flex flex-row">
                  <button
                    className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                  >
                    <IoMdSearch />
                  </button>
                  <button
                    className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                  >
                    <IoMdCart />
                  </button>
                  <button
                    className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                  >
                    <IoMdHeartEmpty />
                  </button>
                  <button
                    className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    {menuOpen ? <IoMdClose /> :
                      <RxHamburgerMenu />}
                  </button>
                </div>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                      href="#pablo"
                    >
                      Discover
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                      href="#pablo"
                    >
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                      href="#pablo"
                    >
                      Settings
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
