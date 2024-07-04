import { useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import { IoMdAppstore } from "react-icons/io";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { BsBagHeart} from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { VscCallOutgoing } from "react-icons/vsc";
import AccountDropdown from '../Components/Dropdown/AccountDropdown';
import Nav from './Nav';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
      
      const [showInfo, setShowInfo] = useState(true);

      const handleScroll = () => {
            if (window.scrollY > 50) {
                  setShowInfo(false);
            } else {
                  setShowInfo(true);
            }
      };

      useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            return () => {
                  window.removeEventListener('scroll', handleScroll);
            };
      }, []);

      return (

            <div >
                  <header className={`header ${showInfo ? 'show' : 'hide'}`}>
                        {/* info */}
                        <div className="info-section">

                              <div className=" border-b-[0.5px] bg-secondary text-white hidden md:block w-full" >
                                    <div className="flex justify-around p-2 items-center mx-auto w-full max-w-[1920px] px-4 2xl:px-4 3xl:px-7.5 4xl:px-14">
                                          <div className="flex gap-6">
                                                <Link><h2>About us</h2></Link>
                                                <Link><h2>Order Tracking</h2></Link>
                                                <Link><h2>FAQS</h2></Link>
                                                <NavLink className="cursor-pointer" to="/contact">Contact us</NavLink>
                                          </div>
                                          <div className="flex gap-4">
                                                <Link className="flex border py-1 px-3 rounded-full shadow text-center bg-white text-black "><h2>English</h2> <h2 className="mt-[2px]"><MdKeyboardArrowDown /></h2></Link>
                                                <Link className="flex border py-1 px-3 rounded-full shadow bg-white text-black"><h2>USD</h2> <h2 className="mt-[2px]"><MdKeyboardArrowDown /></h2></Link>
                                          </div>
                                    </div>
                              </div>

                            
                        </div>

                       

                        <nav className="navbar-menu bg-slate-50 border-b-[0.5px]">

                              <div className="border-b-[0.5px]  hidden md:block w-full bg-slate-50 py-3">

                                    <div className="flex justify-around items-center mx-auto w-full max-w-[1920px] px-4 2xl:px-[215px] 3xl:px-7.5 4xl:px-14">
                                          {/* Left side  */}
                                          <div className="flex gap-1 ml-12">
                                                <IoMdAppstore className=" text-secondary" size={35} /> <h2 className="mt-1 text-2xl font-semibold  text-secondary">myStore</h2>
                                                <div>

                                                      <div className="ml-14 flex items-center border border-gray-300 rounded-md overflow-hidden max-w-md mx-auto  ">

                                                            <select className="px-3 py-2  focus:outline-none bg-gray-50">
                                                                  <option>All categories</option>
                                                                  <option>All categories</option>
                                                                  <option>All categories</option>
                                                                  <option>All categories</option>
                                                                  <option>All categories</option>
                                                                  <option>All categories</option>
                                                                  <option>All categories</option>
                                                                  <option>All categories</option>
                                                                  <option>All categories</option>

                                                            </select>
                                                            <input
                                                                  type="text"
                                                                  className="px-4 py-3 flex-grow focus:outline-none"
                                                                  placeholder=" I'm searching for..."
                                                            />
                                                            <button className="px-4 py-3 bg-secondary text-white">
                                                                  <IoSearch className="h-6 w-6" />
                                                            </button>
                                                      </div>
                                                </div>
                                          </div>
                                          {/* Middle */}
                                          {/* Right side Account  */}
                                          <div className="flex gap-3 mr-12 items-center">

                                                <div className="relative bg-gray-50 rounded-full p-[10px] border">
                                                      <h2 data-tooltip-id="my-tooltip-0">
                                                            <VscCallOutgoing size={20} />
                                                      </h2>
                                                      <ReactTooltip id="my-tooltip-0" place="top" content="Call Us" variant="dark" />
                                                </div>
                                                <div className="flex-none mr-10">
                                                      <h2 className="font-semibold">Need help?</h2>
                                                      <h2>+012 556 555</h2>
                                                </div>
                                                <div className="mt-2">
                                                      <AccountDropdown />
                                                </div>
                                                <div className="relative  rounded-full p-[10px] border">
                                                      <h2 data-tooltip-id="my-tooltip-2">
                                                            <BsBagHeart size={20} />
                                                      </h2>
                                                      <ReactTooltip id="my-tooltip-2" place="top" content="Favorites" variant="dark" />
                                                      <div className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                                            3
                                                      </div>
                                                </div>
                                                <div className="relative  rounded-full p-[10px] border">
                                                      <h2 data-tooltip-id="my-tooltip-3">
                                                            <FiShoppingCart size={20} />
                                                      </h2>
                                                      <ReactTooltip id="my-tooltip-3" place="top" content="My Cart" variant="dark" />
                                                      <div className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                                            5
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                              </div>

                              <div className='info-section'>
                             <Nav />
                             </div>
                        </nav>

                  </header>

                  <div className=''>
                      
                  </div>

            </div>

      );
};

export default Navbar;