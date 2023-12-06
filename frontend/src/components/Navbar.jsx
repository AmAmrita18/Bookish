import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars} from 'react-icons/fa';

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
    <header>
      <nav>
        <div>
          {/*logo*/}
          <Link
            to="/"
            className="text-2xl font-bold text-slate flex items-center gap-2 mx-2 my-2 hover:text-slate-dark"
          >
            <img src="/book.png" className="h-10 w-10 inline-block" />
            Bookish
          </Link>

          {/*nav items for large device*/}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-slate text-base cursor-pointer uppercase hover:text-slate-dark"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* btn for lg devices*/ }
          <div className="space-x-12 hidden lg:flex items-center">
            <button><FaBars className="w-5 text-slate hover:text-slate-dark"/></button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
