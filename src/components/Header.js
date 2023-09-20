import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  return (
    <header className="py-6 ">
      <div className="flex justify-between items-center px-8 mb-3">
        <Link to="/">
          <div>
            <img src={Logo} alt="logo" />
          </div>
        </Link>
        <div className="flex items-center gap-x-2">
          <span className="text-primary">(123) 456-7890</span>
          <button className="hidden sm:flex bg-primary text-white py-3 px-8 rounded-lg">Give us call</button>
        </div>
      </div>
      <div className="flex justify-between bg-primary_grey py-2 px-8 ">
        <ul className="hidden sm:flex gap-4 py-3 text-primary">
          <li>Home</li>
          <li>Service</li>
          <li>Tenants</li>
          <li>News</li>
          <li>About us</li>
          <li>Contact</li>
        </ul>
        <div className="hidden sm:flex gap-x-3 text-primary">
          <button>Log in</button>
          <button>Sign up</button>
        </div>
        <div className="sm:hidden max-sm:flex">
          <CiMenuBurger style={{ fontSize: "20px" }} />
        </div>
      </div>
    </header>
  );
};

export default Header;
