
import { useState } from "react";
import { FiMenu, } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";



const Nav = () => {
      const [isMegaMenuHovered, setIsMegaMenuHovered] = useState(false);
      const [isSubMenuHovered, setIsSubMenuHovered] = useState(false);

      const handleMegaMenuMouseEnter = () => {
            setIsMegaMenuHovered(true);
      };

      const handleMegaMenuMouseLeave = () => {
            setIsMegaMenuHovered(false);
            setIsSubMenuHovered(false); // Hide sub-menu when mega menu is not hovered
      };

      const handleSubMenuMouseEnter = () => {
            setIsSubMenuHovered(true);
      };

      const handleSubMenuMouseLeave = () => {
            setIsSubMenuHovered(false);
      };
      return (
            <div className=" items-center justify-center hidden md:flex">
                  <div className=" ">

                        <div className=" bg-slate-50 text-black py-3  " >

                              {/* Mega menu  */}

                              <div className="flex justify-start  gap-6  ">

                                    <div className="relative" onMouseEnter={handleMegaMenuMouseEnter} onMouseLeave={handleMegaMenuMouseLeave}>
                                          <div className="border border-gray-300 rounded-md overflow-hidden">
                                                <div className="flex gap-2  px-4 py-2 bg-secondary text-white font-semibold focus:outline-none">
                                                      <h2 className=""> <FiMenu size={20}/></h2>
                                                      <h1> All Categories</h1>
                                                </div>
                                          </div>
                                          <div className={`mega-menu ${isMegaMenuHovered ? 'show' : ''}`}>
                                                {/* Add your mega menu content here */}
                                                <div className="p-4 flex flex-col ">
                                                      <ul className="">
                                                            <li className="relative" onMouseEnter={handleSubMenuMouseEnter} onMouseLeave={handleSubMenuMouseLeave}>
                                                                  <a href="#">Category 1</a>
                                                                  <div className={`sub-menu  ${isSubMenuHovered ? 'show' : ''}`}>
                                                                        <div className="p-4 ">
                                                                              <ul className="flex flex-col p-10 ">
                                                                                    <li><a href="#"> Subcategory One </a></li>
                                                                                    <li><a href="#">Subcategory Two</a></li>
                                                                                    <li><a href="#">Subcategory </a></li>
                                                                                    {/* Add more subcategories as needed */}
                                                                              </ul>
                                                                        </div>
                                                                  </div>
                                                            </li>
                                                            <li><a href="#">Category 2</a></li>
                                                            <li><a href="#">Category 3</a></li>
                                                            {/* Add more categories as needed */}
                                                      </ul>
                                                </div>
                                          </div>
                                    </div>





                                    <div className="flex gap-16 mt-2 ml-32 text-md font-semibold">
                                          <Link><h2>Mens</h2></Link>
                                          <Link><h2>Womans </h2></Link>
                                          <Link><h2>Kids</h2></Link>
                                          <Link><h2>Electronics</h2></Link>
                                          {/* <Link><h2>Accessories</h2></Link>
                                           <Link><h2>Devices</h2></Link> */}

                                          <NavLink className="cursor-pointer" to="/contact">Contact us</NavLink>
                                          <NavLink className="cursor-pointer" to="/signIn">Sign In</NavLink>
                                          <NavLink className="cursor-pointer" to="/signUp">Sign Up</NavLink>


                                    </div>

                              </div>
                        </div>


                  </div>
            </div>

      );
};

export default Nav;