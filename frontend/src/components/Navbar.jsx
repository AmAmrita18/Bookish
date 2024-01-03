import { useEffect, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "../contects/AuthProvider";


const Navbar = () => {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const {user} = useContext(AuthContext);
  console.log(user);
  
  //toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  //nav items
  const navItems = [
    { link: "Home", path: "/" },
    { link: "Browse", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "About", path: "/about" },
  ];

  return (
    <header className="w-full lg:px-32 px-4  bg-blue-extra-dark shadow-inner fixed top-0 right-0 transition-all ease-in duration-300">
      <nav
        className={`py-4  ${
          isSticky ? "sticky top-0 right-0" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          {/*logo*/}
          <Link
            to="/"
            className="text-[28px] font-semibold text-off-white flex items-center gap-2 "
          >
            <img src="/book.png" className="h-8 w-8 inline-block" />
            Bookish
          </Link>

          {/*nav items for large device*/}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({isActive}) => `block font-bold text-sm cursor-pointer uppercase ${isActive ? 'text-yellow' : 'text-off-white'} hover:text-yellow`}
              >
                {link}
              </NavLink>
            ))}
          </ul>

          {/* btn for lg devices*/}
          {
            !user && (
              <div className="space-x-12 hidden md:flex  items-center">
                  <Link
                    to={'/login'}
                    className={`block font-bold text-sm cursor-pointer uppercase border-yellow hover:border-off-white border-2 px-4 py-2 rounded-md text-off-white hover:text-yellow`}
                  >
                    Login
                  </Link>
                  <Link
                    to={'/sign-up'}
                    className={`block font-bold text-sm cursor-pointer uppercase  border-yellow hover:border-off-white border-2 px-3 py-2 rounded-md text-off-white hover:text-yellow`}
                  >
                    Sign Up
                  </Link>
              
              </div>
            )
          }
          {
            user && (
              <div className="space-x-12 hidden md:flex  items-center">
                  <Link
                    to={'/logout'}
                    className={`block font-bold text-sm cursor-pointer uppercase border-yellow hover:border-off-white border-2 px-4 py-2 rounded-md text-off-white hover:text-yellow`}
                  >
                    Logout
                  </Link>
              
              </div>
            )
          }

          {/*menu btn for mobile devices*/}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate focus:outline-none"
            >
              {isMenuOpen ? (
                <RxCross2 className="h-5 w-5 text-off-white hover:text-yellow" />
              ) : (
                <FaBars className="w-5 text-off-white hover:text-yellow" />
              )}
            </button>
          </div>
        </div>

        {/*NavItems for sm devices */}
        <div
          className={`space-y-4 px-4 md:hidden mt-16 py-7 bg-blue-extra-dark ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className=" font-bold text-off-white cursor-pointer uppercase hover:text-yellow flex flex-col"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
