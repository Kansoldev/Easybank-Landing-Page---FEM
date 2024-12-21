import { useState } from "react";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <div className="container mx-auto relative">
      <header className="flex justify-between items-center py-6 px-6 w-full bg-white">
        <div className="logo">
          <a href="#">
            <img src="./logo.svg" alt="Easybank Logo" />
          </a>
        </div>

        <nav className="navbar hidden lg:block">
          <ul className="flex justify-between gap-10">
            <li className="relative">
              <a href="#">Home</a>
            </li>

            <li className="relative">
              <a href="#">About</a>
            </li>

            <li className="relative">
              <a href="#">Contact</a>
            </li>

            <li className="relative">
              <a href="#">Blog</a>
            </li>

            <li className="relative">
              <a href="#">Careers</a>
            </li>
          </ul>
        </nav>

        <button className="hidden lg:block py-3 px-8 text-white font-semibold rounded-3xl bg-gradient-to-r from-[#31d35c] to-[#2bb7da]">
          Request Invite
        </button>

        <div className="menuIcon lg:hidden">
          <img
            src={isMenuVisible ? "./close.svg" : "./menu.svg"}
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
