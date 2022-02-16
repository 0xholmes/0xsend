import React, { useState, useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

// import logo from "../images/logo.png";
import logo from "../images/finance_transparent.png";
import { TransactionContext } from "../context/TransactionContext";

const NavbarItems = ({ item, styles }) => {
  return (
    <a href="#" className={`mx-4 cursor-pointer ${styles}`}>
      {item}
    </a>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const { MenuItems, connectWallet, currentAccount } =
    useContext(TransactionContext);

  return (
    <nav className="w-full text-white flex justify-between items-center md:px-16 p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="0xsend" className="w-16 md:w-20 cursor-pointer" />
      </div>
      <div className="items-center font-base hidden md:flex">
        {MenuItems.map((item, index) => (
          <NavbarItems
            key={item + index}
            item={item}
            styles="text-gray-300 cursor-pointer hover:text-white"
          />
        ))}
        {currentAccount ? (
          <div
            className="text-white bg-neutral-800 px-7 py-2 mx-4 rounded-lg cursor-default font-semibold"
            onClick={connectWallet}
          >
            Connected
          </div>
        ) : (
          <div
            className="text-white bg-[#5973fe] px-7 py-2 mx-4 rounded-lg cursor-pointer hover:bg-[#445ff5] font-semibold"
            onClick={connectWallet}
          >
            Connect
          </div>
        )}
      </div>
      <div className="md:hidden flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="md:hidden cursor-pointer"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="md:hidden cursor-pointer"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        )}
        {toggleMenu && (
          <div className="z-10 w-full h-screen flex justify-between fixed -top-0 -right-2 pt-5 blue-glassmorphism md:hidden">
            <div className="flex flex-col">
              {MenuItems.map((item, index) => (
                <NavbarItems
                  key={item + index}
                  item={item}
                  styles="my-4 text-lg md:hidden"
                />
              ))}
            </div>
            <div className="md:hidden text-3xl w-14 my-2">
              <AiOutlineClose onClick={() => setToggleMenu(!toggleMenu)} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
