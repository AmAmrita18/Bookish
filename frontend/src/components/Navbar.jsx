import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    {link: "Home", path:"/"},
    {link: "About", path:"/about"},
    {link: "Shop", path:"/shop"},
    {link: "Sell Your Book", path:"/admin/dashboard"},
    {link: "Blog", path:"/blog"},
  ]

  return (
    <header>
        <nav>
            <div>
                {/*logo*/}
                <Link to="/"><img src="/book.png" className="h-10 w-10"/>Bookish</Link>
            </div>
        </nav>
    </header>
  )
};

export default Navbar;
