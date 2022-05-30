import { MenuIcon, SearchIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [headerBg, setHeaderBg] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 200) {
      setHeaderBg(true)
    } else {
      setHeaderBg(false)
    }
  }
  
  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <header className={`fixed top-0 w-full px-8 duration-300 ${headerBg ? 'bg-amber-300 py-2' : 'bg-white py-4'}`}>
      <div className="max-w-6xl w-full mx-auto flex justify-between items-center">
        <div>
          <button className="bg-amber-300 p-2 rounded-full">
          <MenuIcon className="w-7 text-white"/>
          </button>
        </div>
        <h3 className={`font-cookie text-5xl ${headerBg && 'text-white'}`}> Hasan</h3>
        <nav className="">
        <button className="bg-amber-300 p-3 rounded-full">
          <SearchIcon className="w-5 text-white"/>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
