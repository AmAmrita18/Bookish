import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

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
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header className='w-full bg-transparent fixed top-0 right-0 transition-all ease-in duration-300'>
      <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 right-0" : ""}`}>
        <div className="flex justify-between items-center text-base gap-8">
          {/*logo*/}
          <Link
            to="/"
            className="text-2xl font-bold text-slate flex items-center gap-2  hover:text-slate-dark"
          >
            <img src="/book.png" className="h-10 w-10 inline-block" />
            Bookish
          </Link>

          {/*nav items for large device*/}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => 
              <Link
                key={path}
                to={path}
                className="block font-bold text-slate text-base cursor-pointer uppercase hover:text-slate-dark"
              >
                {link}
              </Link>
            )}
          </ul>

          {/* btn for lg devices*/}
          <div className="space-x-12 hidden lg:flex items-center">
            <button>
              <FaBars className="w-5 text-slate hover:text-slate-dark" />
            </button>
          </div>

          {/*menu btn for mobile devices*/}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate focus:outline-none"
            >
              {isMenuOpen ? (
                <RxCross2 className="h-5 w-5 text-slate hover:text-slate-dark" />
              ) : (
                <FaBars className="w-5 text-slate hover:text-slate-dark" />
              )}
            </button>
          </div>
        </div>

        {/*NavItems for sm devices */}
        <div className={`space-y-4 px-4 mt-16 py-7 bg-peach ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block font-bold text-slate text-base cursor-pointer uppercase hover:text-slate-dark"
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
