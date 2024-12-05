import { useState } from "react";
import easyBankLogo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import closeMenu from "../assets/close.svg";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <div className="container mx-auto relative">
      <header className="flex justify-between items-center py-6 px-6 w-full bg-white">
        <div className="logo">
          <img src={easyBankLogo} alt="Easybank Logo" />
        </div>

        <nav className="hidden lg:block">
          <ul className="flex justify-between gap-10">
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>

            <li>
              <a href="#">Blog</a>
            </li>

            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </nav>

        <button className="hidden lg:block py-3 px-8 text-white font-semibold rounded-3xl bg-gradient-to-r from-[#31d35c] to-[#2bb7da]">
          Request Invite
        </button>

        <div className="menuIcon lg:hidden">
          <img
            src={isMenuVisible ? closeMenu : menu}
            width={40}
            onClick={() => setIsMenuVisible(!isMenuVisible)}
          />
        </div>
      </header>

      <div
        className={`offscreen-menu ${
          !isMenuVisible ? "hidden" : ""
        } bg-white w-[90%] mx-auto mt-7 lg:hidden shadow-xl `}
      >
        <ul className="py-5">
          <li className="text-center text-xl mb-4">
            <a href="#" className="text-[#2d314d]">
              Home
            </a>
          </li>

          <li className="text-center text-xl mb-4">
            <a href="#" className="text-[#2d314d]">
              About
            </a>
          </li>

          <li className="text-center text-xl mb-4">
            <a href="#" className="text-[#2d314d]">
              Contact
            </a>
          </li>

          <li className="text-center text-xl mb-4">
            <a href="#" className="text-[#2d314d]">
              Blog
            </a>
          </li>

          <li className="text-center text-xl">
            <a href="#" className="text-[#2d314d]">
              Careers
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
