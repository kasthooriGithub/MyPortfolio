import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      navLinks.forEach((link) => {
        const section = document.getElementById(link.href.replace("#", ""));
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(link.href.replace("#", ""));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${isScrolled ? "bg-glass shadow-lg py-3" : "bg-transparent py-4"
        }`}
    >
      <div className="container">
        <a
          href="#home"
          className="navbar-brand"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
        >
          Kasthoori
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler bg-light"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            {navLinks.map((link) => (
              <li className="nav-item ms-lg-3" key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.replace("#", "")
                    ? "active"
                    : ""
                    }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
