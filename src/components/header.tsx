import React, { useState, useEffect } from "react";

const Navigation: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const mobileMenuToggle = (): void => {
    setActiveMenu(!activeMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{ width: "100%" }}
      className={`navigations ${
        activeMenu || isScrolled ? "bg-black" : "transparent-nav"
      }`}
    >
      <div className="navigations-content">
        <ul className="menu-for-desktop">
          <li>
            <a href="/">
              <img src="/images/brainvector_logo.svg" alt="Brainvector logo" />
            </a>
          </li>
          <li>
            <a href="/">How it works</a>
          </li>
          <li>
            <a href="#">Explore our solutions</a>
          </li>
          <li>
            <a href="/backed-by-research">Backed by research</a>
          </li>
          <li>
            <a href="/about-us">About Us</a>
          </li>
        </ul>
        <a href="#" className="book-a-demo">
          Book a demo
        </a>
        <div className="menu-for-mobile">
          <div className="pe-auto">
            <a href="/">
              <img src="/images/brainvector_logo.svg" alt="Brainvector logo" />
            </a>
            <button onClick={mobileMenuToggle} aria-label="Toggle mobile menu">
              {activeMenu ? (
                <img className="bars" src="/images/close.svg" alt="close" />
              ) : (
                <img className="bars" src="/images/bars.svg" alt="bars" />
              )}
            </button>
          </div>

          <div
            className={`mobile-menu-items ${
              activeMenu ? "mobile-menu-items-active" : ""
            }`}
          >
            <ul>
              <li>
                <a href="/">How it works</a>
              </li>
              <li>
                <a href="#">Explore our solutions</a>
              </li>
              <li>
                <a href="/backed-by-research">Backed by research</a>
              </li>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li className="book-a-demo-mobile-li">
                <a href="/about-us" className="book-a-demo-mobile">
                  Book a demo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
