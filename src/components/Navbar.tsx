import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 dark:bg-revive-dark/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4",
      )}
    >
      <div className="container-revive flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-playfair text-2xl font-bold tracking-tight text-revive-primary">
            REVIVE
          </span>
          <span className="text-xs uppercase tracking-widest mt-1">
            Skin & Body Studio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
          <div className="ml-4 flex items-center gap-4">
            <a
              href="tel:+71234567890"
              className="flex items-center gap-2 text-revive-primary hover:text-revive-secondary transition-colors"
            >
              <Phone size={18} />
              <span className="hidden lg:inline">+7 (123) 456-78-90</span>
            </a>
            <Button className="btn-primary">Записаться</Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-revive-primary"
          onClick={toggleMenu}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-revive-dark shadow-md py-4 fade-in-animation">
          <div className="container-revive flex flex-col gap-4">
            <nav className="flex flex-col gap-4">
              <NavLinks mobile onClick={toggleMenu} />
            </nav>
            <hr className="border-revive-sand/20" />
            <div className="flex flex-col gap-4">
              <a
                href="tel:+71234567890"
                className="flex items-center gap-2 text-revive-primary hover:text-revive-secondary transition-colors"
              >
                <Phone size={18} />
                <span>+7 (123) 456-78-90</span>
              </a>
              <Button className="btn-primary w-full">Записаться</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ mobile = false, onClick }) => {
  const links = [
    { name: "Главная", path: "/" },
    { name: "Услуги", path: "/services" },
    { name: "О студии", path: "/about" },
    { name: "Галерея", path: "/gallery" },
    { name: "Контакты", path: "/contacts" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={cn(
            "transition-colors",
            mobile
              ? "text-lg py-2 hover:text-revive-primary"
              : "hover:text-revive-primary uppercase text-sm tracking-wider",
          )}
          onClick={onClick}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
