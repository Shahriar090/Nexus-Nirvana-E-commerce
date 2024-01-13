import React from "react";
import { FaShoppingCart, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../nav-css/nav.css";
const NavLg = () => {
  return (
    <nav>
      {/* upper nav */}
      <div className="upp-nav-parent w-full h-auto px-4 py-4 bg-[#2cc5ba] text-white hidden md:block lg:block">
        <div className="flex justify-between items-center">
          <div className="logo flex items-center gap-2">
            <FaShoppingBag className="text-3xl"></FaShoppingBag>
            <h1 className="text-2xl font-serif font-bold">Nexus Nirvana</h1>
          </div>
          <div className="search-and-others flex gap-5 items-center">
            <div className="search group">
              <input
                type="text"
                placeholder="Search Your Products ..."
                className="w-32 rounded-full px-2 h-8 group-hover:w-48 transition-all duration-300 border border-gray-300 focus:outline-none focus:border-1 focus:border-[#1aa5ab] focus:w-48 text-black"
              />
            </div>
            <div className="cart">
              <Link>
                <FaShoppingCart className="text-xl"></FaShoppingCart>
              </Link>
            </div>
            <div className="theme">
              <h1>theme toggle</h1>
            </div>
          </div>
        </div>
      </div>
      {/* lower nav */}
      <div className="lower-nav-con bg-slate-50 py-3 hidden md:block lg:block">
        <ul className="flex justify-center items-center space-x-12 text-lg font-sans">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Top Selling</Link>
          </li>
          <li>
            <Link>Kidds Items</Link>
          </li>
          <li>
            <Link>Mens</Link>
          </li>
          <li>
            <Link>Electronics</Link>
          </li>
          <li>
            <Link>Trending</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavLg;
